function scrollToGames() {
  const section = document.getElementById("oyunlar");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function showGame(gameId) {
  const oyunIsimleri = {
    akisyap: "Akýþ Diyagramý Bulmacasý",
    sqlav: "SQL Hazine Avý",
    aiDedektif: "Yapay Zeka Dedektifi"
  };
  alert(`${oyunIsimleri[gameId]} bölümü yakýnda eklenecek! ??`);
}
