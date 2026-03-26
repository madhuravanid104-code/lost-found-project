# 🎓 Campus Lost & Found Portal

> A comprehensive web-based platform where college students can post lost or found items and help each other recover their belongings.

**Status:** ✅ Fully Functional | **Date Updated:** March 26, 2026

---

## 🎯 Project Overview

The Campus Lost & Found Portal is a modern, responsive web application designed to help students on campus locate and recover lost items. The system supports:

- **Posting Lost Items**: Report lost items with detailed descriptions, photos, and locations
- **Posting Found Items**: Help others by reporting found items
- **Advanced Search**: Browse and search with filters by category, location, type, and status
- **Item Management**: Track posted items and manage claims
- **User Dashboard**: Personal space to manage your items and profile
- **Authentication**: Secure JWT-based user authentication

---

## ✨ Key Features

### 👥 User Features
- ✅ User Registration & Secure Login
- ✅ Post Lost Items with Images
- ✅ Post Found Items with Images
- ✅ Search & Filter Items (by category, location, status)
- ✅ View Item Details & Photos
- ✅ Claim Found Items
- ✅ Mark Items as Resolved/Returned
- ✅ Personal Dashboard (Posted Items, Claimed Items, Resolved Items)
- ✅ Profile Management
- ✅ Image Upload & Storage (Base64)

### 🔐 Security & Admin Features
- ✅ JWT Token Authentication
- ✅ Password Hashing with bcryptjs
- ✅ Role-Based Access Control (Student/Staff/Admin)
- ✅ Admin Item Verification
- ✅ Input Validation & Sanitization
- ✅ Error Handling & User Feedback

### 🎨 Technical Features
- ✅ Complete CRUD Operations
- ✅ RESTful API Design
- ✅ Responsive Mobile/Tablet/Desktop Design
- ✅ Real-time UI Updates
- ✅ Data Persistence (Multiple Options)

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Responsive grid system with animations
- **JavaScript (ES6+)** - Vanilla JavaScript modules
- **Fetch API** - Backend communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation

### Database Options
- **PostgreSQL** - Production/Cloud deployment (Recommended)
- **MongoDB** - Alternative cloud database
- **JSON Files** - Local development (No external DB needed)

---

## 📂 Project Structure

## � Project Structure

```
lost-found-project/
├── backend/
│   ├── config/
│   │   └── database.js          # Database configuration
│   ├── data/                    # JSON storage (local development)
│   │   ├── users.json           # User data
│   │   └── items.json           # Item data
│   ├── migrations/
│   │   └── schema.sql           # PostgreSQL schema
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication
│   │   ├── authJson.js          # JSON auth
│   │   └── authPostgres.js      # PostgreSQL auth
│   ├── models/
│   │   ├── User.js              # User model
│   │   ├── Item.js              # Item model (MongoDB)
│   │   ├── Notification.js      # Notification model
│   │   ├── UserJson.js          # User model (JSON)
│   │   ├── ItemJson.js          # Item model (JSON)
│   │   ├── UserPostgres.js      # User model (PostgreSQL)
│   │   ├── ItemPostgres.js      # Item model (PostgreSQL)
│   │   └── NotificationPostgres.js
│   ├── routes/
│   │   ├── auth.js              # Auth routes (MongoDB)
│   │   ├── authJson.js          # Auth routes (JSON)
│   │   ├── authPostgres.js      # Auth routes (PostgreSQL)
│   │   ├── items.js             # Item routes (MongoDB)
│   │   ├── itemsJson.js         # Item routes (JSON)
│   │   ├── itemsPostgres.js     # Item routes (PostgreSQL)
│   │   ├── users.js             # User routes
│   │   └── seed.js              # Seed routes
│   ├── server.js                # Express server (MongoDB)
│   ├── serverJson.js            # Express server (JSON)
│   ├── serverPostgres.js        # Express server (PostgreSQL) ⭐ DEFAULT
│   ├── seed-data.js             # Seed MongoDB
│   ├── seed-jsonJson.js         # Seed JSON files
│   ├── package.json             # Dependencies
│   ├── .env.example             # Environment template
│   └── .gitignore
├── frontend/
│   ├── index.html               # Home page
│   ├── login.html               # Login page
│   ├── register.html            # Registration page
│   ├── search.html              # Search & filter
│   ├── post-lost.html           # Post lost item
│   ├── post-found.html          # Post found item
│   ├── dashboard.html           # User dashboard
│   ├── item-details.html        # Item details view
│   ├── test.html                # Test page
│   ├── css/
│   │   └── styles.css           # Responsive styling
│   └── js/
│       ├── main.js              # Global utilities
│       ├── auth.js              # Auth logic
│       ├── navbar.js            # Navbar updates
│       ├── post-item.js         # Item posting
│       ├── search.js            # Search & filters
│       ├── dashboard.js         # Dashboard management
│       └── item-details.js      # Item details logic
│
├── Documentation/
│   ├── README.md                # This file
│   ├── PROJECT_SUMMARY.md       # Project overview
│   ├── QUICK_START.md           # Quick start guide
│   ├── WINDOWS_SETUP.md         # Windows installation
│   ├── POSTGRESQL_LOCAL_SETUP.md
│   ├── RENDERING_DEPLOYMENT.md
│   └── STATUS_REPORT.md         # Current status

```

