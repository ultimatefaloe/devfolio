const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio',
    desc: 'A responsive portfolio site built with HTML, CSS & JS.',
    emoji: '💼',
    color: '#1a2744',
    tags: ['html', 'css', 'js'],
    category: 'html',
    live: '#',
    github: 'https://github.com'
  },
  {
    id: 2,
    title: 'Quiz App',
    desc: 'An interactive multiple-choice quiz using vanilla JS.',
    emoji: '🧠',
    color: '#1a2035',
    tags: ['js', 'css'],
    category: 'js',
    live: '#',
    github: 'https://github.com'
  },
  {
    id: 3,
    title: 'Blog Page',
    desc: 'A blog page that renders posts from a public API via Fetch.',
    emoji: '📝',
    color: '#1a2744',
    tags: ['js', 'fetch'],
    category: 'js',
    live: '#',
    github: 'https://github.com'
  },
  {
    id: 4,
    title: 'Landing Page',
    desc: 'A product landing page with CSS animations and flexbox layout.',
    emoji: '🚀',
    color: '#1a2035',
    tags: ['html', 'css'],
    category: 'html',
    live: '#',
    github: 'https://github.com'
  }
];

function renderProjects(list) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = list.map(p => `
    <article class="project-card">
      <div class="project-card-thumb" style="background:${p.color}">
        ${p.emoji}
      </div>
      <div class="project-card-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.live}" target="_blank" rel="noopener">Live &#8594;</a>
          <a href="${p.github}" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </article>
  `).join('');
}

// Filter bar — event delegation
document.getElementById('filter-bar')?.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const filter   = btn.dataset.filter;
  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  renderProjects(filtered);
});

renderProjects(PROJECTS);
