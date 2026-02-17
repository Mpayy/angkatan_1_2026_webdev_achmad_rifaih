const daftarMenu = [
  { id: 1, nama: "Es Teh Manis", harga: 5000 },
  { id: 2, nama: "Nasi Goreng", harga: 15000 },
  { id: 3, nama: "Ayam Bakar", harga: 20000 },
  { id: 4, nama: "Kopi Hitam", harga: 7000 }
];
let keranjang = [];

function displayMenu() {
  const menu = document.getElementById('display-menu')

  menu.innerHTML = ""
  daftarMenu.forEach((daftarMenu) => {
    menu.innerHTML += `
        <tr>
            <hr>
            <td>${daftarMenu.id}.</td>   
            <td>${daftarMenu.nama},</td>   
            <td>Harga:${daftarMenu.harga}</td>
            <button onclick="tambahItem(${daftarMenu.id})">Tambah</button>
            <hr>   
        </tr>
        `
  })
} displayMenu()

function renderKeranjang() {
  const pesanan = document.getElementById('list-keranjang')
  const totalHarga = document.getElementById('total-harga')

  pesanan.innerHTML = ""
  let total = 0
  keranjang.forEach((item) => {
    pesanan.innerHTML += `  
                    <li>${item.nama} <button onclick="hapusPesanan(${item.id})">Hapus</button></li> 
                    `
    total += item.harga
  })
  totalHarga.innerText = total
}

function tambahItem(idYangDipilih) {
  const itemKetemu = daftarMenu.find((item) => item.id === idYangDipilih)
  keranjang.push(itemKetemu)
  renderKeranjang()
}

function hapusPesanan(itemYangDihapus) {
  const index = keranjang.findIndex((item) => item.id === itemYangDihapus)
  if (index !== -1) {
    keranjang.splice(index, 1)
  }
  renderKeranjang()
}

function resetOrder() {
  keranjang = []
  renderKeranjang()
}