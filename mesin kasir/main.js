document.addEventListener("DOMContentLoaded", function () {
    const namaInput = document.getElementById("nama");
    const alamatInput = document.getElementById("alamat");
    const menu = document.getElementById("menu");
    const berat = document.getElementById("berat");
    const hitung = document.getElementById("hitung");
    const hasil = document.getElementById("hasil");
    const selesai = document.getElementById("selesai");

    const inventaris = [
        { nama: "Cuci Kering", harga: 6000 },
        { nama: "Cuci Basah", harga: 4000 },
        { nama: "Cuci Setrika", harga: 8000 },
    ];

    let belanjaan = [];

    hitung.addEventListener("click", function () {
        const pilihan = parseInt(menu.value);
        const beratKilo = parseFloat(berat.value);

        if (isNaN(pilihan) || isNaN(beratKilo) || beratKilo <= 0) {
            hasil.innerText = "Pilihan dan berat tidak valid.";
            return;
        }

        const item = inventaris[pilihan];
        const total = item.harga * beratKilo;

        belanjaan.push({ nama: item.nama, berat: beratKilo, total });

        hasil.innerText = `Total harga: ${total} IDR`;
    });

    selesai.addEventListener("click", function () {
        const namaPemesan = namaInput.value;
        const alamatPemesan = alamatInput.value;

        if (namaPemesan === "" || alamatPemesan === "") {
            alert("Silakan masukkan nama dan alamat pemesan.");
            return;
        }

        let rincian = `== RINCIAN BELANJA ==\n\nNama Pemesan: ${namaPemesan}\nAlamat Pemesan: ${alamatPemesan}\n\n`;
        let totalHarga = 0;

        belanjaan.forEach(function (item, index) {
            rincian += `${index + 1}. ${item.nama.padEnd(20)} ${item.berat} kilo - Total: ${item.total} IDR\n`;
            totalHarga += item.total;
        });

        rincian += `\nTotal harga: ${totalHarga} IDR\nTerima kasih telah berbelanja di Fausan Londry!`;

        alert(rincian);
    });
});