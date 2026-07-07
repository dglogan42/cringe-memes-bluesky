import {
  GITHUB_PROJECTS,
  PROJECT_CATEGORIES,
  PROJECT_CATEGORY_MAP,
} from './projects.js';

const BSKY_ACTOR = 'adhdloganberry.bsky.social';
const BSKY_API = 'https://public.api.bsky.app/xrpc';
const GITHUB_USER = 'dglogan42';

const TEMPLATES = [
  {
    id: 'nobody',
    name: 'Nobody: / Me:',
    top: 'NOBODY:',
    bottom: 'me @ fanvueofficial about bot accounts:',
    bg: 'bots',
  },
  {
    id: 'surprised',
    name: 'Are You Honestly Suprised?',
    top: 'POLITICIANS AT FIFA GAMES',
    bottom: 'are you honestly suprised?',
    bg: 'fifa',
  },
  {
    id: 'pandemic',
    name: 'Pandemic Confession',
    top: 'HEADS UP',
    bottom: "i didn't stop eating out my friends during the pandemic",
    bg: 'pandemic',
  },
  {
    id: 'claude',
    name: 'AI Novel Writer',
    top: 'APPLYING @claudeai NOVEL WRITING SKILLS',
    bottom: 'to create literature. feedback sought.',
    bg: 'ai',
  },
  {
    id: 'adhd',
    name: 'ADHD Brain',
    top: 'MY ADHD BRAIN AT 3AM:',
    bottom: 'what if loganberries had anxiety',
    bg: 'adhd',
  },
  {
    id: 'podcast',
    name: 'First Podcast Episode',
    top: 'LISTEN TO MY PODCAST',
    bottom: 'open.spotify.com/episode/4VNf... (my first one!!)',
    bg: 'podcast',
  },
  {
    id: 'stream',
    name: 'Going Live',
    top: '🔴 GOING LIVE ON RESTREAM',
    bottom: 'multistreaming my cringe to the masses',
    bg: 'stream',
  },
  {
    id: 'loganberry',
    name: 'Loganberry Gang',
    top: '🫐 LOGANBERRY GANG RISE UP 🫐',
    bottom: '@adhdloganberry.bsky.social',
    bg: 'berry',
  },
  {
    id: 'liveLaugh',
    name: 'Live Laugh Love',
    top: 'LIVE • LAUGH • LOGANBERRY',
    bottom: 'bots > humans (allegedly)',
    bg: 'liveLaugh',
  },
  {
    id: 'minion',
    name: 'Minion Energy',
    top: 'LOGANBERRIES BE LIKE',
    bottom: '✨ exists ✨',
    bg: 'minion',
  },
];

const CRINGE_EMOJIS = ['✨', '🔥', '💯', '🦋', '🫐', '👀', '😬', '🤪', '💀', '🙏', '⚡', '🎉'];
const CRINGE_PHRASES = [
  'no cap fr fr',
  'its giving cringe',
  'main character energy',
  'rent free in my head',
  'touch grass (but make it loganberry)',
  'this is so real',
  'literally me',
  'i cant even',
  'bestie what',
  'slay but also yikes',
];

const $ = (sel) => document.querySelector(sel);

const canvas = $('#meme-canvas');
const ctx = canvas.getContext('2d');

let profile = null;
let feedPosts = [];
let avatarImg = null;
let activeProject = null;
let projectFilter = 'all';

function init() {
  populateTemplates();
  renderProjectFilters();
  renderProjectsGrid();
  bindEvents();
  loadProfile();
  loadFeed();
  renderMeme();
  $('#project-count').textContent = String(GITHUB_PROJECTS.length);
}

function populateTemplates() {
  const select = $('#template-select');
  TEMPLATES.forEach((t, i) => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.textContent = t.name;
    if (i === 0) opt.selected = true;
    select.appendChild(opt);
  });
}

function bindEvents() {
  $('#template-select').addEventListener('change', onTemplateChange);
  $('#top-text').addEventListener('input', renderMeme);
  $('#bottom-text').addEventListener('input', renderMeme);
  $('#cringe-level').addEventListener('input', onCringeChange);
  $('#sparkles').addEventListener('change', renderMeme);
  $('#wordart').addEventListener('change', renderMeme);
  $('#comic-sans').addEventListener('change', renderMeme);
  $('#generate-btn').addEventListener('click', randomizeCringe);
  $('#feed-btn').addEventListener('click', pullFromFeed);
  $('#project-meme-btn').addEventListener('click', memeRandomProject);
  $('#download-btn').addEventListener('click', downloadMeme);
  $('#copy-btn').addEventListener('click', copyCaption);
}

