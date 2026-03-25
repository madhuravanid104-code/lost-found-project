# ⚡ Render Deployment Quick Checklist

## 🔴 Phase 1: Create PostgreSQL Database (5 mins)

- [ ] Go to https://dashboard.render.com/
- [ ] Open your `lost-found-project` service
- [ ] Go to **Settings** → **Linked Resources**
- [ ] Click **+ Create** → PostgreSQL
- [ ] Click **Create Database**
- [ ] **Copy credentials** (Host, Port, Database, User, Password)

---

## 🟠 Phase 2: Update Environment Variables (2 mins)

- [ ] Go to Service → **Settings** → **Environment Variables**
- [ ] **Delete**: `MONGODB_URI`
- [ ] **Update/Add**:
  ```
  DB_HOST=dpg-xxxxx.render.com
  DB_PORT=5432
  DB_USER=postgres
  DB_PASSWORD=your_render_password
  DB_NAME=lost_found
  NODE_ENV=production
  ```
- [ ] Click **Save**
- [ ] Wait for auto-redeploy (3-5 mins)

---

## 🟡 Phase 3: Import Database Schema (3 mins)

- [ ] Go to your PostgreSQL database on Render
- [ ] Click **Connect** → **PSQL**
- [ ] Paste entire content from `backend/migrations/schema.sql`
- [ ] Run the SQL

---

## 🟢 Phase 4: Test Your Application (5 mins)

### Test API
```
Go to: https://your-app-name.onrender.com/api
Expected: {"message":"Campus Lost & Found API is running (PostgreSQL)"}
```

### Test Register
```
Go to: https://your-app-name.onrender.com/frontend/register.html
Register with:
   Name: Test User
   Email: test@example.com
   Password: test123
Expected: Success message ✅
```

### Test Login
```
Go to: https://your-app-name.onrender.com/frontend/login.html
Use registered credentials
Expected: Login successful ✅
```

### Test Logout
```
Click Logout button
Expected: Redirected to login page ✅
```

---

## ✅ Final Status

When all tests pass:

| Feature | Status |
|---------|--------|
| API Running | ✅ |
| Database Connected | ✅ |
| User Registration | ✅ |
| User Login | ✅ |
| User Logout | ✅ |
| Post Items | ✅ |
| View Items | ✅ |
| Edit Items | ✅ |
| Delete Items | ✅ |

---

## 🐛 Quick Troubleshooting

**API returns 404?**
- Backend not deployed yet
- Wait 5 mins for Render to redeploy

**"Cannot connect to database"?**
- Check DB_PASSWORD is exact match
- Verify all DB variables are set
- Redeploy service

**"relation 'users' does not exist"?**
- Schema not imported
- Go back to Phase 3, copy-paste schema.sql in PSQL

**"Failed to fetch" on register?**
- Check Render logs
- Verify API endpoint works

---

## 🎯 Your Live Website

```
Frontend: https://your-app-name.onrender.com
API: https://your-app-name.onrender.com/api
Database: PostgreSQL on Render

Users can now:
✅ Register
✅ Login
✅ View lost/found items
✅ Post items
✅ Edit their items
✅ Delete their items
✅ Logout
```

---

**Estimated Time**: ~15-20 minutes
**Cost**: Free (with limitations)
**Status**: Ready to deploy! 🚀
