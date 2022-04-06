// 1
// Array adalah suatu tipe data yang memiliki berbagai macam value dan bisa menyimpan tipe data apa saja, seperti string, integer, objek bahkan array juga atau array dalam array, yang mana array harus diawali dengan kurung siku []
// Objek adalah Tipe data yang diawali dengan kurung kurawal {}, yang mana isi nya harus ada key dan value nya, dan jika banyak isinya maka harus dipisahkan dengan koma

// 2
let hobi = ["Sepak Bola", "Coding", "Travelling"];

// 3
const saya = {
  nama: "Herbayu",
  umur: 24,
  alamat: "Jl. Dedet GG.Buntu No.86 RT 002/017 Kel.Beji, Kec.Beji, Kota Depok 16421",
  hobi: hobi,
};

// 4
const sekolah = [
  {
    namaSekolah: "SDN Beji Timur 1",
    jurusan: undefined,
    tahunMasuk: 2002,
    tahunKeluar: 2008,
  },
  {
    namaSekolah: "SMP Negeri 5 Depok",
    jurusan: undefined,
    tahunMasuk: 2008,
    tahunKeluar: 2011,
  },
  {
    namaSekolah: "MAN 13 Jakarta",
    jurusan: "IPS",
    tahunMasuk: 2011,
    tahunKeluar: 2014,
  },
  {
    namaSekolah: "Politeknik Negeri Jakarta",
    jurusan: "Akuntansi",
    tahunMasuk: 2014,
    tahunKeluar: 2018,
  },
];

console.log(hobi);
console.log(saya);
console.log(sekolah);
