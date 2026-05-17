

const foods = [
   { name: 'Alpukat', emoji: '🥑', kcal: 160, protein: 2, karbo: 9, lemak: 15, category: 'Buah' },
   { name: 'Pisang', emoji: '🍌', kcal: 105, protein: 1, karbo: 27, lemak: 0, category: 'Buah' },
   { name: 'Apel', emoji: '🍎', kcal: 95, protein: 0, karbo: 25, lemak: 0, category: 'Buah' },
   { name: 'Jeruk', emoji: '🍊', kcal: 62, protein: 1, karbo: 15, lemak: 0, category: 'Buah' },
   { name: 'Mangga', emoji: '🥭', kcal: 99, protein: 1, karbo: 25, lemak: 1, category: 'Buah' },
   { name: 'Semangka', emoji: '🍉', kcal: 46, protein: 1, karbo: 12, lemak: 0, category: 'Buah' },
   { name: 'Brokoli', emoji: '🥦', kcal: 34, protein: 3, karbo: 7, lemak: 0, category: 'Sayur' },
   { name: 'Wortel', emoji: '🥕', kcal: 41, protein: 1, karbo: 10, lemak: 0, category: 'Sayur' },
   { name: 'Tomat', emoji: '🍅', kcal: 18, protein: 1, karbo: 4, lemak: 0, category: 'Sayur' },
   { name: 'Mentimun', emoji: '🥒', kcal: 16, protein: 1, karbo: 4, lemak: 0, category: 'Sayur' },
   { name: 'Jamur', emoji: '🍄', kcal: 22, protein: 3, karbo: 3, lemak: 0, category: 'Sayur' },
   { name: 'Selada', emoji: '🥗', kcal: 15, protein: 1, karbo: 3, lemak: 0, category: 'Sayur' },
   { name: 'Paprika', emoji: '🫑', kcal: 31, protein: 1, karbo: 6, lemak: 0, category: 'Sayur' },
   { name: 'Asparagus', emoji: '🌱', kcal: 20, protein: 2, karbo: 4, lemak: 0, category: 'Sayur' },
   { name: 'Terong', emoji: '🍆', kcal: 25, protein: 1, karbo: 6, lemak: 0, category: 'Sayur' },
   { name: 'Kubis', emoji: '🥬', kcal: 25, protein: 1, karbo: 6, lemak: 0, category: 'Sayur' },
   { name: 'Buncis', emoji: '🫛', kcal: 31, protein: 2, karbo: 7, lemak: 0, category: 'Sayur' },
   { name: 'Kentang', emoji: '🥔', kcal: 130, protein: 3, karbo: 30, lemak: 0, category: 'Karbo' },
   { name: 'Nasi', emoji: '🍚', kcal: 206, protein: 4, karbo: 45, lemak: 0, category: 'Karbo' },
   { name: 'Roti', emoji: '🍞', kcal: 79, protein: 3, karbo: 15, lemak: 1, category: 'Karbo' },
   { name: 'Mie', emoji: '🍜', kcal: 220, protein: 7, karbo: 40, lemak: 3, category: 'Karbo' },
   { name: 'Oatmeal', emoji: '🥣', kcal: 150, protein: 5, karbo: 27, lemak: 3, category: 'Karbo' },
   { name: 'Quinoa', emoji: '🌾', kcal: 120, protein: 4.4, karbo: 21, lemak: 1.9, category: 'Karbo' },


   { name: 'Beras Merah', emoji: '🍚', kcal: 111, protein: 2.6, karbo: 23, lemak: 0.9, category: 'Karbo' },


   { name: 'Beras Coklat', emoji: '🌱', kcal: 112, protein: 2.3, karbo: 24, lemak: 0.8, category: 'Karbo' },


   { name: 'Whole Wheat Bread', emoji: '🍞', kcal: 247, protein: 13, karbo: 41, lemak: 4.2, category: 'Karbo' },


   { name: 'Granola', emoji: '🥣', kcal: 471, protein: 10, karbo: 64, lemak: 20, category: 'Karbo' },


   { name: 'Kacang Merah', emoji: '🌰', kcal: 127, protein: 8.7, karbo: 22, lemak: 0.5, category: 'Karbo' },


   { name: 'Edamame', emoji: '🫘', kcal: 121, protein: 11.9, karbo: 8.9, lemak: 5.2, category: 'Karbo' },


   { name: 'Kacang Polong', emoji: '🫛', kcal: 84, protein: 5.4, karbo: 15, lemak: 0.4, category: 'Karbo' },


   { name: 'Pisang Ambon', emoji: '🍌', kcal: 89, protein: 1.1, karbo: 23, lemak: 0.3, category: 'Buah' },


   { name: 'Buah Tinggi Serat', emoji: '🍎', kcal: 52, protein: 0.3, karbo: 14, lemak: 0.2, category: 'Buah' },


   { name: 'Sweet Corn', emoji: '🌽', kcal: 96, protein: 3.4, karbo: 21, lemak: 1.5, category: 'Karbo' },


   { name: 'Singkong Rebus', emoji: '🍠', kcal: 160, protein: 1.4, karbo: 38, lemak: 0.3, category: 'Karbo' },


   { name: 'Kentang Kukus', emoji: '🥔', kcal: 87, protein: 1.9, karbo: 20, lemak: 0.1, category: 'Karbo' },


   { name: 'Shirataki', emoji: '🍜', kcal: 10, protein: 0, karbo: 3, lemak: 0, category: 'Karbo' },
];


