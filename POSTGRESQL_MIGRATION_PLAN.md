# 🔄 MongoDB → PostgreSQL Migration Guide

## What Needs to Be Done

This is a significant migration. Here's everything required:

### **Phase 1: Setup PostgreSQL Locally**
- Install PostgreSQL
- Create a local database
- Install PostgreSQL driver

### **Phase 2: Update Backend Code**
- Replace Mongoose models with PostgreSQL schema
- Replace MongoDB queries with SQL queries
- Update authentication middleware
- Update all routes

### **Phase 3: Testing & Deployment**
- Test locally
- Update Render deployment
- Push to GitHub

---

## 📋 Detailed Steps

### **STEP 1: Install PostgreSQL (Windows)**

1. **Download from**: https://www.postgresql.org/download/windows/
2. **Run installer**, remember your password for `postgres` user
3. **Verify installation**:
   ```powershell
   psql --version
   ```

---

### **STEP 2: Create Local Database**

1. **Open PowerShell as Admin**
2. **Connect to PostgreSQL**:
   ```powershell
   psql -U postgres
   ```
3. **Create database**:
   ```sql
   CREATE DATABASE lost_found;
   \c lost_found
   ```
4. **Exit**:
   ```sql
   \q
   ```

---

### **STEP 3: Install PostgreSQL Driver**

```bash
cd backend
npm install pg sequelize
```

---

### **STEP 4: Backend Files to Modify**

Files that need changes:

| File | Changes |
|------|---------|
| `backend/models/User.js` | Rewrite as SQL schema |
| `backend/models/Item.js` | Rewrite as SQL schema |
| `backend/routes/auth.js` | Update queries to SQL |
| `backend/routes/items.js` | Update queries to SQL |
| `backend/routes/users.js` | Update queries to SQL |
| `backend/.env` | Change DB_URL |
| `backend/server.js` | Change connection logic |

---

### **STEP 5: New Files to Create**

Create these new files:

```
backend/config/database.js        ← Database connection
backend/migrations/schema.sql     ← Create tables
```

---

### **STEP 6: Updated .env File**

Change from:
```
MONGODB_URI=mongodb+srv://...
```

To:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password_here
DB_NAME=lost_found
```

---

## 🎯 Complete Implementation

Shall I proceed with:

1. **Create PostgreSQL models** (User, Item)
2. **Create database schema** (SQL)
3. **Rewrite all routes** for PostgreSQL
4. **Update middleware** for new database
5. **Update .env and connection** logic
6. **Create migration script**

---

## ⚠️ Important Considerations

**Advantages of PostgreSQL:**
- ✅ No cloud dependency
- ✅ Faster local development
- ✅ Simpler setup
- ✅ No IP whitelisting needed
- ✅ Works offline

**What changes:**
- ❌ All database models rewritten
- ❌ All queries converted to SQL
- ❌ User passwords stored differently
- ❌ Different validation approach

---

## 📝 Your Current Stack

**Before** (MongoDB):
```
Frontend → Backend (Node.js) → MongoDB Atlas (Cloud)
```

**After** (PostgreSQL):
```
Frontend → Backend (Node.js) → PostgreSQL (Local)
```

---

## ✅ Complete Step-by-Step Implementation

**Do you want me to:**

1. **Create all new PostgreSQL models** (User.js, Item.js with SQL)
2. **Rewrite all routes** (auth.js, items.js, users.js)
3. **Create database connection** (config/database.js)
4. **Create schema SQL file** (migrations/schema.sql)
5. **Update .env configuration**
6. **Update server.js** to work with PostgreSQL
7. **Push everything** to GitHub

**Then you can:**
- Test locally with PostgreSQL
- Deploy to Render with PostgreSQL
- All features will work!

---

## 🚀 Ready?

Reply with: **"Yes, proceed"** and I'll:
1. Install packages
2. Create all new files
3. Update existing files
4. Push to GitHub
5. Give you testing instructions

This will completely eliminate the MongoDB issue! 🎉
