import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import { DownloadApp } from "@/components/cta/download-app";
import { Header } from "@/components/header/header";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default async function HomepageLayout({
  children,
}: HomepageLayoutProps) {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <main>
        {children}
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
}
