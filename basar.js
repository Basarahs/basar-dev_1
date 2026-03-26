const links=document.querySelectorAll('.navbar a');
const sections=document.querySelectorAll('section');

links.forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=link.dataset.target;
    sections.forEach(sec=>sec.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
    links.forEach(l=>l.classList.remove('active'));
    link.classList.add('active');
  });
});

document.querySelectorAll('[data-target="sorgula"]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    sections.forEach(sec=>sec.classList.add('hidden'));
    document.getElementById('sorgula').classList.remove('hidden');
    links.forEach(l=>l.classList.remove('active'));
    links.forEach(l=>{if(l.dataset.target==="sorgula") l.classList.add('active');});
  });
});

class Arac {
  constructor(plaka,surucuAdi,ehliyetNo,aracMarka,aracRenk){
    this.plaka=plaka; this.surucuAdi=surucuAdi; this.ehliyetNo=ehliyetNo;
    this.aracMarka=aracMarka; this.aracRenk=aracRenk; this.ceza=0; this.cezaTuru="-";
  }
}

const araclar=[
  new Arac("07GUB35","Başar Ahısha","EH123456","Citroen C4","Beyaz"),
  new Arac("34ABC123","Ahmet Yılmaz","EH654321","BMW 320","Siyah"),
  new Arac("06XYZ789","Mehmet Demir","EH987654","Audi A4","Gri")
];

const cezaTurleri=[
  {tur:"Hız İhlali",min:900,max:4000},
  {tur:"Park Yasağı",min:500,max:1000},
  {tur:"Kırmızı Işık",min:1500,max:3000},
  {tur:"Telefon Kullanımı",min:1200,max:2500}
];

const yazdir=(yazi,durum="")=>{
  const alan=document.getElementById("sonucAlani"); 
  alan.className=durum; 
  alan.innerHTML=yazi;
};

function cezaUret(arac){
  const rastgele=cezaTurleri[Math.floor(Math.random()*cezaTurleri.length)];
  arac.cezaTuru=rastgele.tur;
  arac.ceza=Math.floor(Math.random()*(rastgele.max-rastgele.min+1))+rastgele.min;
}

function aracBul(plaka){return araclar.find(a=>a.plaka===plaka);}

function sorgula(){
  const plaka=document.getElementById("plakaKutusu").value.trim().toUpperCase();
  const arac=aracBul(plaka);
  if(arac){
    if(arac.ceza===0) cezaUret(arac);
    yazdir(`🚗 Plaka: ${arac.plaka}<br>
👤 Sürücü: ${arac.surucuAdi}<br>
🪪 Ehliyet: ${arac.ehliyetNo}<br>
🚙 Araç: ${arac.aracMarka}<br>
🎨 Renk: ${arac.aracRenk}<br>
⚠ Ceza: ${arac.cezaTuru}<br>
💰 Borç: ${arac.ceza} TL`,"basarili");
  } else { 
    yazdir("❌ Bu plakaya ait kayıt yok!","hata"); 
  }
}

function ode(){
  const plaka=document.getElementById("plakaKutusu").value.trim().toUpperCase();
  const arac=aracBul(plaka);
  if(arac){
    if(arac.ceza>0){ 
      arac.ceza=0; arac.cezaTuru="-"; 
      yazdir("✅ Ödeme başarılı, borç sıfırlandı!","basarili"); 
    } else yazdir("ℹ️ Zaten borç yok.","hata");
  }
}

document.getElementById("plakaKutusu").addEventListener("keyup",function(e){ 
  if(e.key==="Enter") sorgula(); 
});
document.getElementById("sorguBtn").addEventListener("click",sorgula);
document.getElementById("odemeBtn").addEventListener("click",ode);