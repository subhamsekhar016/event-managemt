/* =========================================================
   Eventra — Event Management Website
   Vanilla JavaScript (no dependencies)
   ========================================================= */
(() => {
  "use strict";

  /* ---------- Data ---------- */
  const IMG = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

  const EVENTS = [
    { id: 1, title: "DevSummit 2026", category: "Tech", date: "2026-11-21T09:30:00", venue: "Chennai Trade Centre", city: "Chennai", price: 999, seats: 300, featured: true, emoji: "💻",
      grad: "linear-gradient(135deg,#5b5bf0,#2bb3ff)", img: IMG("photo-1540575467063-178a50c2df87"),
      desc: "A full-day summit on web, cloud and AI with industry speakers and live demos.",
      long: "DevSummit brings together developers, designers and founders for talks, hands-on labs and networking. Expect deep dives into modern web performance, cloud-native architecture and applied AI.",
      agenda: ["09:30 — Registration & coffee", "10:30 — Keynote: The future of the web", "12:00 — Hands-on labs", "14:00 — Lunch & networking", "16:00 — Panel: AI in production"] },
    { id: 2, title: "Neon Nights Live", category: "Music", date: "2026-11-28T18:00:00", venue: "Marina Open Arena", city: "Chennai", price: 1499, seats: 800, featured: true, emoji: "🎶",
      grad: "linear-gradient(135deg,#f0449b,#ff7a59)", img: IMG("photo-1501281668745-f7f57925c3b4"),
      desc: "An electrifying open-air concert with top indie and electronic artists.",
      long: "Dance under the lights with a line-up of indie bands and electronic DJs. Food trucks, art installations and a chill-out zone make this the night of the season.",
      agenda: ["18:00 — Gates open", "19:00 — Opening acts", "20:30 — Headline set", "22:30 — Closing DJ set"] },
    { id: 3, title: "Startup Pitch Fest", category: "Business", date: "2026-12-05T10:00:00", venue: "Innovation Hub", city: "Bengaluru", price: 499, seats: 150, featured: true, emoji: "🚀",
      grad: "linear-gradient(135deg,#12a66a,#2bb3ff)", img: IMG("photo-1475721027785-f74eccf877e2"),
      desc: "Watch 20 early-stage startups pitch to leading investors and win funding.",
      long: "Founders get five minutes to impress a panel of investors. Attendees can network, meet mentors and discover the next big idea before everyone else.",
      agenda: ["10:00 — Welcome", "10:30 — Pitch round 1", "13:00 — Lunch", "14:00 — Pitch round 2", "16:30 — Winners announced"] },
    { id: 4, title: "Street Food Carnival", category: "Food", date: "2026-12-12T12:00:00", venue: "Phoenix Grounds", city: "Mumbai", price: 0, seats: 1000, featured: false, emoji: "🍜",
      grad: "linear-gradient(135deg,#ff7a59,#ffc542)", img: IMG("photo-1555939594-58d7cb561ad1"),
      desc: "60+ food stalls, live cooking battles and family-friendly fun. Free entry!",
      long: "Taste your way through regional cuisines from across India. Watch chefs compete in live battles and join cooking masterclasses for all ages.",
      agenda: ["12:00 — Gates open", "14:00 — Live cooking battle", "17:00 — Kids' dessert workshop", "20:00 — Music & wrap-up"] },
    { id: 5, title: "Watercolor Workshop", category: "Art", date: "2026-11-15T11:00:00", venue: "Studio Hue", city: "Pune", price: 350, seats: 25, featured: false, emoji: "🎨",
      grad: "linear-gradient(135deg,#9b5bf0,#f0449b)", img: IMG("photo-1513364776144-60967b0f800f"),
      desc: "A relaxed, beginner-friendly session on blending, washes and landscapes.",
      long: "No experience needed. All materials are provided, and you'll leave with a finished piece. Limited seats keep the session personal.",
      agenda: ["11:00 — Intro & materials", "11:30 — Basic techniques", "13:00 — Paint your landscape", "14:30 — Showcase"] },
    { id: 6, title: "City Marathon 10K", category: "Sports", date: "2027-01-10T05:30:00", venue: "Besant Nagar Beach", city: "Chennai", price: 600, seats: 2000, featured: false, emoji: "🏃",
      grad: "linear-gradient(135deg,#2bb3ff,#12a66a)", img: IMG("photo-1452626038306-9aae5e071dd3"),
      desc: "Run along the coast in a timed 10K with finisher medals and refreshments.",
      long: "Whether you're racing for a personal best or running for fun, the sunrise coastal route is unbeatable. Includes bib, timing chip, tee and medal.",
      agenda: ["05:30 — Warm-up", "06:00 — Flag off", "08:30 — Medal ceremony"] },
    { id: 7, title: "AI & Data Bootcamp", category: "Workshop", date: "2026-11-17T10:00:00", venue: "Online (Zoom)", city: "Online", price: 0, seats: 200, featured: false, emoji: "🤖",
      grad: "linear-gradient(135deg,#5b5bf0,#9b5bf0)", img: IMG("photo-1531482615713-2afd69097998"),
      desc: "A free live bootcamp on Python, data analysis and your first ML model.",
      long: "Follow along live as mentors guide you from raw data to a working model. Recordings and notebooks are shared after the session.",
      agenda: ["10:00 — Python refresher", "11:30 — Data analysis with pandas", "13:30 — Build a model", "15:00 — Q&A"] },
    { id: 8, title: "Jazz in the Garden", category: "Music", date: "2026-12-19T17:30:00", venue: "Lalbagh Gardens", city: "Bengaluru", price: 799, seats: 250, featured: false, emoji: "🎷",
      grad: "linear-gradient(135deg,#b8860b,#ff7a59)", img: IMG("photo-1511192336575-5a79af67a629"),
      desc: "A mellow evening of live jazz among lanterns and lawns.",
      long: "Bring a blanket and unwind to smooth live jazz. Gourmet snacks and mocktails available on site.",
      agenda: ["17:30 — Gates open", "18:15 — Trio set", "19:30 — Quartet set", "21:00 — Jam session"] },
    { id: 9, title: "Design Systems Conf", category: "Tech", date: "2026-12-09T09:00:00", venue: "Hyderabad Convention Hall", city: "Hyderabad", price: 799, seats: 220, featured: false, emoji: "🧩",
      grad: "linear-gradient(135deg,#f0449b,#5b5bf0)", img: IMG("photo-1517245386807-bb43f82c33c4"),
      desc: "Talks and case studies on building scalable, accessible design systems.",
      long: "Learn how leading teams create, document and evolve design systems. Includes a live critique session and an open-source showcase.",
      agenda: ["09:00 — Opening", "10:00 — Tokens & theming", "12:00 — Accessibility at scale", "15:00 — Live critique"] },
    { id: 10, title: "Founders' Networking Brunch", category: "Business", date: "2026-11-09T11:00:00", venue: "The Lakeview Cafe", city: "Chennai", price: 250, seats: 40, featured: false, emoji: "🥂",
      grad: "linear-gradient(135deg,#12a66a,#ffc542)", img: IMG("photo-1511795409834-ef04bbd61622"),
      desc: "A curated brunch for founders, freelancers and creators to connect.",
      long: "Small tables, big conversations. Meet peers, swap stories and find collaborators in a relaxed setting.",
      agenda: ["11:00 — Arrival & mingling", "12:00 — Table talks", "13:30 — Open floor"] },
    { id: 11, title: "Pottery for Beginners", category: "Workshop", date: "2026-11-22T15:00:00", venue: "Clay Corner Studio", city: "Chennai", price: 450, seats: 15, featured: false, emoji: "🏺",
      grad: "linear-gradient(135deg,#c2703d,#ffc542)", img: IMG("photo-1565193566173-7a0ee3dbe261"),
      desc: "Get your hands dirty and shape your own bowl on the wheel.",
      long: "A guided intro to wheel throwing. Your piece will be glazed and fired, ready for pickup a week later.",
      agenda: ["15:00 — Clay basics", "15:45 — Wheel practice", "17:00 — Glazing"] },
    { id: 12, title: "Inter-College Football Cup", category: "Sports", date: "2027-02-06T08:00:00", venue: "Nehru Stadium", city: "Coimbatore", price: 0, seats: 500, featured: false, emoji: "⚽",
      grad: "linear-gradient(135deg,#12a66a,#2bb3ff)", img: IMG("photo-1431324155629-1a6deb1dec8d"),
      desc: "Cheer on the best college teams in a thrilling knockout tournament.",
      long: "Sixteen teams, one trophy. Free spectator registration includes reserved seating and a fan kit while stocks last.",
      agenda: ["08:00 — Group matches", "13:00 — Quarter-finals", "16:00 — Semi-finals", "18:00 — Final"] }
  ];

  const CATEGORIES = ["All", ...new Set(EVENTS.map((e) => e.category))];
  const STORE_KEY = "eventra_regs";
  const THEME_KEY = "eventra_theme";

  /* ---------- Helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtDate = (iso) => new Date(iso).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  const fmtTime = (iso) => new Date(iso).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
  const fmtPrice = (p) => (p === 0 ? "Free" : "₹" + p.toLocaleString("en-IN"));
  const byId = (id) => EVENTS.find((e) => e.id === Number(id));

  const store = {
    read() { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch { return []; } },
    write(list) { try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); } catch { /* storage unavailable */ } },
  };
  const seatsTaken = (id) => store.read().filter((r) => r.eventId === id).reduce((n, r) => n + r.tickets, 0);
  // Seed demo occupancy so the seat bars look realistic
  const baseTaken = (e) => Math.round(e.seats * (0.25 + ((e.id * 37) % 45) / 100));
  const seatsLeft = (e) => Math.max(0, e.seats - baseTaken(e) - seatsTaken(e.id));

  /* ---------- State ---------- */
  const state = { category: "All", query: "", sort: "date", current: null, lastFocus: null };

  /* ---------- Toast ---------- */
  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    $("#toasts").appendChild(t);
    setTimeout(() => { t.style.transition = "opacity .3s"; t.style.opacity = "0"; setTimeout(() => t.remove(), 300); }, 2800);
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    $("#theme-toggle").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch { /* ignore */ }
    });
  }

  /* ---------- Cards ---------- */
  function cardHTML(e, i) {
    const d = new Date(e.date);
    const left = seatsLeft(e);
    return `
    <article class="card ${left === 0 ? "sold-out" : ""}" data-id="${e.id}" tabindex="0" style="animation-delay:${Math.min(i, 10) * 55}ms" aria-label="${esc(e.title)}">
      <div class="card-img" style="--g:${e.grad}">
        <span class="emoji" aria-hidden="true">${e.emoji}</span>
        <img src="${e.img}" alt="${esc(e.title)} event" loading="lazy" onerror="this.remove()" />
        <span class="tag">${esc(e.category)}</span>
        <div class="date-badge"><b>${d.getDate()}</b><span>${d.toLocaleString("en", { month: "short" })}</span></div>
      </div>
      <div class="card-body">
        <h3>${esc(e.title)}</h3>
        <div class="card-meta"><span>📍 ${esc(e.venue)}, ${esc(e.city)}</span><span>🕒 ${fmtDate(e.date)} · ${fmtTime(e.date)}</span></div>
        <p class="card-desc">${esc(e.desc)}</p>
        <div class="card-foot">
          <div><span class="price">${fmtPrice(e.price)}</span>${left > 0 && left <= 30 ? `<div class="low-seats">Only ${left} left!</div>` : ""}</div>
          <button class="btn btn-primary" type="button" ${left === 0 ? "disabled" : ""}>${left === 0 ? "Sold out" : "Register"}</button>
        </div>
      </div>
    </article>`;
  }

  function renderFeatured() {
    const list = EVENTS.filter((e) => e.featured);
    $("#featured-grid").innerHTML = list.map(cardHTML).join("");
  }

  function getFiltered() {
    const q = state.query.trim().toLowerCase();
    let list = EVENTS.filter((e) => {
      const inCat = state.category === "All" || e.category === state.category;
      const hay = `${e.title} ${e.venue} ${e.city} ${e.category} ${e.desc}`.toLowerCase();
      return inCat && (!q || hay.includes(q));
    });
    const sorters = {
      date: (a, b) => new Date(a.date) - new Date(b.date),
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      name: (a, b) => a.title.localeCompare(b.title),
    };
    return list.sort(sorters[state.sort]);
  }

  function renderEvents() {
    const list = getFiltered();
    $("#events-grid").innerHTML = list.map(cardHTML).join("");
    $("#empty").hidden = list.length > 0;
    $("#result-count").textContent = `${list.length} event${list.length === 1 ? "" : "s"} found`;
  }

  function renderChips() {
    $("#chips").innerHTML = CATEGORIES.map(
      (c) => `<button type="button" class="chip ${c === state.category ? "active" : ""}" data-cat="${c}" aria-pressed="${c === state.category}">${c}</button>`
    ).join("");
  }

  function initFilters() {
    renderChips();
    $("#chips").addEventListener("click", (ev) => {
      const b = ev.target.closest(".chip");
      if (!b) return;
      state.category = b.dataset.cat;
      renderChips();
      renderEvents();
    });
    let t;
    $("#search").addEventListener("input", (ev) => {
      clearTimeout(t);
      t = setTimeout(() => { state.query = ev.target.value; renderEvents(); }, 180);
    });
    $("#sort").addEventListener("change", (ev) => { state.sort = ev.target.value; renderEvents(); });
    $("#reset-filters").addEventListener("click", () => {
      state.category = "All"; state.query = ""; state.sort = "date";
      $("#search").value = ""; $("#sort").value = "date";
      renderChips(); renderEvents();
    });

    // open event on card click / Enter
    const open = (ev) => {
      const card = ev.target.closest(".card");
      if (card) openModal(Number(card.dataset.id));
    };
    ["#events-grid", "#featured-grid"].forEach((s) => {
      $(s).addEventListener("click", open);
      $(s).addEventListener("keydown", (ev) => { if (ev.key === "Enter" && ev.target.classList.contains("card")) open(ev); });
    });
  }

  /* ---------- Countdown ---------- */
  function cdParts(iso) {
    const diff = new Date(iso) - Date.now();
    if (diff <= 0) return null;
    return {
      d: Math.floor(diff / 864e5),
      h: Math.floor((diff / 36e5) % 24),
      m: Math.floor((diff / 6e4) % 60),
      s: Math.floor((diff / 1e3) % 60),
    };
  }
  function cdHTML(iso) {
    const p = cdParts(iso);
    if (!p) return `<div class="cd-live">🔴 Event is live or has ended</div>`;
    const box = (v, l) => `<div class="cd-box"><b>${String(v).padStart(2, "0")}</b><span>${l}</span></div>`;
    return box(p.d, "Days") + box(p.h, "Hrs") + box(p.m, "Min") + box(p.s, "Sec");
  }
  const nextEvent = () => [...EVENTS].filter((e) => new Date(e.date) > Date.now()).sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  function tickCountdowns() {
    const n = nextEvent();
    if (n) $("#hero-countdown").innerHTML = cdHTML(n.date);
    if (state.current && !$("#event-modal").hidden) $("#detail-countdown").innerHTML = cdHTML(state.current.date);
  }

  function initHero() {
    const n = nextEvent();
    if (!n) { $(".hero-card").hidden = true; return; }
    $("#hero-next-title").textContent = n.title;
    $("#hero-next-meta").textContent = `${fmtDate(n.date)} · ${n.venue}, ${n.city}`;
    $("#hero-next-btn").addEventListener("click", () => openModal(n.id));
    tickCountdowns();
    setInterval(tickCountdowns, 1000);
  }

  /* ---------- Modal ---------- */
  const modal = () => $("#event-modal");

  function openModal(id) {
    const e = byId(id);
    if (!e) return;
    state.current = e;
    state.lastFocus = document.activeElement;

    $("#detail-hero").style.setProperty("--g", e.grad);
    $("#detail-hero").innerHTML = `<span aria-hidden="true">${e.emoji}</span><img src="${e.img}" alt="${esc(e.title)}" onerror="this.remove()" />`;
    $("#detail-tag").textContent = e.category;
    $("#modal-title").textContent = e.title;
    $("#detail-meta").innerHTML = `
      <li>📅 <b>${fmtDate(e.date)}</b></li>
      <li>🕒 <b>${fmtTime(e.date)}</b> onwards</li>
      <li>📍 <b>${esc(e.venue)}</b>, ${esc(e.city)}</li>
      <li>🎟️ <b>${fmtPrice(e.price)}</b> per ticket</li>`;
    $("#detail-desc").textContent = e.long;
    $("#detail-agenda").innerHTML = e.agenda.map((a) => `<li>${esc(a)}</li>`).join("");
    $("#detail-countdown").innerHTML = cdHTML(e.date);

    // event dropdown (kept in sync with the card clicked, but changeable)
    $("#f-event").innerHTML = `<option value="">Select an event</option>` +
      EVENTS.filter((x) => seatsLeft(x) > 0).map((x) => `<option value="${x.id}">${esc(x.title)}</option>`).join("");
    $("#f-event").value = e.id;

    resetForm();
    updateSeats();
    $("#reg-form").hidden = false;
    $("#success").hidden = true;
    modal().hidden = false;
    document.body.classList.add("modal-open");
    $(".modal-panel", modal()).scrollTop = 0;
    modal().scrollTop = 0;
    setTimeout(() => $("#f-name").focus({ preventScroll: true }), 80);
  }

  function closeModal() {
    modal().hidden = true;
    document.body.classList.remove("modal-open");
    state.current = null;
    if (state.lastFocus && state.lastFocus.focus) state.lastFocus.focus();
  }

  function updateSeats() {
    const e = byId($("#f-event").value) || state.current;
    if (!e) return;
    const left = seatsLeft(e);
    const taken = e.seats - left;
    $("#seats-fill").style.width = Math.round((taken / e.seats) * 100) + "%";
    $("#seats-text").textContent = `${left} of ${e.seats} seats remaining`;

    const max = Math.max(1, Math.min(5, left));
    const cur = Number($("#f-tickets").value) || 1;
    $("#f-tickets").innerHTML = Array.from({ length: max }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join("");
    $("#f-tickets").value = Math.min(cur, max);
    updateTotal();
  }

  function updateTotal() {
    const e = byId($("#f-event").value);
    const n = Number($("#f-tickets").value) || 1;
    $("#total").textContent = e ? fmtPrice(e.price * n) : "—";
  }

  /* ---------- Validation ---------- */
  const rules = {
    name(v) {
      v = v.trim();
      if (!v) return "Please enter your full name.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      if (!/^[A-Za-z][A-Za-z .'-]*$/.test(v)) return "Name can only contain letters, spaces, . ' and -";
      return "";
    },
    email(v) {
      v = v.trim();
      if (!v) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email like name@example.com.";
      return "";
    },
    phone(v) {
      const c = v.replace(/[\s-]/g, "");
      if (!c) return "Please enter your phone number.";
      if (!/^(\+91|0)?[6-9]\d{9}$/.test(c)) return "Enter a valid 10-digit Indian mobile number.";
      return "";
    },
    event(v) {
      if (!v) return "Please select an event.";
      const e = byId(v);
      if (!e) return "Selected event is invalid.";
      if (seatsLeft(e) === 0) return "Sorry, this event is sold out.";
      return "";
    },
    terms(checked) { return checked ? "" : "You must accept the terms to continue."; },
  };

  function setError(field, msg) {
    const wrap = $(`#f-${field}`)?.closest(".field");
    const out = $(`#e-${field}`);
    if (out) out.textContent = msg;
    if (wrap) { wrap.classList.toggle("invalid", !!msg); wrap.classList.toggle("valid", !msg && !!$(`#f-${field}`).value); }
  }

  function validateField(field) {
    const el = $(`#f-${field}`);
    const msg = field === "terms" ? rules.terms(el.checked) : rules[field](el.value);
    setError(field, msg);
    return !msg;
  }

  function resetForm() {
    $("#reg-form").reset();
    ["name", "email", "phone", "event", "terms"].forEach((f) => setError(f, ""));
  }

  function initForm() {
    const form = $("#reg-form");
    ["name", "email", "phone", "event"].forEach((f) => {
      const el = $(`#f-${f}`);
      el.addEventListener("blur", () => validateField(f));
      el.addEventListener("input", () => { if ($(`#e-${f}`).textContent) validateField(f); });
    });
    $("#f-terms").addEventListener("change", () => validateField("terms"));
    $("#f-event").addEventListener("change", () => { validateField("event"); updateSeats(); });
    $("#f-tickets").addEventListener("change", updateTotal);

    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const ok = ["name", "email", "phone", "event", "terms"].map(validateField).every(Boolean);
      if (!ok) {
        form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake");
        const firstBad = $(".field.invalid input, .field.invalid select", form) || $("#f-terms");
        firstBad.focus();
        return;
      }
      const e = byId($("#f-event").value);
      const tickets = Number($("#f-tickets").value) || 1;
      const email = $("#f-email").value.trim().toLowerCase();

      if (tickets > seatsLeft(e)) { setError("event", `Only ${seatsLeft(e)} seat(s) left.`); return; }
      if (store.read().some((r) => r.eventId === e.id && r.email === email)) {
        setError("email", "This email is already registered for this event.");
        $("#f-email").focus();
        return;
      }

      const btn = $("#submit-btn");
      btn.disabled = true; btn.textContent = "Processing…";
      setTimeout(() => {
        const reg = {
          id: "EVT-" + Date.now().toString(36).toUpperCase().slice(-6) + Math.floor(Math.random() * 90 + 10),
          eventId: e.id,
          name: $("#f-name").value.trim(),
          email,
          phone: $("#f-phone").value.replace(/[\s-]/g, ""),
          tickets,
          total: e.price * tickets,
          createdAt: new Date().toISOString(),
        };
        const list = store.read(); list.push(reg); store.write(list);
        showSuccess(reg, e);
        refreshAfterChange();
        btn.disabled = false; btn.textContent = "Confirm registration";
      }, 700);
    });

    $("#view-regs").addEventListener("click", () => { closeModal(); openDrawer(); });
  }

  function showSuccess(reg, e) {
    $("#reg-form").hidden = true;
    $("#success").hidden = false;
    $("#success-text").textContent = `Thanks ${reg.name.split(" ")[0]}, your spot is confirmed. A confirmation has been saved to this device.`;
    $("#ticket").innerHTML = `
      <div><span>Booking ID</span><strong>${esc(reg.id)}</strong></div>
      <div><span>Event</span><strong>${esc(e.title)}</strong></div>
      <div><span>Date</span><strong>${fmtDate(e.date)}</strong></div>
      <div><span>Venue</span><strong>${esc(e.venue)}</strong></div>
      <div><span>Tickets</span><strong>${reg.tickets}</strong></div>
      <div><span>Total</span><strong>${fmtPrice(reg.total)}</strong></div>`;
    toast("🎉 Registration successful!");
    modal().scrollTop = 0;
  }

  function refreshAfterChange() {
    renderFeatured(); renderEvents(); renderRegCount(); renderRegs();
  }

  /* ---------- Registrations drawer ---------- */
  function renderRegCount() { $("#reg-count").textContent = store.read().length; }

  function renderRegs() {
    const list = store.read().slice().reverse();
    const box = $("#regs-list");
    if (!list.length) {
      box.innerHTML = `<div class="empty"><div class="empty-emoji">🎟️</div><h3>No registrations yet</h3><p class="muted">Register for an event and it'll show up here.</p></div>`;
      return;
    }
    box.innerHTML = list.map((r) => {
      const e = byId(r.eventId) || { title: "Event", date: r.createdAt, venue: "" };
      return `<div class="reg-item">
        <h4>${esc(e.title)}</h4>
        <p>📅 ${fmtDate(e.date)} · 📍 ${esc(e.venue)}</p>
        <p>👤 ${esc(r.name)} · ${r.tickets} ticket${r.tickets > 1 ? "s" : ""} · ${fmtPrice(r.total)}</p>
        <div class="row"><span class="tag">${esc(r.id)}</span><button class="link-danger" data-cancel="${esc(r.id)}">Cancel</button></div>
      </div>`;
    }).join("");
  }

  const drawer = () => $("#drawer");
  function openDrawer() { renderRegs(); drawer().hidden = false; document.body.classList.add("modal-open"); }
  function closeDrawer() { drawer().hidden = true; document.body.classList.remove("modal-open"); }

  function initDrawer() {
    $("#open-regs").addEventListener("click", (ev) => { ev.preventDefault(); $("#main-nav").classList.remove("open"); openDrawer(); });
    $$("[data-close-drawer]").forEach((b) => b.addEventListener("click", closeDrawer));
    $("#regs-list").addEventListener("click", (ev) => {
      const b = ev.target.closest("[data-cancel]");
      if (!b) return;
      if (!confirm("Cancel this registration?")) return;
      store.write(store.read().filter((r) => r.id !== b.dataset.cancel));
      refreshAfterChange();
      toast("Registration cancelled.");
    });
  }

  /* ---------- Nav, reveal, counters ---------- */
  function initNav() {
    const btn = $("#menu-btn"), nav = $("#main-nav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      btn.textContent = open ? "✕" : "☰";
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); btn.textContent = "☰"; btn.setAttribute("aria-expanded", false); }));
  }

  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
  }

  function initCounters() {
    $$("[data-count]").forEach((el) => {
      const target = Number(el.dataset.count), suffix = el.dataset.suffix || "";
      const start = performance.now(), dur = 1400;
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN") + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* ---------- Global listeners ---------- */
  function initGlobal() {
    $$("[data-close]").forEach((b) => b.addEventListener("click", closeModal));
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") { if (!modal().hidden) closeModal(); else if (!drawer().hidden) closeDrawer(); }
      // simple focus trap inside the open modal
      if (ev.key === "Tab" && !modal().hidden) {
        const f = $$("button:not([disabled]), input, select, [href]", modal()).filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
        else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
      }
    });
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    renderFeatured();
    initFilters();
    renderEvents();
    initHero();
    initForm();
    initDrawer();
    renderRegCount();
    initGlobal();
    initReveal();
    initCounters();
  });
})();
