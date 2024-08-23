import type { Metadata } from "next";
import localfont from 'next/font/local';
import "./globals.css";
import "../public/css/font.css";

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
      <body className='bg-[#EFEFEF]'>{children}</body>
    </html>
  );
}
