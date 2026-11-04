const EMAIL = 'mntanir@hotmail.com';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const EN = {
  skip: 'Skip to content', navLabel: 'Main menu', homeLabel: 'Metin Nafiz Tanır, back to top', langLabel: 'TR, Türkçeye geç',
  menu: 'Menu', navAbout: 'About', navWork: 'Work', navPattern: 'Guitar', navCv: 'Experience', navContact: 'Contact',
  heroLine: 'I’m a full stack low-code developer in Antalya. At Shark Instruments I build the Shark Guitars site and its 3D guitar configurator.',
  heroCta: 'See my work', say1: 'I write code.', say2: 'I play guitar.', posterAlt: 'A guitar neck on a dark background; the notes of the pentatonic shape in white, the root notes in orange', credits: 'The intro film was made for this site with Remotion. Project images are screenshots of the sites themselves.',
  stageAlt1: 'Me playing an amber flame-top Shark guitar against a dark background',
  clockPre: 'Time in Antalya',
  introH: 'Hi, I’m Nafiz',
  f0: 'Now', f1: 'Role', f1v: 'Application development and management', f2: 'Studied', f2v: 'Computer Engineering, SDU', f3: 'Speaks', f3v: 'Turkish, English',
  intro1: 'I’m a computer engineer. I’ve been at Shark Instruments since 2024.',
  intro2: 'I work on the Shark Guitars online shop and the 3D tool customers use to design their guitar in the browser. I build it low-code in Wappler, on top of Node.js and Express. It runs on AWS, and the 3D part is Babylon.js.',
  intro3: 'A few things I’ve built outside Shark are below. If you have a job or a project to work on together, <a class="link-plain" href="#iletisim">write to me</a>.',
  workH: 'Some of my work',
  m0: '3D design tool and shop · since 2024', m1: 'Marketplace · 2026', m2: 'Wanted ads · 2025', m3: 'Booking app', m4: 'Real estate site · 2026',
  d0: 'The shop for a modular electric guitar whose neck, pickups and analog effects swap out by hand. Customers design their guitar in 3D in the browser and pay through iyzico.',
  d1: 'The seller sets a starting price, a floor and a drop step, and the price comes down over time. The first person to hit “Buy now” gets it at that moment’s price.',
  d2: 'Here the buyer posts the ad. They describe the home or used car they’re after, and sellers come to them.',
  d3: 'An app for finding a barber, dentist, vet and so on by category and booking online. The map runs on Leaflet and OpenStreetMap.',
  d4: 'The website of a real estate office in Yaşamkent, Ankara. It’s WordPress with the Houzez theme, and I develop it locally in Docker.',
  demo: 'Ask me for a demo',
  a0: 'sharkguitars.com home page: a red wooden Shark guitar on black with the headline “Shark Guitar v2.0, built by you”',
  a1: 'azalanfiyat promo video: a bicycle’s price drops from 12,000 TL and the first “Buy now” wins it',
  a2: 'sensoyle.com home page: search across home and vehicle wanted ads and a “Post a free ad” button',
  a3: 'MekanRandevu home page: the headline “From barber to vet, book in seconds”, a business search form and categories',
  a4: 'evingayrimenkul.net home page: a bright living room photo under a real estate headline and London investment offers',
  letterH: 'The guitar side',
  lt1: 'When I’m not coding, I play guitar. At Shark I get both: I write software for a guitar company.',
  lt2: 'I made the fretboard below for this site. Pick a key and a scale, see where the shape falls on the neck, and play it if you want.',
  patternP: 'The dots are your scale’s notes on a guitar neck. Pick a key or scale and they move; “Play the shape” plays the notes in the light orange band, one by one.',
  scaleLabel: 'Scale', keyLabel: 'Key', play: 'Play the shape', cFn: 'shape', cKey: 'key',
  patternH1: 'Same shape, ', patternH2: 'any key',
  cvH: 'Experience', cvNote: '(excluding internship and part-time work)', e0: 'Apr 2024 – now', e1: 'Feb 2023 – Apr 2024', e2: 'Oct 2021 – Jan 2022', e3n: 'Domestic Sales and Marketing Support Engineer', e3: 'Jun – Oct 2021', e4: 'Feb – Jun 2021',
  e5n: 'Java Web Developer, intern', e5s: 'Highways 13th Regional Directorate', e5: 'Jul – Sep 2020',
  e6n: 'Web Developer, part-time', e6s: 'Süleyman Demirel University · radyo.sdu.edu.tr', e6: 'Oct 2017 – Jun 2018',
  eduH: 'Education', edu0: 'BSc Computer Engineering', edu0s: 'Süleyman Demirel University', cert: 'Udemy certificate',
  toolsH: 'What I used where', t1: '3D configurator with Babylon.js', t8: 'Promo videos with Remotion',
  langH: 'Languages', l0: 'Turkish', l0v: 'native', l1: 'English', l1v: 'full professional', l2: 'German', l2v: 'elementary',
  c1: 'Write to me', c2: 'A project, a job offer or just guitar talk, any of it is fine. I’ll reply by email.', msgLabel: 'Your message', sendLabel: 'Open in your email app',
  cNote: 'The arrow opens your email app with this message. Nothing is sent until you send it.', cMail: 'Email', cPlace: 'Location',
  footA: 'Metin Nafiz Tanır, Antalya', top: 'Back to top',
};
const TR = {};
const ATTRS = [['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt']];
$$('[data-i18n]').forEach((el) => { TR[el.dataset.i18n] ??= el.textContent; });
$$('[data-i18n-html]').forEach((el) => { TR[el.dataset.i18nHtml] ??= el.innerHTML; });
ATTRS.forEach(([d, a]) => $$(`[${d}]`).forEach((el) => { TR[el.getAttribute(d)] ??= el.getAttribute(a); }));

