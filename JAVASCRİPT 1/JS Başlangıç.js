alert("Merhaba Sevgili Okuyucu")

var toplam = 3+5;
document.write(' <br>toplam =  ' + toplam  );
console.log(' <br>toplam =  ' + toplam);

var sayi1 =25;
document.write(' <br>sayi= ' + sayi1);
var sayi2 =3.2;
document.write('<br>sayi= ' + sayi2);
var sayi3 = -3;
document.write('<br>sayi= ' + sayi3);
var dogru=true;
document.write('<br>dogru= ' + dogru);
var yanlis= false;
document.write('<br>yanlis=' + yanlis);
var bos = null;
document.write('<br>bos= ' + bos);
var adiniz = null;
document.write('<br>adınız= ' + adiniz);
var yas;
var sonuc;
var a=2;
var b=9;
var metin1 = "Merhaba";
var metin2 = "Dünya!";
console.log(a+b);
console.log(b++);
console.log(b % a);
console.log(--a);
console.log(metin1 + metin2);
console.log(metin1 += metin2);
console.log(metin1);

var ders = "JavaScript";
if(ders=="JavaScript"){
    console.log("Ders adı "+ders);
}
var ders ="HTML";
if (ders== "JavaScript"){
    console.log("Ders adı "+ ders);
}else {
    console.log("Ders adı JS değil");
}

var ders ="CSS";

if (ders== "JavaScript"){
    console.log("Ders adı Javascript");
}
else if ( ders== "HTML"){
    console.log("Ders adı HTML")
}
else {
    console.log("Ders adı " + ders);
}
var sayi=6;
var sonuc= sayi< 5 ? 'sayi 5 den küçük ' : 'sayi 5 den büyük';
console.log(sonuc);
var gun = new Date();
switch (gun.getDay()) {
    case 1 :
        document.write("<br>Pazartesi<br>");
        break;
    case 2 :
        document.write("<br>Salı <br>");
        break;
    case 3:
        document.write("<br>Çarşamba<br>");
        break;
    case 4 :
        document.write("<br>Perşembe<br>");
        break;
    case 5 :
        document.write("<br>Cuma<br>");
        break;
    case 6 :
        document.write("<br>Cumartesi<br>");
        break;
    case 0 :
        document.write("<br>Pazar <br>");
        break;
}
for (var i=1 ; i<=15; i++){
    document.write('Şu an ki sayi '+ i + '<br>');
}
var i=1;
while (i<5){
    document.write('Şu an ki sayi '+ i + '<br>');
    i++
}
var i = 3;
do {
    document.write('Şu an ki sayi '+ i + '<br>');
    i++
}
while(i<5);

var i=5;
do {
    document.write('Şu an ki sayi '+ i + '<br>');
    i++
}
while (i<5)

var yazarlar= {yazar1 : "Ekrem Özay" , yazar2 : "Yavuz Özay"};
for (yazar in yazarlar){
    document.write(yazarlar[yazar] + "<br>");
}
for (var i=1 ; i<6; i++){
    if (i>= 4){
        break;
    }
    document.write("<h" + i + ">Başlık Bilgisi </h" + i + ">");
}

var renkler = [" kırmızı "," sarı "," yeşil "," mavi ","siyah ","turuncu  "];
document.write(renkler);
document.write(renkler.length);
document.write(renkler[2]);
for (var i =0 ; i<renkler.length; i++){
    document.write(renkler[i] + "<br>");
}
renkler.push( "  gri" , "pembe " );
document.write(renkler + "<br>");
renkler.unshift("fuşya")
document.write( renkler + "<br>");
renkler.pop();
renkler.shift();
document.write(renkler +"<br>");
renkler.splice(2,3);
document.write(renkler);

var renkler1 = [" kırmızı "," sarı "," yeşil "," mavi ","siyah ","turuncu  "];

renkler1.splice(4,0 ,"mor","beyaz");
document.write("<br>" + renkler1 + "<br>");

var aylar = ["Ocak", "Şubat", "Mart"];
var yil = [2018,2019,2020];
var karma = aylar.concat(yil);
document.write(karma + "<br>");

function MerhabaDe1() {
    alert("Merhaba Ekrem")
}
MerhabaDe1();

function MerhabaDe2(uye) {
    alert("Merhaba " +uye);
}
MerhabaDe2("Ekrem Özay");

function MerhabaDe3(uye = 'Ziyaretçi') {
    alert("Merhaba " +uye);
}
MerhabaDe3();



































































































































































