import type { Metadata } from "next";
import localfont from "next/font/local";
import "../globals.css";
import "@/public/css/font.css";
import "@/public/css/style.css";
import "@/public/js/slide";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Neuron+",
  description: "وب سایت آموزشی نورون پلاس-تیزهوشان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-[#424242] ">
        <div className="">
          <div className="w-11/12 h-full mx-auto justify-center mt-10 rounded-2xl bg-[#efefed] main-back-img shadow-2xl">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
