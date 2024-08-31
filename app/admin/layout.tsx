
import "../globals.css";
import "@/public/css/font.css"
import Header from "./components/header";
import Footer from "./components/footer";
import logo from "@/public/img/neuron+.png"

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
        <div className="flex-grow max-h-screen grid grid-cols-12">
          <div className="col-span-2 bg-[#6697C5] p-3">
            <div className="flex mx-auto justify-center w-32 p-1">
              <img className="" src='/img/neuron+.png' alt="" />
            </div>
            <div className="flex mx-auto justify-center">
              <hr className="mt-5 w-5/6" />
            </div>
          </div>
          <div className="col-span-10 bg-purple-100">{children}</div>
        </div>
        <Footer/>
      </body>
    </html>

    </>
  )
}

export default RootLayout;
