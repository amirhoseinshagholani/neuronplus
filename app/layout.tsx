import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Neuron +",
  description: "وب سایت آموزشی نورون پلاس-تیزهوشان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-[#EFEFEF]">{children}</body>
    </html>
  );
}