let lang = 'tr';
function setLang(next) {
  lang = next;
  const dict = next === 'en' ? EN : TR;
  $$('[data-i18n]').forEach((el) => { const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v; });
  $$('[data-i18n-html]').forEach((el) => { const v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
  ATTRS.forEach(([d, a]) => $$(`[${d}]`).forEach((el) => { const v = dict[el.getAttribute(d)]; if (v != null) el.setAttribute(a, v); }));
  document.documentElement.lang = next;
  const b = $('#lang');
  b.textContent = next === 'en' ? 'TR' : 'EN';
  b.setAttribute('lang', next === 'en' ? 'tr' : 'en');
  $('#msg').placeholder = next === 'en' ? 'Hi Nafiz, …' : 'Merhaba Nafiz, …';
  document.title = next === 'en' ? 'Metin Nafiz Tanır · Full stack low-code developer' : 'Metin Nafiz Tanır · Full stack low-code geliştirici';
  try { localStorage.setItem('lang', next); } catch (e) {}
  fillKeys(); renderNotes(); renderDurations();
  if (window.ScrollTrigger) requestAnimationFrame(() => ScrollTrigger.refresh());
}
$('#lang').addEventListener('click', () => setLang(lang === 'tr' ? 'en' : 'tr'));

const monthIndex = (s) => { const [y, m] = s.split('-').map(Number); return y * 12 + m - 1; };
function spanText(n, long) {
  const y = Math.floor(n / 12), m = n % 12;
  const en = lang === 'en';
  const yw = en ? (long ? (y === 1 ? 'year' : 'years') : (y === 1 ? 'yr' : 'yrs')) : 'yıl';
  const mw = en ? (long ? (m === 1 ? 'month' : 'months') : (m === 1 ? 'mo' : 'mos')) : 'ay';
  const parts = [];
  if (y) parts.push(`${y} ${yw}`);
  if (m || !y) parts.push(`${m} ${mw}`);
  return parts.join(' ');
}
function renderDurations() {
  const d = new Date();
  const now = d.getFullYear() * 12 + d.getMonth();
  const worked = new Set();
  $$('#deneyim .r-d[data-from]').forEach((el) => {
    const from = monthIndex(el.dataset.from);
    const to = el.dataset.to ? monthIndex(el.dataset.to) : now;
    el.textContent = spanText(Math.max(1, to - from + 1), false);
    if (!('intern' in el.dataset) && !('parttime' in el.dataset)) for (let i = from; i <= to; i++) worked.add(i);
  });
  const total = $('#cv-total');
  if (total) total.textContent = lang === 'en' ? `${spanText(worked.size, true)} of experience in total` : `Toplam ${spanText(worked.size, true)} deneyim`;
}
renderDurations();

$('#mail-link').href = `mailto:${EMAIL}`;
$('#mail-link').textContent = EMAIL;
$('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const body = $('#msg').value.trim();
  if (!body) { $('#msg').focus(); return; }
  const subject = lang === 'en' ? 'Hello from your portfolio' : 'Portfolyondan merhaba';
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const clock = $('#clock-t');
const tick = () => { const now = new Date(); clock.textContent = new Intl.DateTimeFormat('tr-TR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Istanbul' }).format(now); clock.dateTime = now.toISOString(); };
tick(); setInterval(tick, 15000);

const NOTES = {
  tr: ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'],
  en: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
};
const SCALES = {
  pmin: { iv: [0, 3, 5, 7, 10], box: [0, 3], tr: 'pentatonik minör', en: 'minor pentatonic' },
  pmaj: { iv: [0, 2, 4, 7, 9], box: [-1, 2], tr: 'pentatonik majör', en: 'major pentatonic' },
  blues: { iv: [0, 3, 5, 6, 7, 10], box: [0, 3], tr: 'blues', en: 'blues' },
  minor: { iv: [0, 2, 3, 5, 7, 8, 10], box: [-1, 3], tr: 'doğal minör', en: 'natural minor' },
  major: { iv: [0, 2, 4, 5, 7, 9, 11], box: [-1, 2], tr: 'majör', en: 'major' },
};
const OPEN = [40, 45, 50, 55, 59, 64];
const FRETS = 15;
const scaleSel = $('#scale');
const keySel = $('#key');
let keyIdx = 9;

function fillKeys() {
  keySel.innerHTML = NOTES[lang].map((n, i) => `<option value="${i}"${i === keyIdx ? ' selected' : ''}>"${n}"</option>`).join('');
  [...scaleSel.options].forEach((o) => { o.textContent = `"${SCALES[o.value][lang]}"`; });
}

const svgNS = 'http://www.w3.org/2000/svg';
const el = (tag, attrs = {}) => { const n = document.createElementNS(svgNS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); return n; };
const board = $('#board');
const C = { wood: '#e9e6e3', fret: '#a39a93', nut: '#17120f', str: '#6b625b', ink: '#17120f', root: '#ff6a1a', rootInk: '#17120f', band: '#ffd6bd', paper: '#ffffff' };
const W = 316, padX = 44, padTop = 36, row = 31;
const H = padTop + row * (FRETS + 0.6);
const sx = (s) => padX + s * ((W - padX * 2) / 5);
const fy = (f) => padTop + (f - 0.5) * row;
const boxStart = () => ((keyIdx - 4) % 12 + 12) % 12;
const box = () => {
  const [a, b] = SCALES[scaleSel.value].box;
  const r = boxStart() + a < 0 ? boxStart() + 12 : boxStart();
  return [r + a, r + b];
};
let band, notesG;

function buildBoard() {
  board.setAttribute('viewBox', `0 0 ${W} ${H}`);
  const x0 = padX - 12, w = W - x0 * 2;
  board.append(el('rect', { x: x0, y: padTop, width: w, height: row * FRETS, fill: C.wood }));
  band = el('rect', { class: 'band', x: x0, y: 0, width: w, height: row * 4, fill: C.band });
  board.append(band);
  for (let f = 1; f <= FRETS; f++) board.append(el('rect', { x: x0, y: padTop + f * row - 1, width: w, height: 2, fill: C.fret }));
  board.append(el('rect', { x: x0, y: padTop - 5, width: w, height: 6, fill: C.nut }));
  [3, 5, 7, 9, 15].forEach((f) => board.append(el('circle', { cx: W / 2, cy: fy(f), r: 5, fill: C.fret })));
  [1.5, 3.5].forEach((s) => board.append(el('circle', { cx: sx(s), cy: fy(12), r: 5, fill: C.fret })));
  for (let s = 0; s < 6; s++) board.append(el('rect', { x: sx(s) - (1.6 - s * 0.18), y: padTop, width: 3.2 - s * 0.36, height: row * FRETS, fill: C.str }));
  const labels = el('g', { 'aria-hidden': 'true' });
  [3, 5, 7, 9, 12, 15].forEach((f) => { const t = el('text', { x: 0, y: fy(f) + 5, 'font-size': 13, fill: C.str, 'font-family': 'Libre Franklin, sans-serif' }); t.textContent = f; labels.append(t); });
  board.append(labels);
  notesG = el('g');
  board.append(notesG);
}

function renderNotes(animate = false) {
  const sc = SCALES[scaleSel.value];
  const deg = (m) => ((m - keyIdx) % 12 + 12) % 12;
  const [lo, hi] = box();
  const top = lo === 0 ? 0 : padTop + (lo - 1) * row;
  const bandH = padTop + hi * row - top;
  band.setAttribute('height', bandH);
  band.style.height = `${bandH}px`;
  band.style.transform = `translateY(${top}px)`;
  notesG.replaceChildren();
  const names = NOTES[lang];
  for (let s = 0; s < 6; s++) for (let f = 0; f <= FRETS; f++) {
    const m = OPEN[s] + f;
    if (!sc.iv.includes(deg(m))) continue;
    const cy = f === 0 ? padTop - 20 : fy(f);
    const g = el('g', { class: 'dot', 'data-m': m, 'data-p': `${s}-${f}` });
    g.append(el('circle', { cx: sx(s), cy, r: 13, fill: deg(m) === 0 ? C.root : C.ink }));
    const t = el('text', { x: sx(s), y: cy + 4.5, 'text-anchor': 'middle', 'font-size': names[m % 12].length > 2 ? 9 : 11, 'font-weight': 600, fill: deg(m) === 0 ? C.rootInk : C.paper, 'font-family': 'Libre Franklin, sans-serif', 'pointer-events': 'none' });
    t.textContent = names[m % 12];
    g.append(t);
    g.addEventListener('pointerdown', () => { pluck(m); ring(g); });
    notesG.append(g);
  }
  if (animate && window.gsap && !reduce) gsap.from(notesG.children, { autoAlpha: 0, scale: 0.6, transformOrigin: '50% 50%', duration: 0.35, stagger: 0.006, ease: 'power2.out' });
  const noteList = sc.iv.map((i) => names[(keyIdx + i) % 12]).join(', ');
  const start = lang === 'en'
    ? `shape starts ${lo === 0 ? 'in open position' : `at fret ${lo}`}`
    : `kalıp ${lo === 0 ? 'boş telden' : `${lo}. perdeden`} başlar`;
  $('#board-cap').textContent = `${names[keyIdx]} ${sc[lang]}: ${noteList} · ${start}`;
}
function setKey(i, animate = true) {
  if (i === keyIdx) return;
  keyIdx = i; keySel.value = String(i); renderNotes(animate);
}
window.Fretboard = { setKey };
function ring(g) { g.classList.remove('is-ringing'); void g.getBBox(); g.classList.add('is-ringing'); setTimeout(() => g.classList.remove('is-ringing'), 160); }

let ac;
function pluck(midi, when = 0) {
  ac ??= new (window.AudioContext || window.webkitAudioContext)();
  if (ac.state === 'suspended') ac.resume();
  const freq = 440 * 2 ** ((midi - 69) / 12);
  const sr = ac.sampleRate, len = Math.floor(sr * 1.6), N = Math.max(2, Math.round(sr / freq));
  const buf = ac.createBuffer(1, len, sr), d = buf.getChannelData(0);
  for (let i = 0; i < N; i++) d[i] = Math.random() * 2 - 1;
  for (let i = N; i < len; i++) d[i] = 0.996 * 0.5 * (d[i - N] + d[i - N + 1]);
  const src = ac.createBufferSource(); src.buffer = buf;
  const g = ac.createGain(); g.gain.value = 0.35;
  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200;
  src.connect(lp).connect(g).connect(ac.destination);
  src.start(ac.currentTime + when);
}
$('#play').addEventListener('click', () => {
  const sc = SCALES[scaleSel.value];
  const [lo, hi] = box();
  const seq = [];
  for (let s = 0; s < 6; s++) for (let f = lo; f <= hi; f++) {
    const m = OPEN[s] + f;
    if (sc.iv.includes(((m - keyIdx) % 12 + 12) % 12) && (!seq.length || m > seq[seq.length - 1].m)) seq.push({ m, p: `${s}-${f}` });
  }
  seq.forEach(({ m, p }, i) => {
    pluck(m, i * 0.16);
    setTimeout(() => { const g = $(`.dot[data-p="${p}"]`, board); if (g) ring(g); }, i * 160);
  });
});
scaleSel.addEventListener('change', () => { window.Fretboard.user = true; renderNotes(true); });
keySel.addEventListener('change', () => { window.Fretboard.user = true; keyIdx = +keySel.value; renderNotes(true); });
buildBoard(); fillKeys(); renderNotes();

(() => {
  const sels = [scaleSel, keySel];
  const code = $('.pattern-code');
  const CLS = { 'sel-cue': 'is-cue', 'sel-hint': 'is-hint', 'sel-flash': 'is-flash' };
  let done = false, seen = false, visible = false, idle = 0;
  const play = (s, cls) => { s.classList.remove('is-cue', 'is-hint', 'is-flash'); void s.offsetWidth; s.classList.add(cls); };
  const each = (fn) => sels.forEach((s, i) => setTimeout(() => fn(s), i * 250));
  sels.forEach((s) => s.addEventListener('animationend', (e) => s.classList.remove(CLS[e.animationName])));
  const stop = () => { if (done) return; done = true; clearInterval(idle); sels.forEach((s) => s.classList.remove('is-hint', 'is-inviting')); };
  sels.forEach((s) => ['pointerdown', 'keydown', 'change'].forEach((t) => s.addEventListener(t, stop)));
  $('#play').addEventListener('click', stop);
  sels.forEach((s) => s.addEventListener('change', () => { if (!reduce) play(s, 'is-flash'); }));
  if (!code || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (!visible || seen) return;
    seen = true;
    if (done) return;
    if (reduce) { sels.forEach((s) => s.classList.add('is-inviting')); return; }
    setTimeout(() => { if (!done) each((s) => play(s, 'is-cue')); }, 450);
    idle = setInterval(() => {
      if (done || !visible || document.hidden) return;
      each((s) => { if (!done && !s.matches(':hover, :focus')) play(s, 'is-hint'); });
    }, 5000);
  }, { threshold: 0.35 }).observe(code);
})();

(() => {
  $$('section, footer').forEach((sec) => $$('[data-reveal]', sec).forEach((n, k) => n.style.setProperty('--d', Math.min(k, 8) * 70)));
  const targets = $$('[data-reveal]');
  if (!('IntersectionObserver' in window)) { targets.forEach((t) => t.classList.add('is-in')); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  targets.forEach((t) => io.observe(t));
  addEventListener('scroll', () => targets.forEach((t) => { if (!t.classList.contains('is-in') && t.getBoundingClientRect().top < innerHeight) t.classList.add('is-in'); }), { passive: true });
  addEventListener('load', () => setTimeout(() => targets.forEach((t) => { const b = t.getBoundingClientRect(); if (b.top < innerHeight && b.bottom > 0) t.classList.add('is-in'); }), 2500));
})();

(() => {
  const html = document.documentElement;
  let on = null;
  const rail = $('.rail');
  const toggle = $('.rail-toggle');
  let railRest = () => {};
  const setOpen = (open) => { const was = rail.classList.contains('is-open'); rail.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); if (open !== was) railRest(); };
  const wide = matchMedia('(min-width: 60em)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const tab = () => !wide.matches || html.classList.contains('is-scrolled');
  const hero = $('.hero');
  const threshold = () => (hero && hero.classList.contains('is-live') ? Math.max(60, hero.offsetTop + hero.offsetHeight - innerHeight - 40) : 60);
  const check = () => { const next = scrollY > threshold(); if (next !== on) { on = next; rail.classList.add('is-switching'); if (!next && wide.matches) setOpen(false); html.classList.toggle('is-scrolled', next); requestAnimationFrame(() => requestAnimationFrame(() => rail.classList.remove('is-switching'))); } };
  addEventListener('resize', check);
  addEventListener('load', () => setTimeout(check, 300));
  addEventListener('scroll', check, { passive: true });
  check();
  let hoverOpenedAt = 0, dwell = 0;
  toggle.addEventListener('click', () => { clearTimeout(dwell); if (performance.now() - hoverOpenedAt < 600) return; setOpen(!rail.classList.contains('is-open')); });
  let raf = 0, closing = 0;
  const ZONE = 360;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cur = { k: 0, out: 0, ty: 0, tilt: 0 }, tgt = { ...cur }, vel = { ...cur };
  let loop = 0, last = null;
  const write = () => {
    const st = toggle.style;
    st.setProperty('--k', cur.k.toFixed(4)); st.setProperty('--out', cur.out.toFixed(4));
    st.setProperty('--ty', `${cur.ty.toFixed(2)}px`); st.setProperty('--tilt', `${cur.tilt.toFixed(2)}deg`);
  };
  const tick = () => {
    let moving = false;
    for (const key in cur) {
      vel[key] = (vel[key] + (tgt[key] - cur[key]) * 0.16) * 0.62;
      cur[key] += vel[key];
      const eps = key === 'k' || key === 'out' ? 0.0005 : 0.01;
      if (Math.abs(tgt[key] - cur[key]) > eps || Math.abs(vel[key]) > eps) moving = true;
      else { cur[key] = tgt[key]; vel[key] = 0; }
    }
    write();
    loop = moving ? requestAnimationFrame(tick) : 0;
  };
  const go = () => { if (!still && !loop) loop = requestAnimationFrame(tick); };
  const rest = () => { Object.assign(tgt, { k: 0, ty: 0, tilt: 0, out: rail.classList.contains('is-open') ? 1 : 0 }); rail.classList.remove('is-near'); go(); };
  railRest = () => (rail.classList.contains('is-open') || !last ? rest() : reach(last));
  function reach(e) {
    last = e;
    if (rail.classList.contains('is-open')) return;
    if (!wide.matches || !fine.matches || !html.classList.contains('is-scrolled')) { rest(); return; }
    const d = innerWidth - e.clientX;
    const k = Math.max(0, Math.min(1, 1 - d / ZONE)) ** 1.4;
    rail.classList.toggle('is-near', k > 0.04);
    if (still) return;
    if (k <= 0) { rest(); return; }
    const box = toggle.getBoundingClientRect();
    const restY = box.top + box.height / 2 - cur.ty;
    tgt.ty = Math.max(-110, Math.min(110, (e.clientY - restY) * 0.45 * k));
    const a = Math.atan2(e.clientY - (restY + tgt.ty), Math.max(1, d)) * 180 / Math.PI;
    tgt.tilt = Math.max(-6, Math.min(6, -a * 0.15)) * k;
    tgt.k = k;
    tgt.out = Math.min(1, k * 2.5);
    go();
  }
  document.addEventListener('pointerleave', () => { if (!rail.classList.contains('is-open')) rest(); });
  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse' || raf) return;
    raf = requestAnimationFrame(() => { raf = 0; reach(e); });
  }, { passive: true });
  toggle.addEventListener('pointerenter', (e) => {
    if (e.pointerType !== 'mouse' || !fine.matches || !tab()) return;
    clearTimeout(closing); clearTimeout(dwell);
    if (rail.classList.contains('is-open')) return;
    dwell = setTimeout(() => { if (!rail.classList.contains('is-open') && toggle.matches(':hover')) { hoverOpenedAt = performance.now(); setOpen(true); } }, 140);
  });
  toggle.addEventListener('pointerleave', () => clearTimeout(dwell));
  rail.addEventListener('pointerenter', () => clearTimeout(closing));
  rail.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse' && fine.matches && tab()) closing = setTimeout(() => setOpen(false), 260); });
  $$('.rail-links a, .rail .wordmark').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && rail.classList.contains('is-open')) { setOpen(false); toggle.focus(); } });
  document.addEventListener('pointerdown', (e) => { if (rail.classList.contains('is-open') && !rail.contains(e.target)) setOpen(false); });
})();

