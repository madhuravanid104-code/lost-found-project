// Item Details JavaScript

async function loadItemDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');

  if (!itemId || itemId === 'undefined') {
    alert('Item not found');
    window.location.href = 'search.html';
    return;
  }

  try {
    const response = await fetch(`${API_URL}/items/${itemId}`);
    if (!response.ok) throw new Error('Item not found');
    const item = await response.json();
    displayItemDetails(item);
  } catch (error) {
    alert('Error loading item: ' + error.message);
    window.location.href = 'search.html';
  }
}

function displayItemDetails(item) {
  document.getElementById('itemTitle').textContent = item.title;
  
  // Fix image display - support both 'image' and 'image_url' fields
  let imageUrl = item.image || item.image_url || 'https://via.placeholder.com/400x300?text=Item';
  document.getElementById('itemImage').src = imageUrl;
  
  document.getElementById('itemType').textContent = item.type.toUpperCase();
  document.getElementById('itemType').className = `badge ${item.type}`;
  document.getElementById('itemCategory').textContent = getCategoryLabel(item.category);
  document.getElementById('itemStatus').textContent = item.status.charAt(0).toUpperCase() + item.status.slice(1);
  document.getElementById('itemStatus').className = `badge ${item.status}`;
  document.getElementById('itemDescription').textContent = item.description;
  document.getElementById('itemLocation').textContent = item.location;
  document.getElementById('itemDate').textContent = formatDate(item.createdAt);

  // Posted by info - fix for JSON structure
  const posterUser = item.postedByUser || {};
  if (posterUser && posterUser.name) {
    document.getElementById('posterName').textContent = posterUser.name;
    document.getElementById('posterEmail').textContent = posterUser.email;
    document.getElementById('posterPhone').textContent = posterUser.phone || 'N/A';
  }

  // Claimed by info - fix for JSON structure
  const claimerUser = item.claimedByUser;
  if (claimerUser && claimerUser.name) {
    document.getElementById('claimedBySection').style.display = 'block';
    document.getElementById('claimerName').textContent = claimerUser.name;
    document.getElementById('claimerEmail').textContent = claimerUser.email;
    document.getElementById('claimerPhone').textContent = claimerUser.phone || 'N/A';
  }

  // Action buttons - fix for JSON structure (postedBy is string ID, not object)
  const user = getUser();
  const claimBtn = document.getElementById('claimBtn');
  const resolveBtn = document.getElementById('resolveBtn');
  const editBtn = document.getElementById('editBtn');
  const deleteBtn = document.getElementById('deleteBtn');

  if (user) {
    // Show claim button if item is open (not claimed) and user is not the poster
    const isOpen = item.status === 'open' || item.status === 'available';
    const isNotClaimed = !item.claimedBy;
    const isNotPoster = item.postedBy !== user.id;
    
    if (isOpen && isNotClaimed && isNotPoster) {
      claimBtn.style.display = 'inline-block';
      claimBtn.addEventListener('click', () => claimItem(item.id));
    }

    // Show resolve button if user is the poster and item is claimed
    if (item.postedBy === user.id && item.status === 'claimed') {
      resolveBtn.style.display = 'inline-block';
      resolveBtn.textContent = 'Mark as Resolved';
      resolveBtn.addEventListener('click', () => resolveItem(item.id));
    }

    // Show edit and delete buttons if user is the poster
    if (item.postedBy === user.id) {
      editBtn.style.display = 'inline-block';
      deleteBtn.style.display = 'inline-block';
      editBtn.addEventListener('click', () => window.location.href = `edit-item.html?id=${item.id}`);
      deleteBtn.addEventListener('click', () => deleteItemDetail(item.id));
    }
  }
}

async function claimItem(itemId) {
  const user = getUser();
  if (!user) {
    alert('Please login first');
    window.location.href = 'login.html';
    return;
  }

  try {
    const response = await fetch(`${API_URL}/items/${itemId}/claim`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to claim item');
    }

    document.getElementById('successMessage').textContent = 'Item claimed successfully!';
    document.getElementById('successMessage').style.display = 'block';
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    document.getElementById('errorMessage').textContent = 'Error: ' + error.message;
    document.getElementById('errorMessage').style.display = 'block';
  }
}

async function resolveItem(itemId) {
  try {
    const response = await fetch(`${API_URL}/items/${itemId}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to resolve item');
    }

    document.getElementById('successMessage').textContent = 'Item marked as resolved!';
    document.getElementById('successMessage').style.display = 'block';
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    document.getElementById('errorMessage').textContent = 'Error: ' + error.message;
    document.getElementById('errorMessage').style.display = 'block';
  }
}

async function deleteItemDetail(itemId) {
  if (!confirm('Are you sure you want to delete this item?')) return;

  try {
    const response = await fetch(`${API_URL}/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete item');
    }

    alert('Item deleted successfully');
    window.location.href = 'search.html';
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadItemDetails();
});
