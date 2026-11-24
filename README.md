# 225_JWT - Web Service API with Express, Sequelize & JWT

Proyek tugas Pemrograman Web Service (PWS Meet 11) - Implementasi REST API Komik dengan Autentikasi JSON Web Token (JWT) dan PostgreSQL.

## Fitur
- **Autentikasi User**:
  - `POST /api/register` : Registrasi akun baru (password di-hash dengan bcrypt).
  - `POST /api/login` : Autentikasi user dan pembuatan JWT token.
- **CRUD Komik**:
  - `GET /api/komik` : Mengambil seluruh data komik (Public).
  - `GET /api/komik/:id` : Mengambil detail komik berdasarkan ID (Public).
  - `POST /api/komik` : Menambahkan komik baru (Protected - Butuh Token JWT).
  - `PUT /api/komik/:id` : Memperbarui data komik (Protected - Butuh Token JWT).
  - `DELETE /api/komik/:id` : Menghapus data komik (Protected - Butuh Token JWT).

## Setup & Instalasi
1. Clone repository:
   ```bash
   git clone https://github.com/Riky900/225_JWT.git
   cd 225_JWT
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Konfigurasi environment:
   Salin `.env.example` menjadi `.env` dan sesuaikan kredensial database PostgreSQL Anda.
4. Jalankan server:
   ```bash
   npm start
   ```
