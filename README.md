# 📧 Auto Send Job Application Email 
## Created by: amfuzi-code (ozi)
Project ini dibuat untuk mempermudah pengiriman lamaran kerja ke banyak perusahaan sekaligus menggunakan Node.js dan Nodemailer.
Daripada kirim email manual satu per satu, script ini akan mengirim otomatis berdasarkan daftar email yang sudah disiapkan. 🚀
### ✨ Fitur
- Kirim email lamaran kerja otomatis ke banyak perusahaan.

- Interval waktu antar pengiriman (default: 5 menit).

- Support attachment (misalnya CV dalam format PDF).

- Konfigurasi email & password lebih aman via config.json.

- config.json, emails.txt, dan CV.pdf otomatis diabaikan dengan .gitignore.

# 🚀 Cara jalanin script sendmail.js di Termux

1.) Masuk ke foldernya
Kalau file kamu ada di Documents/send_mail, jalankan:

- cd ~/storage/downloads/job-application-sender


2.) Cek isinya

- ls

- (Harusnya muncul sendmail.js)


3.) Install Node.js (kalau belum)

- pkg update && pkg upgrade -y
- pkg install nodejs -y


4.) Install Nodemailer

- npm init -y
- npm install nodemailer


5.) Jalankan script

- node sendmail.js

# 📂 Struktur Project

├── sendmail.js     
├── config.json     
├── emails.txt      
├── CV.pdf          
└── .gitignore
