const express = require('express');
const Item = require('../models/ItemPostgres');
const User = require('../models/UserPostgres');
const { authenticateToken } = require('../middleware/authPostgres');

const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.findAll({
      include: [
        { model: User, as: 'postedByUser', attributes: ['id', 'name', 'email'] },
        { model: User, as: 'claimedByUser', attributes: ['id', 'name', 'email'] },
      ],
      order: [['created_at', 'DESC']],
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single item
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id, {
      include: [
        { model: User, as: 'postedByUser', attributes: ['id', 'name', 'email'] },
        { model: User, as: 'claimedByUser', attributes: ['id', 'name', 'email'] },
      ],
    });

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create item
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, description, category, type, location, image_url } = req.body;

    const item = await Item.create({
      title,
      description,
      category,
      type,
      location,
      image_url,
      posted_by: req.user.id,
    });

    res.status(201).json({
      message: 'Item created successfully',
      item,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update item
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    if (item.posted_by !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to update this item' });
    }

    await item.update(req.body);

    res.json({
      message: 'Item updated successfully',
      item,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete item
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    if (item.posted_by !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to delete this item' });
    }

    await item.destroy();

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Claim item
router.post('/:id/claim', authenticateToken, async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    if (item.claimed_by) {
      return res.status(400).json({ error: 'Item already claimed' });
    }

    await item.update({
      claimed_by: req.user.id,
      status: 'claimed',
    });

    res.json({
      message: 'Item claimed successfully',
      item,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
