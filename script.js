// Remove config import and use backend API for PIN verification
let isAuthenticated = false;
let blogPosts = [];
let adminPin = ''; // Store PIN after successful verification

// Fetch posts from backend
async function fetchPosts() {
    try {
        const response = await fetch('https://portfolio-62eh.onrender.com/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        blogPosts = await response.json();
        displayPosts();
    } catch (error) {
        console.error('Error fetching posts:', error);
        alert('Error loading blog posts. Please try again later.');
    }
}

// Display blog posts
function displayPosts() {
    const container = document.getElementById('blogContainer');
    if (!container) return; // Exit if not on blog page
    
    container.innerHTML = '';
    
    blogPosts.forEach((post) => {
        const article = document.createElement('article');
        article.className = 'blog-card';
        article.innerHTML = `
            <div class="blog-date">${post.date}</div>
            <h2 class="blog-title">${post.title}</h2>
            <p class="blog-preview">${post.content}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            ${isAuthenticated ? `
                <div class="mt-4 flex gap-2">
                    <button class="btn" onclick="deletePost(${post.id})">Delete</button>
                </div>
            ` : ''}
        `;
        container.appendChild(article);
    });

    // Update management button text based on authentication
    const managementBtn = document.querySelector('.management-btn');
    if (managementBtn) {
        if (isAuthenticated) {
            managementBtn.textContent = 'Add New Post';
            managementBtn.onclick = () => document.getElementById('addPostModal').style.display = 'block';
        } else {
            managementBtn.textContent = 'Manage Posts';
            managementBtn.onclick = showPinModal;
        }
    }
}

// Show PIN modal
function showPinModal() {
    document.getElementById('pinModal').style.display = 'block';
}

// Verify PIN
async function verifyPin() {
    const pinInput = document.getElementById('pinInput');
    const pin = pinInput.value;

    try {
        const response = await fetch('https://portfolio-62eh.onrender.com/api/verify-pin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pin })
        });

        const data = await response.json();

        if (data.success) {
            isAuthenticated = true;
            adminPin = pin; // Store PIN after successful verification
            document.getElementById('pinModal').style.display = 'none';
            pinInput.value = '';
            displayPosts(); // Refresh display to show management options
        } else {
            alert('Incorrect PIN');
            pinInput.value = '';
        }
    } catch (error) {
        console.error('Error verifying PIN:', error);
        alert('Error verifying PIN. Please try again.');
        pinInput.value = '';
    }
}

// Add new blog post
async function setupBlogForm() {
    const form = document.getElementById('blogPostForm');
    if (!form) return; // Exit if not on blog page

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const newPost = {
            title: document.getElementById('postTitle').value,
            content: document.getElementById('postContent').value,
            tags: document.getElementById('postTags').value
                .split(',')
                .map(tag => tag.trim())
                .filter(tag => tag)
        };

        try {
            const response = await fetch('https://portfolio-62eh.onrender.com/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost)
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            await fetchPosts(); // Refresh posts from server
            
            // Reset form and close modal
            this.reset();
            document.getElementById('addPostModal').style.display = 'none';
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Error creating post. Please try again.');
        }
    });
}

// Delete blog post
async function deletePost(postId) {
    if (!isAuthenticated || !adminPin) {
        alert('Please authenticate first');
        showPinModal();
        return;
    }

    if (!confirm('Are you sure you want to delete this post?')) {
        return;
    }

    try {
        const response = await fetch(`https://portfolio-62eh.onrender.com/api/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': adminPin
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert('Authentication failed. Please verify PIN again.');
                isAuthenticated = false;
                adminPin = '';
                showPinModal();
            } else {
                throw new Error('Failed to delete post');
            }
            return;
        }

        await fetchPosts(); // Refresh posts from server
    } catch (error) {
        console.error('Error deleting post:', error);
        alert('Error deleting post. Please try again.');
    }
}

// Close modals when clicking the X
function setupModalClose() {
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = function() {
            this.closest('.modal').style.display = 'none';
        }
    });

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    }
}

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
    fetchPosts(); // Fetch posts when page loads
    setupBlogForm();
    setupModalClose();
    
    // Expose functions to window object for onclick handlers
    window.showPinModal = showPinModal;
    window.verifyPin = verifyPin;
    window.deletePost = deletePost;
}); 