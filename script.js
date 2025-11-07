document.getElementById('year').textContent = new Date().getFullYear();

// demo activity events
document.querySelectorAll('[data-activity]').forEach(b=>{
  b.addEventListener('click', ()=> alert('Bu bir demo. Gerçek oyunu burada başlatacaksın.'));
});

// sample download
const dl = document.getElementById('downloadSample');
if (dl) dl.addEventListener('click', e=>{
  e.preventDefault();
  alert('Örnek bölüm PDF bağlantısını burada sunabilirsiniz.');
});

// mobile menu
const menuBtn = document.getElementById('menuBtn');
if (menuBtn){
  menuBtn.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const visible = getComputedStyle(nav).display !== 'none';
    nav.style.display = visible ? 'none' : 'flex';
  });
}
