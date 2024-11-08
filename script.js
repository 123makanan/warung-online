document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Mencegah form dikirim secara default

    // Ambil data dari form
    const nama = document.getElementById("nama").value;
    const menu = document.getElementById("menu").value;
    const alamat = document.getElementById("alamat").value;
    const alamatLengkap = document.getElementById("alamat_lengkap").value;  // Menambah alamat lengkap
    const telepon = document.getElementById("telepon").value;

    // Ongkos kirim berdasarkan alamat
    const ongkosKirim = {
        magmagan: 5000,
        sebol: 13000,
        lumar: 17000,
        sebopet: 17000,
        rangkang: 13000,
        pasar_bengkayang: 20000
    };

    // Hitung ongkos kirim berdasarkan alamat
    const biayaOngkir = ongkosKirim[alamat] || 0;

    // Buat objek untuk data pemesanan
    const orderData = {
        nama: nama,
        menu: menu,
        alamat: alamat,
        alamatLengkap: alamatLengkap,  // Menambah alamat lengkap
        telepon: telepon,
        ongkosKirim: biayaOngkir,
        waktu: new Date().toLocaleString()
    };

    // Simpan data pemesanan di localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Tampilkan data pemesanan
    document.getElementById("orderData").textContent = JSON.stringify(orders, null, 2);

    // Tampilkan ongkos kirim
    document.getElementById("shippingCost").textContent = `Ongkos Kirim: Rp ${biayaOngkir.toLocaleString()}`;

    // Reset form setelah pemesanan
    document.getElementById("orderForm").reset();
});
