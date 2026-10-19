# NEXORA Digital Studio — Company Profile

Website company profile responsif yang dibuat menggunakan React, Vite, Tailwind CSS v4, dan React Router. NEXORA adalah perusahaan digital fiktif untuk keperluan tugas.

## Identitas Mahasiswa

- **Nama:** [Isi nama lengkap]
- **NIM:** [Isi NIM]
- **Kelas:** [Isi kelas]

> Sebelum dikumpulkan, ganti bagian identitas di atas dengan data mahasiswa yang benar.

## Fitur Website

- **Beranda:** hero section, ringkasan perusahaan, statistik, layanan unggulan, portofolio pilihan, dan ajakan menghubungi.
- **Tentang Kami:** sejarah singkat, visi, misi, nilai kerja, serta profil tim.
- **Layanan:** daftar layanan digital dan tahapan kerja.
- **Portofolio:** galeri contoh proyek dan deskripsi.
- **Kontak:** informasi alamat, email, telepon, media sosial, dan form dengan validasi nama, format email, serta pesan.
- Navigasi memakai React Router.
- Komponen `Navbar`, `Footer`, `SectionHeading`, dan `Card` digunakan ulang.
- Data layanan, tim, dan portofolio disimpan dalam array terpisah dan ditampilkan dengan `map()`.
- Layout responsif menggunakan breakpoint Tailwind `sm`, `md`, dan `lg`.

## Teknologi

- React
- Vite
- Tailwind CSS v4
- React Router DOM
- Lucide React (ikon)

## Cara Menjalankan Project

Pastikan Node.js dan npm sudah terpasang.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan di terminal (biasanya `http://localhost:5173`).

Untuk memeriksa build produksi:

```bash
npm run build
npm run preview
```

## Struktur Folder

```text
src/
├── components/   # Navbar, Footer, Card, SectionHeading
├── data/         # Data layanan, tim, portofolio
├── pages/        # Home, About, Services, Portfolio, Contact
├── App.jsx       # Konfigurasi route
├── main.jsx      # Entry point React
└── index.css     # Import Tailwind dan style dasar
```

## Screenshot Halaman

Sebelum mengumpulkan, jalankan website lalu ambil screenshot aktual untuk setiap halaman. Simpan berkas dengan nama berikut pada folder `screenshots/`, kemudian gambar akan dapat ditampilkan di README GitHub.

### 1. Beranda
![Screenshot Beranda](screenshots/01-beranda.png)

### 2. Tentang Kami
![Screenshot Tentang Kami](screenshots/02-tentang-kami.png)

### 3. Layanan
![Screenshot Layanan](screenshots/03-layanan.png)

### 4. Portofolio
![Screenshot Portofolio](screenshots/04-portofolio.png)

### 5. Kontak
![Screenshot Kontak](screenshots/05-kontak.png)

**Cara mengambil screenshot:** buka masing-masing route di browser, tampilkan halaman dengan rapi, lalu simpan screenshot sebagai PNG menggunakan nama di atas. Buat folder `screenshots` di root project. Pastikan semua gambar ikut di-push ke GitHub. Jangan mengirim README dengan gambar yang belum tersedia.

## Upload ke GitHub

1. Buat repository baru di GitHub dengan nama `nexora-company-profile`.
2. Atur visibilitas repository menjadi **Public**.
3. Pastikan folder `node_modules` tidak ikut diunggah. File `.gitignore` pada project ini sudah mengecualikannya.
4. Jalankan perintah berikut dari folder project:

```bash
git init
git add .
git commit -m "Create NEXORA company profile website"
git branch -M main
git remote add origin https://github.com/USERNAME/nexora-company-profile.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu. Jika repository sudah memiliki README dari GitHub, buat repository kosong saat awal agar tidak terjadi konflik saat push.

## Catatan

NEXORA, data tim, informasi kontak, dan contoh portofolio adalah konten fiktif. Form kontak saat ini hanya melakukan validasi sisi klien dan belum mengirim pesan ke server. Gambar portofolio menggunakan URL gambar eksternal, sehingga memerlukan koneksi internet.
