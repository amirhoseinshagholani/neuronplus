
import "../globals.css";
import "@/public/css/font.css"
import Header from "./components/header";
import Footer from "./components/footer";
import logo from "@/public/img/neuron+.png"
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const RootLayout = ({children}:any) => {
  return(
    <>
    <html lang="fa" dir="rtl">
      <head>
        <title>
          Nueron+ Admin-panel
        </title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header/>
        <Main children={children} />
        <Footer/>
      </body>
    </html>

    </>
  )
}

export default RootLayout;