// Shared state across all layouts
const state = {
   slots: [null, null, null, null],
   history: [],
   closed: false,
};


/* ── Plate slots HTML builder ── */
function buildPlateGrid(prefix) {
   const grid = document.getElementById(prefix + '-plate-grid');
   if (!grid) return;
   grid.innerHTML = '';
   for (let i = 0; i < 4; i++) {
       const slot = document.createElement('div');
       slot.className = 'plate-slot aspect-square relative group';
       slot.id = prefix + '-slot-' + i;
       slot.onclick = () => removeFromSlot(i, prefix);
       slot.innerHTML = `
     <div id="${prefix}-slot-${i}-content" class="w-full h-full flex items-center justify-center text-4xl"></div>
     <button class="remove-btn absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold pointer-events-none">×</button>
   `;
       grid.appendChild(slot);
   }
}


/* ── Render food grid ── */
function renderFoods(tab, prefix) {
   const grid = document.getElementById('food-grid-' + prefix);
   if (!grid) return;
   const filtered = tab === 'Semua' ? foods : foods.filter(f => f.category === tab);
   grid.innerHTML = filtered.map(f => `
   <div class="food-card bg-gray-50 rounded-xl p-2 border border-gray-100 text-center" onclick="addToPlate(${foods.indexOf(f)}, '${prefix}')">
     <div class="text-3xl mb-1">${f.emoji}</div>
     <p class="text-xs font-bold text-gray-700 truncate">${f.name}</p>
     <p class="text-xs text-gray-400">${f.kcal} kcal</p>
     <button class="mt-1 w-5 h-5 bg-green-600 text-white rounded-full text-xs font-black flex items-center justify-center mx-auto">+</button>
   </div>
 `).join('');
}


function filterFood(tab, prefix) {
   // update tabs for this prefix
   const tabIds = ['Semua', 'Buah', 'Sayur', 'Karbo'];
   const p = prefix === 'desktop' ? 'd' : prefix === 'tablet' ? 't' : 'm';
   tabIds.forEach(t => {
       const el = document.getElementById(p + '-tab-' + t);
       if (!el) return;
       el.classList.remove('active');
       el.classList.add('text-gray-600');
   });
   const active = document.getElementById(p + '-tab-' + tab);
   if (active) { active.classList.add('active'); active.classList.remove('text-gray-600'); }
   renderFoods(tab, prefix);
}


/* ── Add to plate ── */
function addToPlate(foodIdx, prefix) {
   if (state.closed) { alert('Buka piring dulu sebelum menambah makanan!'); return; }
   const empty = state.slots.indexOf(null);
   if (empty === -1) { alert('Piring penuh! Hapus salah satu dulu.'); return; }
   state.slots[empty] = foods[foodIdx];
   renderAllPlates();
   updateSelectionStrip();
}


function removeFromSlot(i, prefix) {
   if (state.closed) return;
   state.slots[i] = null;
   renderAllPlates();
   updateSelectionStrip();
}


/* ── Render ALL plate UIs from shared state ── */
function renderAllPlates() {
   ['desktop', 'tablet', 'mobile'].forEach(prefix => {
       const p = prefix === 'desktop' ? 'd' : prefix === 'tablet' ? 't' : 'm';
       for (let i = 0; i < 4; i++) {
           const content = document.getElementById(p + '-slot-' + i + '-content');
           const slot = document.getElementById(p + '-slot-' + i);
           if (!content || !slot) continue;
           if (state.slots[i]) {
               content.innerHTML = `<span class="plate-item text-4xl md:text-5xl">${state.slots[i].emoji}</span>`;
               slot.style.background = 'linear-gradient(145deg,#7a3030,#5a1a1a)';
           } else {
               content.innerHTML = '';
               slot.style.background = 'linear-gradient(145deg,#b54040,#8a2020)';
           }
       }
       const filled = state.slots.filter(Boolean);
       const summaryEl = document.getElementById(p + '-plate-summary');
       if (summaryEl) {
           summaryEl.textContent = filled.length === 0
               ? 'Piring kosong'
               : filled.length + ' makanan: ' + filled.map(f => f.emoji).join(' ');
       }
   });
}


