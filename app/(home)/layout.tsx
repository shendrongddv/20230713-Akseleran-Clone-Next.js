import Footer from "@/components/footer/footer";
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
      <main>{children}</main>
      <Footer />
    </>
  );
}
