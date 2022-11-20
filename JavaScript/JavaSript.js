/* operator matematika */
let x = 20;
let y = 10;
function metematika (x,y) {
  return x + y;
}
document.getElementById("MTK").innerHTML = metematika(x,y);

function pencet() {
  document.getElementById("demo").style.display = "block";
  document.getElementById("demo1").style.display = 'block';
  document.getElementById("waw").style.display = "none";
}

let header = "apa ini kawan?"
let tags = ["nomor satu ", " nomor dua ", " nomor tiga"]

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`
document.getElementById("demo1").innerHTML = html;
document.getElementById("demo1").style.display = 'block';
document.getElementById("demo1").style.listStyleType = "none";

function teken() {
  document.getElementById("demo2").style.backgroundColor = "black";
  document.getElementById("demo2").style.color = "white";
  document.getElementById("demo2").style.display = "block";
}

function sapi() {
  document.getElementById("waw").style.display = "block";
  document.getElementById("demo2").style.display = "none";
  document.getElementById("demo1").style.display = 'none';
  document.getElementById("demo").style.display = "none";
}

function tombol1() {
  document.getElementById("body").style.backgroundColor = "black";
  document.getElementById("body").style.color = "white";
}

function tombol2() {
  document.getElementById("body").style.backgroundColor = "white";
  document.getElementById("body").style.color = "black";
}
/*
return x - y;
return c = x * y;
return d = x / y;
return e = x % y;
return f = x++;
return g = x--;
return h = x ** y; or h = Math.pow(x,2);
return i = x + y * a;  perkalian dan pembagian didahulukan 
return j = (x + y) * b;  didalam kurung didahulukan 
return x += 1;
return y -= 2;
return a *= 3;
return g /= 4;
return a %= 5;
return a **= 6;
return a <<= y;
return a >>= y;
return a >>>= y;
return a &= y;
return a ^= 20;
return a |= 20;
const point = [40, 100, 1, 5, 25, 10];
point.sort(function(a, b){return a - b}); untuk mensortir angka dari paling kecil
point.sort(function(a, b){return b - a}); untuk mensortir angka dari paling besar
/*menyortir array dengan acak 
const point = [40, 100, 1, 5, 25, 10];

for (let i = point.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = point[i];
    point[i] = point[j];
    point[j] = k;
}
/* menentukan nilai tertinggi dan terendah
const point = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

function myArrayMax(arr) {
    let len = arr.length;
    let max = -infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

function myArrayMin(arr) {
    let len = arr.length;
    let min = infinity;
    while (len--) {
        if (arr[len] < max) {
            max = arr[len];
        }
    }
    return min;
}

/* menyortir array objek
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

cars.sort(function(a, b){return a.year - b.year});
displayCars();

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

function myFunction() {
  cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  displayCars();
}

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

/* menulis ke dalam elemen menggunakan innerHTML*/
/* menulis ke dalam output menggunakan document.write()*/
/* menulis ke dalam kotak peringatan menggunakan window.alert()*/
/* menulis ke consol browser menggunakan console.log()*/