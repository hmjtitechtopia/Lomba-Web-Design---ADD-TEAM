/* ==========================================================================
   PROJECT: Website Kebudayaan Batik Indonesia
   AUTHOR: Developer Team
   DESCRIPTION: Pengatur loading screen & interaktivitas modal
   ========================================================================== */

// Data Detail Motif Batik
const dataMotif = {
    kawung: {
        title: "Kawung Kawitan",
        origin: "Yogyakarta / Surakarta",
        img: "images 1.jpg",
        desc: "Motif Kawung berbentuk empat lingkaran lonjong yang memusat. Menggambarkan asal usul kehidupan manusia, keadilan, serta kesucian hati. Dahulu motif ini hanya boleh dikenakan oleh kalangan kerajaan."
    },
    parang: {
        title: "Parang Rusak",
        origin: "Jawa Tengah",
        img: "images 2.jpg",
        desc: "Bentuk garis miring bergelombang melambangkan ombak laut yang tidak pernah berhenti bergerak. Memiliki filosofi semangat perjuangan, ketekunan, dan pantang menyerah dalam menghadapi cobaan hidup."
    },
    truntum: {
        title: "Batik Truntum",
        origin: "Surakarta",
        img: "images 3.jpg",
        desc: "Motif bintang-bintang kecil di langit malam. Diciptakan oleh Katuwana (Ratu Beruk) sebagai lambang cinta yang bersemi kembali, ketulusan, dan bimbingan orang tua kepada anak."
    }
};

// Hilangkan Loading Screen saat Halaman Selesai Dimuat
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('fade-out');
    }, 500);
});

// Handler Modal Popup
function openDetail(key) {
    const item = dataMotif[key];
    if (!item) return;

    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalOrigin').textContent = item.origin;
    document.getElementById('modalDesc').textContent = item.desc;
    
    // Set sumber gambar modal secara eksplisit
    const modalImg = document.getElementById('modalImg');
    if (modalImg) {
        modalImg.src = item.img;
    }

    document.getElementById('motifModal').classList.add('active');
}

function closeModal(event) {
    if (event.target.id === 'motifModal') closeModalForce();
}

function closeModalForce() {
    document.getElementById('motifModal').classList.remove('active');
}