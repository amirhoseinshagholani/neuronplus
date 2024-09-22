import Sidebar from "./sidebar";

const Main = ({children}:any) => {
  
  
  return (
    <>
        <div className="col-span-10 mx-auto w-11/12  flex h-[85%]">
          {children}
        </div>
    </>
  );
};

export default Main;
