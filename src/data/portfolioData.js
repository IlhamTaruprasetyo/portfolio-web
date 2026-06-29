// ============================================
//   EDIT SEMUA DATA DI SINI SESUAI PROFILMU
// ============================================

export const personalInfo = {
  name: "Ilham Taruprasetyo",
  nickname: "Ilham",
  role: "Mahasiswa Aktif - D4 Teknologi Rekayasa Komputer",
  university: "Politeknik Negeri Semarang",
  bio: `Mahasiswa D4 Teknologi Rekayasa Komputer Politeknik Negeri Semarang dengan minat pada Web Development, Jaringan Komputer, dan Sistem Informasi. 
  Berorientasi pada pemecahan masalah, pembelajaran berkelanjutan, dan pengembangan solusi teknologi yang bermanfaat.`,
  email: "ilhamsetyo315@gmail.com",
  whatsapp: "6289655493009",   // format: 628xxx (tanpa +)
  linkedin: "linkedin.com/in/ilham-taruprasetyo",
  github: "github.com/IlhamTaruprasetyo",
  location: "Semarang, Jawa Tengah, Indonesia",
  available: true,             // ubah ke false jika tidak available
  cvPath: "/assets/cv/CV_Ilham Taruprasetyo.pdf",           // taruh file CV di public/cv.pdf
  photoPath: "/assets/hero/almetfoto.jpeg",
};

