// Mengambil elemen HTML menggunakan ID
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let result = document.getElementById("result");
let next = document.getElementById("next");

// Variabel untuk menyimpan angka dan operasi matematika
let num1, num2, op, correctAnswer;

// Menghasilkan pertanyaan pertama saat halaman dimuat
generateQuestion();

// Menangani pengiriman formulir (jawaban)
document.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Memeriksa apakah jawaban benar
  if (parseInt(answer.value) == correctAnswer) {
    result.innerHTML = "Jawaban benar!";
    next.style.display = "inline";
  } else {
    result.innerHTML = "Jawaban salah. Coba lagi!";
  }
});

// Menangani klik pada tombol "Selanjutnya"
document.addEventListener("click", function(event) {
  // Memeriksa apakah yang diklik adalah tombol "Selanjutnya"
  if (event.target.id == "next") {
    // Menghasilkan pertanyaan baru dan mengatur ulang elemen HTML
    generateQuestion();
    answer.value = "";
    result.innerHTML = "";
    next.style.display = "none";
  }
});

// Fungsi untuk menghasilkan pertanyaan matematika acak
function generateQuestion() {
  // Menghasilkan dua angka acak, operasi matematika acak, dan eksponen acak
  num1 = Math.floor(Math.random() * 100) + 1;
  num2 = Math.floor(Math.random() * 100) + 1;
  op = Math.floor(Math.random() * 5); // Menambahkan operasi perhitungan
  
  // Menetapkan pertanyaan berdasarkan operasi matematika yang dihasilkan
  switch (op) {
    case 0:
      question.innerHTML = num1 + " + " + num2 + " = ?";
      correctAnswer = num1 + num2;
      break;
    case 1:
      question.innerHTML = num1 + " - " + num2 + " = ?";
      correctAnswer = num1 - num2;
      break;
    case 2:
      question.innerHTML = num1 + " * " + num2 + " = ?";
      correctAnswer = num1 * num2;
      break;
    case 3:
      question.innerHTML = num1 + " / " + num2 + " = ?";
      correctAnswer = num1 / num2;
      break;
    case 4:
      question.innerHTML = num1 + " ^ " + num2 + " = ?";
      correctAnswer = Math.pow(num1, num2);
      break;
    default:
      break;
  }
}
