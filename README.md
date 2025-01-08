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
 ```
 git clone <repository_url>
 ```
2. Masuk ke direktori backend:
  ```bash
  cd backend
  ``` 
3. Instal dependensi:
  ```bash
   go mod tidy
  ```
4. Atur koneksi database di file config/database.go:
 ```bash
   dsn := "root:@tcp(127.0.0.1:3306)/komik?charset=utf8mb4&parseTime=True&loc=Local"
 ```
5. Jalankan server:
 ```bash
   go run main.go
 ```
6. Server akan berjalan di http://localhost:8081.

### Langkah-langkah Frontend

1. Masuk ke direktori frontend:
 ```bash
   cd frontend
 ```
2. Instal dependensi:
 ```bash
   npm install
 ```
3. Jalankan aplikasi:
```
npm run dev
```
4. Frontend akan berjalan di http://localhost:5173.

## Struktur Folder
### Struktur Direktori

```bash
Komik-Management-System/
|— backend/
|   |— config/
|   |   — database.go
|   |— controllers/
|   |   — komik_controller.go
|   |— models/
|   |   — komik.go
|   |— routes/
|   |   — komik_routes.go
|   |— main.go
|— frontend/
    |— src/
        |— components/
        |   — KomikDeleteModal.jsx
        |   — KomikForm.jsx
        |   — KomikList.jsx
        |— App.jsx
        |— main.jsx
```

Teknologi yang Digunakan
- Backend: Go, Gin, GORM, MySQL
- Frontend: React, Axios, Tailwind CSS

##Penggunaan
### Cara Penggunaan

1. Buka aplikasi frontend di http://localhost:5173.

2. Tambahkan data komik melalui formulir.

3. Edit atau hapus komik sesuai kebutuhan.

## Tambahan
### Kontribusi

Pull request dipersilakan. Untuk perubahan besar, harap buka issue terlebih dahulu untuk mendiskusikan apa yang ingin Anda ubah.

### Lisensi

Proyek ini menggunakan lisensi MIT.

