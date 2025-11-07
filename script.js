// ==========================
// 🧠 ROBOTBİLGE ANA BETİK
// ==========================

// Yıl
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Oyun butonları - örnek olarak diğer aktiviteler alert veriyor
document.querySelectorAll('[data-activity]').forEach(btn => {
  const act = btn.dataset.activity;
  btn.addEventListener('click', () => {
    if (act === 'flow') {
      // Akış Oyunu - yeni sayfada açılacak
      window.location.href = 'flow.html';
    } else {
      alert('Bu oyun yakında aktif olacak!');
    }
  });
});

// PDF örneği (varsa)
const dl = document.getElementById('downloadSample');
if (dl) {
  dl.addEventListener('click', e => {
    e.preventDefault();
    alert('Örnek bölüm PDF bağlantısını burada sunabilirsiniz.');
  });
}

// ==========================
// 📱 HAMBURGER MENÜ
// ==========================
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const visible = getComputedStyle(nav).display !== 'none';
    if (visible) {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '60px';
      nav.style.right = '20px';
      nav.style.background = 'rgba(0,0,0,0.9)';
      nav.style.padding = '14px';
      nav.style.borderRadius = '12px';
      nav.style.gap = '10px';
      nav.style.zIndex = '999';
    }
  });
}

// Ekran yeniden boyutlandırıldığında menü sıfırlama
window.addEventListener('resize', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  if (window.innerWidth > 900) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'row';
    nav.style.position = '';
    nav.style.background = '';
    nav.style.padding = '';
    nav.style.borderRadius = '';
  } else {
    nav.style.display = 'none';
  }
});

// ==========================
// 🎮 ANA SAYFA OYUN KARTLARI
// ==========================

// Sayfa içinde dinamik kart yükleme (örnek oyun panelleri)
const activitiesContainer = document.getElementById('activities');
if (activitiesContainer) {
  activitiesContainer.innerHTML = `
  <div class="container">
    <h2>Oyunlar</h2>
    <p>Blokları sürükle-bırak, çalıştır, hatayı yakala. Gerçek görevlerle öğren!</p>
    <div class="card-grid">
      <div class="card">
        <img src="assets/panel-cards.svg" alt="Akış Oyunu" class="card-icon" />
        <div class="card-body">
          <h3>Akış Oyunu</h3>
          <p>Blokları sürükle-bırak, çalıştır, hatayı yakala.</p>
          <button class="btn btn-primary" data-activity="flow">Başla</button>
        </div>
      </div>

      <div class="card">
        <img src="assets/card-code.svg" alt="Kod Atöl
