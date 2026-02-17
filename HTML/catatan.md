# Basic HTML

**Tag — Deskripsi (Indonesia)** — *Contoh singkat*

* `<!DOCTYPE>` — Menentukan tipe dokumen (HTML5).

  ```html
  <!DOCTYPE html>
  ```

* `<html>` — Menandai awal dan akhir dokumen HTML.

  ```html
  <html lang="id">...</html>
  ```

* `<head>` — Tempat metadata seperti judul, link CSS, meta tag.

  ```html
  <head>
    <meta charset="utf-8">
  </head>
  ```

* `<title>` — Judul halaman yang tampil di tab browser.

  ```html
  <title>Halaman Saya</title>
  ```

* `<body>` — Isi utama halaman (yang terlihat pengguna).

  ```html
  <body>
    <h1>Halo!</h1>
  </body>
  ```

* `<h1>` sampai `<h6>` — Judul/heading, `<h1>` paling besar sampai `<h6>` paling kecil.

  ```html
  <h1>Judul Utama</h1>
  <h3>Sub Judul</h3>
  ```

* `<p>` — Paragraf teks.

  ```html
  <p>Ini paragraf pertama saya.</p>
  ```

* `<br>` — Pindah baris (line break) satu baris.

  ```html
  Baris satu.<br>Baris dua.
  ```

* `<hr>` — Garis horizontal untuk pemisah tema/section.

  ```html
  <p>Bagian A</p>
  <hr>
  <p>Bagian B</p>
  ```

* `<!-- ... -->` — Komentar yang tidak ditampilkan di browser.

  ```html
  <!-- Ini komentar untuk developer -->
  ```

---

# Formatting (Pemformatan teks)

*Keterangan dan contoh singkat — beberapa tag sudah usang (deprecated) diberi catatan.*

* `<acronym>` — **Deprecated** di HTML5. Gunakan `<abbr>`.

* `<abbr>` — Mendefinisikan singkatan atau akronim.

  ```html
  <p><abbr title="HyperText Markup Language">HTML</abbr></p>
  ```

* `<address>` — Informasi kontak penulis atau pemilik dokumen.

  ```html
  <address>Kontak: email@contoh.com</address>
  ```

* `<b>` — Teks tebal (visual saja, bukan penting).

  ```html
  <p>Ini <b>tebal</b> teks.</p>
  ```

* `<bdi>` — Mengisolasi teks yang mungkin berlawanan arah (useful untuk bahasa RTL/LTR).

  ```html
  <p>Nama: <bdi>اسم</bdi></p>
  ```

* `<bdo>` — Meng-override arah teks (mis. `dir="rtl"`).

  ```html
  <p><bdo dir="rtl">teks dibalik</bdo></p>
  ```

* `<big>` — **Deprecated**. Gunakan CSS.

* `<blockquote>` — Kutipan panjang dari sumber lain.

  ```html
  <blockquote>Ini kutipan panjang...</blockquote>
  ```

* `<center>` — **Deprecated**. Gunakan CSS (`text-align:center`).

* `<cite>` — Judul karya atau referensi.

  ```html
  <p>Menurut <cite>Harry Potter</cite></p>
  ```

* `<code>` — Menandai potongan kode.

  ```html
  <p>Contoh: <code>console.log('hi')</code></p>
  ```

* `<del>` — Teks yang dihapus (strikethrough semantik).

  ```html
  <p><del>Harga lama</del> Harga baru</p>
  ```

* `<dfn>` — Menandai istilah yang didefinisikan.

  ```html
  <p><dfn>API</dfn> = Application Programming Interface</p>
  ```

* `<em>` — Penekanan (sering tampil miring).

  ```html
  <p>Ini <em>penting</em>.</p>
  ```

* `<font>` — **Deprecated**. Gunakan CSS.

* `<i>` — Teks bergaya miring (alternate voice).

  ```html
  <p>Teks <i>miring</i></p>
  ```

* `<ins>` — Teks yang ditambahkan (inserted).

  ```html
  <p>Versi baru <ins>ditambahkan</ins></p>
  ```

* `<kbd>` — Input dari keyboard.

  ```html
  Tekan <kbd>Ctrl</kbd> + <kbd>C</kbd>
  ```

* `<mark>` — Teks yang diberi tanda/ditandai (highlight).

  ```html
  <p>Gunakan <mark>kata kunci</mark> ini.</p>
  ```

