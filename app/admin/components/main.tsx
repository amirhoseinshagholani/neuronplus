import Sidebar from "./sidebar";

const Main = ({children}:any) => {
  return (
    <>
      <div className="flex-grow max-h-screen grid grid-cols-12 bg-purple-100">
        <Sidebar />
        <div className="col-span-10 mx-auto w-11/12">
        {children}
        </div>
      </div>
    </>
  );
};

export default Main;
