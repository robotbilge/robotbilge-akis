/* ===========================
   Robot Bilge • script.js
   Tam sürüm (mobil menü + sabit menü)
   =========================== */

(function(){
  const HEADER_HEIGHT = 70;

  /* Yıl */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Demo butonları */
  document.querySelectorAll('[data-activity]').forEach(b=>{
    b.addEventListener('click', ()=> alert('Bu bir demo. Gerçek oyunu burada başlatacaksın.'));
  });

  /* Örnek PDF bağlantısı (demo) */
  const dl = document.getElementById('downloadSample');
  if (dl) dl.addEventListener('click', e=>{
    e.preventDefault();
    alert('Örnek bölüm PDF bağlantısını burada sunabilirsiniz.');
  });

  /* ---------------------------
     NAV ve MOBİL MENÜ
     --------------------------- */
  const menuBtn = document.getElementById('menuBtn');
  const desktopNav = document.querySelector('.nav');

  // Mobil menü oluştur
  let mobileNav = document.querySelector('.mobile-nav');
  if (!mobileNav){
    mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    if (desktopNav) mobileNav.innerHTML = desktopNav.innerHTML;
    document.body.appendChild(mobileNav);
  }

  // Yardımcılar
  const isOpen = () => mobileNav.style.display === 'flex';

  function openMobile(){
    mobileNav.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (menuBtn){
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.setAttribute('aria-label', 'Menüyü kapat');
    }
  }

  function closeMobile(){
    mobileNav.style.display = 'none';
    document.body.style.overflow = '';
    if (menuBtn){
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Menüyü aç');
    }
  }

  function toggleMobile(){
    isOpen() ? closeMobile() : openMobile();
  }

  // Hamburger
  if (menuBtn){
    menuBtn.addEventListener('click', toggleMobile);
  }

  // ESC ile kapat
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && isOpen()) closeMobile();
  });

  // Ekran genişleyince mobil menüyü kapat
  window.addEventListener('resize', ()=>{
    if (window.innerWidth > 900 && isOpen()){
      closeMobile();
    }
  });

  /* ---------------------------
     ANASAYFA İÇİ BAĞLANTILAR
     - Masaüstü ve mobil menüdeki #ankor linkleri düzgün çalışır.
     - Sabit header yüksekliği kadar offset vererek kaydırır.
     - Mobil menüde tıklanınca menüyü kapatır.
     --------------------------- */
  function smoothScrollToId(id){
    const target = document.querySelector(id);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    const y = Math.max(absoluteTop - HEADER_HEIGHT - 6, 0);

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  function handleAnchorClick(e){
    const a = e.currentTarget;
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('#')) return; // dış link değilse bırak
    const id = href;

    e.preventDefault();
    if (isOpen()) closeMobile();
    // scroll biraz sonra yapılır ki mobil menü kapanırken takılmasın
    setTimeout(()=> smoothScrollToId(id), 10);
  }

  function wireAnchors(scope){
    scope.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', handleAnchorClick);
    });
  }

  if (desktopNav) wireAnchors(desktopNav);
  wireAnchors(mobileNav);

  /* ---------------------------
     Dış linkler mobilde de çalışır
     (Aynı sayfa içi olmayan href’ler için mobileNav kapanır)
     --------------------------- */
  mobileNav.querySelectorAll('a').forEach(a=>{
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#')) return;
    a.addEventListener('click', ()=>{
      // yeni sayfaya giderken mobil menüyü kapat
      closeMobile();
    });
  });

  /* ---------------------------
     Header sabit kalır (ek bilgi)
     Sticky yerine CSS fixed kullanıyoruz.
     Ekstra JS gerekmez; fakat bazı eski tarayıcı
     hatalarında header pozisyonu şaşarsa aşağıdaki
     dinleyici üstte tuttuğundan problem çıkmaz.
     --------------------------- */
  const header = document.querySelector('.site-header');
  if (header){
    window.addEventListener('scroll', ()=>{
      // Her scroll’da header konumunu sabitler
      header.style.top = '0px';
    }, { passive: true });
  }
})();
