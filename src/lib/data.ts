import type { Feature, Testimonial, Product, NavLink, FaqItem } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export const features: Feature[] = [
  {
    icon: "",
    title: "Peletakan Motif",
    description:
      "Peletakan motif pada baju dapat berbeda dari sampel akibat perbedaan ukuran, panjang baju, serta pemotongan bahan selama proses produksi.",
  },
  {
    icon: "",
    title: "Ketersediaan Motif",
    description:
      "Apabila motif bahan lace atau tille yang sesuai dengan sampel referensi tidak tersedia (habis/diskontinu), maka kami akan menggantinya dengan motif lain yang memiliki corak, warna, dan kualitas yang paling mendekati atau setara.",
  },
  {
    icon: "",
    title: "Perbedaan Warna",
    description:
      "Warna pada sampel dapat mengalami sedikit perbedaan karena faktor pencahayaan atau kamera saat pengambilan gambar.",
  },
  {
    icon: "",
    title: "Pembatalan dan Perubahan Pesanan",
    description:
      "Setelah pemesanan dan pembayaran dikonfirmasi, perubahan terhadap model, warna, ukuran, atau bentuk apa pun dalam pesanan tidak dapat dilakukan.",
  },
  {
    icon: "",
    title: "Komplain",
    description:
      "Untuk mengajukan komplain, wajib menyertakan video unboxing dan dilakukan maksimal 3 hari sejak barang diterima. Komplain tanpa video unboxing atau melebihi batas waktu tersebut tidak akan diproses.",
  },
  {
    icon: "",
    title: "Retur Barang",
    description:
      "Pengiriman barang retur dapat dilakukan maksimal 2 hari setelah komplain diajukan. Jika resi pengiriman melebihi batas waktu tersebut, proses retur tidak dapat dilakukan.",
  },
  {
    icon: "",
    title: "Penggabungan Ongkos Kirim (Ongkir)",
    description:
      "Penggabungan ongkos kirim hanya berlaku jika pesanan dilakukan dalam satu format order yang sama.",
  },
  {
    icon: "",
    title: "Customisasi Produk",
    description:
      "Customisasi yang tersedia hanya untuk panjang baju dan lebar dada.",
  },
  {
    icon: "",
    title: "Jenis Produk yang Tidak Diterima",
    description:
      "Faramour tidak menerima pembuatan baju koko maupun pakaian anak-anak.",
  },
  {
    icon: "",
    title: "Sistem Pembayaran",
    description:
      "Sistem pembayaran hanya menerima pelunasan penuh (full payment) di awal sebelum proses produksi dimulai.",
  },
  {
    icon: "",
    title: "Metode Pembayaran",
    description:
      "Kami tidak melayani pembayaran melalui platform e-commerce manapun.",
  },
  {
    icon: "",
    title: "Keep Slot",
    description:
      "Keep Slot hanya dapat diaktifkan setelah pembayaran penuh diterima melalui transfer.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Faramour completely changed how I approach fashion. Every piece feels intentional — the quality is unreal and the fit is always perfect.",
    author: "Sofia Andreani",
    role: "Stylist, Milan",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote:
      "I've ordered from Faramour three times now and every single time the packaging, the fabric, and the design exceed my expectations.",
    author: "Aisha Kamara",
    role: "Creative Director",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote:
      "The sustainable mission speaks to me deeply. Finally a brand that looks incredible AND cares about the planet.",
    author: "Priya Nair",
    role: "Fashion Blogger",
    avatar:
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=80&h=80&fit=crop&crop=face",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Bagaimana cara memesan produk Faramour?",
    answer:
      "Pemesanan dapat dilakukan dengan menghubungi kami langsung melalui kontak yang tersedia. Pesanan baru akan diproses setelah pembayaran penuh diterima.",
  },
  {
    question: "Berapa lama waktu produksi?",
    answer:
      "Waktu produksi umumnya berkisar antara 14–21 hari kerja tergantung dari jenis produk dan tingkat kesulitan pengerjaan.",
  },
  {
    question: "Apakah tersedia pilihan ukuran custom?",
    answer:
      "Ya, tersedia customisasi untuk panjang baju dan lebar dada. Untuk informasi lebih lanjut, silakan hubungi kami sebelum melakukan pemesanan.",
  },
  {
    question: "Metode pembayaran apa yang diterima?",
    answer:
      "Kami hanya menerima pembayaran melalui transfer bank secara penuh (full payment) di awal. Kami tidak melayani pembayaran melalui platform e-commerce manapun.",
  },
  {
    question: "Apakah bisa melakukan perubahan pesanan setelah pembayaran?",
    answer:
      "Tidak. Setelah pemesanan dan pembayaran dikonfirmasi, perubahan terhadap model, warna, ukuran, atau bentuk apa pun tidak dapat dilakukan.",
  },
  {
    question: "Bagaimana cara mengajukan komplain?",
    answer:
      "Komplain wajib disertai video unboxing dan diajukan maksimal 3 hari sejak barang diterima. Komplain tanpa video unboxing atau melebihi batas waktu tidak akan diproses.",
  },
  {
    question: "Apakah Faramour menerima semua jenis produk?",
    answer:
      "Faramour tidak menerima pembuatan baju koko maupun pakaian anak-anak. Untuk jenis produk lainnya, silakan tanyakan langsung kepada kami.",
  },
  {
    question: "Apa itu Keep Slot dan bagaimana cara menggunakannya?",
    answer:
      "Keep Slot adalah layanan untuk memastikan slot produksi Anda. Keep Slot hanya dapat diaktifkan setelah pembayaran penuh diterima melalui transfer.",
  },
];

export const products: Product[] = [
  {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    name: "Silk Evening Gown",
    price: "$289",
    tag: "New Drop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop",
    name: "Linen Co-ord Set",
    price: "$159",
    tag: "Bestseller",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
    name: "Cashmere Blazer",
    price: "$345",
  },
];
