document.getElementById("securityForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const honeypot = document.getElementById("hp_field").value;
  const resultDiv = document.getElementById("result");

  // Jika field honeypot terisi, kemungkinan besar bot otomatis
  if (honeypot !== "") {
    resultDiv.textContent = "Bot terdeteksi dan telah diblokir.";
  } else {
    resultDiv.textContent = "Selamat, Anda manusia!";
    // Di sini Anda bisa menambahkan logika lebih lanjut misalnya mengarahkan pengguna
    // atau mencatat aktivitas yang dianggap aman.
  }
});
