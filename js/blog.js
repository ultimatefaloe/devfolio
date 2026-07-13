const blogGrid  = document.getElementById('blog-grid');
const loadingEl = document.getElementById('loading');

function renderPosts(posts) {
  blogGrid.innerHTML = posts.slice(0, 9).map(post => `
    <article class="blog-card">
      <span class="blog-card-label">Post #${post.id}</span>
      <h2 class="blog-card-title">${post.title}</h2>
      <p class="blog-card-excerpt">${post.body.slice(0, 120)}...</p>
      <a href="#" class="blog-card-read">Read more &#8594;</a>
    </article>
  `).join('');
}

async function loadBlogPosts() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const posts = await res.json();
    loadingEl.hidden = true;
    blogGrid.classList.remove('hidden');
    renderPosts(posts);
  } catch (err) {
    loadingEl.textContent = '⚠ Could not load posts. Please try again.';
    console.error('Fetch failed:', err);
  }
}

loadBlogPosts();
