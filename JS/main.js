// 1. prompt untuk mengetahui total saldo yang di inputkan pengguna
// let input1 = prompt("Masukan saldo awal")
// let saldoAwal = Number(input1)

// let input2 = prompt("Masukan saldo akhir")
// let saldoAkhir = Number(input2)

// const totalSaldo = saldoAwal + saldoAkhir

// alert(`Total Saldo anda adalah : Rp${totalSaldo.toLocaleString('id-ID')}`)

// 2. menentukan hari dari tanggal yang ada di pc
// let hari = new Date().getDay()
// let namaHari = ['minggu','senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
// let hariIni = namaHari[hari]

// console.log(`Hari ini adalah hari : ${hariIni} `)

// 3. Jika hari ini adalah hari Sabtu atau Minggu, tampilkan pesan 'Waktunya santai!'.
// Selain itu, tampilkan pesan 'Semangat kerja/sekolah!'

// let hari = new Date().getDay()
// let namaHari = ['Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
// let hariIni = namaHari[hari]
// let pesan = ""

// console.log(hariIni)

// if(hariIni == 'Sabtu'|| hariIni == 'Minggu'){
//     pesan = 'Waktunya santai!'
// }
// else{pesan = 'Semangat kerja/sekolah!'}

// console.log(`Hari ini adalah hari : ${hariIni}, Jadi ${pesan}`)

const daftarMenu = [
  { id: 1, nama: "Es Teh Manis", harga: 5000 },
  { id: 2, nama: "Nasi Goreng", harga: 15000 },
  { id: 3, nama: "Ayam Bakar", harga: 20000 },
];

let keranjang = [];

console.log('duar')