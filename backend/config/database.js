const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME || 'lost_found',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false, // Set to console.log for SQL query logging
  }
);

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log('✅ PostgreSQL Database connected successfully!');
  })
  .catch(err => {
    console.log('❌ PostgreSQL connection error:', err.message);
  });

module.exports = sequelize;
