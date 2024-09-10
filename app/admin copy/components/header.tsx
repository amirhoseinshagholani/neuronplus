const Header = () => {
  return (
    <>
      <header className="h-10 bg-gradient-to-l from-slate-500 to-slate-400 p-1">
        <div className="flex ml-10 mt-1 justify-between">
          <div className="text-white mr-2 text-xs diodfont-medium">محدثه عزیز، خوش آمدید</div>
          <div className="">
            <a className="bg-[#FFF500] rounded-xl pb-1 pr-6 pl-6 text-sm diodfont-semibold" href="#">
              خروج
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