---

## 🚀 Quick Start (Choose Your Setup)

### Option 1: PostgreSQL (Recommended for Production)

**Prerequisites:**
- Node.js (v14+)
- PostgreSQL (v12+)
- npm or yarn

**Setup:**
```bash
# 1. Navigate to backend
cd backend

# 2. Install dependencies
npm install

# 3. Create .env file
copy .env.example .env

# 4. Update .env with PostgreSQL credentials
DATABASE_URL=postgresql://username:password@localhost:5432/lost_found_db
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development

# 5. Initialize PostgreSQL database
psql -U postgres -f migrations/schema.sql

# 6. Start the server
npm start
```

### Option 2: JSON Storage (Fastest Local Setup - No DB Required!)

**Prerequisites:**
- Node.js (v14+)
- npm or yarn

**Setup:**
```bash
# 1. Navigate to backend
cd backend

# 2. Install dependencies
npm install

# 3. Start with JSON server
node serverJson.js
```

**Pre-loaded Test Credentials:**
```
Email: madhuravani@campus.edu
Password: password123
```

### Option 3: MongoDB (Cloud Database)

**Prerequisites:**
- Node.js (v14+)
- MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)
- npm or yarn

**Setup:**
```bash
# 1. Navigate to backend
cd backend

# 2. Install dependencies
npm install

# 3. Create .env file
copy .env.example .env

# 4. Update .env with MongoDB credentials
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lost-found
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development

# 5. Start the server
npm run start:mongo
```

---

## 🧪 Testing the Application

### Step 1: Access the Home Page
```
http://localhost:5000/index.html
```

### Step 2: Login with Test Account
```
URL: http://localhost:5000/login.html
Email: madhuravani@campus.edu
Password: password123
```

### Step 3: Browse Items
```
http://localhost:5000/search.html
```
- Filter by Type (Lost/Found)
- Filter by Category
- Filter by Status
- Click items to view details

### Step 4: Post an Item
```
http://localhost:5000/post-lost.html
or
http://localhost:5000/post-found.html
```

### Step 5: Manage Your Items
```
http://localhost:5000/dashboard.html
```
- View posted items
- View claimed items
- View resolved items

---

## 📊 API Endpoints

### Authentication
```
POST   /api/auth/register      # Register new user
POST   /api/auth/login         # Login user
```

### Users
```
GET    /api/users              # Get all users
GET    /api/users/:id          # Get user by ID
PUT    /api/users/:id          # Update user
DELETE /api/users/:id          # Delete user
```

### Items
```
GET    /api/items              # Get all items (with pagination & filters)
GET    /api/items/:id          # Get item by ID
POST   /api/items              # Create new item
PUT    /api/items/:id          # Update item
DELETE /api/items/:id          # Delete item
POST   /api/items/:id/claim    # Claim an item
POST   /api/items/:id/resolve  # Mark item as resolved
GET    /api/search?q=keyword   # Search items
```

