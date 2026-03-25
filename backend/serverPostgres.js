const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const sequelize = require('./config/database');
const User = require('./models/UserPostgres');
const Item = require('./models/ItemPostgres');
const Notification = require('./models/NotificationPostgres');

// Import routes
const authRoutes = require('./routes/authPostgres');
const itemRoutes = require('./routes/itemsPostgres');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Static files - serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

// Home route
app.get('/api', (req, res) => {
  res.json({ message: 'Campus Lost & Found API is running (PostgreSQL)' });
});

// Fallback - serve index.html for non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Sync database and start server
const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: false })
  .then(() => {
    console.log('✅ Database synced successfully!');
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
      console.log(`📊 Using PostgreSQL Database: ${process.env.DB_NAME || 'lost_found'}`);
    });
  })
  .catch(err => {
    console.error('❌ Database sync error:', err);
    process.exit(1);
  });

module.exports = app;
