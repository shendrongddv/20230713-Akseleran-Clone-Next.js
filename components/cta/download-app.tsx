import Image from "next/image";
import Link from "next/link";

import GooglePlay from "@/public/google-play.png";
import AppStore from "@/public/app-store.png";
import imgAssetsD from "@/public/download-app.png";

export const DownloadApp = () => {
  return (
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
  );
};
