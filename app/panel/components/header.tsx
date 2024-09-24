import SmileSvg from "@/public/svg/components/smileSvg";

const Header = () => {
  return (
    <>
      <header className="h-10 fixed top-0 left-0 w-full bg-gradient-to-l from-slate-500 to-slate-400 p-1">
        <div className="flex ml-10 mt-1 justify-between">
          <div className="text-white mr-2 text-xs diodfont-medium flex gap-2"><span>محدثه عزیز، خوش آمدید</span></div>
          <div className="shadow-md">
            <a className="bg-[#FFF500] rounded-xl pb-1 pr-6 pl-6 text-sm diodfont-semibold" href="/auth/login">
              خروج
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;