function updateSelectionStrip() {
   const strip = document.getElementById('m-selection-strip');
   const text = document.getElementById('m-selection-text');
   const filled = state.slots.filter(Boolean);
   if (!strip || !text) return;
   if (filled.length === 0) { strip.classList.add('hidden'); return; }
   strip.classList.remove('hidden');
   text.textContent = filled.map(f => f.emoji + ' ' + f.name).join('  •  ');
}


/* ── Close / Open lid on ALL layouts ── */
function tutupLids() {
   ['d-plate-lid', 't-plate-lid', 'm-plate-lid'].forEach(id => {
       const el = document.getElementById(id);
       if (el) el.classList.add('closing');
   });
   state.closed = true;
}
function bukaLids() {
   ['d-plate-lid', 't-plate-lid', 'm-plate-lid'].forEach(id => {
       const el = document.getElementById(id);
       if (el) el.classList.remove('closing');
   });
   state.closed = false;
}


/* ── Reset ── */
function resetPlate(prefix) {
   state.slots = [null, null, null, null];
   state.closed = false;
   bukaLids();
   renderAllPlates();
   updateSelectionStrip();
   showHitungBtns();
}
function resetAll(prefix) {
   resetPlate(prefix);
   if (prefix === 'mobile') goToStep(1);
}


function showHitungBtns() {
   ['d', 't', 'm'].forEach(p => {
       const h = document.getElementById(p + '-btn-hitung');
       const r = document.getElementById(p + '-btn-reopen');
       if (h) h.classList.remove('hidden');
       if (r) r.classList.add('hidden');
   });
   const s = document.getElementById('d-plate-subtitle'); if (s) s.textContent = 'Selamat mencoba!';
   const t = document.getElementById('t-plate-subtitle'); if (t) t.textContent = 'Selamat mencoba!';
   const m = document.getElementById('m-plate-subtitle'); if (m) m.textContent = 'Ketuk slot untuk hapus makanan';
   const h = document.getElementById('d-btn-hint'); if (h) h.textContent = 'Try akan di tutup dan perhitungan kalori akan dimulai';
}


function bukaPlate(prefix) {
   bukaLids();
   showHitungBtns();
}


/* ── Calculate ── */
function hitungKalori(prefix) {
   const filled = state.slots.filter(Boolean);
   if (filled.length === 0) { alert('Tambahkan makanan ke piring dulu!'); return; }


   tutupLids();


   // swap buttons
   ['d', 't', 'm'].forEach(p => {
       const h = document.getElementById(p + '-btn-hitung'); if (h) h.classList.add('hidden');
       const r = document.getElementById(p + '-btn-reopen'); if (r) r.classList.remove('hidden');
   });
   const ds = document.getElementById('d-plate-subtitle'); if (ds) ds.textContent = 'Piring ditutup ✓';
   const ts = document.getElementById('t-plate-subtitle'); if (ts) ts.textContent = 'Piring ditutup ✓';
   const ms = document.getElementById('m-plate-subtitle'); if (ms) ms.textContent = 'Piring ditutup ✓';


   setTimeout(() => {
       const total = filled.reduce((s, f) => s + f.kcal, 0);
       const protein = filled.reduce((s, f) => s + f.protein, 0);
       const karbo = filled.reduce((s, f) => s + f.karbo, 0);
       const lemak = filled.reduce((s, f) => s + f.lemak, 0);
       const pct = Math.min(Math.round((total / 2000) * 100), 100);


       ['d', 't', 'm'].forEach(p => {
           animateNumber(p + '-total-kalori', total);
           const ep = document.getElementById(p + '-macro-protein'); if (ep) { ep.textContent = protein + 'g'; ep.classList.add('num-pop'); setTimeout(() => ep.classList.remove('num-pop'), 500); }
           const ek = document.getElementById(p + '-macro-karbo'); if (ek) { ek.textContent = karbo + 'g'; ek.classList.add('num-pop'); setTimeout(() => ek.classList.remove('num-pop'), 500); }
           const el = document.getElementById(p + '-macro-lemak'); if (el) { el.textContent = lemak + 'g'; el.classList.add('num-pop'); setTimeout(() => el.classList.remove('num-pop'), 500); }
           const pl = document.getElementById(p + '-progress-label'); if (pl) pl.textContent = `${total} / 2000 kcal`;
           const pp = document.getElementById(p + '-progress-pct'); if (pp) pp.textContent = pct + '%';
           const pb = document.getElementById(p + '-progress-bar'); if (pb) pb.style.width = pct + '%';
           const box = document.getElementById(p + '-total-box');
           if (box) { box.classList.add('result-pulse'); setTimeout(() => box.classList.remove('result-pulse'), 600); }
       });


       spawnConfetti();


       const now = new Date();
       const timeStr = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
       state.history.unshift({ items: [...filled], total, timeStr, day: 'Hari ini' });
       if (state.history.length > 3) state.history = state.history.slice(0, 3);
       renderAllHistory();


       if (prefix === 'mobile') goToStep(3);
   }, 700);
}


