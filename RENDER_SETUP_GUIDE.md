# 🚀 Render Deployment - Complete Setup Guide

## ✅ What Was Fixed

Your frontend is now configured to:
- ✅ Use `http://localhost:5000/api` for local testing
- ✅ Use `https://lost-found-project-1bqp.onrender.com/api` for production

---

## 🔧 Render Environment Variables - CRITICAL!

**Your Render backend is running, but environment variables might not be set correctly.**

### Step 1: Go to Render Dashboard
1. Visit: https://dashboard.render.com/
2. Click your `lost-found-project` service
3. Go to **Settings** → **Environment** (on left sidebar)

### Step 2: Add These Environment Variables

```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://basicsdev0ps_db_user:Fx8TVD5TQRBY8BRr@lostfound-cluster.zabuwxa.mongodb.net/lost-found?retryWrites=true&w=majority
JWT_SECRET=46da4471a1587012c1092f57d8b4de8629bd6ae6c53b7df164010b405e9da116
FRONTEND_URL=https://lost-found-project-1bqp.onrender.com
```

### Step 3: Deploy Again
1. Click **Deployments** tab
2. Click the three dots (...) next to latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete (check logs)

---

## 📌 MongoDB Atlas - Whitelist Render IP

**Your MongoDB Atlas might be blocking Render's IP address.**

### How to Fix:

1. **Go to MongoDB Atlas**: https://cloud.mongodb.com/
2. **Navigate to**: Your cluster → **Security** → **Network Access**
3. **Current IPs**: Look for entries that are NOT your IP
4. **For Production**: Click **+ ADD IP ADDRESS**
   - Option A: Allow `0.0.0.0/0` (all IPs - less secure)
   - Option B: Find Render's IP and whitelist only that
5. **Confirm** and wait ~5 minutes for changes

---

## 🧪 Test Your Deployment

### Option 1: Test Register Page
```
https://lost-found-project-1bqp.onrender.com/frontend/register.html
```

### Option 2: Test Direct API
```
https://lost-found-project-1bqp.onrender.com/api
```

Expected response:
```json
{"message":"Campus Lost & Found API is running"}
```

---

## 🔍 Debug Common Issues

### Issue 1: "Failed to fetch" on Register/Login

**Cause**: Backend environment variables not set or MongoDB not accessible

**Fix**:
1. Set environment variables in Render (see above)
2. Whitelist your Render IP in MongoDB Atlas
3. Redeploy
4. Wait 2-3 minutes for changes

### Issue 2: Backend Crashes on Deploy

**Check Render Logs**:
1. Go to Render → Your Service
2. Click **Logs** tab
3. Look for errors about:
   - `MongoDB connection error` → Check MongoDB URI
   - `Cannot find module` → Run `npm install`
   - `PORT` errors → Make sure PORT=5000 is set

### Issue 3: 404 Frontend Not Found

**Cause**: Express not serving frontend correctly

**Fix**: Your backend needs to serve frontend files. In `server.js`:
```javascript
app.use(express.static(path.join(__dirname, '../frontend')));
```

---

## 📝 Current Configuration

```
FRONTEND: https://lost-found-project-1bqp.onrender.com/
BACKEND: https://lost-found-project-1bqp.onrender.com/api
DATABASE: MongoDB Atlas (lost-found-cluster)
JWT_SECRET: 46da4471a1587012c1092f57d8b4de8629bd6ae6c53b7df164010b405e9da116
```

---

## ✅ Checklist Before Testing

- [ ] Environment variables set in Render
- [ ] MongoDB Atlas IP whitelisted
- [ ] Render deployment completed successfully
- [ ] Check Render logs for errors
- [ ] Wait 2-3 minutes for MongoDB changes
- [ ] Test local first: `http://localhost:5000/frontend/register.html`
- [ ] Then test production: above URL

---

## 🚀 Quick Deploy Steps

1. **Make changes locally**
2. **Commit**: `git add . && git commit -m "message"`
3. **Push**: `git push origin master`
4. **Render auto-deploys** (if connected to GitHub)
5. **Check logs** in Render dashboard
6. **Test** at your production URL

---

## 📊 Your Render Service Details

```
Service Name: lost-found-project
URL: https://lost-found-project-1bqp.onrender.com
Start Command: node server.js OR npm start
Region: Check your Render dashboard
Plan: Check your account
```

---

## ❓ Still Not Working?

Try these in order:

1. **Restart Render Service**:
   ```
   Render Dashboard → Settings → "Restart" button at bottom
   ```

2. **Check Render Logs**:
   ```
   Click "Logs" tab - look for red error messages
   ```

3. **Verify MongoDB Connection**:
   - Test string offline: Use MongoDB Compass
   - Verify IP is whitelisted

4. **Clear Browser Cache**:
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Clear localStorage: Open DevTools → Application → Clear All

5. **Check GitHub Actions** (if using GitHub Actions):
   ```
   GitHub → Actions tab → Check build logs
   ```

---

**Last Updated**: March 25, 2026
**Status**: Ready to test after environment variable setup
