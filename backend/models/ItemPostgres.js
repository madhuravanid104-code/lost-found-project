const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./UserPostgres');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  category: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.ENUM('lost', 'found'),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('open', 'claimed', 'resolved'),
    defaultValue: 'open',
  },
  location: {
    type: DataTypes.STRING,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
  posted_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  claimed_by: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'items',
});

// Associations
Item.belongsTo(User, { foreignKey: 'posted_by', as: 'postedByUser' });
Item.belongsTo(User, { foreignKey: 'claimed_by', as: 'claimedByUser' });

module.exports = Item;
