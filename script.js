// © RobotBilge Menü & Dinamik Yıl

// Yıl otomatik
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Hamburger menü
const menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    // menüyü gizle / göster
    const visible = getComputedStyle(nav).display !== "none";
    nav.style.display = visible ? "none" : "flex";

    // küçük animasyon için
    if (!visible) {
      nav.style.flexDirection = "column";
      nav.style.gap = "12px";
      nav.style.background = "rgba(0,0,0,0.7)";
      nav.style.position = "absolute";
      nav.style.top = "60px";
      nav.style.right = "20px";
      nav.style.padding = "14px";
      nav.style.borderRadius = "12px";
      nav.style.zIndex = "100";
    }
  });
}

// Sayfa daraldığında (masaüstüne dönülünce) menüyü sıfırla
window.addEventListener("resize", () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  if (window.innerWidth > 900) {
    nav.style.display = "flex";
    nav.style.position = "";
    nav.style.background = "";
    nav.style.padding = "";
  } else {
    nav.style.display = "none";
  }
});
