import "../globals.css";
import "@/public/css/font.css";

export const metadata = {
  title: "Nueron+",
  description: "Login page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="h-screen flex w-full justify-center items-center bg-[#424242]">
            {children}
        </div>
      </body>
    </html>
  );
}