(() => {
  const links = $$('.rail-links a');
  const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.removeAttribute('aria-current'));
    map.get(e.target.id)?.setAttribute('aria-current', 'true');
  }), { rootMargin: '-45% 0px -50% 0px' });
  ['hakkimda', 'isler', 'kod-gitar', 'desen', 'deneyim', 'iletisim'].forEach((id) => { const n = document.getElementById(id); if (n) io.observe(n); });
  map.set('kod-gitar', map.get('desen'));
})();

(() => {
  const work = $('#isler');
  if (!work) return;
  const wake = () => {
    $$('img[loading="lazy"]', work).forEach((i) => { i.loading = 'eager'; });
    $$('video[data-src]', work).forEach((v) => {
      const go = !v.paused || (v.closest('.panel.is-current') && work.classList.contains('is-live'));
      v.poster = v.dataset.poster;
      v.preload = 'metadata';
      v.src = v.dataset.src;
      v.removeAttribute('data-src');
      if (go) v.play().catch(() => {});
    });
  };
  if (!('IntersectionObserver' in window)) { wake(); return; }
  const io = new IntersectionObserver((es) => {
    if (!es.some((e) => e.isIntersecting)) return;
    io.disconnect();
    wake();
  }, { rootMargin: '100% 0px' });
  io.observe(work);
})();

if (document.documentElement.dataset.pending === 'en') setLang('en');
