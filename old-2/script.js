import config from './config.js';

let isAuthenticated = false;

// Initialize blog posts from localStorage or use default posts
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [
    {
        date: 'January 5, 2025',
        title: 'New Resume',
        content: 'Not going to do much today, I am still nervous about starting my internship tomorrow, but I am looking forward to it! Going to take today as a rest day, and know more on what I have to do tommorrow!',
        tags: ['Internship']
    },
    {
        date: 'January 4, 2025',
        title: 'Mutliple Resume',
        content: 'I had worked on my resume today, trying to get it ready for this upcoming year as I know have an internship, since I now I have mutliple internships, I decided to make different resumes for each job type I can get, to make myself a more well rounded person!',
        tags: ['Resume']
    }
];

// Save posts to localStorage
function savePosts() {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

// Display blog posts
function displayPosts() {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '';
    
    blogPosts.forEach((post, index) => {
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
                    <button class="btn" onclick="deletePost(${index})">Delete</button>
                </div>
            ` : ''}
        `;
        container.appendChild(article);
    });

    // Update management button text based on authentication
    const managementBtn = document.querySelector('.management-btn');
    if (isAuthenticated) {
        managementBtn.textContent = 'Add New Post';
        managementBtn.onclick = () => document.getElementById('addPostModal').style.display = 'block';
    } else {
        managementBtn.textContent = 'Manage Posts';
        managementBtn.onclick = showPinModal;
    }
}

// Show PIN modal
window.showPinModal = function() {
    document.getElementById('pinModal').style.display = 'block';
}

// Verify PIN
window.verifyPin = function() {
    const pinInput = document.getElementById('pinInput');
    if (pinInput.value === config.PIN) {
        isAuthenticated = true;
        document.getElementById('pinModal').style.display = 'none';
        pinInput.value = '';
        displayPosts(); // Refresh display to show management options
    } else {
        alert('Incorrect PIN');
        pinInput.value = '';
    }
}

// Add new blog post
document.getElementById('blogPostForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newPost = {
        date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }),
        title: document.getElementById('postTitle').value,
        content: document.getElementById('postContent').value,
        tags: document.getElementById('postTags').value
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag)
    };

    blogPosts.unshift(newPost);
    savePosts();
    displayPosts();
    
    // Reset form and close modal
    this.reset();
    document.getElementById('addPostModal').style.display = 'none';
});

// Delete blog post
window.deletePost = function(index) {
    if (confirm('Are you sure you want to delete this post?')) {
        blogPosts.splice(index, 1);
        savePosts();
        displayPosts();
    }
}

// Close modals when clicking the X
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

// Initial display of posts
document.addEventListener('DOMContentLoaded', function() {
    displayPosts();
}); 