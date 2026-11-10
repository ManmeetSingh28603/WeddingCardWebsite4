/*
 * Day and night: Rangeelo's decoration (theme.decor "daynight", loaded by layouts/keepsake.js). Each
 * function is a painted Rajasthani place, and as the guest scrolls it up the screen the same painting
 * turns from day to night: the night copy (art.layout["fn-<slot>-night"], painted to line up with
 * the day one within a pixel) lies exactly over the day painting the engine drew and fades in. Below
 * the functions, a lane where a wedding rickshaw drives one way and a camel walks the other as the
 * guest scrolls past (art.layout.rickshaw, art.layout.camel).
 *
 * Nothing here moves the engine's own elements, so its layout, reveals and painting choice stay its
 * own: the night copy is placed over whichever day painting each function got.
 */
(() => {
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const ease = (u) => u * u * (3 - 2 * u);
  const still = () => new URLSearchParams(location.search).has("quiet") || document.documentElement.classList.contains("quiet") || matchMedia("(prefers-reduced-motion: reduce)").matches;
  // The engine redraws the page on a language switch: the last drawing's listeners go with it.
  let off = () => {};

  function daynight(paper, a) {
    off();
    const L = a.theme.art?.layout || {};
    const url = (k) => (L[k] ? a.base + L[k] : null);
    paper.classList.add("decor-daynight");
    const pairs = [];
    for (const img of paper.querySelectorAll(".timeline .tl img.art")) {
      const slot = (img.getAttribute("src") || "").match(/fn-([a-z]+)\.webp/)?.[1];
      const night = slot && url(`fn-${slot}-night`);
      if (!night) continue;
      const frame = img.closest(".art-frame") || img.closest(".tl");
      const n = document.createElement("img");
      n.className = "dn-night";
      n.alt = ""; n.decoding = "async"; n.loading = "lazy"; n.src = night;
      n.setAttribute("aria-hidden", "true");
      frame.appendChild(n);
      pairs.push({ img, n, frame });
    }

    // The lane, at the foot of the functions.
    let lane = null;
    const tline = paper.querySelector(".timeline");
    if (tline && (url("rickshaw") || url("camel"))) {
      lane = document.createElement("div");
      lane.className = "dn-lane";
      lane.setAttribute("aria-hidden", "true");
      lane.innerHTML = `${url("camel") ? `<img class="dn-camel" src="${a.esc(url("camel"))}" alt="" loading="lazy" decoding="async">` : ""}${url("rickshaw") ? `<img class="dn-rickshaw" src="${a.esc(url("rickshaw"))}" alt="" loading="lazy" decoding="async">` : ""}`;
      tline.after(lane);
    }

    // Each night copy lies exactly over its day painting: the same box, on any screen.
    const place = () => {
      for (const { img, n, frame } of pairs) {
        if (!img.isConnected) continue;
        if (frame && frame.classList.contains("art-frame")) {
          // Exact 1:1 fit inside art-frame container via CSS
          continue;
        }
        const tl = img.closest(".tl");
        const r = img.getBoundingClientRect(), t = tl.getBoundingClientRect();
        Object.assign(n.style, { left: `${r.left - t.left}px`, top: `${r.top - t.top}px`, width: `${r.width}px`, height: `${r.height}px` });
      }
    };
    place();
    if (window.ResizeObserver) { const ro = new ResizeObserver(place); for (const { img } of pairs) ro.observe(img); }

    if (still()) {
      // Without motion: the day paintings, and the rickshaw and camel standing in the lane.
      lane?.classList.add("dn-still");
      return;
    }
    // Day at the foot of the screen, night by the time the painting is two thirds of the way up.
    let raf = 0;
    const tick = () => {
      raf = 0;
      const H = innerHeight;
      for (const { img, n, frame } of pairs) {
        const target = frame || img;
        const r = target.getBoundingClientRect();
        if (r.bottom < -H || r.top > 2 * H) continue;
        const p = ease(clamp01((H * 0.82 - (r.top + r.height / 2)) / (H * 0.5)));
        // The night shows only once the day painting itself has been revealed.
        const shown = Number(getComputedStyle(target).opacity) || 0;
        n.style.opacity = (p * shown).toFixed(3);
      }
      if (lane) {
        const r = lane.getBoundingClientRect();
        const p = clamp01((H - r.top) / (H + r.height));
        lane.style.setProperty("--p", p.toFixed(4));
      }
    };
    const ask = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const resize = () => { place(); ask(); };
    addEventListener("scroll", ask, { passive: true });
    addEventListener("resize", resize, { passive: true });
    off = () => { removeEventListener("scroll", ask); removeEventListener("resize", resize); };
    // The engine's reveals fade the day paintings in: follow them for a moment.
    for (const { img } of pairs) img.addEventListener("transitionend", ask);
    setTimeout(ask, 400); setTimeout(ask, 1500);
    ask();
  }

  (window.SaathDecor = window.SaathDecor || {}).daynight = daynight;
})();
