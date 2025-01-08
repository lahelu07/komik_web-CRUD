# Komik Management System

## Deskripsi
Komik Management System adalah aplikasi berbasis web yang memungkinkan pengguna untuk mengelola data komik. Aplikasi ini mendukung operasi CRUD (Create, Read, Update, Delete) dan dibangun dengan:

- **Backend**: Framework Gin menggunakan bahasa Go, dengan GORM untuk ORM dan MySQL sebagai database.
- **Frontend**: React dengan Tailwind CSS untuk desain responsif dan modern.

## Fitur Utama
1. Menampilkan daftar komik.
2. Menambahkan komik baru.
3. Mengedit data komik.
4. Menghapus komik.
5. Validasi input pengguna.

## Tampilan
### 1. Daftar Komik
Menampilkan daftar komik lengkap dengan informasi seperti nama, author, genre, tahun terbit, dan publisher. Disertai opsi untuk mengedit atau menghapus komik.

### 2. Formulir Komik
Formulir untuk menambahkan atau mengedit data komik. Terdapat validasi agar semua field wajib diisi.

### 3. Konfirmasi Hapus
Modal untuk mengonfirmasi penghapusan data komik.

## Instalasi
### Prasyarat
- Node.js (untuk frontend)
- Go (untuk backend)
- MySQL (untuk database)

### Langkah-langkah Backend
1. Clone repository ini:
   ```bash
   git clone <repository_url>
