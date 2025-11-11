import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'umkm-portal',
    title: 'Web Portal UMKM',
    description: 'Platform web untuk UMKM (Usaha Mikro Kecil Menengah) untuk menampilkan produk dan layanan mereka secara online.',
    technologies: ['Next.js', 'Google Maps API', 'Firestore', 'Figma', 'TailwindCSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/pesuts/web-portal-umkm',
    liveUrl: 'https://umkmtanjungrejo.com/',
    screenshots: [
      'https://raw.githubusercontent.com/pesuts/web-portal-umkm/refs/heads/main/public/screenshots/peta.png',
      'https://raw.githubusercontent.com/pesuts/web-portal-umkm/refs/heads/main/public/screenshots/landing-page.png',
      'https://raw.githubusercontent.com/pesuts/web-portal-umkm/refs/heads/main/public/screenshots/umkm.png',
      'https://raw.githubusercontent.com/pesuts/web-portal-umkm/refs/heads/main/public/screenshots/umkm-detail.png',
      'https://raw.githubusercontent.com/pesuts/web-portal-umkm/refs/heads/main/public/screenshots/products.png',
      'https://raw.githubusercontent.com/pesuts/web-portal-umkm/refs/heads/main/public/screenshots/product-detail.png',
      'https://raw.githubusercontent.com/pesuts/web-portal-umkm/refs/heads/main/public/screenshots/peta-detail.png'
    ],
    features: [
      'Katalog produk UMKM',
      'Sistem manajemen konten',
      'Dashboard admin',
      'Responsive design'
    ],
    year: 2024
  },
  {
    id: 'bcr-react',
    title: 'BCR - Car Rental Web App',
    description: 'Frontend web application untuk sistem rental mobil menggunakan React dan TypeScript. Terintegrasi dengan backend API untuk manajemen pemesanan mobil.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Jest', 'React Testing Library'],
    category: 'fullstack',
    githubUrl: 'https://github.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7',
    liveUrl: 'https://bcr-ch7-daniel.netlify.app/',
    screenshots: [
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/home.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/why.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/testimonials.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/faq.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/rent.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/rent-result.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/rent-result2.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/dashboard.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/dashboard-card.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/add-cars.jpg',
      'https://raw.githubusercontent.com/pesuts/pesuts-24001143-synrgy7-dhs-bcr_react-ch7/refs/heads/main/screenshots/add-cars2.jpg',
    ],
    features: [
      'Responsive UI dengan Tailwind CSS',
      'Unit testing dengan Jest',
      'TypeScript untuk type safety',
      'Integration dengan BCR API',
      'Modern React hooks'
    ],
    year: 2024
  },
  {
    id: 'fsw-fe',
    title: 'DIGIBANK Satu - Collaborative Banking App',
    description: 'Proyek kolaborasi Frontend website, Android, Project Manager, UI/UX, Java Backend, Quality Assurance untuk membuat aplikasi mobile dan website menggunakan React. Bertanggung jawab untuk mengembangkan komponen-komponen tertentu dalam aplikasi web modern dengan focus pada user experience dan performance.',
    technologies: ['React', 'Javascript', 'Vite', 'Tailwind CSS', 'React Router', 'Axios', 'Recharts', 'Jest'],
    category: 'frontend',
    githubUrl: 'https://github.com/pesuts/fsw-fe',
    liveUrl: 'https://banksatu.fly.dev',
    screenshots: [
      '/screenshots/one-synrgy/savings.jpg',
      '/screenshots/one-synrgy/portal.jpg',
      '/screenshots/one-synrgy/home.jpg'
    ],
    features: [
      'Modern React dengan TypeScript',
      'Responsive UI dengan Tailwind CSS',
      'Data visualization dengan Recharts',
      'Form handling dengan React Hook Form',
      'Unit testing dengan Jest',
      'PDF export',
      'SweetAlert2 untuk notifikasi',
      'React Router untuk navigasi'
    ],
    year: 2024
  },
  {
    id: 'bcr-api-docs',
    title: 'BCR - Car Rental API Documentation',
    description: 'RESTful API untuk sistem rental mobil dengan dokumentasi OpenAPI lengkap. Mengimplementasikan autentikasi berbasis role (superadmin, admin, member) dan CRUD operations untuk manajemen data mobil dengan audit trail.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Knex.js', 'OpenAPI', 'Swagger', 'Redis', 'JWT'],
    category: 'backend',
    githubUrl: 'https://github.com/pesuts/24001143-synrgy7-dhs-bcr_api_docs-ch6',
    screenshots: [
      'https://raw.githubusercontent.com/pesuts/24001143-synrgy7-dhs-bcr_api_docs-ch6/refs/heads/main/Screenshot%20(2340).png',
      'https://raw.githubusercontent.com/pesuts/24001143-synrgy7-dhs-bcr_api_docs-ch6/refs/heads/main/erd.png',
      'https://raw.githubusercontent.com/pesuts/24001143-synrgy7-dhs-bcr_api_docs-ch6/refs/heads/main/Screenshot%20(2339).png',
      'https://raw.githubusercontent.com/pesuts/24001143-synrgy7-dhs-bcr_api_docs-ch6/refs/heads/main/Screenshot%20(2341).png',
    ],
    features: [
      'Autentikasi multi-role (superadmin, admin, member)',
      'CRUD operations untuk data mobil',
      'Audit trail untuk tracking perubahan data',
      'Service Repository Pattern',
      'OpenAPI/Swagger Documentation',
      'RESTful API design'
    ],
    year: 2024
  },
  {
    id: 'baskarya-api',
    title: 'BASKARYA - Express Backend API',
    description: 'Backend API untuk platform eksplorasi budaya batik Indonesia. Menyediakan endpoint untuk bookmark, analisis gambar menggunakan machine learning, dan manajemen konten batik.',
    technologies: ['Node.js', 'Express', 'JavaScript', 'Machine Learning API'],
    category: 'backend',
    githubUrl: 'https://github.com/Baskarya/express-backend',
    screenshots: [
      '/screenshots/baskarya.png',
    ],
    features: [
      'RESTful API untuk konten batik',
      'Integrasi dengan ML untuk analisis gambar',
      'Sistem bookmark pengguna',
      'Manajemen konten budaya'
    ],
    year: 2024
  },
  {
    id: 'etl-earthquake-with-airflow',
    title: 'Earthquake Dataset - ETL Data Engineering',
    description: 'Proyek Data Engineering untuk melakukan proses ETL (Extract, Transform, Load) pada dataset gempa bumi. Data gempa diintegrasikan dengan data demografi, geologi, infrastruktur, dan historis menggunakan arsitektur modern data warehouse.',
    technologies: ['Python', 'Apache Spark', 'Apache Airflow', 'Pentaho', 'PostgreSQL', 'Google Cloud Storage', 'BigQuery'],
    category: 'data-engineering',
    githubUrl: 'https://github.com/pesuts/etl-earthquake-with-airflow',
    screenshots: [
      'https://raw.githubusercontent.com/pesuts/etl-earthquake-with-airflow/refs/heads/main/dashboard.jpg',
      'https://raw.githubusercontent.com/pesuts/etl-earthquake-with-airflow/refs/heads/main/erd-data-warehouse.jpg',
      'https://raw.githubusercontent.com/pesuts/etl-earthquake-with-airflow/refs/heads/main/screenshots/airflow.png',
      'https://raw.githubusercontent.com/pesuts/etl-earthquake-with-airflow/refs/heads/main/screenshots/pentaho.png',
      'https://raw.githubusercontent.com/pesuts/etl-earthquake-with-airflow/refs/heads/main/screenshots/erd_oltp.png',
      'https://raw.githubusercontent.com/pesuts/etl-earthquake-with-airflow/refs/heads/main/screenshots/gcs.png',
      'https://raw.githubusercontent.com/pesuts/etl-earthquake-with-airflow/refs/heads/main/screenshots/bigquery.png',
      'https://raw.githubusercontent.com/pesuts/etl-earthquake-with-airflow/refs/heads/main/screenshots/bigquery2.png'
    ],
    features: [
      'ETL Pipeline dengan Pentaho untuk ekstraksi data CSV',
      'Data transformation menggunakan Apache Spark',
      'Star schema data warehouse design',
      'Automated ETL orchestration dengan Apache Airflow',
      'Cloud storage di Google Cloud Storage (GCS)',
      'Data warehouse di Google BigQuery',
      'Dashboard visualisasi data gempa'
    ],
    year: 2024
  },
  {
    id: 'e-commerce-laravel',
    title: 'E-Commerce - Laravel Online Store',
    description: 'Platform e-commerce lengkap yang dibangun dengan Laravel 10. Bertanggung jawab untuk menambahkan beberapa fitur penting termasuk integrasi payment gateway Midtrans, history transaksi, integrasi API jasa pengiriman, penghitungan estimasi biaya pengiriman, dan pengembangan beberapa modul sistem.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Midtrans API', 'RajaOngkir API'],
    category: 'fullstack',
    githubUrl: '-',
    screenshots: [
      '/screenshots/e-comm/payment-gateway.png',
      '/screenshots/e-comm/cart.png',
      '/screenshots/e-comm/checkout-page.png',
      '/screenshots/e-comm/payment.png',
      '/screenshots/e-comm/address.png',
      '/screenshots/e-comm/address-form.png',
      '/screenshots/e-comm/bill.png',
      '/screenshots/e-comm/bill2.png',
      '/screenshots/e-comm/history1.png',
      '/screenshots/e-comm/history2.png'
    ],
    features: [
      'Sistem autentikasi dengan Laravel UI',
      'Shopping cart dan checkout process',
      'Integrasi Midtrans payment gateway',
      'Admin dashboard untuk manajemen produk',
      'Manajemen kategori dan produk',
      'Order management system',
      'User profile management'
    ],
    year: 2024
  },
  {
    id: 'news-scraper',
    title: 'Indonesia News Scraper',
    description: 'Web scraper untuk mengumpulkan berita dari berbagai sumber media Indonesia. Menggunakan Python untuk scraping dan validasi data dengan penyimpanan dalam format JSON.',
    technologies: ['Python', 'Web Scraping', 'BeautifulSoup', 'Requests'],
    category: 'other',
    githubUrl: 'https://github.com/pesuts/news-scraper',
    screenshots: [
    'https://raw.githubusercontent.com/pesuts/news-scraper/refs/heads/main/screenshots/main-interface.png',
    'https://raw.githubusercontent.com/pesuts/news-scraper/refs/heads/main/screenshots/history-tab.png',
    'https://raw.githubusercontent.com/pesuts/news-scraper/refs/heads/main/screenshots/analytics-tab.png',
    'https://raw.githubusercontent.com/pesuts/news-scraper/refs/heads/main/screenshots/settings-tab.png',
    ],
    features: [
      'Multi-source news scraping',
      'Data validation',
      'JSON data storage',
      'Automated scraping manager'
    ],
    year: 2024
  },
  {
    id: 'todo-location-app',
    title: 'Todo App with Location',
    description: 'Aplikasi Android untuk manajemen todo list dengan integrasi lokasi menggunakan Google Maps. Dibangun dengan Kotlin dan Firebase.',
    technologies: ['Kotlin', 'Android', 'Firebase', 'Google Maps API', 'Room Database'],
    category: 'mobile',
    githubUrl: 'https://github.com/pesuts/todo-app-with-location',
    screenshots: [
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024811.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023230.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023317.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023346.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023356.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023425.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023459.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023520.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023559.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023629.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023649.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023903.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_023921.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024001.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024016.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024656.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024711.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024841.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024857.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024911.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_024918.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_032433.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_034101.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_035118.png',
      'https://raw.githubusercontent.com/pesuts/todo-app-with-location/refs/heads/main/SCREENSHOTS/Screenshot_20240531_035126.png',
    ],
    features: [
      'CRUD Todo items',
      'Integrasi Google Maps',
      'Location-based reminders',
      'Firebase sync',
      'Material Design UI'
    ],
    year: 2024
  },
  {
    id: 'sibas-news-app',
    title: 'SIBAS News - Mobile News App',
    description: 'Aplikasi berita mobile berbasis Flutter dengan Firebase Authentication. Menampilkan berita dari berbagai kategori dengan fitur WebView untuk detail artikel dan manajemen profil pengguna.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Hive', 'REST API'],
    category: 'mobile',
    githubUrl: 'https://github.com/pesuts/news-app-mobile',
    screenshots: [
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160327.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160352.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160436.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160456.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160509.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160516.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160532.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160550.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160626.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160646.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160656.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160749.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160802.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160807.png',
      'https://raw.githubusercontent.com/pesuts/news-app-mobile/refs/heads/main/screenshots/Screenshot_20240606_160820.png',
    ],
    features: [
      'Firebase Authentication (Login/Register)',
      'Multi-kategori berita',
      'Local storage dengan Hive',
      'WebView untuk detail artikel',
      'Upload dan update foto profil',
      'Integrasi API Berita Indonesia'
    ],
    year: 2024
  },
  {
    id: 'financial-app',
    title: 'Bank Management System',
    description: 'Aplikasi web manajemen perbankan dengan fitur buka rekening, transaksi, pinjaman, investasi, dan perencanaan keuangan (dream account).',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'fullstack',
    githubUrl: 'https://github.com/pesuts/Project-Akhir',
    screenshots: [
      'https://raw.githubusercontent.com/pesuts/Project-Akhir/refs/heads/main/screenshots/home.jpg',
      'https://raw.githubusercontent.com/pesuts/Project-Akhir/refs/heads/main/screenshots/login.jpg',
      'https://raw.githubusercontent.com/pesuts/Project-Akhir/refs/heads/main/screenshots/register.jpg',
      'https://raw.githubusercontent.com/pesuts/Project-Akhir/refs/heads/main/screenshots/account.jpg',
      'https://raw.githubusercontent.com/pesuts/Project-Akhir/refs/heads/main/screenshots/transactions.jpg',
      'https://raw.githubusercontent.com/pesuts/Project-Akhir/refs/heads/main/screenshots/save.jpg',
      'https://raw.githubusercontent.com/pesuts/Project-Akhir/refs/heads/main/screenshots/invest.jpg',
      'https://raw.githubusercontent.com/pesuts/Project-Akhir/refs/heads/main/screenshots/loan.jpg',
    ],
    features: [
      'Sistem autentikasi pengguna',
      'Manajemen rekening bank',
      'Transaksi antar rekening',
      'Sistem pinjaman',
      'Fitur investasi',
      'Perencanaan keuangan (Dream Account)'
    ],
    year: 2023
  },
  {
    id: 'openmusic-api-v3',
    title: 'OpenMusic API v3',
    description: 'RESTful API untuk platform streaming musik dengan fitur manajemen lagu, album, playlist, dan kolaborasi antar pengguna.',
    technologies: ['Node.js', 'Hapi.js', 'PostgreSQL', 'JWT', 'Redis'],
    category: 'backend',
    githubUrl: 'https://github.com/pesuts/openmusicapiv3-main',
    screenshots: [
    ],
    features: [
      'Manajemen lagu dan album',
      'Playlist pribadi dan kolaborasi',
      'JWT Authentication',
      'Caching dengan Redis',
      'Export playlist ke JSON'
    ],
    year: 2024
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(projects.map(project => project.category));
  return ['all', ...Array.from(categories)];
};
