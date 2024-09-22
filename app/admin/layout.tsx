
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
      <body className="flex flex-col">
        <Header/>
          <div className="p-10 pr-0 pl-0 pb-0 h-screen">
            <div className="h-full grid grid-cols-12 bg-gray-300 overflow-hidden">
              <Sidebar />
              <Main>{children}</Main>
            </div>
          </div>
        <Footer/>
      </body>
    </html>

    </>
  )
}

export default RootLayout;
