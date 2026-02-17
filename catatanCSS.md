Tentu! Sama seperti sebelumnya, ini adalah **Glosarium CSS** lengkap dalam format Markdown (`.md`).

Dokumen ini mencakup sintaks dasar, selektor, properti umum, hingga sistem layout modern seperti Flexbox dan Grid. Silakan disalin.

```markdown
# Glosarium CSS (Cascading Style Sheets)

Dokumen ini berisi daftar istilah, properti, dan konsep penting dalam CSS untuk mengatur tampilan halaman web.

---

## 1. Syntax Dasar (Anatomi CSS)
Cara penulisan aturan CSS terdiri dari tiga bagian utama:

```css
selector {
  property: value;
}
/* Contoh */
h1 {
  color: blue;
}

```

| Istilah | Deskripsi | Contoh |
| --- | --- | --- |
| **Selector** | Elemen HTML mana yang mau didandani. | `h1`, `.tombol`, `#header` |
| **Property** | Apa yang mau diubah dari elemen itu. | `color`, `font-size`, `margin` |
| **Value** | Nilai perubahannya. | `red`, `16px`, `center` |
| **Declaration** | Gabungan property dan value. | `color: red;` |
| **Rule Set** | Satu blok kode CSS lengkap dari selector sampai kurung tutup `}`. |  |

---

## 2. Selectors (Penyeleksi)

Cara menargetkan elemen HTML spesifik.

| Selector | Simbol | Deskripsi |
| --- | --- | --- |
| **Tag/Type** | `p` | Memilih semua elemen `<p>`. |
| **Class** | `.nama` | Memilih elemen dengan `class="nama"`. (Bisa dipakai berulang). |
| **ID** | `#nama` | Memilih elemen dengan `id="nama"`. (Hanya satu per halaman). |
| **Universal** | `*` | Memilih **semua** elemen di halaman. |
| **Grouping** | `h1, h2` | Memilih `h1` DAN `h2` sekaligus (dipisah koma). |
| **Descendant** | `div p` | Memilih `<p>` yang ada di dalam `<div>`. |
| **Child** | `div > p` | Memilih `<p>` yang merupakan anak **langsung** dari `<div>`. |

---

## 3. The Box Model (Konsep Kotak)

Setiap elemen di HTML dianggap sebagai kotak persegi. Ini adalah konsep paling fundamental di CSS.

| Properti | Deskripsi |
| --- | --- |
| **Content** | Isi sebenarnya (teks atau gambar). Ukurannya diatur `width` & `height`. |
| **Padding** | Jarak antara konten dengan garis tepi (border). Ruang "dalam". |
| **Border** | Garis tepi yang mengelilingi padding dan konten. |
| **Margin** | Jarak antara elemen ini dengan elemen lain di luarnya. Ruang "luar". |

**Visualisasi Urutan (Dari dalam ke luar):**
`Content` -> `Padding` -> `Border` -> `Margin`

---

## 4. Typography (Teks & Font)

Mengatur gaya tulisan.

| Properti | Fungsi | Contoh Value |
| --- | --- | --- |
| `font-family` | Jenis huruf. | `'Arial', sans-serif` |
| `font-size` | Ukuran huruf. | `16px`, `1.5rem` |
| `font-weight` | Ketebalan huruf. | `normal`, `bold`, `700` |
| `text-align` | Perataan teks. | `left`, `center`, `right`, `justify` |
| `color` | Warna teks. | `red`, `#ff0000`, `rgb(255,0,0)` |
| `text-decoration` | Hiasan teks (garis). | `none` (hilangkan garis link), `underline` |
| `line-height` | Jarak antar baris (spasi vertikal). | `1.5` |

---

## 5. Background & Visuals

Mengatur latar belakang dan tampilan visual.

