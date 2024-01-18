/*Random sayı olusturma yerı */
function randomnumber1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
/*2. numara */
function randomnumber2(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
//dosya resim değiştirme işlemi yapıldı.
var sayi1 = String(randomnumber1(1,6));
var sayi2 = String( randomnumber2(1,6));
var intsayi1 = parseInt(sayi1);
var intsayi2 = parseInt(sayi2);
  var arndomdiceimage = "images/dice" + sayi1 + ".png";
  var randomdiceimage = "images/dice" + sayi2 + ".png";
  document.querySelector("img.img1").setAttribute("src",arndomdiceimage);
  document.querySelector("img.img2").setAttribute("src",randomdiceimage);
//========================================================
if(intsayi1 > intsayi2)
{
    document.querySelector("h1").innerHTML= "Player 1 wins";
    
}
else if ( intsayi2 > intsayi1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML = "Both player wins";
}


