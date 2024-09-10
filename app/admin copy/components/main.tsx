import Sidebar from "./sidebar";

const Main = ({children}:any) => {
  return (
    <>
      <div className="flex-grow max-h-screen grid grid-cols-12 bg-purple-100">
        <Sidebar />
        <div className="col-span-10 mx-auto w-11/12">
          <div className="bg-gradient-to-l from-[#2670b4] to-blue-400 h-10 mt-10 rounded-t-xl shadow-lg"></div>
          <div className=" h-5/6 bg-slate-300 rounded-b-xl p-1 shadow-lg">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Main;
