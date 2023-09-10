import Footer from "@/components/footer/footer";
import { DownloadAppCTA } from "@/components/cta/cta-download-app";
import { Header } from "@/components/header/header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default async function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {children}
        <DownloadAppCTA />
      </main>
      <Footer />
    </>
  );
}
