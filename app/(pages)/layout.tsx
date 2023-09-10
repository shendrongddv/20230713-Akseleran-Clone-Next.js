import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import { DownloadApp } from "@/components/cta/download-app";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-slate-100 px-4 py-16">
          <div className="container">
            <div>
              <h2 className="h2">PagesLayout</h2>
            </div>
          </div>
        </section>
        {children}
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
}