* `<meter>` — Menggambarkan nilai scalar dalam rentang (mis. progress kecil).

  ```html
  <label>Download: <meter value="0.6" min="0" max="1">60%</meter></label>
  ```

* `<pre>` — Teks preformatted (spasi dan baris dipertahankan).

  ```html
  <pre>
  baris 1
    spasi tetap
  </pre>
  ```

* `<progress>` — Menampilkan progress tugas.

  ```html
  <progress value="30" max="100">30%</progress>
  ```

* `<q>` — Kutipan pendek inline (menambah tanda kutip otomatis di browser).

  ```html
  <p>Dia bilang <q>halo</q> kemarin.</p>
  ```

* `<rp>`, `<rt>`, `<ruby>` — Untuk anotasi ruby (bahasa Asia, pelafalan).

  ```html
  <ruby>漢<rt>kan</rt></ruby>
  ```

* `<s>` — Teks yang tidak lagi benar (strikethrough semantik).

  ```html
  <p><s>Informasi lama</s></p>
  ```

* `<samp>` — Contoh output program.

  ```html
  <p>Output: <samp>OK</samp></p>
  ```

* `<small>` — Teks lebih kecil.

  ```html
  <p><small>Catatan kaki</small></p>
  ```

* `<strike>` — **Deprecated**. Gunakan `<del>` atau `<s>`.

* `<strong>` — Menandai teks penting (biasanya tebal).

  ```html
  <p><strong>PENTING:</strong> baca instruksi.</p>
  ```

* `<sub>` — Subscript.

  ```html
  H<sub>2</sub>O
  ```

* `<sup>` — Superscript.

  ```html
  x<sup>2</sup>
  ```

* `<template>` — Konten tersembunyi yang bisa dipakai melalui JS.

  ```html
  <template id="card">
    <div class="card">...</div>
  </template>
  ```

* `<time>` — Menyimpan waktu atau tanggal (bisa dipakai mesin).

  ```html
  <time datetime="2026-02-15">15 Feb 2026</time>
  ```

* `<tt>` — **Deprecated**. Gunakan CSS (monospace).

* `<u>` — Menandai teks dengan gaya berbeda (bukan link).

  ```html
  <p><u>Teks bergaris bawah</u></p>
  ```

* `<var>` — Menandai variabel.

  ```html
  <p>Gunakan <var>n</var> sebagai jumlah.</p>
  ```

* `<wbr>` — Menandai titik yang memungkinkan pemecahan kata ketika perlu.

  ```html
  supercalifrag<wbr>ilistic
  ```

---

# Forms and Input (Formulir & Input)

* `<form>` — Membungkus input yang dikirim ke server atau diproses JS.

  ```html
  <form action="/submit" method="post">...</form>
  ```

* `<input>` — Kontrol input (text, radio, checkbox, dll).

  ```html
  <input type="text" name="nama" placeholder="Nama">
  <input type="checkbox" name="setuju">
  ```

* `<textarea>` — Area teks multi-baris.

  ```html
  <textarea name="pesan" rows="4"></textarea>
  ```

* `<button>` — Tombol klik.

  ```html
  <button type="submit">Kirim</button>
  ```

* `<select>` — Dropdown list.

  ```html
  <select name="kota">
    <option value="jkt">Jakarta</option>
  </select>
  ```

* `<optgroup>` — Mengelompokkan opsi di dropdown.

  ```html
  <select>
    <optgroup label="Buah">
      <option>Apel</option>
    </optgroup>
  </select>
  ```

* `<option>` — Satu pilihan dalam `<select>`. (contoh di atas)

* `<label>` — Label untuk elemen input (klik label memfokus input).

  ```html
  <label for="email">Email</label>
  <input id="email" type="email">
  ```

* `<fieldset>` — Mengelompokkan elemen form.

  ```html
  <fieldset>
    <legend>Data diri</legend>
    <input name="nama">
  </fieldset>
  ```

* `<legend>` — Judul untuk `<fieldset>`. (contoh di atas)

* `<datalist>` — Daftar opsi saran untuk input.

  ```html
  <input list="browsers">
  <datalist id="browsers">
    <option value="Chrome">
  </datalist>
  ```

* `<output>` — Menampilkan hasil perhitungan/form.

  ```html
  <output name="hasil">0</output>
  ```

---

# Frames (Frame)

* `<frame>`, `<frameset>`, `<noframes>` — **Tidak didukung di HTML5** (jangan gunakan).
* `<iframe>` — Menyisipkan sebuah halaman lain di dalam halaman (inline frame).

  ```html
  <iframe src="https://example.com" width="600" height="400"></iframe>
  ```

