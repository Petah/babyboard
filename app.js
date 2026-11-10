(() => {
  const ITEMS = window.ITEMS;
  const FALLBACK = window.FALLBACK_ITEMS;

  const body = document.body;
  const stage = document.getElementById('stage');
  const picture = document.getElementById('picture');
  const word = document.getElementById('word');

  let audioCtx = null;
  let currentAudio = null;
  let lastShownAt = 0;
  const MIN_GAP_MS = 150; // stop key-mashing from strobing the screen

  // ---------- start / fullscreen ----------

  async function start() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    body.classList.add('started');
    await enterFullscreen();
  }

  async function enterFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement && el.requestFullscreen) {
      try { await el.requestFullscreen({ navigationUI: 'hide' }); } catch { /* user denied */ }
    }
    // Chrome/Edge: capture Esc and other system keys while fullscreen.
    // Esc then only exits when held down, so a toddler tapping it stays in.
    if (document.fullscreenElement && navigator.keyboard && navigator.keyboard.lock) {
      try { await navigator.keyboard.lock(); } catch { /* unsupported */ }
    }
  }

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      // Left fullscreen: show the start screen again so a grown-up can re-enter.
      body.classList.remove('started');
    }
  });

  // ---------- media ----------

  function pickItem(key) {
    const k = key.length === 1 ? key.toLowerCase() : null;
    if (k && ITEMS[k]) return { key: k, ...ITEMS[k] };
    return { key: null, ...FALLBACK[Math.floor(Math.random() * FALLBACK.length)] };
  }

  function show(item) {
    stage.style.backgroundColor = item.color;

    picture.className = '';
    picture.textContent = '';
    let inner;
    if (item.image) {
      inner = new Image();
      inner.src = item.image;
      inner.alt = item.word;
    } else {
      inner = document.createElement('span');
      inner.textContent = item.emoji;
      if (/^\d$/.test(item.emoji)) picture.classList.add('digit');
    }
    inner.classList.add('wiggle');
    picture.appendChild(inner);

    word.innerHTML = '';
    if (item.key && /[a-z]/.test(item.key)) {
      const letter = document.createElement('span');
      letter.className = 'letter';
      letter.textContent = item.key.toUpperCase() + item.key + '  ';
      word.appendChild(letter);
    }
    word.appendChild(document.createTextNode(item.word));

    // restart animations
    void picture.offsetWidth;
    picture.classList.add('pop');
    word.classList.remove('pop');
    void word.offsetWidth;
    word.classList.add('pop');
  }

  // The spoken word ("T is for Truck!") plays first, then the effect (e.g. a truck horn).
  function play(item) {
    stopSounds();
    const effect = () => { if (item.effect) playFile(item.effect, () => {}); };
    if (item.sound) playFile(item.sound, () => { placeholderSound(item); }, effect);
    else placeholderSound(item);
  }

  function playFile(src, onFail, onEnded) {
    const audio = new Audio(src);
    currentAudio = audio;
    if (onEnded) audio.addEventListener('ended', () => { if (currentAudio === audio) onEnded(); });
    audio.play().catch(() => { if (currentAudio === audio) onFail(); });
  }

  function stopSounds() {
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }

  // Placeholder: a short cheerful arpeggio, then the word spoken aloud.
  function placeholderSound(item) {
    chime(item.word);
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(item.word);
      u.rate = 0.85;
      u.pitch = 1.3;
      setTimeout(() => speechSynthesis.speak(u), 280);
    }
  }

  // Pentatonic notes so every combination sounds pleasant.
  const SCALE = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];

  function chime(seedText) {
    if (!audioCtx) return;
    let seed = 0;
    for (const ch of seedText) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
    const now = audioCtx.currentTime;
    for (let i = 0; i < 3; i++) {
      const freq = SCALE[(seed + i * 2) % SCALE.length];
      const t = now + i * 0.08;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.4);
    }
  }

  // ---------- input ----------

  function trigger(key) {
    const now = performance.now();
    if (now - lastShownAt < MIN_GAP_MS) return;
    lastShownAt = now;
    const item = pickItem(key);
    show(item);
    play(item);
  }

  // Set on per-letter pages (/t-is-for-truck/): a click there starts with that letter.
  const startKey = body.dataset.start || '';
  const onLink = (e) => !body.classList.contains('started') && e.target.closest && e.target.closest('a');

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && onLink(e)) return;
    // Don't block Esc so a grown-up can always get out
    // (with keyboard lock active, Esc has to be held down to exit).
    if (e.key !== 'Escape') e.preventDefault();
    if (e.repeat) return;
    if (!body.classList.contains('started')) { start(); }
    trigger(e.key);
  });

  // Click / tap anywhere also works (and is needed to enter fullscreen on some browsers).
  window.addEventListener('pointerdown', (e) => {
    if (onLink(e)) return;
    e.preventDefault();
    if (!body.classList.contains('started')) {
      start();
      trigger(startKey);
      return;
    }
    trigger('');
  });

  window.addEventListener('contextmenu', (e) => e.preventDefault());
  window.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
})();
