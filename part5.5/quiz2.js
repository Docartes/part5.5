// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);

let sentence = "Kurang tahu bang, masih belajar";
let firstWord = sentence[0] + sentence[1] + sentence[2] + sentence[3] + sentence[4] + sentence[5];

// ---------------------------------------
console.log('First Word: ' + firstWord);
// ---------------------------------------