import Image from "next/image";

import Asset from "@/public/about-us.svg";

export const ProfileHeaderSection = () => {
  return (
    <section className="bg-primary-foreground px-4 pb-16 pt-28">
      <div className="container flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col gap-4 text-white md:w-6/12">
          {/* # */}
          <h2 className="h2">Siapa Kami?</h2>

          {/* # */}
          <p>
            Akseleran adalah peer-to-peer lending platform di Indonesia yang
            menghubungkan UKM yang membutuhkan pinjaman untuk mengembangkan
            usaha dengan kumpulan pemberi pinjaman yang memiliki dana lebih
            untuk mendanai pinjaman tersebut.
          </p>

          {/* # */}
          <p>
            Akseleran menyediakan akses permodalan kepada pelaku usaha dengan
            suku bunga yang kompetitif dan fleksibilitas dalam tenor pinjaman,
            model pembayaran, serta penyertaan agunan. Akseleran juga membuka
            alternatif peluang pemberian pinjaman kepada masyarakat Indonesia
            untuk memperoleh imbal hasil yang menarik dan sepadan dengan risiko
            yang ada.
          </p>

          {/* # */}
          <p>
            Akseleran didirikan oleh orang-orang yang telah berpengalaman secara
            profesional dalam dunia finansial dan teknologi. Dengan visi
            &quot;Keuangan Inklusif Menjadi Realitas&quot;, Akseleran berharap
            dapat mendorong pengembangan UKM di Indonesia yang menguntungkan
            bagi pelaku usaha dan kumpulan pemberi pinjaman yang mendukungnya.
          </p>
        </div>

        {/* Col */}
        <div className="md:w-4/12">
          <Image
            src={Asset}
            alt="Beri Pinjaman"
            width={400}
            height={300}
            className="h-auto w-3/5 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};
