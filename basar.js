document.addEventListener("DOMContentLoaded", () => {

  const arac = {
    plaka: "07GUB35",
    surucu: "Başar Ahısha",
    ehliyet: "EH123456",
    marka: "Citroen C4",
    renk: "Beyaz",
    ceza: 2000,
    cezaTuru: "Hız İhlali"
  };

  const links = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.dataset.target;
      sections.forEach(sec => sec.classList.add('hidden'));
      document.getElementById(target).classList.remove('hidden');
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  function sorgula() {
    const plaka = document.getElementById("plakaKutusu").value.toUpperCase();
    const alan = document.getElementById("sonucAlani");

    if(plaka === arac.plaka){
      alan.innerHTML = `🚗 Plaka: ${arac.plaka}<br>
👤 Sürücü: ${arac.surucu}<br>
🪪 Ehliyet: ${arac.ehliyet}<br>
🚙 Araç: ${arac.marka}<br>
🎨 Renk: ${arac.renk}<br>
⚠ Ceza: ${arac.cezaTuru}<br>
💰 Borç: ${arac.ceza} TL`;
    } else {
      alan.innerHTML = "❌ Kayıt bulunamadı.";
    }
  }

  function ode() {
    const plaka = document.getElementById("plakaKutusu").value.toUpperCase();
    if(plaka === arac.plaka){
      arac.ceza = 0;
      alert("Ödeme alındı, borç sıfırlandı.");
      sorgula();
    }
  }

  document.getElementById("sorguBtn").addEventListener("click", sorgula);
  document.getElementById("odemeBtn").addEventListener("click", ode);
  document.getElementById("plakaKutusu").addEventListener("keyup", e => {
    if(e.key === "Enter") sorgula();
  });

});