function renderProjectFilters() {
  const wrap = $('#project-filters');
  wrap.innerHTML = '';
  PROJECT_CATEGORIES.forEach((cat) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `project-filter${cat.id === projectFilter ? ' active' : ''}`;
    btn.textContent = cat.label;
    btn.addEventListener('click', () => {
      projectFilter = cat.id;
      renderProjectFilters();
      renderProjectsGrid();
    });
    wrap.appendChild(btn);
  });
}

function getFilteredProjects() {
  if (projectFilter === 'all') return GITHUB_PROJECTS;
  return GITHUB_PROJECTS.filter(
    (p) => PROJECT_CATEGORY_MAP[p.id] === projectFilter
  );
}

function renderProjectsGrid() {
  const grid = $('#projects-grid');
  grid.innerHTML = '';
  getFilteredProjects().forEach((project) => {
    const card = document.createElement('article');
    card.className = `project-card${activeProject?.id === project.id ? ' active' : ''}`;
    card.innerHTML = `
      <div class="project-card-top">
        <span class="project-emoji">${project.emoji}</span>
        <div>
          <h3>${escapeHtml(project.name)}</h3>
          <p class="project-repo">${escapeHtml(project.repo)}</p>
        </div>
      </div>
      <p class="project-tagline">${escapeHtml(project.tagline)}</p>
      <div class="project-actions">
        <button type="button" class="project-meme-btn">Meme this repo</button>
        <a href="${project.url}" target="_blank" rel="noopener" class="project-github-link">GitHub ↗</a>
      </div>
    `;
    card.querySelector('.project-meme-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      useProjectAsMeme(project);
    });
    card.addEventListener('click', () => useProjectAsMeme(project));
    grid.appendChild(card);
  });
}

