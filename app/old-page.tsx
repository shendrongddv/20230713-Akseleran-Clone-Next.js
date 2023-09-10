import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import GooglePlay from "../public/google-play.png";
import AppStore from "../public/app-store.png";
import logoOJK from "../public/ojk.png";
import logoAFPI from "../public/afpi.png";
import imgAssetsA from "../public/reksa-dana.svg";
import imgAssetsB from "../public/calculator.png";
import imgAssetsC from "../public/auto-lending.svg";
import imgAssetsD from "../public/download-app.png";
import BenefitCard from "@/components/benefit-card";

import ReviewSlider from "@/components/review-slider";
import { MediaCardDesktop } from "@/components/media-card";
import MediaSlider from "@/components/media-slider";
import { PartnerCardDesktop } from "@/components/partner-card.tsx";
import PartnerSlider from "@/components/partner-slider";
import Stats from "@/components/stats";
import ListingCard from "@/components/listing-card";

export default function Home() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* Ongoing Campaign */}
      <section id="ongoing-campaign" className="px-6 pb-16 pt-36">
        <div className="container">
          <div className="flex flex-col gap-12">
            {/* # */}
            <h2 className="h2 text-primary">
              Kampanye Pinjaman yang Sedang Berlangsung
            </h2>

            {/* # Listings */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {items.map((item) => (
                <ListingCard key={item} />
              ))}
            </div>

            {/* # */}
            <Button variant="outline" className="w-full md:mx-auto md:w-max">
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
            <h2 className="h2 text-primary">
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
              <h3 className="h3 text-white">Reksa Dana</h3>
              <h2 className="h2 mt-4 text-white">
                Bebas Nganggur. Aktif Berkembang.
              </h2>
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
              <h3 className="h3 text-primary/90">Kalkulator Finansial</h3>
              <h2 className="h2 mt-4 text-primary">
                Rencanakan Masa Depanmu Hari Ini!
              </h2>
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
              <h3 className="h3 text-white">Auto Lending</h3>
              <h2 className="h2 mt-4 text-white">Hemat Waktu. Hasil Optimal</h2>
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
              <h3 className="text-xl font-semibold text-primary md:text-2xl">
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

          {/* Stats Wrapper */}
          <Stats />
        </div>
      </section>
      {/* ./ Stats */}

      {/* Reviews */}
      <section id="reviews" className="px-6 py-16">
        <div className="container">
          <div className="w-full">
            <ReviewSlider />
          </div>
        </div>
      </section>
      {/* ./ Reviews */}

      {/* Covered */}
      <section id="reviews" className="w-full bg-[#f7f7f7] px-6 py-10 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            <span className="flex text-lg">Diliput oleh:</span>

            {/* Cards Desktop */}
            <div className="hidden flex-wrap items-center justify-center md:flex">
              {/* Card */}
              <MediaCardDesktop />
            </div>

            {/* Cards Mobile */}
            <div className="flex w-full md:hidden">
              <MediaSlider />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Covered */}

      {/* Partners */}
      <section id="partners" className="px-6 pb-8 pt-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8">
            <span className="flex text-lg">Partner Kami :</span>

            {/* Partner Desktop */}
            <div className="hidden flex-wrap items-center justify-center md:flex">
              {/* Card */}
              <PartnerCardDesktop />
            </div>

            {/* Partner Mobile */}
            <div className="flex w-full md:hidden">
              <PartnerSlider />
            </div>
          </div>
        </div>
      </section>
      {/* ./ Partners */}

      {/* Legalitas */}
      <section id="legalitas" className="px-6 py-16">
        <div className="container">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-evenly">
            <div className="flex w-full flex-col items-center text-center sm:w-4/12">
              <span className="text-xs md:text-sm">
                Telah Berizin dan Diawasi oleh
              </span>
              <Link href="/">
                <Image
                  src={logoOJK}
                  alt="OJK"
                  width={400}
                  height={400}
                  className="mt-6 h-16 w-auto sm:h-20"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col items-center text-center sm:w-4/12">
              <span className="text-xs md:text-sm">Anggota Terdaftar dari</span>
              <Link href="/">
                <Image
                  src={logoAFPI}
                  alt="OJK"
                  width={400}
                  height={400}
                  className="mt-6 h-16 w-auto sm:h-20"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Legalitas */}
    </>
  );
}
