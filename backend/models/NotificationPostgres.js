const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./UserPostgres');
const Item = require('./ItemPostgres');

const Notification = sequelize.define('Notification', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Item,
      key: 'id',
    },
  },
  is_read: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  tableName: 'notifications',
});

// Associations
Notification.belongsTo(User, { foreignKey: 'user_id' });
Notification.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = Notification;
