# 🚀 PostgreSQL Local Setup Guide

## ✅ What Was Done

Your project is now configured to use **PostgreSQL** instead of MongoDB Atlas!

### Files Created:
- ✅ `config/database.js` - Database connection
- ✅ `models/UserPostgres.js` - User model  
- ✅ `models/ItemPostgres.js` - Item model
- ✅ `models/NotificationPostgres.js` - Notification model
- ✅ `routes/authPostgres.js` - Auth routes
- ✅ `routes/itemsPostgres.js` - Items routes
- ✅ `middleware/authPostgres.js` - Auth middleware
- ✅ `serverPostgres.js` - Express server with PostgreSQL
- ✅ `migrations/schema.sql` - Database schema
- ✅ `.env` - Updated config

---

## 🔧 Step 1: Install PostgreSQL

### Windows:
1. Download: https://www.postgresql.org/download/windows/
2. Run installer
3. Remember your **postgres** user password
4. Verify installation:
   ```powershell
   psql --version
   ```

---

## 📊 Step 2: Create Database

Open **PowerShell as Administrator**:

```powershell
# Connect to PostgreSQL
psql -U postgres

# Inside psql shell:
CREATE DATABASE lost_found;
\c lost_found

# Import schema
\i 'C:/Users/Chirag Jain/Documents/lost-found-project/backend/migrations/schema.sql'

# Verify tables
\dt

# Exit
\q
```

**Expected output:**
```
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE INDEX
...
```

---

## 🔐 Step 3: Update .env Password

Edit `backend/.env`:

```env
DB_PASSWORD=your_postgres_password_here
```

Change `postgres` to whatever password you set during PostgreSQL installation.

---

## 🚀 Step 4: Run the Server

```powershell
cd backend
npm install
npm start
```

**Expected output:**
```
✅ PostgreSQL Database connected successfully!
✅ Database synced successfully!
✅ Server running on http://localhost:5000
📊 Using PostgreSQL Database: lost_found
```

---

## 🧪 Step 5: Test the Application

### Test API Endpoint:
```
http://localhost:5000/api
```

Should return:
```json
{"message":"Campus Lost & Found API is running (PostgreSQL)"}
```

### Test Registration:
```
http://localhost:5000/frontend/register.html
```

Register with:
- Name: `Test User`
- Email: `test@example.com`
- Phone: `08127829995`
- Password: `test123`

Should succeed! ✅

### Test Login:
```
http://localhost:5000/frontend/login.html
```

Use the credentials you just registered.

---

## 🔄 For Render Deployment

When deploying to Render:

### 1. Update Environment Variables:
```
PORT=5000
NODE_ENV=production
DB_HOST=your_postgresql_host
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=lost_found
JWT_SECRET=46da4471a1587012c1092f57d8b4de8629bd6ae6c53b7df164010b405e9da116
FRONTEND_URL=https://your-render-url.onrender.com
```

### 2. Use PostgreSQL Service on Render:
- Create a PostgreSQL add-on on Render
- Get the connection details
- Set the environment variables above
- Change start command to: `npm start`

### 3. Initialize Database:
- Run migrations on Render server or
- Use the schema.sql file to create tables

---

## ✅ Troubleshooting

### Error: "ECONNREFUSED localhost:5432"
**Cause**: PostgreSQL not running
**Fix**:
```powershell
# Start PostgreSQL service
pg_ctl -D "C:\Program Files\PostgreSQL\15\data" start
```

### Error: "password authentication failed"
**Cause**: Wrong password in .env
**Fix**: Update DB_PASSWORD in .env

### Error: "table does not exist"
**Cause**: Schema not imported
**Fix**: Run the schema.sql file again:
```powershell
psql -U postgres -d lost_found -f migrations/schema.sql
```

### Error: "duplicate key value violates unique constraint"
**Cause**: Email already exists
**Fix**: Use different email for testing

---

## 📋 Database Structure

### Users Table
```sql
- id (Primary Key)
- name
- email (Unique)
- password (Hashed)
- phone
- role (default: 'student')
- created_at
- updated_at
```

### Items Table
```sql
- id (Primary Key)
- title
- description
- category
- type ('lost' or 'found')
- status ('open', 'claimed', 'resolved')
- location
- image_url
- posted_by (Foreign Key → users)
- claimed_by (Foreign Key → users)
- created_at
- updated_at
```

### Notifications Table
```sql
- id (Primary Key)
- user_id (Foreign Key → users)
- message
- item_id (Foreign Key → items)
- is_read
- created_at
- updated_at
```

---

## 🎯 Commands Reference

```bash
# Start server (PostgreSQL)
npm start

# Start with nodemon (auto-reload)
npm run dev

# Start old MongoDB version (if needed)
npm run start:mongo

# Check PostgreSQL service
pg_ctl --version
```

---

## ✅ Benefits of PostgreSQL

✅ **No cloud dependency** - Works completely offline  
✅ **No IP whitelisting** - Works from anywhere  
✅ **Fast development** - No deployment delays  
✅ **Free & open source** - No costs  
✅ **Powerful features** - Advanced SQL capabilities  
✅ **Scalable** - Handles large datasets  

---

**Status**: PostgreSQL configured and ready! 🚀
**Last Updated**: March 25, 2026
