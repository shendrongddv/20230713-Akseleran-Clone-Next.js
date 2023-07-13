import Image from "next/image";
import Link from "next/link";

import GooglePlay from "../../public/google-play.png";
import AppStore from "../../public/app-store.png";

const socials = [
  {
    id: 1,
    label: "Facebook",
    href: "/",
    img: "facebook.png",
  },
  {
    id: 2,
    label: "Instagram",
    href: "/",
    img: "instagram.png",
  },
  {
    id: 3,
    label: "LinkedIn",
    href: "/",
    img: "linkedin.png",
  },
  {
    id: 4,
    label: "Twitter",
    href: "/",
    img: "twitter.png",
  },
  {
    id: 5,
    label: "YouTube",
    href: "/",
    img: "youtube.png",
  },
  {
    id: 6,
    label: "Telegram",
    href: "/",
    img: "telegram.png",
  },
];

const footerLinks = [
  {
    id: 1,
    label: "Produk",
    links: [
      {
        id: 1,
        label: "Beri Pinjaman",
        href: "/",
      },
      {
        id: 2,
        label: "Ajukan Pinjaman",
        href: "/",
      },
      {
        id: 3,
        label: "Cara Mengajukan Pinjaman",
        href: "/",
      },
      {
        id: 4,
        label: "Kalkulator Finansial",
        href: "/",
      },
    ],
  },
  {
    id: 3,
    label: "Perusahaan",
    links: [
      {
        id: 1,
        label: "Tentang Kami",
        href: "/",
      },
      {
        id: 2,
        label: "Partnership",
        href: "/",
      },
      {
        id: 3,
        label: "Kalender Kegiatan",
        href: "/",
      },
      {
        id: 4,
        label: "Risiko Pemberian Pinjaman",
        href: "/",
      },
      {
        id: 5,
        label: "Risiko Penerima Pinjaman",
        href: "/",
      },
      {
        id: 6,
        label: "Info Penilaian Risiko",
        href: "/",
      },
      {
        id: 7,
        label: "Publikasi Penanganan Pengaduan Konsumen",
        href: "/",
      },
      {
        id: 8,
        label: "Pengumuman",
        href: "/",
      },
    ],
  },
  {
    id: 4,
    label: "Legal",
    links: [
      {
        id: 1,
        label: "Kebijakan Privasi",
        href: "/",
      },
      {
        id: 2,
        label: "Kebijakan Auto-Withdrawal",
        href: "/",
      },
      {
        id: 3,
        label: "Ketentuan Kode Referral",
        href: "/",
      },
      {
        id: 4,
        label: "Ketentuan Auto Lending",
        href: "/",
      },
      {
        id: 5,
        label: "Ketentuan Asuransi Kredit",
        href: "/",
      },
      {
        id: 6,
        label: "Ketentuan Layanan Pengaduan Pengguna",
        href: "/",
      },
      {
        id: 7,
        label: "Draf Standar Perjanjian Pinjaman",
        href: "/",
      },
      {
        id: 8,
        label: "Draf Standar Perjanjian Jual Beli dan Pengalihan Piutang",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    label: "Dukungan",
    links: [
      {
        id: 1,
        label: "Blog",
        href: "/",
      },
      {
        id: 2,
        label: "FAQ",
        href: "/",
      },
      {
        id: 3,
        label: "Hubungi Kami",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-white/75">
      <div className="bg-primary px-6">
        <div className="container pt-16">
          {/* Main */}
          {/* # Flex */}
          <div className="flex flex-col gap-12 md:flex-row">
            {/* # Col */}
            <div className="md:w-1/4">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/logo-white.svg"
                  alt="Akseleran"
                  width={400}
                  height={400}
                  className="h-14 w-auto"
                />
              </Link>

              {/* Social Media */}
              <div className="mt-6 flex items-center gap-4">
                {socials?.map((item) => (
                  <Link key={item.id} href={item.href}>
                    <Image
                      src={`/icons/${item.img}`}
                      alt={item.label}
                      width={43}
                      height={43}
                      className="h-8 w-8 rounded-full"
                    />
                  </Link>
                ))}
              </div>

              {/* Download */}
              <div className="mt-10">
                <h4 className="text-sm font-semibold text-white">
                  Download Akseleran App
                </h4>
                <div className="mt-4 flex items-center gap-4 md:flex-col md:items-start">
                  <Link href="/">
                    <Image
                      src={GooglePlay}
                      alt="Google Play"
                      className="w-auto flex-1 sm:h-12 sm:flex-none"
                    />
                  </Link>

                  <Link href="/">
                    <Image
                      src={AppStore}
                      alt="Google Play"
                      className="w-auto flex-1 sm:h-12 sm:flex-none"
                    />
                  </Link>
                </div>
              </div>

              {/* Download */}
              <div className="mt-10">
                <h4 className="text-sm font-semibold text-white">
                  Anggota dari
                </h4>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    src="/afpi-white.png"
                    alt="AFPI"
                    width={278}
                    height={72}
                    className="h-10 w-auto"
                  />
                  <Image
                    src="/legal-stamp.svg"
                    alt="Legal Stamp"
                    width={72}
                    height={72}
                    className="h-10 w-auto"
                  />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-white">
                  Berizin dan Diawasi oleh Otoritas Jasa Keuangan
                </h4>
              </div>
            </div>

            {/* # Col */}
            <div className="md:w-3/4">
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {footerLinks?.map((item) => (
                  <div key={item.id}>
                    <h4 className="font-semibold text-white">{item.label}</h4>
                    <ul className="mt-4 space-y-2">
                      {item.links?.map((subitem) => (
                        <li key={subitem.id}>
                          <Link
                            href={subitem.href}
                            className="text-sm text-white/90"
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="mt-12 space-y-4 border-t border-white/25 py-8 text-xs">
            <p>
              PT Akseleran Keuangan Inklusif Indonesia (Akseleran) sebagai
              Platform Peer-to-Peer (P2P) Lending Indonesia saat ini telah resmi
              berizin dan diawasi oleh Otoritas Jasa Keuangan sebagai
              Penyelenggara Layanan Pinjam Meminjam Uang Berbasis Teknologi
              Informasi sesuai dengan ketentuan dalam Peraturan Otoritas Jasa
              Keuangan No. 10/POJK.05/2022.
            </p>

            <p>
              Akseleran tidak memberikan rekomendasi pinjaman dan tidak
              mengelola dana pinjaman dari para pengguna terdaftar di situs ini.
              Akseleran berperan menyelenggarakan situs peer-to-peer lending
              www.akseleran.co.id yang menghubungkan usaha tahap awal dan UKM
              yang membutuhkan pinjaman dengan para calon pemberi pinjaman,
              serta mengurus tertib administrasi dari pinjaman yang berhasil
              dicairkan.
            </p>

            <p>
              Pemberian pinjaman mengandung risiko, di antaranya risiko
              kredit/gagal bayar, risiko likuiditas agunan, maupun risiko proses
              hukum. Pastikan Anda memahami risiko yang ada sebelum Anda
              memberikan pinjaman. Pelajari risiko lebih lanjut dengan menuju
              halaman Risiko Pemberian Pinjaman.
            </p>

            <p>
              Sebagai penerima pinjaman, Anda bertanggung jawab untuk melakukan
              pembayaran pokok dan bunga pinjaman Anda. Sesuai Pasal 1131
              KUHPerdata, setiap aset milik penerima pinjaman menjadi jaminan
              untuk setiap perikatan yang dibuat. Dengan demikian, dalam hal
              Anda gagal melakukan pembayaran, Anda dapat kehilangan aset atau
              harta kekayaan Anda.
            </p>

            <p>
              (i) Pengguna Layanan Pinjaman Meminjam Uang Berbasis Teknologi
              Informasi (&quot;Fintech Lending&quot;) merupakan wujud
              kesepakatan dan hubungan perdata antara Pemberi Pinjaman dengan
              Penerima Pinjaman, sehingga segala resiko dan akibat hukum
              daripadanya ditanggung sepenuhnya oleh masing-masing pihak yang
              berkontrak. (ii) Resiko Kredit atau Gagal Bayar dan seluruh
              kerugian dari atau terkait dengan kesepakatan pinjam meminjam
              ditanggung sepenuhnya oleh Pemberi Pinjaman. Tidak ada lembaga
              atau otoritas negara yang bertanggung jawab atas resiko gagal
              bayar dan kerugian tersebut. (iii) Pemberi Pinjaman yang belum
              memiliki pengetahuan dan pengalaman Pinjam-meminjam atau Fintech
              Lending, disarankan tidak menggunakan layanan ini. (iv) Sebelum
              memanfaatkan Fintech Lending, Penerima Pinjaman wajib
              mempertimbangkan tingkat bunga pinjaman dan biaya-biaya lainnya
              sesuai dengan kemampuannya dalam melunasi pinjaman. (v) Setiap
              kecurangan tercatat secara digital di dunia maya dan dapat
              diketahui masyarakat luas di media sosial serta dapat menjadi alat
              bukti hukum yang sah menurut peraturan mengenai informasi dan
              transaksi elektronik dalam proses penyelesaian sengketa dan
              penegakan hukum. (vi) Masyarakat Pengguna wajib membaca dan
              memahami informasi ini sebelum keputusan sebagai Pemberi Pinjaman
              maupun Penerima Pinjaman. Keputusan Pengguna untuk memanfaatkan
              Fintech Lending merupakan suatu wujud dan bukti pemahaman atas
              informasi ini.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#003169] px-6 py-6">
        <div className="container max-md:text-center">
          <span className="text-xs">
            Copyright © 2023 PT. Akseleran Keuangan Inklusif Indonesia. All
            Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
