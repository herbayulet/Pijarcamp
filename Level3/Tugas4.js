// 1
// Cara membuat kondisional if else yaitu, pertama kita mengetik if(parameter) {
// ini adalah isi dari jika if menerima parameter yang sesuai maka return nya ada di dalam block scope ini
// } else {
// ini adalah return dari else nya jika pilihan dari if tidak menerima parameter yang sesuai
// }

// 2
const cekParameter = (x) => {
  if (x === 0) {
    return `Ini parameter nya ${x}`;
  } else {
    return `Tidak ada parameter yang diberikan`;
  }
};

console.log(cekParameter(0));
console.log(cekParameter(1));
