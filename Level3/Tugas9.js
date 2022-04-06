// 1
// Database adalah sekumpulan data yang yang dapat dikelola dan mempunyai hubungan satu sama lain yang dapat menghasilkan suatu hasil dengan ketentuan tertentu, database juga suatu sistem untuk mengumpulkan file baik berupa tabel, arsip dan sebagainya yang dapat disimpan dalam berbagai media yang berbasis teknologi
/*
Perbedaan SQL dan No SQL adalah => SQL Database nya mempunyai relasi untuk menyimpan data dan mencocokkan data tersebut dengan memakai karakteristik umum di setiap dataset sedangkan No SQL tidak, jadi No SQL ini mekanisme penyimpanan dan pengambilan data yang tidak terstruktur dan dapat menangani sejumlah besar database dengan skema yang dinamis
*/

// 2
// Saya pernah belajar database hanya membuat create database, membuat tabel nya, lalu membuat data baru di dalam tabel, edit data yang ada di dalam tabel, serta hapus data yang ada di dalam tabel.

// 3
// Contoh query SQL:
/* 
- SELECT * FROM Mahasiswa (mengambil semua data yang terdapat dalam ta el mahasiswa)
- INSERT INTO Mahasiswa (NamaMahasiswa, NIM, AsalSekolah)
VALUES ('Herbayu', '4401927739', 'MAN 13 Jakarta'); => menambahkan data baru yang ada di dalam tabel mahasiswa
- UPDATE Mahasiswa
SET NamaMahasiswa = 'Herbayu', AsalSekolah= 'SMAN 38'
WHERE NIM = 4401927739; => update data mahasiswa berdasarkan NIM nya
- DELETE FROM Mahasiswa WHERE NamaMahasiswa='Herbayu'; => menghapus data mahasiswa yang ada di tabel mahasiswa berdasarkan nama
*/

// 4
/*
nama_database = kampus
nama_collection = mahasiswa
nama_field = NIM,Nama, AsalSekolah
query atas find all di mongoDB seperti berikut: 
db.mahasiswa.find() => ini adalah query untuk melihat atau mencari data yang ada
db.mahasiswa.find().pretty() => ini adalah query untuk melihat atau mencari data yang ada dengan tampilan yang better
*/
