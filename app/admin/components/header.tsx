'use client';
import {useCookies} from "react-cookie";
import {useRouter} from "next/navigation";

const Header = () => {
  const [cookies,setCookie,removeCookie] = useCookies(['token']);
  const router = useRouter();

  const exit = ()=>{
    removeCookie('token',{path:"/"});
    router.push('/auth/login');
  }

  return (
    <>
      <header className="h-10 fixed top-0 left-0 w-full bg-gradient-to-l from-slate-500 to-slate-400 p-1">
        <div className="flex ml-10 mt-1 justify-between">
          <div className="text-white mr-2 text-xs diodfont-medium flex gap-2"><span>محدثه عزیز، خوش آمدید</span></div>
          <div className="shadow-md">
            <button className="bg-[#FFF500] rounded-xl h-7 pb-1 pr-6 pl-6 text-xs diodfont-semibold" onClick={exit}>
              خروج
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
