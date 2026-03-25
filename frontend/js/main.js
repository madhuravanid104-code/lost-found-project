// API Configuration - Auto-detect environment
let API_URL;
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  // Local development
  API_URL = 'http://localhost:5000/api';
} else {
  // Production - Use your Render backend
  API_URL = 'https://lost-found-project-1bqp.onrender.com/api';
}

// Get token from localStorage
function getToken() {
  return localStorage.getItem('token');
}

// Set token in localStorage
function setToken(token) {
  localStorage.setItem('token', token);
}

// Remove token from localStorage
function removeToken() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

// Get user from localStorage
function getUser() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

// Set user in localStorage
function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// Fetch API with token
async function apiCall(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.message || 'API Error');
    }

    return data;
  } catch (error) {
    throw error;
  }
}

// Logout function
function logout() {
  removeToken();
  alert('Logged out successfully');
  window.location.href = 'index.html';
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Get category label
function getCategoryLabel(category) {
  const categories = {
    idCard: 'ID Card',
    books: 'Books',
    calculator: 'Calculator',
    waterBottle: 'Water Bottle',
    accessories: 'Accessories',
    electronics: 'Electronics',
    documents: 'Documents',
    other: 'Other',
  };
  return categories[category] || category;
}

// Create item card HTML
function createItemCard(item) {
  const typeClass = item.type === 'lost' ? 'lost' : 'found';
  const statusClass = item.status.toLowerCase();
  
  return `
    <div class="item-card" onclick="window.location.href='item-details.html?id=${item.id}'">
      <div class="item-image">
        <img src="${item.image_url || 'https://via.placeholder.com/400x300?text=Item'}" alt="${item.title}">
      </div>
      <div class="item-body">
        <h4>${item.title}</h4>
        <div class="item-meta">
          <span class="badge ${typeClass}">${item.type.toUpperCase()}</span>
          <span class="badge">${getCategoryLabel(item.category)}</span>
          <span class="badge ${statusClass}">${item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span>
        </div>
        <p class="item-description">${item.description.substring(0, 100)}...</p>
        <p class="item-location">📍 ${item.location}</p>
        <div class="item-footer">
          <span>${formatDate(item.createdAt)}</span>
          <span>${item.postedBy?.name || 'Anonymous'}</span>
        </div>
      </div>
    </div>
  `;
}

// Load recent items on home page
async function loadRecentItems() {
  try {
    const data = await apiCall('/items?status=available');
    const container = document.getElementById('recentItems');
    
    if (container && data.length > 0) {
      container.innerHTML = data.slice(0, 6).map(item => createItemCard(item)).join('');
    }
  } catch (error) {
    console.error('Error loading items:', error);
  }
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
  loadRecentItems();
});
