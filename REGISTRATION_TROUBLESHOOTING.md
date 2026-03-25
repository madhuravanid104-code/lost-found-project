# 🔍 Registration Failed - Troubleshooting Guide

## What's Happening?

When you click Register, it tries to connect to your Render backend but gets an error.

---

## 🧪 Step 1: Test Your Backend Directly

Open your browser and go to:
```
https://lost-found-project-1bqp.onrender.com/api
```

**Expected Response:**
```json
{"message":"Campus Lost & Found API is running"}
```

**If you see:**
- ✅ JSON response → Backend is running, move to Step 2
- ❌ 404 error → Backend not serving the API correctly
- ❌ 502/503 error → Backend crashed or not responding
- ❌ Timeout → Render service is down

---

## 🧪 Step 2: Check Render Dashboard

1. Go to: https://dashboard.render.com/
2. Click your `lost-found-project` service
3. Go to **Logs** tab
4. Look for errors like:
   - `Cannot find module` → Missing dependencies
   - `MongoDB connection error` → Database connection failed
   - `JWT_SECRET not defined` → Environment variable missing
   - `ECONNREFUSED` → MongoDB blocked your IP

---

## ✅ Step 3: Verify Environment Variables in Render

**CRITICAL** - These MUST be set in Render:

1. **Go to**: https://dashboard.render.com/
2. **Click** your service
3. **Settings** → **Environment**
4. **Verify these are set**:

```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://basicsdev0ps_db_user:Fx8TVD5TQRBY8BRr@lostfound-cluster.zabuwxa.mongodb.net/lost-found?retryWrites=true&w=majority
JWT_SECRET=46da4471a1587012c1092f57d8b4de8629bd6ae6c53b7df164010b405e9da116
FRONTEND_URL=https://lost-found-project-1bqp.onrender.com
```

**If any are missing:**
1. Add them
2. Click **Deploy** or **Redeploy**
3. Wait 3-5 minutes

---

## ✅ Step 4: Whitelist Render IP in MongoDB

1. **Go to**: https://cloud.mongodb.com/
2. **Click your cluster** → **Security** → **Network Access**
3. **Look for**: Your current IPs
4. **If needed**: Click **+ ADD IP ADDRESS**
   - Allow `0.0.0.0/0` (all IPs - for testing)
   - OR find Render's IP and whitelist it
5. **Wait**: 5 minutes for changes

---

## 🚀 Step 5: Redeploy Your Service

1. Go to: https://dashboard.render.com/
2. Click your service
3. Click **Deployments** tab
4. Find latest deployment
5. Click three dots (...) → **Redeploy**
6. Wait for deployment to complete
7. **Check logs** for errors

---

## 🧪 Step 6: Test Registration Again

After deployment completes, try registering:

```
https://lost-found-project-1bqp.onrender.com/frontend/register.html
```

**Test with:**
- Name: `Test User`
- Email: `test@example.com`
- Phone: `07829995263`
- Password: `test123`

**If still failing:**
- Open **Browser DevTools** (F12)
- Go to **Console** tab
- Try registering again
- Look for error messages in console
- Share the error message

---

## 🆘 Common Errors & Fixes

### Error: "Registration failed" (No details)
**Cause**: Backend not responding or crashed
**Fix**: 
1. Check Render logs
2. Verify environment variables are set
3. Redeploy

### Error: "User already exists"
**Cause**: That email is already registered
**Fix**: Use a different email address

### Error: "Validation failed"
**Cause**: Invalid input (e.g., password < 6 chars)
**Fix**: Check form input:
- Name: Not empty
- Email: Valid format (test@example.com)
- Phone: Not empty
- Password: At least 6 characters

### MongoDB Connection Error
**Cause**: 
1. IP not whitelisted in MongoDB Atlas
2. MONGODB_URI wrong in Render
**Fix**:
1. Whitelist 0.0.0.0/0 in MongoDB Atlas
2. Verify MONGODB_URI in Render is correct

### JWT_SECRET not defined
**Cause**: Environment variable not set in Render
**Fix**: Add to Render environment variables:
```
JWT_SECRET=46da4471a1587012c1092f57d8b4de8629bd6ae6c53b7df164010b405e9da116
```

---

## 📋 Quick Checklist

- [ ] Backend URL works: `https://lost-found-project-1bqp.onrender.com/api`
- [ ] Render logs show no errors
- [ ] All 5 environment variables set in Render
- [ ] MongoDB IP whitelisted (0.0.0.0/0)
- [ ] Latest deployment completed successfully
- [ ] No old processes running locally
- [ ] Browser cache cleared (Ctrl+Shift+R)

---

## 🔧 Local Testing (Fallback)

If Render isn't working, test locally:

```bash
cd backend
npm install
node server.js
```

Then test at:
```
http://localhost:5000/api
```

This will test if your code is correct.

---

## 📞 If Still Not Working

Provide these details:

1. **Render API test result**:
   ```
   https://lost-found-project-1bqp.onrender.com/api
   ```
   (What do you see?)

2. **Render logs** (last 20 lines of errors)

3. **Browser console error** (F12 → Console → Try register)

4. **Environment variables** (screenshot from Render)

Then I can diagnose exactly what's wrong!

---

**Last Updated**: March 25, 2026
**Status**: Troubleshooting guide for registration failures
