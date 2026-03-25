const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize
// Use DATABASE_URL if available (Render provides this), otherwise use individual env vars
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      logging: false,
      define: {
        underscored: true,
        timestamps: true,
      },
      ssl: process.env.NODE_ENV === 'production',
      dialectOptions: process.env.NODE_ENV === 'production'
        ? { ssl: { require: true, rejectUnauthorized: false } }
        : {},
    })
  : new Sequelize(
      process.env.DB_NAME || 'lost_found',
      process.env.DB_USER || 'postgres',
      process.env.DB_PASSWORD || 'postgres',
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: false,
        define: {
          underscored: true,
          timestamps: true,
        },
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
