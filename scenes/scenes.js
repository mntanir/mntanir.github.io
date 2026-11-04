(() => {
  const S = window.Scenes = window.Scenes || {};
  const $ = (s, r = document) => r.querySelector(s);

  const SURE = 5.0;
  const NOKTA = [1.4, 2.05, 3.4, 4.25, 5.0];
  const ESIK = [0, 0.1, 0.32, 0.6, 0.85];
  function film(root) {
    const ileri = $('.hero-video', root), geri = $('.hero-video-ters', root);
    for (const v of [ileri, geri]) { v.muted = true; v.playsInline = true; }
    const stage = ileri.parentElement;
    let name = '', target = NOKTA[0], raf = 0, active = ileri, token = 0, want = false, geriName = '';
    const pick = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = stage.clientWidth * dpr, h = stage.clientHeight * dpr;
      const dikey = w / Math.max(1, h) < 0.9;
      const need = dikey ? Math.min(w, h * 9 / 16) : Math.min(w, h * 16 / 9);
      return dikey ? (need > 760 ? 'dikey-1080' : 'dikey-720') : (need > 1700 ? 'yatay-2560' : 'yatay-1600');
    };
    const pos = () => (active === ileri ? ileri.currentTime : SURE - geri.currentTime);
    const show = (v) => { active = v; ileri.classList.toggle('is-off', v !== ileri); geri.classList.toggle('is-off', v !== geri); };
    const seekTo = (v, t) => new Promise((res) => {
      if (Math.abs(v.currentTime - t) < 0.005) { res(); return; }
      v.addEventListener('seeked', () => res(), { once: true });
      v.currentTime = t;
    });
    const load = () => {
      const next = pick();
      if (next === name) return;
      const t = pos();
      name = next;
      ileri.poster = geri.poster = `assets/film/start-${next.split('-')[0]}.webp`;
      ileri.src = `assets/film/${next}.mp4`;
      ileri.addEventListener('loadedmetadata', () => { show(ileri); fetchGeri(); seekTo(ileri, t).then(run); }, { once: true });
    };
    const fetchGeri = () => {
      if (!want || !name || geriName === name || active === geri) return;
      geriName = name;
      geri.preload = 'auto';
      geri.src = `assets/film/${name}-ters.mp4`;
    };
    const wake = ['scroll', 'wheel', 'touchstart', 'keydown', 'pointerdown'];
    const begin = () => {
      if (want) return;
      want = true;
      for (const e of wake) removeEventListener(e, begin, true);
      fetchGeri();
    };
    for (const e of wake) addEventListener(e, begin, { capture: true, passive: true });
    const later = () => setTimeout(() => ('requestIdleCallback' in window ? requestIdleCallback(begin, { timeout: 2000 }) : begin()), 4000);
    if (document.readyState === 'complete') later(); else addEventListener('load', later, { once: true });
    const stop = () => { cancelAnimationFrame(raf); raf = 0; ileri.pause(); geri.pause(); };
    const playUntil = (v, end, rate) => {
      v.playbackRate = rate;
      v.play().catch(() => {});
      const watch = () => { if (v.currentTime >= end - 0.015 || v.ended) { v.pause(); raf = 0; return; } raf = requestAnimationFrame(watch); };
      raf = requestAnimationFrame(watch);
    };
    async function run() {
      stop();
      const my = ++token;
      const now = pos();
      const d = target - now;
      if (Math.abs(d) < 0.02) return;
      const rate = Math.min(2.5, Math.max(1, Math.abs(d) / 1.1));
      if (d > 0) {
        if (active !== ileri) { await seekTo(ileri, now); if (my !== token) return; show(ileri); }
        playUntil(ileri, target, rate);
      } else if (geri.readyState >= 2) {
        if (active !== geri) { await seekTo(geri, SURE - now); if (my !== token) return; show(geri); }
        playUntil(geri, SURE - target, rate);
      } else {
        await seekTo(ileri, target);
      }
    }
    load();
    addEventListener('resize', load);
    ileri.addEventListener('canplay', () => run(), { once: true });
    return {
      seek(p) {
        let i = 0; for (let k = 0; k < ESIK.length; k++) if (p >= ESIK[k]) i = k;
        if (NOKTA[i] === target) return;
        begin();
        target = NOKTA[i]; run();
      },
    };
  }

  S.hero = (root, o = {}) => Stage.scene(root, {
    hold: o.hold ?? 3,
    scrub: true,
    build(tl, { q }) {
      const f = root.__film || (root.__film = film(root));
      const sync = () => { if (!ScrollTrigger.isRefreshing && !Stage.shifting) f.seek(tl.progress()); };
      tl.eventCallback('onUpdate', sync);
      root.__filmSync = sync;
      if (!root.__filmSyncOn) {
        root.__filmSyncOn = true;
        ScrollTrigger.addEventListener('refresh', () => { if (root.classList.contains('is-live')) root.__filmSync(); });
      }
      tl.to(q('.hero-h'), { y: -40, autoAlpha: 0, duration: 0.1, ease: 'power1.in' }, 0.01)
        .to(q('.hero-foot'), { y: 30, autoAlpha: 0, duration: 0.08, ease: 'power1.in' }, 0.01)
        .fromTo(q('.say-a'), { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.1)
        .to(q('.say-a'), { autoAlpha: 0, y: -20, duration: 0.06, ease: 'power1.in' }, 0.54)
        .fromTo(q('.say-b'), { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.6)
        .to(q('.say-b'), { autoAlpha: 0, y: -20, duration: 0.06, ease: 'power1.in' }, 0.82);
    },
  });

  S.track = (root, o = {}) => Stage.scene(root, {
    hold: o.hold ?? 4,
    scrub: true,
    phone: 'rest',
    build(tl, { q }) {
      const track = q('.track')[0];
      const panels = q('.panel');
      const count = $('#wc');
      const video = $('video', root);
      const n = panels.length;
      let last = -1;
      panels.forEach((p, k) => p.classList.toggle('is-current', k === 0));
      const inset = () => parseFloat(getComputedStyle(track).paddingLeft) + 3.5 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
      const end = () => {
        const right = panels[n - 1].getBoundingClientRect().right - track.getBoundingClientRect().left;
        return -Math.max(0, right + inset() - root.clientWidth);
      };
      const stopX = (i) => {
        const max = end();
        if (i >= n - 1) return max;
        const left = panels[i].getBoundingClientRect().left - track.getBoundingClientRect().left - parseFloat(getComputedStyle(track).paddingLeft);
        return Math.max(max, -Math.max(0, left));
      };
      const step = 1 / Math.max(1, n - 1);
      for (let k = 0; k < n - 1; k++) {
        tl.fromTo(track, { x: () => stopX(k) }, { x: () => stopX(k + 1), duration: step, ease: 'none', immediateRender: k === 0 }, k * step);
      }
      panels.forEach((p, i) => {
        if (!i) return;
        tl.fromTo($('.panel-fig > *', p), { scale: 1.05 }, { scale: 1, duration: step, ease: 'none' }, (i - 1) * step);
      });
      const sync = () => {
        const i = Math.min(n - 1, Math.round(tl.progress() * (n - 1)));
        const b = $('.panel-text', panels[i]).getBoundingClientRect();
        const out = b.left < parseFloat(getComputedStyle(track).paddingLeft) - 0.5 || b.right > root.clientWidth - inset() + 0.5;
        panels.forEach((p, k) => p.classList.toggle('is-clipped', k === i && out));
        if (i === last) return;
        last = i;
        count.textContent = String(i + 1);
        panels.forEach((p, k) => p.classList.toggle('is-current', k === i));
        if (video) (i === 1 ? video.play().catch(() => {}) : video.pause());
      };
      tl.eventCallback('onUpdate', sync);
      root.__trackSync = sync;
      if (!root.__trackSyncOn) {
        root.__trackSyncOn = true;
        ScrollTrigger.addEventListener('refresh', () => { if (root.classList.contains('is-live')) root.__trackSync(); });
      }
    },
    rest() {
      root.querySelectorAll('.panel').forEach((p) => p.classList.add('is-current'));
      const video = $('video', root);
      if (!video || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      new IntersectionObserver(([e]) => (e.isIntersecting ? video.play().catch(() => {}) : video.pause()), { threshold: 0.5 }).observe(video);
    },
  });

  if (window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.from('.hero-line, .hero .button', { y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.09, delay: 0.5 });
  }

  Stage.smooth();
  Stage.init();
})();
