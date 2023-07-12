import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";

const fontBody = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Akseleran | Fintech P2P Lending Indonesia",
  description:
    "Akseleran adalah platform crowdfunding P2P Lending Indonesia yang menghubungkan UKM yang membutuhkan pinjaman untuk mengembangkan usahanya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontBody.className} h-full antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