| Properti | Fungsi |
| --- | --- |
| `background-color` | Warna latar belakang. |
| `background-image` | Gambar latar (`url('gambar.jpg')`). |
| `background-size` | Ukuran gambar latar (`cover`, `contain`). |
| `border-radius` | Membuat sudut kotak menjadi tumpul/melengkung. |
| `opacity` | Transparansi elemen (0.0 sampai 1.0). |
| `box-shadow` | Memberikan efek bayangan pada kotak. |

---

## 6. Layout (Tata Letak)

Mengatur bagaimana elemen disusun di halaman.

### A. Display Property

| Value | Efek |
| --- | --- |
| `block` | Elemen memanjang memenuhi lebar (baris baru). Contoh: `<div>`, `<p>`. |
| `inline` | Elemen hanya selebar kontennya (tidak baris baru). Contoh: `<span>`, `<a>`. |
| `inline-block` | Seperti inline tapi bisa diatur margin/padding-nya. |
| `none` | Menyembunyikan elemen sepenuhnya (hilang dari layout). |

### B. Modern Layout (Flexbox & Grid)

| Properti | Konsep | Fungsi Utama |
| --- | --- | --- |
| **Flexbox** | `display: flex` | Mengatur layout 1 dimensi (baris ATAU kolom). Bagus untuk menu, card sejajar. |
| `justify-content` | (Flex) | Mengatur posisi horizontal (kiri, tengah, kanan, sebar). |
| `align-items` | (Flex) | Mengatur posisi vertikal. |
| **Grid** | `display: grid` | Mengatur layout 2 dimensi (baris DAN kolom). Bagus untuk kerangka utama web. |
| `gap` | (Flex/Grid) | Jarak antar item grid atau flex. |

### C. Position

| Value | Efek |
| --- | --- |
| `static` | Posisi default/normal. |
| `relative` | Posisi normal, tapi bisa digeser sedikit tanpa ganggu elemen lain. |
| `absolute` | Posisi bebas, patokannya adalah elemen induk terdekat (yg bukan static). |
| `fixed` | Menempel di layar browser (tetap terlihat meski di-scroll). |
| `sticky` | Berubah dari relative ke fixed saat di-scroll ke titik tertentu. |

---

## 7. Units (Satuan Ukuran)

| Satuan | Jenis | Deskripsi |
| --- | --- | --- |
| **px** | Absolut | Pixel. Ukuran tetap/pasti. |
| **%** | Relatif | Persentase dari elemen induknya. |
| **rem** | Relatif | Mengikuti ukuran font dasar browser (biasanya 16px). Paling disarankan untuk font. |
| **em** | Relatif | Mengikuti ukuran font elemen induknya. |
| **vw / vh** | Viewport | `100vw` = 100% lebar layar, `100vh` = 100% tinggi layar. |

---

## 8. Pseudo-classes (State/Kondisi)

Menargetkan elemen hanya pada kondisi tertentu.

| Selector | Kondisi |
| --- | --- |
| `:hover` | Saat kursor mouse berada di atas elemen. |
| `:active` | Saat elemen sedang diklik (tahan klik). |
| `:focus` | Saat elemen dipilih (misal: kolom input sedang diketik). |
| `:nth-child(n)` | Memilih anak ke-n dari sebuah elemen. |

---

## 9. Aturan Khusus (@-rules)

| Aturan | Fungsi |
| --- | --- |
| `@media` | **Responsive Design**. Menerapkan CSS berbeda tergantung ukuran layar (HP/Laptop). |
| `@import` | Mengambil file CSS lain ke dalam file CSS ini. |
| `@font-face` | Memuat font custom sendiri yang tidak ada di komputer user. |

```

### Tips Mempelajari CSS
Kalau kamu baru belajar CSS, saya sarankan fokus dulu memahami **The Box Model** (Margin, Border, Padding).



Karena ini adalah penyebab utama kenapa tampilan web sering "berantakan" atau tidak pas posisinya.

Mau saya jelaskan lebih detail tentang Box Model atau mungkin cara kerja Flexbox?

```