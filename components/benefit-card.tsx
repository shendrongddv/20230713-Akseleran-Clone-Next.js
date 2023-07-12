import Image from "next/image";

const benefits = [
  {
    id: 1,
    title: "Bunga Rata-Rata 9.5% s.d 10.5% Per Tahun",
    desc: "Dapatkan bunga rata-rata 9.5% s.d 10.5% per tahun, dana berkembang lebih cepat dibanding produk finansial lainnya (sesuai profil risiko).",
    img: "benefit-1.png",
  },
  {
    id: 2,
    title: "Proses Mudah dan Sederhana",
    desc: "Proses pemberian pinjaman secara online dengan konsep pinjam meminjam yang mudah dipahami.",
    img: "benefit-2.svg",
  },
  {
    id: 3,
    title: "Transaksi Aman dan Terpercaya",
    desc: "Akseleran menggunakan asuransi kredit yang melindungi hingga 99% dari pokok pinjaman tertunggak dan memiliki agunan di lebih dari 98% nilai portofolio pinjamannya. Pengajuan pinjaman pun diseleksi ketat oleh tim profesional.",
    img: "benefit-3.png",
  },
  {
    id: 4,
    title: "Nominal Pemberian Pinjaman Terjangkau",
    desc: "Berikan pinjaman mulai dari Rp100 ribu tanpa biaya tambahan apapun, dari mana saja, kapan saja.",
    img: "benefit-4.png",
  },
];

const BenefitCard = () => {
  const items = benefits;

  return (
    <>
      {items?.map((item) => (
        <div key={item.id} className="sm:p-4">
          <Image
            src={`/${item.img}`}
            alt={item.title}
            width={400}
            height={400}
            className="h-20 w-auto sm:h-36"
          />
          <h3 className="h3 mt-6 line-clamp-2 md:w-3/4">{item.title}</h3>
          <p className="mt-4">{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default BenefitCard;
