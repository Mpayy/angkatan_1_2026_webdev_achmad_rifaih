# Glosarium HTML Lengkap

Dokumen ini berisi daftar istilah, tag, dan konsep penting dalam HTML (HyperText Markup Language).

---

## 1. Struktur Dasar (Skeleton)
Tag ini wajib ada untuk membentuk dokumen HTML yang valid.

| Tag | Deskripsi |
| :--- | :--- |
| `<!DOCTYPE html>` | **Bukan Tag**, melainkan deklarasi untuk memberi tahu browser bahwa ini adalah dokumen HTML5. |
| `<html>` | Element akar (root) yang membungkus seluruh konten halaman. |
| `<head>` | Berisi metadata, judul, link ke CSS, dan script yang **tidak tampil** langsung di layar. |
| `<body>` | Berisi semua konten yang **tampil** di layar browser (teks, gambar, tombol, dll). |

---

## 2. Semantic Tags (Struktur & Makna)
Tag ini memberikan makna pada konten untuk mesin pencari (SEO) dan pembaca layar (Accessibility).

| Tag | Deskripsi |
| :--- | :--- |
| `<header>` | Bagian kepala dari sebuah halaman atau artikel (biasanya berisi logo/menu). |
| `<nav>` | Wadah untuk link navigasi utama. |
| `<main>` | Konten utama dan unik dari sebuah halaman (hanya boleh ada satu per halaman). |
| `<section>` | Bagian tematik dari konten (seperti bab dalam buku). |
| `<article>` | Konten yang berdiri sendiri dan bisa dipisahkan (misal: postingan blog, berita). |
| `<aside>` | Konten pendukung di samping konten utama (sidebar, iklan, link terkait). |
| `<footer>` | Bagian kaki halaman (biasanya berisi copyright, kontak, sitemap). |
| `<details>` | Widget interaktif yang bisa dibuka-tutup oleh user untuk melihat info tambahan. |
| `<summary>` | Judul/label untuk tag `<details>`. |

---

## 3. Text Formatting & Konten
Tag untuk mengatur teks dan wadah umum.

| Tag | Deskripsi |
| :--- | :--- |
| `<h1>` - `<h6>` | Judul (Heading). `<h1>` paling besar/penting, `<h6>` paling kecil. |
| `<p>` | Paragraf. |
| `<span>` | Wadah **inline** (dalam baris) untuk menargetkan sebagian kecil teks (biasanya untuk styling). |
| `<div>` | Wadah **block** (kotak besar) generik untuk mengelompokkan elemen. |
| `<strong>` | Teks tebal (memiliki penekanan makna penting). |
| `<em>` | Teks miring (emphasis/penekanan nada). |
| `<br>` | Pindah baris (Line Break). Tag ini tidak punya penutup. |
| `<hr>` | Garis horizontal pemisah konten. |
| `<blockquote cite="">` | Kutipan panjang dari sumber lain. |
| `<b>` |  Teks tebal. |
| `<strong>` |  Teks penting. |
| `<i>` |  Teks miring. |
| `<em>` |  Teks yang ditekankan. |
| `<mark>` |  Teks yang ditandai. |
| `<small>` |  Teks lebih kecil. |
| `<ins>` |  Teks yang underline. |
| `<sub>` |  Teks subskrip. H2O |
| `<sup>` |  Teks superskrip. 2pangkat2 |
| `<q>` |  menyisipkan tanda kutip |
| `<abbr>` | mendefinisikan singkatan atau akronim |
| `<address>` | mendefinisikan informasi kontak untuk penulis/pemilik dokumen atau artikel. |
| `<cite>` | mendefinisikan judul |
| `<bdo>` | mengganti arah teks |

---

## 4. List (Daftar)
Tag untuk membuat daftar item.

| Tag | Deskripsi |
| :--- | :--- |
| `<ul>` | *Unordered List* (Daftar tidak berurutan, biasanya simbol bullet). |
| `<ol>` | *Ordered List* (Daftar berurutan, pakai angka/huruf). |
| `<li>` | *List Item* (Item di dalam `<ul>` atau `<ol>`). |
| `<dl>` | *Description List* (Daftar definisi istilah). |
| `<dt>` | Istilah yang akan didefinisikan (di dalam `<dl>`). |
| `<dd>` | Deskripsi dari istilah tersebut (di dalam `<dl>`). |

---

## 5. Media & Embedding
Tag untuk memasukkan gambar, video, atau file luar.

| Tag | Deskripsi |
| :--- | :--- |
| `<img>` | Menampilkan gambar. Wajib pakai atribut `src` dan `alt`. |
| `<a>` | *Anchor* (Link/Tautan) ke halaman atau file lain. |
| `<audio>` | Pemutar suara/musik. |
| `<video>` | Pemutar video. |
| `<iframe>` | Menampilkan halaman web lain di dalam halaman kita (misal: embed YouTube/Maps). |
| `<figure>` | Membungkus media (gambar/diagram) dengan caption opsional. |
| `<figcaption>` | Teks caption untuk `<figure>`. |

