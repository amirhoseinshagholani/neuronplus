import Sidebar from "./sidebar";

const Main = ({children}:any) => {
  
  
  return (
    <>
      <div className="h-full grid grid-cols-12 bg-gray-300 overflow-hidden">
        <Sidebar />
        <div className="col-span-10 mx-auto w-11/12  flex h-[85%]">
        {children}
        </div>
      </div>
    </>
  );
};

export default Main;
