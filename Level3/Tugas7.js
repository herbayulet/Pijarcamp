// 1
let printTriangle = (num) => {
  let s = "";
  for (let a = 1; a <= num; a++) {
    for (let b = 1; b <= a; b++) {
      s += "*";
    }
    s += "\n";
  }
  return s;
};
console.log(printTriangle(5));

// 2
let printSquare = (num) => {
  let hasil = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
};
console.log(printSquare(4));