---

## 6. Form & Input
Tag untuk interaksi pengguna dan pengiriman data.

| Tag | Deskripsi |
| :--- | :--- |
| `<form>` | Wadah untuk elemen formulir. |
| `<input>` | Kolom isian data. Tipe ditentukan atribut `type` (text, password, email, checkbox, radio). |
| `<label>` | Judul/keterangan untuk elemen input (penting untuk aksesibilitas). |
| `<textarea>` | Area teks multi-baris (untuk komentar/pesan panjang). |
| `<button>` | Tombol yang bisa diklik. |
| `<select>` | Menu dropdown (pilihan ke bawah). |
| `<option>` | Item pilihan di dalam `<select>`. |

---

## 7. Metadata & Scripting (Biasanya di `<head>`)

| Tag | Deskripsi |
| :--- | :--- |
| `<title>` | Judul halaman yang muncul di tab browser. |
| `<meta>` | Informasi metadata (charset, deskripsi SEO, viewport untuk responsif). |
| `<link>` | Menghubungkan dokumen dengan file luar (paling sering untuk file CSS). |
| `<style>` | Menulis kode CSS langsung di dalam HTML. |
- Gunakan **style** atribut ini untuk menata gaya elemen HTML.
- Gunakan **background-color** untuk warna latar belakang
- Gunakan **color** untuk warna teks
- Gunakan **font-family** untuk font teks
- Gunakan **font-size** untuk ukuran teks
- Gunakan **text-align** untuk perataan teks
- Gunakan **border** untuk warna border

| `<script>` | Menulis atau menghubungkan kode JavaScript. |

---

## 8. Konsep HTML Non-Tag (Penting!)
Selain tag, ada istilah lain yang menyusun sintaks HTML.

### A. Attributes (Atribut)
Informasi tambahan yang ditaruh di dalam **opening tag**.
Format: `nama="nilai"`

* **`class`**: Memberikan nama kelas untuk styling CSS (bisa dipakai banyak elemen).
* **`id`**: Memberikan identitas unik (hanya satu per halaman).
* **`src`** (Source): Lokasi file (untuk gambar/video).
* **`href`** (Hypertext Reference): Tujuan link (untuk tag `<a>`).
* **`alt`**: Teks alternatif jika gambar gagal dimuat.
* **`style`**: Atribut untuk menulis CSS langsung di elemen (inline style).

### B. Comments (Komentar)
Teks yang ditulis untuk catatan programmer, **tidak akan tampil** di browser.
* Sintaks: ``

### C. HTML Entities
Kode khusus untuk menampilkan karakter yang "dipesan" oleh HTML atau simbol khusus.

| Entity | Hasil | Deskripsi |
| :--- | :--- | :--- |
| `&lt;` | < | *Less Than* (agar tidak dianggap tag pembuka). |
| `&gt;` | > | *Greater Than* (agar tidak dianggap tag penutup). |
| `&amp;` | & | *Ampersand*. |
| `&copy;` | © | Simbol Copyright. |
| `&nbsp;` | (spasi) | *Non-Breaking Space* (spasi yang tidak bisa dipotong baris). |


# Basic HTML
Tag	Description
<!DOCTYPE> 	Defines the document type
<html>	Defines an HTML document
<head>	Contains metadata/information for the document
<title>	Defines a title for the document
<body>	Defines the document's body
<h1> to <h6>	Defines HTML headings
<p>	Defines a paragraph
<br>	Inserts a single line break
<hr>	Defines a thematic change in the content
<!--...-->	Defines a comment

