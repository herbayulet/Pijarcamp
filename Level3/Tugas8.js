// 1
function pijarCamp(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("Pijarcamp");
    } else if (i % 3 === 0) {
      arr.push("Pijar");
    } else if (i % 5 === 0) {
      arr.push("Camp");
    } else {
      arr.push(i);
    }
  }
  //   return arr.toString();
  return arr;
}
console.log(pijarCamp(15));

// 2
function ubahKata(a, b, c) {
  let Split = c.split("").toString();
  for (let i = 0; i < Split.length; i++) {
    if (Split[i] == a) {
      return Split[i].replace(/"a"/g, b);
    } else {
      return c.replace(/a/g, b);
    }
  }
  return Split.join("");
}
console.log(ubahKata("a", "o", "Purwakarta"));
