const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62],
];
//Derslerin not toplami bulundu ortalamasi alindi
function NotOrtalamasi(pIndex, pDersListesi) {
    let toplam = 0;
    for (let i = 0; i < pDersListesi.length; i += 1) {
        toplam += pDersListesi[i][pIndex];
    }
    return toplam / notes.length;
}
let MatOrtalama = NotOrtalamasi(1, notes);
let AlmOrtalama = NotOrtalamasi(2, notes);
let IngOrtalama = NotOrtalamasi(3, notes);
let CogOrtalama = NotOrtalamasi(4, notes);

console.log("Matematik ortalama: " + MatOrtalama);
console.log('=========')
console.log("Almanca ortalama: " + AlmOrtalama);
console.log('=========')
console.log("Ingilizce ortalama: " + IngOrtalama);
console.log('=========')
console.log("Cografya ortalama: " + CogOrtalama);
console.log('=========')

//Herhangi bir ders diye belirtildigi icin Matematik dersini ele alip 70 ustu not alanlari bulup yazdik
let Liste = [];

function YetmisUstu(pIndex, pDersListesi, pDersAdi) {
    for (let i = 0; i < pDersListesi.length; i+=1) {
        if (pDersListesi[i][1] > 70) {
            Liste.push(pDersListesi[i][0]);
        }
    }
    console.log(pDersAdi + " 70 ustu alanlar:" + Liste);
}
YetmisUstu(1, notes, "Matematik'ten");
console.log('=========')

//Her derste Ortalamanin Ustunde olanlarlarin listesi
function OrtalamaUStu(pIndex, pDersAdi, plist, DersOrtalamasi) {
    let Ortalama = [];
    for (let i = 0; i < notes.length; i += 1) {
        if (plist[i][pIndex] > DersOrtalamasi) {
            Ortalama.push(plist[i][0]);
        }
    }
    console.log(pDersAdi + " Ortalamanin ustunde olanlar: " + Ortalama);
}
OrtalamaUStu(1, "Matematik", notes, MatOrtalama);
console.log('=========')
OrtalamaUStu(2, "Almanca", notes, AlmOrtalama);
console.log('=========')
OrtalamaUStu(3, "Ingilizce", notes, IngOrtalama);
console.log('=========')
OrtalamaUStu(4, "Cografya", notes, CogOrtalama);
console.log('=========')

//Hangi derste daha basarili oldugunu belirtme
function YuksekNotDers() {
    let OrtalamaListesi = [ MatOrtalama,AlmOrtalama,IngOrtalama,CogOrtalama];
    let BasariliDers = Math.max.apply(0, OrtalamaListesi);
    
    if (BasariliDers == MatOrtalama) {
        console.log("Basarili ders: Matematik");
    } else if (BasariliDers == AlmOrtalama) {
        console.log("Basarili ders: Almanca ");
    } else if (BasariliDers == IngOrtalama) {
        console.log("Basarili ders: Ingilizce");
    } else {
        console.log("Basarili ders: Cografya");
    }
}
YuksekNotDers();
console.log('=========')

//Hangi derste basarisiz oldugunu bulma
function DusukNotDers() {
    let OrtalamaListesi = [MatOrtalama,AlmOrtalama,IngOrtalama,CogOrtalama];
    let BasarisizDers = Math.min.apply(0, OrtalamaListesi);
    
    if (BasarisizDers == MatOrtalama) {
        console.log("Basarisiz ders: Matematik");
    } else if (BasarisizDers == AlmOrtalama) {
        console.log("Basarisiz ders: Almanca");
    } else if (BasarisizDers == IngOrtalama) {
        console.log("Basarisiz ders: Ingilizce");
    } else {
        console.log("Basarisiz ders: Cografya");
    }
}
DusukNotDers();
console.log('=========')

//Her dersten ayri ayri en iyi not alan ogrenciyi bulma
function EnIyiOgrenci(pIndex, pDersAdi) {
    let YuksekNot = notes[0][pIndex];
    let EnIyiOgrenci = "";
    for (i = 0; i < notes.length; i += 1) {
        if (notes[i][pIndex] >= YuksekNot) {
            YuksekNot = notes[i][pIndex];
            EnIyiOgrenci = notes[i][0];
        }
    }
    console.log(pDersAdi + " yuksek not alan: " + EnIyiOgrenci);
}

EnIyiOgrenci(1, "Matematik'ten");
console.log('=========')
EnIyiOgrenci(2, "Almanca'dan");
console.log('=========')
EnIyiOgrenci(3, "Ingilizce'den");
console.log('=========')
EnIyiOgrenci(4, "Cografya'dan");