function animateNumber(id, target) {
   const el = document.getElementById(id);
   if (!el) return;
   let current = parseInt(el.textContent) || 0;
   const diff = target - current, steps = 30;
   let step = 0;
   const timer = setInterval(() => {
       step++;
       el.textContent = Math.round(current + diff * (step / steps));
       if (step >= steps) { el.textContent = target; clearInterval(timer); }
   }, 20);
}


function renderAllHistory() {
   ['d', 't', 'm'].forEach(p => {
       const list = document.getElementById(p + '-history-list');
       if (!list) return;
       if (state.history.length === 0) {
           list.innerHTML = '<p class="text-xs text-gray-300 text-center py-2">Belum ada riwayat</p>';
           return;
       }
       list.innerHTML = state.history.map(h => `
     <div class="history-item flex items-center gap-2 bg-gray-50 rounded-xl p-2">
       <div class="text-xs text-gray-400 whitespace-nowrap">
         <div class="font-bold text-gray-600">${h.day}</div>
         <div>${h.timeStr}</div>
       </div>
       <div class="flex gap-1 flex-1 justify-center">
         ${h.items.slice(0, 3).map(f => `<span class="text-lg">${f.emoji}</span>`).join('')}
         ${h.items.length > 3 ? `<span class="text-xs text-gray-400 font-bold self-center">+${h.items.length - 3}</span>` : ''}
       </div>
       <div class="text-xs font-black text-gray-700 whitespace-nowrap">${h.total} kcal</div>
     </div>
   `).join('');
   });
}


/* ── Mobile step navigation ── */
let currentStep = 1;
function goToStep(n) {
   currentStep = n;


   // reset semua panel dulu
   for (let i = 1; i <= 3; i++) {
       const panel = document.getElementById('m-panel-' + i);
       if (panel) {
           panel.classList.remove("active");
       }
   }


   // tampilkan panel yang dipilih
   const activePanel = document.getElementById('m-panel-' + n);
   if (activePanel) {
       activePanel.classList.add("active");
   }


   window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ── Confetti ── */
function spawnConfetti() {
   const overlay = document.getElementById('confetti-overlay');
   overlay.style.display = 'block'; overlay.innerHTML = '';
   const colors = ['#3d7a3a', '#5aaa56', '#f59e0b', '#ef4444', '#3b82f6', '#a855f7', '#ec4899'];
   for (let i = 0; i < 70; i++) {
       const el = document.createElement('div');
       el.className = 'confetti-piece';
       el.style.left = Math.random() * 100 + 'vw';
       el.style.top = '-20px';
       el.style.background = colors[Math.floor(Math.random() * colors.length)];
       el.style.animationDelay = Math.random() * 0.5 + 's';
       el.style.animationDuration = (0.8 + Math.random() * 0.6) + 's';
       el.style.width = (6 + Math.random() * 8) + 'px';
       el.style.height = (6 + Math.random() * 8) + 'px';
       overlay.appendChild(el);
   }
   setTimeout(() => { overlay.style.display = 'none'; overlay.innerHTML = ''; }, 1600);
}


/* ── INIT ── */
['desktop', 'tablet', 'mobile'].forEach(prefix => {
   const p = prefix === 'desktop' ? 'd' : prefix === 'tablet' ? 't' : 'm';
   buildPlateGrid(p);
   renderFoods('Semua', prefix);
});
renderAllPlates();
goToStep(1);


// JS for Navbar
const wrapper = document.getElementById("nav-wrapper");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");


// scroll effect
window.addEventListener("scroll", () => {
   if (window.scrollY > 40) {
       wrapper.classList.add("nav-scrolled");
   } else {
       wrapper.classList.remove("nav-scrolled");
   }
});


// mobile menu
menuBtn.addEventListener("click", () => {
   mobileMenu.classList.toggle("hidden");
});




