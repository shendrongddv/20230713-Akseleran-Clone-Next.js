import { dummyNewsMedia } from "@/config/dummy";
import Image from "next/image";

export const MediaPartnerSection = () => {
  return (
    <>
      {/* Media */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container flex flex-col items-center gap-4 text-center">
          <span className="small text-muted-foreground">Diliput oleh:</span>

          <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {dummyNewsMedia?.map((item) => (
              <li
                key={item.id}
                className="group rounded-xl p-2 transition duration-300 hover:bg-white hover:shadow"
              >
                <Image
                  src={`/${item.media}`}
                  alt="News Media Logo"
                  width={400}
                  height={100}
                  className="h-6 w-auto opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-10"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ./ Media */}

      {/* Partner */}
      <section className="px-4 pt-16">
        <div className="container flex flex-col items-center gap-4 text-center">
          <span className="small text-muted-foreground">Partner kami:</span>

          <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {dummyNewsMedia.slice(0, 10)?.map((item) => (
              <li
                key={item.id}
                className="group rounded-xl p-2 transition duration-300 hover:bg-slate-50 hover:shadow"
              >
                <Image
                  src={`/${item.media}`}
                  alt="News Media Logo"
                  width={400}
                  height={100}
                  className="h-6 w-auto opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-10"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ./ Partner */}
    </>
  );
};
