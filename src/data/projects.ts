import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'bcr-api-docs',
    title: 'BCR - Car Rental API Documentation',
    description: 'RESTful API untuk sistem rental mobil dengan dokumentasi OpenAPI lengkap. Mengimplementasikan autentikasi berbasis role (superadmin, admin, member) dan CRUD operations untuk manajemen data mobil dengan audit trail.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Knex.js', 'OpenAPI', 'Swagger'],
    category: 'backend',
    githubUrl: 'https://github.com/yourusername/bcr-api-docs',
    screenshots: ['/screenshots/bcr-api-1.png'],
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
    screenshots: ['/screenshots/baskarya-1.png'],
    features: [
      'RESTful API untuk konten batik',
      'Integrasi dengan ML untuk analisis gambar',
      'Sistem bookmark pengguna',
      'Manajemen konten budaya'
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
      '/screenshots/news-app-1.png',
      '/screenshots/news-app-2.png',
      '/screenshots/news-app-3.png',
      '/screenshots/news-app-4.png'
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
    id: 'news-scraper',
    title: 'Indonesia News Scraper',
    description: 'Web scraper untuk mengumpulkan berita dari berbagai sumber media Indonesia. Menggunakan Python untuk scraping dan validasi data dengan penyimpanan dalam format JSON.',
    technologies: ['Python', 'Web Scraping', 'BeautifulSoup', 'Requests'],
    category: 'backend',
    githubUrl: 'https://github.com/yourusername/news-scraper',
    screenshots: ['/screenshots/news-scraper-1.png'],
    features: [
      'Multi-source news scraping',
      'Data validation',
      'JSON data storage',
      'Automated scraping manager'
    ],
    year: 2024
  },
  {
    id: 'openmusic-api-v3',
    title: 'OpenMusic API v3',
    description: 'RESTful API untuk platform streaming musik dengan fitur manajemen lagu, album, playlist, dan kolaborasi antar pengguna.',
    technologies: ['Node.js', 'Hapi.js', 'PostgreSQL', 'JWT', 'Redis'],
    category: 'backend',
    githubUrl: 'https://github.com/yourusername/openmusicapiv3',
    screenshots: ['/screenshots/openmusic-1.png'],
    features: [
      'Manajemen lagu dan album',
      'Playlist pribadi dan kolaborasi',
      'JWT Authentication',
      'Caching dengan Redis',
      'Export playlist ke JSON'
    ],
    year: 2024
  },
  {
    id: 'bcr-react',
    title: 'BCR - Car Rental Web App',
    description: 'Frontend web application untuk sistem rental mobil menggunakan React dan TypeScript. Terintegrasi dengan backend API untuk manajemen pemesanan mobil.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Jest', 'React Testing Library'],
    category: 'frontend',
    githubUrl: 'https://github.com/yourusername/bcr-react',
    liveUrl: 'https://your-bcr-app.netlify.app',
    screenshots: ['/screenshots/bcr-react-1.png', '/screenshots/bcr-react-2.png'],
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
    id: 'financial-app',
    title: 'Bank Management System',
    description: 'Aplikasi web manajemen perbankan dengan fitur buka rekening, transaksi, pinjaman, investasi, dan perencanaan keuangan (dream account).',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'fullstack',
    githubUrl: 'https://github.com/yourusername/financial-app',
    screenshots: ['/screenshots/bank-1.png'],
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
    id: 'todo-location-app',
    title: 'Todo App with Location',
    description: 'Aplikasi Android untuk manajemen todo list dengan integrasi lokasi menggunakan Google Maps. Dibangun dengan Kotlin dan Firebase.',
    technologies: ['Kotlin', 'Android', 'Firebase', 'Google Maps API', 'Room Database'],
    category: 'mobile',
    githubUrl: 'https://github.com/yourusername/todo-location-app',
    screenshots: [
      '/screenshots/todo-app-1.png',
      '/screenshots/todo-app-2.png',
      '/screenshots/todo-app-3.png',
      '/screenshots/todo-app-4.png'
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
    id: 'crypto-final',
    title: 'Cryptography Final Project',
    description: 'Implementasi berbagai algoritma kriptografi untuk enkripsi dan dekripsi data. Project tugas akhir mata kuliah Kriptografi.',
    technologies: ['Python', 'Cryptography', 'AES', 'RSA'],
    category: 'other',
    githubUrl: 'https://github.com/yourusername/crypto-final',
    screenshots: ['/screenshots/crypto-1.png'],
    features: [
      'Implementasi algoritma enkripsi klasik',
      'Enkripsi modern (AES, RSA)',
      'Analisis keamanan',
      'GUI untuk demo'
    ],
    year: 2024
  },
  {
    id: 'umkm-portal',
    title: 'Web Portal UMKM',
    description: 'Platform web untuk UMKM (Usaha Mikro Kecil Menengah) untuk menampilkan produk dan layanan mereka secara online.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'fullstack',
    githubUrl: 'https://github.com/yourusername/umkm-portal',
    screenshots: ['/screenshots/umkm-1.png'],
    features: [
      'Katalog produk UMKM',
      'Sistem manajemen konten',
      'Dashboard admin',
      'Responsive design'
    ],
    year: 2024
  }
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
