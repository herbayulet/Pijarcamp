// 1
// Looping adalah Sebuah proses dimana baris kode di eksekusi secara berulang-ulang sampai batas stoper yang sudah di tentukan nya atau selama kondisi itu sudah benar semisal <10 atau <=10

// for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

const nomor = [1, 2, 3, 4, 5];
let txt = "";
// for in
for (let x in nomor) {
  txt += nomor[x];
}
console.log(txt);
// for of
for (let y of nomor) {
  txt += y;
}
console.log(txt);
// while
let start = 1;
while (start <= 10) {
  txt += `ayo berhitung ${start} \n`;
  start++;
}
console.log(txt);
// do while
do {
  txt += `ayo berhitung ${start} \n`;
  start++;
} while (start < 10);
console.log(txt);

// 2
function printNumber(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}
printNumber(3);

// 3
function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
}
cekGanjilGenap(4);
cekGanjilGenap(7);