export const skills = [
  { name: "Python", slug: "python" },
  { name: "JavaScript", slug: "javascript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS", slug: "css", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "React.js", slug: "react" },
  { name: "Laravel", slug: "laravel" },
  { name: "Livewire", slug: "livewire" },
  { name: "PHP", slug: "php" },
  { name: "MySQL", slug: "mysql" },
  { name: "SQLite", slug: "sqlite" },
  { name: "Git", slug: "git" },
  { name: "Linux", slug: "linux" },
  { name: "Cisco", slug: "cisco" },
  { name: "Oracle", slug: "oracle", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
];

export const projects = [
  {
    id: 1,
    title: "Polines Online Time Enrollment & Schedule System Integration - POTENSI",
    description:
      "POTENSI adalah sistem berbasis web yang memudahkan pengelolaan dan pemantauan presensi serta kompensasi mahasiswa secara terintegrasi, sehingga proses administrasi akademik menjadi lebih efektif, akurat, dan terstruktur. Sistem presensi dilakukan menggunakan pemindaian QR Code untuk mempercepat proses pencatatan kehadiran. Selain itu, data presensi tersimpan secara otomatis sehingga mudah dipantau dan dikelola oleh dosen maupun admin.",
    techStack: ["PHP Native", "MySQL", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/HaydarAja13/potensi-web.git",
    images: [
      "/assets/projects/potensi.jpeg"
    ],  // hapus jika tidak ada
    highlight: true,                       // tampilkan sebagai featured
  },
  {
    id: 2,
    title: "Sistem Penjadwalan Otomatis Kampus - Schedu",
    description:
      "Aplikasi web berbasis Laravel dan Livewire untuk mengotomatisasi penyusunan jadwal kuliah, meminimalkan konflik jadwal dosen atau ruang kelas, serta mempermudah administrasi akademik dengan database SQLite.",
    techStack: ["Laravel", "PHP", "Livewire", "Tailwind", "SQLite"],
    github: "https://github.com/HaydarAja13/Schedu.git",
    demo: null,
    images: [
      "/assets/projects/schedu.jpeg",
      "/assets/projects/schedu_2.png" 
    ],
    highlight: true,
  },
  {
    id: 3,
    title: "Facial Emotion Detection Project - Computer Vision",
    description:
      "Proyek Emotion Detection ini dibangun menggunakan bahasa pemrograman Python yang mengombinasikan library OpenCV untuk deteksi wajah dan framework TensorFlow/Keras untuk pemrosesan model deep learning.",
    techStack: ["Python", "Jupyter Notebook", "TensorFlow / Keras", "OpenCV"],
    github: "https://github.com/IlhamTaruprasetyo/Tubes-Pengolahan-Citra.git",
    demo: null,
    images: [
      "/assets/projects/face_detection.png"
    ],
    highlight: true,
  },
  {
    id: 4,
    title: "Sistem Monitoring Hidroponik Cerdas - IoT & ESP32", //
    description:
      "Proyek pemantauan dan kontrol hidroponik otomatis yang mengintegrasikan mikrokontroler ESP32 dengan teknologi Internet of Things (IoT). Sistem ini memanfaatkan sensor pH, TDS, suhu (DS18B20), dan ultrasonik untuk membaca data secara real-time, lalu memprosesnya melalui algoritma feedback loop. Sistem juga terhubung dengan aplikasi Blynk untuk pemantauan jarak jauh sekaligus mengatur pompa air, nutrisi, dan asam secara otomatis untuk menjaga kestabilan lingkungan tanaman.",
    techStack: ["ESP32", "Arduino IDE", "Internet of Things (IoT)", "Blynk App", "Hardware Sensors (pH, TDS, Suhu)"], //[cite: 1]
    github: null, // Silakan ganti dengan link GitHub repositori proyek IoT Anda jika ada
    demo: null,
    images: [
      "/assets/projects/iot_hydroponic.png", 
      "/assets/projects/iot_hydroponic_2.jpeg",
    ],// Sesuaikan dengan nama file gambar dokumentasi alat hidroponik Anda
    highlight: true,
  },
  {
    id: 5,
    title: "Implementasi ERP Odoo - CV Berkah Jaya Mandiri Semarang", // 
    description:
      "Proyek perancangan dan implementasi sistem Enterprise Resource Planning (ERP) menggunakan platform Odoo untuk CV Berkah Jaya Mandiri Semarang. Proyek ini bertujuan mendukung transformasi digital perusahaan dengan mengintegrasikan proses bisnis melalui modul CRM, Sales, Inventory, Accounting, dan Sign.", // 
    techStack: ["Odoo ERP", "CRM", "Sales", "Inventory", "Accounting"], // 
    github: null, // Karena ini proyek implementasi perusahaan/tugas, repositori GitHub bisa dikosongkan (null) atau diisi jika ada repositori dokumentasinya.
    demo: null,
    images:[ 
      "/assets/projects/bjms_project.png",
      "/assets/projects/bjms_project_2.png",
    ], // Disesuaikan dengan nama file gambar screenshot proyek Odoo Anda nantinya
    highlight: true,
  },
  // tambahkan project lainnya...
];

export const certificates = [
  {
    id: 1,
    title: "Cisco CCNA: Switching, Routing, and Wireless Essentials ",
    issuer: "Cisco",
    date: "Desember 2024",
    image: "/assets/sertifikat/cisco.jpg",
    link: "https://dicoding.com/certificates/xxx",
  },
  {
    id: 2,
    title: "Oracle Academy: Database Design",
    issuer: "Oracle",
    date: "Mei 2024",
    image: "/assets/sertifikat/db2.jpg",
    link: "https://coursera.org/verify/xxx",
  },
  {
    id: 3,
    title: "Oracle Academy: Database Programming with SQL",
    issuer: "Oracle",
    date: "Juni 2024",
    image: "/assets/sertifikat/db1.jpg",
    link: "https://coursera.org/verify/xxx",
  },
  {
    id: 4,
    title: "Internet Of Things Fundamental",
    issuer: "myDigiLearn",
    date: "September 2023",
    image: "/assets/sertifikat/digilearn.jpg",
    link: "https://coursera.org/verify/xxx",
  },
  // tambahkan sertifikat lainnya...
];

export const education = [
  {
    degree: "S.Tr.T — Teknologi Rekayasa Komputer",
    institution: "Politeknik Negeri Semarang",
    year: "2023 — Sekarang",
    gpa: null,
    notes: "Konsentrasi: Rekayasa Perangkat Lunak",
  },
  {
    degree: "SMK — Teknik Komputer dan Jaringan",
    institution: "SMK NU Ungaran",
    year: "2019 — 2023",
    gpa: null,
    notes: null,
  },
];

export const experiences = [
  // Kosongkan array ini jika belum punya pengalaman kerja
  {
    role: "Computer Technician Assistant",
    company: "Sahabat Komputer",
    period: "2022",
    description:
      "Membantu dalam perakitan komputer, pemeliharaan, serta instalasi perangkat lunak. Memperoleh pengalaman praktis dalam troubleshooting, jaringan komputer, dan pelayanan pelanggan",
  },
];

export const stats = [
  { label: "Project Selesai", value: 6, suffix: "+" },
  { label: "Sertifikat", value: 4, suffix: "+" },
  { label: "Semester Aktif", value: 6, suffix: "" },
  { label: "GitHub Repositories", value: 6, suffix: "+" },
];
