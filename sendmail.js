const nodemailer = require("nodemailer");
const fs = require("fs");

// Load config
const config = require("./config.json");
const EMAIL = config.email;
const APP_PASSWORD = config.password;

// Load daftar email dari file
const emailList = fs.readFileSync("emails.txt", "utf-8").split("\n").filter(Boolean);

// Buat transporter Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: APP_PASSWORD,
  },
});

// Fungsi kirim email
function kirimEmail(to) {
  const mailOptions = {
    from: EMAIL,
    to: to,
    subject: "Lamaran Pekerjaan",
    text: "Dengan hormat, terlampir CV saya untuk pertimbangan Bapak/Ibu HRD.",
    attachments: [
      {
        filename: "CV-Kamu.pdf",
        path: "./CV-Kamu.pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("❌ Gagal kirim ke " + to + ": ", error);
    }
    console.log("✅ Email terkirim ke " + to + ": " + info.response);
  });
}

// Tambahkan fungsi untuk mengirim email ke semua alamat di daftar
function kirimSemuaEmail() {
  emailList.forEach(email => {
    kirimEmail(email);
  });
}

// Kirim terus setiap 30 detik
setInterval(kirimSemuaEmail, 30000);