---

# Images (Gambar & Grafik)

* `<img>` — Menampilkan gambar.

  ```html
  <img src="gambar.jpg" alt="Deskripsi gambar">
  ```

* `<map>` — Peta gambar klien-side (image map).

  ```html
  <img src="peta.jpg" usemap="#mymap">
  <map name="mymap">
    <area shape="rect" coords="34,44,270,350" href="lokasi.html">
  </map>
  ```

* `<area>` — Area pada image map. (contoh di atas)

* `<canvas>` — Area gambar yang bisa digambar dengan JavaScript.

  ```html
  <canvas id="myCanvas" width="200" height="100"></canvas>
  <!-- gambar lewat JS -->
  ```

* `<figcaption>` — Caption untuk elemen `<figure>`.

  ```html
  <figure>
    <img src="img.jpg" alt="">
    <figcaption>Keterangan gambar</figcaption>
  </figure>
  ```

* `<figure>` — Kontainer untuk media yang berdiri sendiri (gambar + caption). (contoh di atas)

* `<picture>` — Container untuk sumber gambar responsif (webp, ukuran berbeda).

  ```html
  <picture>
    <source srcset="gambar.webp" type="image/webp">
    <img src="gambar.jpg" alt="">
  </picture>
  ```

* `<svg>` — Gambar vektor langsung di HTML.

  ```html
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40"/>
  </svg>
  ```

---

# Audio / Video

* `<audio>` — Elemen suara.

  ```html
  <audio controls>
    <source src="suara.mp3" type="audio/mpeg">
  </audio>
  ```

* `<source>` — Menyediakan beberapa sumber media (dipakai di `<audio>`, `<video>`, `<picture>`).
  (contoh di atas)

* `<track>` — Teks subtitle/captions untuk video/audio.

  ```html
  <video controls>
    <source src="video.mp4" type="video/mp4">
    <track kind="subtitles" srclang="id" src="sub.vtt">
  </video>
  ```

* `<video>` — Menampilkan video. (contoh di atas)

---

# Links (Tautan)

* `<a>` — Anchor / hyperlink.

  ```html
  <a href="https://example.com" target="_blank">Kunjungi</a>
  ```

* `<link>` — Menghubungkan resource eksternal (biasanya stylesheet).

  ```html
  <link rel="stylesheet" href="styles.css">
  ```

* `<nav>` — Bagian navigasi (menu link).

  ```html
  <nav>
    <a href="#home">Home</a>
  </nav>
  ```

---

# Lists (Daftar)

* `<menu>` — Alternatif daftar tak berurutan (jarang dipakai).

* `<ul>` — Daftar tak berurutan (bullet).

  ```html
  <ul>
    <li>Item A</li>
  </ul>
  ```

* `<ol>` — Daftar berurutan (nomor).

  ```html
  <ol>
    <li>Langkah 1</li>
  </ol>
  ```

* `<li>` — Item daftar (dipakai di `<ul>`/`<ol>`). (contoh di atas)

* `<dir>` — **Deprecated**. Gunakan `<ul>`.

* `<dl>` — Daftar deskripsi (term + definisi).

  ```html
  <dl>
    <dt>HTML</dt>
    <dd>Bahasa markup untuk web</dd>
  </dl>
  ```

* `<dt>` — Term dalam `<dl>`. (contoh di atas)

* `<dd>` — Deskripsi term dalam `<dl>`. (contoh di atas)

---

# Tables (Tabel)

* `<table>` — Membuat tabel.

  ```html
  <table>
    <tr><th>Nama</th><th>Umur</th></tr>
    <tr><td>Ani</td><td>25</td></tr>
  </table>
  ```

* `<caption>` — Judul/tambahan untuk tabel.

  ```html
  <table>
    <caption>Daftar Siswa</caption>
  </table>
  ```

* `<th>` — Sel header (biasanya tebal & center).

* `<tr>` — Baris tabel.

* `<td>` — Sel data tabel. (contoh di atas)

* `<thead>` — Grup baris header.

  ```html
  <table>
    <thead><tr><th>Kolom</th></tr></thead>
  </table>
  ```

* `<tbody>` — Grup isi tabel.

* `<tfoot>` — Grup footer tabel (mis. total).

  ```html
  <tfoot><tr><td>Total</td></tr></tfoot>
  ```