function useProjectAsMeme(project) {
  activeProject = project;
  $('#top-text').value = project.memeTop;
  $('#bottom-text').value = project.memeBottom;

  const template = TEMPLATES.find((t) => t.bg === project.bg);
  if (template) {
    $('#template-select').value = template.id;
  } else {
    $('#template-select').value = 'loganberry';
  }

  renderProjectsGrid();
  randomizeCringeExtras();
  renderMeme();
  document.querySelector('.preview')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function memeRandomProject() {
  const pool = getFilteredProjects();
  const project = pool[Math.floor(Math.random() * pool.length)];
  useProjectAsMeme(project);
}

function onTemplateChange() {
  const id = $('#template-select').value;
  const t = TEMPLATES.find((x) => x.id === id);
  if (t) {
    $('#top-text').value = t.top;
    $('#bottom-text').value = t.bottom;
  }
  renderMeme();
}

function onCringeChange() {
  const val = $('#cringe-level').value;
  $('#cringe-output').textContent = `${val}/10`;
  $('#meter-fill').style.width = `${val * 10}%`;
  renderMeme();
}

async function loadProfile() {
  try {
    const res = await fetch(`${BSKY_API}/app.bsky.actor.getProfile?actor=${BSKY_ACTOR}`);
    if (!res.ok) throw new Error('profile fetch failed');
    profile = await res.json();
    renderProfileCard();
    if (profile.avatar) {
      avatarImg = await loadImage(profile.avatar);
      renderMeme();
    }
  } catch {
    $('#profile-card').innerHTML = '<p>could not load profile (api moment)</p>';
  }
}

function renderProfileCard() {
  if (!profile) return;
  const card = $('#profile-card');
  card.classList.add('loaded');
  card.innerHTML = `
    <div class="profile-inner">
      <img class="profile-avatar" src="${profile.avatar}" alt="${profile.displayName}" crossorigin="anonymous" />
      <div class="profile-info">
        <h3>${escapeHtml(profile.displayName || profile.handle)}</h3>
        <p>@${profile.handle}</p>
        <div class="profile-stats">
          <span>${profile.followersCount ?? 0} followers</span>
          <span>${profile.postsCount ?? 0} posts</span>
        </div>
      </div>
    </div>
  `;
}

async function loadFeed() {
  try {
    const res = await fetch(
      `${BSKY_API}/app.bsky.feed.getAuthorFeed?actor=${BSKY_ACTOR}&limit=15`
    );
    if (!res.ok) throw new Error('feed fetch failed');
    const data = await res.json();
    feedPosts = data.feed
      .map((item) => item.post?.record?.text)
      .filter(Boolean);
    renderPostList();
  } catch {
    $('#post-list').innerHTML = '<li>feed unavailable. vibes still cringe.</li>';
  }
}

function renderPostList() {
  const list = $('#post-list');
  list.innerHTML = '';
  feedPosts.forEach((text, i) => {
    const li = document.createElement('li');
    li.textContent = truncate(text, 100);
    li.title = text;
    li.addEventListener('click', () => usePostAsMeme(text, i));
    list.appendChild(li);
  });
}

function usePostAsMeme(text, index) {
  const words = text.split(/\s+/);
  const mid = Math.ceil(words.length / 2);
  $('#top-text').value = truncate(words.slice(0, mid).join(' '), 80).toUpperCase();
  $('#bottom-text').value = truncate(words.slice(mid).join(' '), 80);
  $('#template-select').value = 'loganberry';
  renderMeme();
}

function pullFromFeed() {
  if (!feedPosts.length) return;
  const post = feedPosts[Math.floor(Math.random() * feedPosts.length)];
  usePostAsMeme(post, 0);
  randomizeCringeExtras();
  renderMeme();
}

function randomizeCringe() {
  const t = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
  $('#template-select').value = t.id;
  $('#top-text').value = t.top;
  $('#bottom-text').value = t.bottom;
  $('#cringe-level').value = Math.floor(Math.random() * 4) + 7;
  onCringeChange();
  randomizeCringeExtras();
  renderMeme();
}

function randomizeCringeExtras() {
  $('#sparkles').checked = Math.random() > 0.2;
  $('#wordart').checked = Math.random() > 0.3;
  $('#comic-sans').checked = Math.random() > 0.25;
}

function getSettings() {
  const template = TEMPLATES.find((t) => t.id === $('#template-select').value) || TEMPLATES[0];
  return {
    top: $('#top-text').value || template.top,
    bottom: $('#bottom-text').value || template.bottom,
    cringe: parseInt($('#cringe-level').value, 10),
    sparkles: $('#sparkles').checked,
    wordart: $('#wordart').checked,
    comicSans: $('#comic-sans').checked,
    bg: template.bg,
  };
}

function renderMeme() {
  const s = getSettings();
  const w = canvas.width;
  const h = canvas.height;

  drawBackground(s, w, h);

  if (avatarImg && s.cringe >= 5) {
    drawAvatarDecoration(avatarImg, w, h, s.cringe);
  }

  if (s.sparkles) {
    drawSparkles(w, h, s.cringe * 3);
  }

  const topFont = s.wordart ? 'Impact' : 'Arial Black';
  const bottomFont = s.comicSans ? 'Comic Sans MS' : 'Impact';

  drawMemeText(s.top, w / 2, 50, w - 40, topFont, 48, s.wordart, s.cringe);
  drawMemeText(s.bottom, w / 2, h - 30, w - 40, bottomFont, 42, false, s.cringe);

  if (s.cringe >= 6) {
    drawWatermark(w, h);
  }

  if (s.cringe >= 8) {
    drawEmojiBarrage(w, h);
  }

  updateCaptionPreview(s);
}

function drawBackground(s, w, h) {
  const gradients = {
    bots: ['#1a0a2e', '#ff00aa', '#0085ff'],
    fifa: ['#0a1628', '#ff0000', '#ffffff'],
    pandemic: ['#2d1b00', '#ff6600', '#39ff14'],
    ai: ['#0a1628', '#9b30ff', '#00ffff'],
    adhd: ['#ff00aa', '#ffe600', '#39ff14'],
    podcast: ['#1db954', '#191414', '#ff00aa'],
    stream: ['#ff0000', '#1a0a2e', '#ff6600'],
    berry: ['#4a0e4e', '#8b008b', '#ff69b4'],
    liveLaugh: ['#ff69b4', '#87ceeb', '#ffe600'],
    minion: ['#ffe600', '#0085ff', '#ff6600'],
  };

  const colors = gradients[s.bg] || gradients.berry;
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, colors[0]);
  g.addColorStop(0.5, colors[1]);
  g.addColorStop(1, colors[2]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  if (s.cringe >= 4) {
    ctx.globalAlpha = 0.15;
    for (let i = 0; i < s.cringe; i++) {
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 60%)`;
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 30 + Math.random() * 80, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.fillRect(0, 0, w, 100);
  ctx.fillRect(0, h - 120, w, 120);
}

function drawAvatarDecoration(img, w, h, cringe) {
  const size = 80 + cringe * 5;
  const x = w - size - 20;
  const y = h / 2 - size / 2;

  ctx.save();
  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(img, x, y, size, size);
  ctx.restore();

  ctx.strokeStyle = '#ffe600';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
  ctx.stroke();
}

function drawSparkles(w, h, count) {
  ctx.font = '24px serif';
  for (let i = 0; i < count; i++) {
    ctx.fillStyle = `hsla(${Math.random() * 60 + 40}, 100%, 70%, 0.8)`;
    ctx.fillText('✨', Math.random() * w, Math.random() * h);
  }
}

function drawMemeText(text, x, y, maxWidth, fontFamily, baseSize, wordart, cringe) {
  if (!text) return;

  let size = baseSize;
  ctx.font = `bold ${size}px ${fontFamily}, sans-serif`;
  while (ctx.measureText(text).width > maxWidth && size > 16) {
    size -= 2;
    ctx.font = `bold ${size}px ${fontFamily}, sans-serif`;
  }

  ctx.textAlign = 'center';
  ctx.textBaseline = y < canvas.height / 2 ? 'top' : 'bottom';

  if (wordart) {
    const grad = ctx.createLinearGradient(x - maxWidth / 2, y, x + maxWidth / 2, y + size);
    grad.addColorStop(0, '#ffe600');
    grad.addColorStop(0.3, '#ff6600');
    grad.addColorStop(0.6, '#ff00aa');
    grad.addColorStop(1, '#9b30ff');
    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = '#fff';
  }

  ctx.strokeStyle = '#000';
  ctx.lineWidth = Math.min(cringe, 8);
  ctx.lineJoin = 'round';
  ctx.miterLimit = 2;
  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
}

function drawWatermark(w, h) {
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.font = 'bold 14px Comic Sans MS, cursive';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'right';
  const stamp = activeProject
    ? `🗑️ ${activeProject.repo}`
    : '🦋 @adhdloganberry.bsky.social';
  ctx.fillText(truncate(stamp, 42), w - 15, h - 130);
  ctx.restore();
}

function drawEmojiBarrage(w, h) {
  ctx.font = '28px serif';
  const positions = [
    [30, h / 2],
    [w - 50, 120],
    [60, h - 150],
    [w - 80, h / 2 + 40],
  ];
  positions.forEach(([x, y], i) => {
    ctx.fillText(CRINGE_EMOJIS[i % CRINGE_EMOJIS.length], x, y);
  });
}

function updateCaptionPreview(s) {
  const phrase = CRINGE_PHRASES[Math.floor(Math.random() * CRINGE_PHRASES.length)];
  const emoji = CRINGE_EMOJIS.slice(0, Math.min(s.cringe, 5)).join('');
  const projectLine = activeProject
    ? `\n\n🗑️ stupid project: ${activeProject.name}\n${activeProject.url}`
    : '';
  const caption = `${emoji} ${s.top} / ${s.bottom} ${emoji}\n\n${phrase}${projectLine}\n\n#bluesky #cringe #adhdloganberry #github`;
  $('#caption-preview').textContent = caption;

  const shareParts = [s.top, s.bottom];
  if (activeProject) shareParts.push(`${activeProject.emoji} ${activeProject.url}`);
  shareParts.push('🦋');
  const shareText = encodeURIComponent(truncate(shareParts.join(' — '), 280));
  $('#bsky-share').href = `https://bsky.app/intent/compose?text=${shareText}`;
}

function downloadMeme() {
  const link = document.createElement('a');
  const slug = activeProject?.id || 'cringe';
  link.download = `cringe-meme-${slug}-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

async function copyCaption() {
  const text = $('#caption-preview').textContent;
  try {
    await navigator.clipboard.writeText(text);
    const btn = $('#copy-btn');
    const orig = btn.textContent;
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = orig; }, 1500);
  } catch {
    alert('copy failed — select the caption manually');
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function truncate(str, len) {
  if (str.length <= len) return str;
  return str.slice(0, len - 3) + '...';
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

init();