import Image from "next/image";
import Link from "next/link";

import GooglePlay from "@/public/google-play.png";
import AppStore from "@/public/app-store.png";
import Asset from "@/public/download-app.png";

export const DownloadAppCTA = () => {
  return (
    <section className="bg-slate-50 px-4 pt-16">
      <div className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col gap-2 md:w-6/12">
          <h2 className="h2">Lebih Praktis dengan Aplikasi Akseleran</h2>
          <p>
            Kini mengajukan pinjaman bisa menggunakan aplikasi mobile Akseleran.
            Lebih mudah, kapan saja, di mana saja.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <Link href="/">
              <Image
                src={GooglePlay}
                alt="Google Play"
                width={398}
                height={116}
                className="w-auto flex-1 sm:h-12 sm:flex-none"
              />
            </Link>

            <Link href="/">
              <Image
                src={AppStore}
                alt="Google Play"
                width={398}
                height={116}
                className="w-auto flex-1 sm:h-12 sm:flex-none"
              />
            </Link>
          </div>
        </div>

        {/* Col */}
        <div className="w-full md:w-5/12">
          <Image
            src={Asset}
            alt="Download App"
            width={300}
            height={400}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};
