class Arac {
    constructor(plaka, ceza, surucuAdi, ehliyetNo, aracMarka, aracRenk){
        this.plaka = plaka;
        this.ceza = ceza;
        this.surucuAdi = surucuAdi;
        this.ehliyetNo = ehliyetNo;
        this.aracMarka = aracMarka;
        this.aracRenk = aracRenk;
    }
}

const arac = new Arac(
    "07GUB35",
    0,
    "Başar Ahısha",
    "EH123456",
    "Citroen c4 Cactus",
    "Beyaz"
);

const jsonVeri = JSON.stringify(arac);
const aracJSON = JSON.parse(jsonVeri);

const { plaka, ceza, surucuAdi, ehliyetNo, aracMarka, aracRenk } = aracJSON;


const cezaTurleri = [
    { tur: "Hız İhlali", min: 900, max: 3500 },
    { tur: "Park Yasağı", min: 500, max: 1000 },
    { tur: "Kırmızı Işık İhlali", min: 1500, max: 3000 },
    { tur: "Emniyet Kemeri Takmama", min: 700, max: 1500 },
    { tur: "Telefonla Konuşma", min: 1200, max: 2500 },
    { tur: "Şerit İhlali", min: 900, max: 2200 },
    { tur: "Trafik Levhasına Uymama", min: 800, max: 2000 },
    { tur: "Muayenesiz Araç Kullanma", min: 1500, max: 4000 }
];


const rastgele = cezaTurleri[Math.floor(Math.random() * cezaTurleri.length)];

const cezaTuru = rastgele.tur;

let cezaMiktari =
    Math.floor(Math.random() * (rastgele.max - rastgele.min + 1)) +
    rastgele.min;

const sabitPlaka = plaka;

const yazdir = (yazi) => {
    document.getElementById("sonucAlani").innerHTML = yazi;
};

async function sorgula() {

    const girilenPlaka = document.getElementById("plakaKutusu").value;

    if (girilenPlaka === sabitPlaka) {
        yazdir(
            "🚗 Plaka: " + plaka + "<br>" +
            "👤 Sürücü: " + surucuAdi + "<br>" +
            "🪪 Ehliyet No: " + ehliyetNo + "<br>" +
            "🚙 Araç: " + aracMarka + "<br>" +
            "🎨 Araç Renk: " + aracRenk + "<br>" +
            "⚠ Ceza Türü: " + cezaTuru + "<br>" +
            "💰 Güncel Borç: " + cezaMiktari + " TL"
        );
    } else {
        yazdir("❌ Kayıt bulunamadı.");
    }
}

async function ode() {

    const girilenPlaka = document.getElementById("plakaKutusu").value;

    if (girilenPlaka === sabitPlaka) {
        cezaMiktari = 0;
        alert("Ödeme alındı, borç sıfırlandı.");
        sorgula();
    }
}

document.getElementById("plakaKutusu").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sorgula();
    }
});