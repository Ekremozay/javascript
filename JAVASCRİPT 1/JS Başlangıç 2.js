function OrtalamHesapla(not1,not2,not3) {
    var ortalama = not1 + not2 + not3;
    var sonuc = ortalama/3;

    return sonuc;

}
document.write("Sınıf Not Ortalaması :  " + OrtalamHesapla(70,20,90) +"<br>");

var Not = OrtalamHesapla(70,20,90);
document.write("Not : " + Not  + "<br>");

function  merhaba() {
    document.write("Merhaba" + nasılsın() +"<br>");
}
function nasılsın() {
    return "bugün nasılsın ?"
}
merhaba();

var insan = {
    isim : "Ahmet",
    yas : 32 ,
    boy : 183 ,
    sac : "Siyah"
}
document.write(insan.isim + " " + insan.yas +" " + insan.boy + " " +insan.sac + "<br>");
 insan.kilo= 75 ;
 insan.yas = 35;
 delete  insan.sac;
for (var ozellik in insan){
    document.write(insan[ozellik] + "<br>");
}

var metin = "Front End Developer"

document.write("<br>" + metin.length + "<br>");
document.write(metin.toUpperCase() + "<br>");
document.write(metin.toLowerCase() + "<br>");
document.write(metin.slice(5,11) + "<br>");
document.write(metin.replace("Front" , "End" ) + "<br>"+ "<br>")+ "<br>";

var sayi = 5.7;

document.write(Math.floor(sayi) + "<br>");
document.write(Math.ceil(sayi) + "<br>");
document.write(Math.round(sayi) + "<br>");
document.write(Math.random() + "<br>");
document.write(Math.max(324,296) + "<br>");
document.write(Math.min(234,296) + "<br> <br>");

var tarih = new Date();
document.write("Gün" + tarih.getDate() + "<br>");
document.write("Haftanın Günü " + tarih.getDay() + "<br>");
document.write("Ay" + tarih.getMonth() + "<br>");
document.write("Yıl" + tarih.getFullYear() + "<br><br>");

tarih.setDate(3);
tarih.setMonth(7);
tarih.setFullYear(2000);

document.write("Gün " + tarih.getDate() + "<br>");
document.write("Ay " + tarih.getMonth() + "<br>");
document.write("Yıl " + tarih.getFullYear() + "<br>" );

var zaman = new Date();

document.write("Saat  : " + zaman.getHours() + "<br>");
document.write("Dakika  : " + zaman.getMinutes() + "<br>");
document.write("Saniye  : " + zaman.getSeconds() + "<br>");
document.write("Milisaniye  : " + zaman.getMilliseconds() + "<br>");






















































