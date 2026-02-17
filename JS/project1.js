// --- JANGAN DIUBAH (INI PURA-PURA SERVER) ---
function ambilDataDariServer() {
    return new Promise((resolve, reject) => {
        console.log("Meminta data ke server...");

        // Ceritanya loading 2 detik
        setTimeout(() => {
            const dataBarang = [
                { id: 1, nama: "Minyak Goreng", stok: 12, satuan: "Liter" },
                { id: 2, nama: "Beras Pandan", stok: 3, satuan: "Karung" }, // Stok sedikit!
                { id: 3, nama: "Gula Pasir", stok: 20, satuan: "Kg" },
                { id: 4, nama: "Telur Ayam", stok: 2, satuan: "Tray" }, // Stok sedikit!
                { id: 5, nama: "Indomie Goreng", stok: 45, satuan: "Dus" }
            ];

            // Kirim data berhasil (Resolve)
            resolve(dataBarang);
            reject("Server sedang maintenance")
        }, 2000); // Delay 2000ms = 2 detik
    });
}
// ---------------------------------------------
// --- TUGAS ---
// 1. Async/Await: Buat fungsi async function renderStok() yang memanggil ambilDataDariServer().

// 2. Loading Indicator:
// - Sebelum data muncul, isi tabel dengan tulisan "Sedang memuat data...".
// - Setelah data sampai (await selesai), hapus tulisan itu dan ganti dengan data asli.

// 3 Looping & DOM: Render data ke dalam tabel (<tr> dan <td>).

// 4. Logika Kondisional (IF):
// - Di dalam loop, cek if (item.stok < 5).
// - Jika ya, beri style warna merah pada baris atau teks tersebut (misal: style="color: red; font-weight: bold;").
// ---------------------------------------------

let stockLokal = []

function tampilkanKetable() {
    const tbody = document.getElementById("tabel-data");
    tbody.innerHTML = "";
    stockLokal.forEach(barang => {
        let warna = barang.stok < 5 ? "color: red; font-weight: bold;" : "";
        tbody.innerHTML += `
                <tr>
                    <td>${barang.id}</td>
                    <td>${barang.nama}</td>
                    <td style="${warna}">${barang.stok}</td>
                    <td>${barang.satuan}</td>
                </tr>
            `;
    });
}

async function renderStok() {
    const tbody = document.getElementById("tabel-data");
    tbody.innerHTML = "<tr><td colspan='4'>Sedang memuat data...</td></tr>";
    try {
        const dataHutang = await ambilDataDariServer();
        stockLokal = dataHutang
        tampilkanKetable()
    } catch (error) {
        tbody.innerHTML = "<tr><td colspan='4'>Gagal ambil data!</td></tr>";
    }
}

function tambahBarang() {
    nama = prompt('Masukan Nama Barang:')
    stock = parseInt(prompt('Masukan Jumlah Stock:'))

    if (nama === "" || isNaN(stock)) {
        alert('nama dan stock wajib di isi!!')
        return
    }

    const barangBaru = {
        id: stockLokal.length + 1,
        nama: nama,
        stok: stock,
        satuan: 'unit'
    }
    stockLokal.push(barangBaru)
    tampilkanKetable()
}