* `<col>` dan `<colgroup>` — Menentukan properti untuk kolom tertentu.

  ```html
  <colgroup>
    <col span="1" style="background:#eee">
  </colgroup>
  ```

---

# Styles and Semantics (Gaya & Struktur Halaman)

* `<style>` — Menulis CSS langsung di halaman.

  ```html
  <style> h1 { color: blue } </style>
  ```

* `<div>` — Kontainer umum/block (tidak bermakna semantik).

  ```html
  <div class="box">Isi</div>
  ```

* `<span>` — Kontainer inline kecil (non-semantik).

  ```html
  <p>Saya <span class="highlight">suka</span> kopi.</p>
  ```

* `<header>` — Bagian header untuk dokumen/section.

  ```html
  <header><h1>Logo</h1></header>
  ```

* `<hgroup>` — **Jarang dipakai**; grup heading terkait.

* `<footer>` — Bagian footer dokumen/section.

  ```html
  <footer>© 2026</footer>
  ```

* `<main>` — Konten utama halaman (hanya satu `<main>` per dokumen).

  ```html
  <main>Isi utama</main>
  ```

* `<section>` — Section/segmen umum dari dokumen.

  ```html
  <section><h2>Bagian</h2></section>
  ```

* `<search>` — Tidak standar luas; beberapa gunakan `<form role="search">`.

  ```html
  <form role="search"><input placeholder="Cari..."></form>
  ```

* `<article>` — Konten yang berdiri sendiri (mis. artikel blog).

  ```html
  <article><h2>Judul artikel</h2></article>
  ```

* `<aside>` — Konten samping (sidebars, related links).

  ```html
  <aside>Link terkait</aside>
  ```

* `<details>` — Elemen yang bisa dibuka/tutup.

  ```html
  <details><summary>Info</summary><p>Detailnya...</p></details>
  ```

* `<dialog>` — Dialog/modal (butuh JS untuk kontrol lebih baik).

  ```html
  <dialog id="dlg">Halo</dialog>
  ```

* `<summary>` — Judul yang terlihat untuk `<details>`. (contoh di atas)

* `<data>` — Menyertakan nilai machine-readable untuk konten.

  ```html
  <p>Harga: <data value="15000">Rp15.000</data></p>
  ```

---

# Meta Info (Informasi Meta)

* `<head>` — (sudah dibahas) berisi metadata.

* `<meta>` — Metadata seperti charset, viewport, deskripsi.

  ```html
  <meta name="viewport" content="width=device-width,initial-scale=1">
  ```

* `<base>` — Menentukan base URL untuk semua URL relatif di dokumen.

  ```html
  <base href="https://contoh.com/">
  ```

* `<basefont>` — **Deprecated**. Gunakan CSS.

---

# Programming (Scripting & Embedded)

* `<script>` — Menyisipkan JavaScript.

  ```html
  <script>
    console.log('Halo dari script');
  </script>
  ```

* `<noscript>` — Konten alternatif jika JS dimatikan.

  ```html
  <noscript>Silakan aktifkan JavaScript</noscript>
  ```

* `<applet>` — **Deprecated** (Java applet). Gunakan `<embed>` atau `<object>` jika perlu.

* `<embed>` — Menyematkan resource eksternal (mis. PDF, plugin).

  ```html
  <embed src="dokumen.pdf" width="600" height="400">
  ```

* `<object>` — Kontainer untuk resource (alternatif embed).

  ```html
  <object data="file.svg" type="image/svg+xml"></object>
  ```

* `<param>` — Parameter untuk `<object>`.

  ```html
  <object data="movie.swf"><param name="autoplay" value="true"></object>
  ```

---

## Penutup singkat

* Banyak tag di atas memiliki *alternatif modern* (pakai CSS untuk style, HTML5 untuk struktur semantik).
* Tag yang berlabel **Deprecated** sebaiknya dihindari — gunakan pengganti yang direkomendasikan.
* Jika mau, aku bisa:

  1. Buatkan file `index.html` contoh lengkap yang menunjukkan semua tag yang masih relevan (rapi & bisa dicoba).
  2. Jelaskan lebih detail cara pakai form + validasi JavaScript.
  3. Atau ringkas menjadi “cheatsheet” satu halaman yang bisa dicetak.

Kamu mau aku buat file `index.html` contoh lengkapnya sekarang? Kalau iya, aku langsung siapkan versi yang bisa kamu salin-tempel.