# Formatting
Tag	Description
<acronym>	Not supported in HTML5. Use <abbr> instead.
Defines an acronym
<abbr>	Defines an abbreviation or an acronym
<address>	Defines contact information for the author/owner of a document/article
<b>	Defines bold text
<bdi>	Isolates a part of text that might be formatted in a different direction from other text outside it
<bdo>	Overrides the current text direction
<big>	Not supported in HTML5. Use CSS instead.
Defines big text
<blockquote>	Defines a section that is quoted from another source
<center>	Not supported in HTML5. Use CSS instead.
Defines centered text
<cite>	Defines the title of a work
<code>	Defines a piece of computer code
<del>	Defines text that has been deleted from a document
<dfn>	Specifies a term that is going to be defined within the content
<em>	Defines emphasized text 
<font>	Not supported in HTML5. Use CSS instead.
Defines font, color, and size for text
<i>	Defines a part of text in an alternate voice or mood
<ins>	Defines a text that has been inserted into a document
<kbd>	Defines keyboard input
<mark>	Defines marked/highlighted text
<meter>	Defines a scalar measurement within a known range (a gauge)
<pre>	Defines preformatted text
<progress>	Represents the progress of a task
<q>	Defines a short quotation
<rp>	Defines what to show in browsers that do not support ruby annotations
<rt>	Defines an explanation/pronunciation of characters (for East Asian typography)
<ruby>	Defines a ruby annotation (for East Asian typography)
<s>	Defines text that is no longer correct
<samp>	Defines sample output from a computer program
<small>	Defines smaller text
<strike>	Not supported in HTML5. Use <del> or <s> instead.
Defines strikethrough text
<strong>	Defines important text
<sub>	Defines subscripted text
<sup>	Defines superscripted text
<template>	Defines a container for content that should be hidden when the page loads
<time>	Defines a specific time (or datetime)
<tt>	Not supported in HTML5. Use CSS instead.
Defines teletype text
<u>	Defines some text that is unarticulated and styled differently from normal text
<var>	Defines a variable
<wbr>	Defines a possible line-break

# Forms and Input
Tag	Description
<form>	Defines an HTML form for user input
<input>	Defines an input control
<textarea>	Defines a multiline input control (text area)
<button>	Defines a clickable button
<select>	Defines a drop-down list
<optgroup>	Defines a group of related options in a drop-down list
<option>	Defines an option in a drop-down list
<label>	Defines a label for an <input> element
<fieldset>	Groups related elements in a form
<legend>	Defines a caption for a <fieldset> element
<datalist>	Specifies a list of pre-defined options for input controls
<output>	Defines the result of a calculation

# Frames
Tag	Description
<frame>	Not supported in HTML5.
Defines a window (a frame) in a frameset
<frameset>	Not supported in HTML5.
Defines a set of frames
<noframes>	Not supported in HTML5.
Defines an alternate content for users that do not support frames
<iframe>	Defines an inline frame

# Images
Tag	Description
<img>	Defines an image
<map>	Defines a client-side image map
<area>	Defines an area inside an image map
<canvas>	Used to draw graphics, on the fly, via scripting (usually JavaScript)
<figcaption>	Defines a caption for a <figure> element
<figure>	Specifies self-contained content
<picture>	Defines a container for multiple image resources
<svg>	Defines a container for SVG graphics

# Audio / Video
Tag	Description
<audio>	Defines sound content
<source>	Defines multiple media resources for media elements (<video>, <audio> and <picture>)
<track>	Defines text tracks for media elements (<video> and <audio>)
<video>	Defines a video or movie

# Links
Tag	Description
<a>	Defines a hyperlink
<link>	Defines the relationship between a document and an external resource (most used to link to style sheets)
<nav>	Defines navigation links

# Lists
Tag	Description
<menu>	Defines an alternative unordered list
<ul>	Defines an unordered list
<ol>	Defines an ordered list
<li>	Defines a list item
<dir>	Not supported in HTML5. Use <ul> instead.
Defines a directory list
<dl>	Defines a description list
<dt>	Defines a term/name in a description list
<dd>	Defines a description of a term/name in a description list

# Tables
Tag	Description
<table>	Defines a table
<caption>	Defines a table caption
<th>	Defines a header cell in a table
<tr>	Defines a row in a table
<td>	Defines a cell in a table
<thead>	Groups the header content in a table
<tbody>	Groups the body content in a table
<tfoot>	Groups the footer content in a table
<col>	Specifies column properties for each column within a <colgroup> element
<colgroup>	Specifies a group of one or more columns in a table for formatting

# Styles and Semantics
Tag	Description

<style>	Defines style information for a document
<div>	Defines a section in a document
<span>	Defines a section in a document
<header>	Defines a header for a document or section
<hgroup>	Defines a header and related content
<footer>	Defines a footer for a document or section
<main>	Specifies the main content of a document
<section>	Defines a section in a document
<search>	Defines a search section
<article>	Defines an article
<aside>	Defines content aside from the page content
<details>	Defines additional details that the user can view or hide
<dialog>	Defines a dialog box or window
<summary>	Defines a visible heading for a <details> element
<data>	Adds a machine-readable translation of a given content

# Meta Info
Tag	Description
<head>	Defines information about the document
<meta>	Defines metadata about an HTML document
<base>	Specifies the base URL/target for all relative URLs in a document
<basefont>	Not supported in HTML5. Use CSS instead.
Specifies a default color, size, and font for all text in a document

# Programming
Tag	Description
<script>	Defines a client-side script
<noscript>	Defines an alternate content for users that do not support client-side scripts
<applet>	Not supported in HTML5. Use <embed> or <object> instead.
Defines an embedded applet
<embed>	Defines a container for an external resource
<object>	Defines a container for an external resource
<param>	Defines a parameter for an object