const MAX_SEARCH_RESULTS = 8;
const MIN_QUERY_LENGTH = 2;
const NO_MATCH_MESSAGE = 'No match yet. Try Kafka, Terraform or EKS.';

function initializeNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#nav-menu');
  if (!toggle || !menu) return;

  const setOpen = (isOpen) => {
    menu.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
}

function initializeActiveSection() {
  const links = [...document.querySelectorAll('.nav-link[href^="#"]')];
  const linkFor = (id) => links.find((link) => link.getAttribute('href') === `#${id}`);
  const markActive = (entry) => {
    const link = linkFor(entry.target.id);
    if (!link) return;
    links.forEach((other) => other.classList.toggle('is-active', other === link));
  };
  const observer = new IntersectionObserver(
    (entries) => entries.filter((entry) => entry.isIntersecting).forEach(markActive),
    { rootMargin: '-45% 0px -50% 0px' },
  );

  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}

function searchEntry(label, context, anchor) {
  return { label: label.trim(), context: context.trim(), anchor };
}

function collectSkillEntries() {
  return [...document.querySelectorAll('.skill-tile')].flatMap((tile) => {
    const area = tile.querySelector('h3').textContent;
    return [...tile.querySelectorAll('.skill')].map((skill) => searchEntry(skill.textContent, area, '#skills'));
  });
}

function collectTaggedEntries(itemSelector, titleSelector) {
  return [...document.querySelectorAll(itemSelector)].flatMap((item) => {
    const title = item.querySelector(titleSelector).textContent;
    const anchor = `#${item.closest('section[id]').id}`;
    const tags = [...item.querySelectorAll('.tags li')].map((tag) => searchEntry(tag.textContent, title, anchor));
    return [searchEntry(title, 'Open', anchor), ...tags];
  });
}

function buildSearchIndex() {
  return [
    ...collectSkillEntries(),
    ...collectTaggedEntries('.feature', 'h3'),
    ...collectTaggedEntries('.job', '.job-title'),
  ];
}

function findMatches(index, query) {
  const needle = query.trim().toLowerCase();
  const seen = new Set();
  return index
    .filter((entry) => entry.label.toLowerCase().includes(needle) || entry.context.toLowerCase().includes(needle))
    .filter((entry) => {
      const key = `${entry.label}|${entry.context}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, MAX_SEARCH_RESULTS);
}

function renderMatch(entry) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  const context = document.createElement('small');
  link.href = entry.anchor;
  link.textContent = entry.label;
  context.textContent = entry.context;
  link.append(context);
  item.append(link);
  return item;
}

function renderNoMatch() {
  const item = document.createElement('li');
  const message = document.createElement('p');
  message.textContent = NO_MATCH_MESSAGE;
  item.append(message);
  return item;
}

function renderResults(results, matches) {
  const items = matches.length ? matches.map(renderMatch) : [renderNoMatch()];
  results.replaceChildren(...items);
  results.hidden = false;
}

function initializeStackSearch() {
  const form = document.querySelector('[data-stack-search]');
  if (!form) return;
  const input = form.querySelector('input');
  const results = form.querySelector('[data-stack-results]');
  const index = buildSearchIndex();

  const update = () => {
    if (input.value.trim().length < MIN_QUERY_LENGTH) {
      results.hidden = true;
      return;
    }
    renderResults(results, findMatches(index, input.value));
  };

  input.addEventListener('input', update);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const [first] = findMatches(index, input.value);
    window.location.hash = first ? first.anchor : '#skills';
    results.hidden = true;
  });
  results.addEventListener('click', () => {
    results.hidden = true;
  });
  document.addEventListener('click', (event) => {
    if (!form.contains(event.target)) results.hidden = true;
  });
}

function initializeChatWidget() {
  const toggle = document.querySelector('.chat-toggle');
  const panel = document.querySelector('#chat-panel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = panel.hidden;
    panel.hidden = !isOpen;
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || panel.hidden) return;
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  });
}

function initializeReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('.section-head, .offer-card, .feature, .job, .post, .skill-tile, .number');
  const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  targets.forEach((target) => {
    target.classList.add('reveal');
    observer.observe(target);
  });
}

function updateCurrentYear() {
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

initializeNavigation();
initializeActiveSection();
initializeStackSearch();
initializeChatWidget();
initializeReveal();
updateCurrentYear();