### Query Filters
```
?type=lost               # Filter by lost
?type=found              # Filter by found
?category=Electronics    # Filter by category
?status=available        # Filter by status
?location=Main Gate      # Filter by location
?category=xyz&type=lost  # Combine filters
```

---

## 🔐 Authentication Details

**JWT Token Storage:**
- Tokens are stored in localStorage (key: `token`)
- All protected routes require `Authorization: Bearer {token}` header
- Tokens expire after 24 hours

**Protected Routes:**
- POST /api/items (requires user)
- PUT /api/items/:id (requires item owner or admin)
- DELETE /api/items/:id (requires item owner or admin)

---

## 📋 Test Accounts (JSON/PostgreSQL Setup)

```
| Role   | Email                    | Password   |
|--------|--------------------------|------------|
| Admin  | admin@campus.edu         | admin123   |
| Staff  | raj@campus.edu           | password123|
| User   | madhuravani@campus.edu   | password123|
```

---

## 🗄️ Database Schema

### User Model
```javascript
{
  id: Integer/ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed with bcryptjs),
  phone: String,
  role: String (student/staff/admin),
  profilePicture: String (base64 encoded),
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Item Model
```javascript
{
  id: Integer/ObjectId,
  title: String,
  description: String,
  category: String (Electronics/Accessories/Documents/etc),
  type: String (lost/found),
  location: String,
  foundDate: Date,
  image: String (base64 encoded),
  status: String (available/claimed/resolved),
  postedBy: Integer/ObjectId (User ID),
  claimedBy: Integer/ObjectId (User ID or null),
  claimDate: Date,
  isVerified: Boolean,
  verifiedBy: Integer/ObjectId (Admin ID or null),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔧 Configuration

### Environment Variables (.env)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database (Choose one based on your setup)

# PostgreSQL
DATABASE_URL=postgresql://username:password@localhost:5432/lost_found_db

# MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lost-found

# JSON Storage (No env vars needed, automatic)

# Authentication
JWT_SECRET=your-secret-key-here

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5000
```

### Frontend API URL

Edit `frontend/js/main.js`:
```javascript
const API_URL = 'http://localhost:5000/api';  // Local
// const API_URL = 'https://api.yourserver.com/api';  // Production
```

### Styling Customization

Edit `frontend/css/styles.css`:
- Color scheme (CSS variables at top)
- Fonts and typography
- Responsive breakpoints
- Animation timings

---

## 🐛 Troubleshooting

### PostgreSQL Connection Issues

**Error: "Cannot connect to PostgreSQL"**
- Ensure PostgreSQL service is running
- Check `DATABASE_URL` in `.env`
- Verify database user and password
- Run: `psql -U postgres -c "SELECT 1"` to test

**Error: "Table does not exist"**
- Run migrations: `psql -U postgres -f migrations/schema.sql`

### MongoDB Connection Issues

**Error: "MongoDB connection failed"**
- Check MongoDB Atlas IP whitelist
- Verify `MONGODB_URI` is correct
- Ensure MongoDB user has proper permissions

**Error: "Authentication failed"**
- Check MongoDB username and password
- Verify correct cluster URL
- Try with DNS seed list: `mongodb+srv://...`

### JSON File Storage Issues

**Error: "Cannot read data file"**
- Ensure `/backend/data/` directory exists
- Check file permissions
- Regenerate: `node seed-jsonJson.js`

### Frontend Issues

**Error: "Failed to fetch"**
- Ensure backend is running on port 5000
- Check browser console for CORS errors
- Verify API_URL in `js/main.js`

**Error: "Token expired"**
- Clear localStorage: `localStorage.clear()`
- Login again to get new token

**CORS Issues:**
- CORS is configured in backend
- Ensure frontend and backend use compatible domains

---

## 🌐 Deployment

### Deploy to Render (Cloud Platform)

**Prerequisites:**
- GitHub account with repository
- Render.com account

**Steps:**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update README and deployment config"
   git push origin main
   ```

2. **Connect to Render:**
   - Visit https://dashboard.render.com/
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select `lost-found-project`

3. **Configure Environment:**
   - Build Command: `cd backend && npm install`
   - Start Command: `node backend/serverPostgres.js`
   - Add Environment Variables:
     ```
     DATABASE_URL=your_postgres_url
     JWT_SECRET=your_secret
     NODE_ENV=production
     ```

4. **Deploy Frontend:**
   - Point to static build or serve from backend

### Deploy to Heroku (Legacy)

**Steps:**
```bash
# 1. Create Heroku app
heroku create your-app-name

# 2. Add environment variables
heroku config:set MONGODB_URI=your_url
heroku config:set JWT_SECRET=your_secret

# 3. Deploy
git push heroku main
```

---

## 📊 Project Statistics

- **Total Files:** 35+
- **Backend Files:** 16
- **Frontend Files:** 15
- **Lines of Code:** 2000+
- **CSS Lines:** 500+
- **Documentation:** 10+ guides

---

## 📚 Additional Documentation

- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Detailed project overview
- **[QUICK_START.md](./QUICK_START.md)** - Quick start guide
- **[WINDOWS_SETUP.md](./WINDOWS_SETUP.md)** - Windows installation steps
- **[POSTGRESQL_LOCAL_SETUP.md](./POSTGRESQL_LOCAL_SETUP.md)** - PostgreSQL setup
- **[STATUS_REPORT.md](./STATUS_REPORT.md)** - Current project status
- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - How to test the application

---

## ✨ Sample Data

Pre-loaded test data includes:

**Test Users:**
- 3 pre-configured users (admin, staff, student)
- Ready to use for testing

**Sample Items:**
- 8 sample lost/found items
- Multiple categories and statuses
- Perfect for testing search and filters

To re-seed data:
```bash
# JSON storage
node backend/seed-jsonJson.js

# MongoDB
node backend/seed-data.js
```

---

## 🎯 Features By Database Type

| Feature | PostgreSQL | MongoDB | JSON |
|---------|------------|---------|------|
| Local Development | ✅ | ✅ | ✅ Easy |
| Production Ready | ✅ | ✅ | ❌ |
| Scalability | ✅ High | ✅ High | ❌ Limited |
| Setup Time | ~10 min | ~5 min | ~1 min |
| External Dependency | ✅ PostgreSQL | ✅ MongoDB Atlas | ❌ None |

---

## 🔄 Database Migration

To switch databases:

1. **From MongoDB to PostgreSQL:**
   ```bash
   # Export MongoDB data
   mongodump --uri "your_mongo_uri" --out ./dump
   
   # Import to PostgreSQL
   # Use migration scripts
   ```

2. **From JSON to PostgreSQL:**
   ```bash
   # Data is automatically migrated on server start
   # Or manually run migration script
   ```

---

## 📝 API Response Examples

### Register User
**Request:**
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@campus.edu",
  "password": "password123",
  "phone": "1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@campus.edu",
    "role": "student"
  }
}
```

### Create Item
**Request:**
```json
POST /api/items
Authorization: Bearer {token}
{
  "title": "Lost Keys",
  "description": "Lost near college gate",
  "category": "Accessories",
  "type": "lost",
  "location": "Main Gate",
  "image": "base64_encoded_image"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Item posted successfully",
  "item": {
    "id": 1,
    "title": "Lost Keys",
    "type": "lost",
    "status": "available",
    "postedBy": 1,
    "createdAt": "2026-03-26T10:30:00Z"
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available for educational purposes.

Developed as a college project for the Campus Lost & Found Portal.

---

## 👥 Authors & Credits

- **Madhuravani** - Project Developer
- Campus Lost & Found Portal - Educational Initiative
- Last Updated: March 26, 2026

---

## 🚀 Next Steps

1. ✅ Choose your database (PostgreSQL recommended)
2. ✅ Follow quick start guide for your platform
3. ✅ Test with provided test accounts
4. ✅ Customize styling and configuration
5. ✅ Deploy to production (Render, Heroku, etc.)
6. ✅ Share with your campus!

---

## 📞 Support & Questions

- Check the documentation files in the project
- Review error messages in browser console
- Check backend logs for detailed errors
- Test with sample data first

**Happy Finding! 🎓**
