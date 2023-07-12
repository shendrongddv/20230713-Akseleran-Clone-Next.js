import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import GooglePlay from "../public/google-play.png";
import AppStore from "../public/app-store.png";
import imgAssetsA from "../public/reksa-dana.svg";
import imgAssetsB from "../public/calculator.png";
import imgAssetsC from "../public/auto-lending.svg";
import imgAssetsD from "../public/download-app.png";
import BenefitCard from "@/components/benefit-card";

export default function Home() {
  return (
    <>
      {/* Ongoing Campaign */}
      <section id="ongoing-campaign" className="px-6 pb-16 pt-36">
        <div className="container">
          <div className="flex flex-col gap-12">
            <h2 className="h2 text-[#5c5c5c]">
              Kampanye Pinjaman yang Sedang Berlangsung
            </h2>

            {/* # */}
            <Button
              variant="destructive"
              className="w-full md:mx-auto md:w-max"
            >
              Lihat lebih banyak
            </Button>
          </div>
        </div>
      </section>
      {/* ./ Ongoing Campaign */}

      {/* Benefit */}
      <section id="ongoing-campaign" className="px-6 py-16">
        <div className="container">
          <div className="flex flex-col gap-12">
            <h2 className="h2 text-[#5c5c5c]">
              Kelebihan Memberikan Pinjaman di Akseleran
            </h2>

            {/* Cards */}
            <div className="grid gap-12 sm:grid-cols-2">
              {/* Card */}
              <BenefitCard />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Benefit */}

      {/* Reksadana */}
      <section id="reksadana" className="bg-[#399ed7] px-6 py-16">
        <div className="container">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
            {/* Col Left */}
            <div className="w-full md:w-5/12">
              <Image
                src={imgAssetsA}
                alt="Reksa Dana"
                className="h-auto w-full"
              />
            </div>

            {/* Col Right */}
            <div className="w-full md:w-6/12">
              <h2 className="h2 text-white">Reksa Dana</h2>
              <h3 className="h3 mt-4 text-white">
                Bebas Nganggur. Aktif Berkembang.
              </h3>
              <p className="mt-6 text-white">
                Tetap aktif kembangkan dana saat menanti peluang pendanaan
                Akseleran. Dengan membuka akun reksa dana hasil kerjasama
                Akseleran dengan Tanamduit, danamu jadi bebas nganggur dan dapat
                manfaat maksimal.
              </p>
              <Button variant="destructive" className="mt-8 w-full md:w-max">
                Buat Akun Reksa Dana
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Reksadana */}

      {/* Calculator */}
      <section id="calculator" className="bg-[#f1fbfe] px-6 py-16">
        <div className="container">
          <div className="flex flex-col gap-12 md:flex-row-reverse md:items-center md:justify-between">
            {/* Col Left */}
            <div className="w-full md:w-5/12">
              <Image
                src={imgAssetsB}
                alt="Calculator"
                className="h-auto w-full"
              />
            </div>

            {/* Col Right */}
            <div className="w-full md:w-6/12">
              <h2 className="h2 text-[#5c5c5c]">Kalkulator Finansial</h2>
              <h3 className="h3 mt-4 text-[#5c5c5c]">
                Rencanakan Masa Depanmu Hari Ini!
              </h3>
              <p className="mt-6">
                Hitung rencana pendanaanmu untuk mendapatkan kondisi keuangan
                yang lebih terencana di masa depan.
              </p>
              <Button variant="destructive" className="mt-8 w-full md:w-max">
                Rencanakan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Calculator */}

      {/* Auto Lending */}
      <section id="auto-lending" className="bg-[#399ed7] px-6 py-16">
        <div className="container">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
            {/* Col Left */}
            <div className="w-full md:w-5/12">
              <Image
                src={imgAssetsC}
                alt="Auto Lending"
                className="h-auto w-full"
              />
            </div>

            {/* Col Right */}
            <div className="w-full md:w-6/12">
              <h2 className="h2 text-white">Auto Lending</h2>
              <h3 className="h3 mt-4 text-white">Hemat Waktu. Hasil Optimal</h3>
              <p className="mt-6 text-white">
                Auto Lending merupakan fitur untuk memberikan pinjaman secara
                otomatis yang bertujuan untuk memudahkan lender tanpa harus
                menghabiskan waktu dalam mencari peluang pemberian pinjaman yang
                sesuai dengan preferensi.
              </p>
              <Button variant="destructive" className="mt-8 w-full md:w-max">
                Setup Auto Lending
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Auto Lending */}

      {/* Download App */}
      <section id="download-app" className="bg-[#f1fbfe] px-6 pt-16">
        <div className="container">
          <div className="flex flex-col-reverse gap-12 md:flex-row-reverse md:items-center md:justify-between">
            {/* Col Left */}
            <div className="w-full md:w-5/12">
              <Image
                src={imgAssetsD}
                alt="Download App"
                className="h-auto w-full max-sm:pt-4"
              />
            </div>

            {/* Col Right */}
            <div className="w-full md:w-6/12">
              <h3 className="text-xl font-semibold text-[#5c5c5c] md:text-2xl">
                Lebih praktis dengan Aplikasi Akseleran
              </h3>
              <p className="mt-6">
                Kini mengajukan pinjaman bisa menggunakan aplikasi mobile
                Akseleran. Lebih mudah, kapan saja, di mana saja.
              </p>
              <div className="mt-8 flex items-center gap-4">
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
          </div>
        </div>
      </section>
      {/* ./ Download App */}

      {/* Stats */}
      <section id="stats" className="bg-[#399ed7] px-6 py-16">
        <div className="container">
          <h2 className="h2 text-white">Akseleran dalam Angka</h2>
          <p className="mt-6 text-white">
            Ikuti perjalanan Akseleran dalam mengakselerasikan kemajuan UKM di
            Indonesia dan pengembangan dana masyarakat yang mendukungnya.
          </p>
        </div>
      </section>
      {/* ./ Stats */}

      {/* Reviews */}
      <section id="reviews" className="px-6 py-16">
        <div className="container">
          <div className="flex flex-col items-center"></div>
        </div>
      </section>
      {/* ./ Reviews */}

      {/* Covered */}
      <section id="reviews" className="bg-[#f7f7f7] px-6 py-16">
        <div className="container">
          <div className="flex flex-col items-center">
            <span className="text-lg">Diliput oleh:</span>
          </div>
        </div>
      </section>
      {/* ./ Covered */}

      {/* Partners */}
      <section id="partners" className="px-6 py-16">
        <div className="container">
          <div className="flex flex-col items-center">
            <span className="text-lg">Partner Kami :</span>
          </div>
        </div>
      </section>
      {/* ./ Partners */}
    </>
  );
}
