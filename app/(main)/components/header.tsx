"use client";

import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <div className="bg-[#cc00ff]  h-8 rounded-t-2xl flex" dir="ltr">
        <a href="/auth/login" className="text-slate-700 bg-[#fff500] diodfont-regular shadow-lg ml-10 my-auto items-center pb-2 text-xs font-bold pr-2 pl-2 rounded-lg">
          <div className="">
            ورود
          </div>
        </a>
        <a
          href="/auth/register"
          className="text-slate-700 bg-[#fff500] diodfont-regular w-16 shadow-lg ml-1 my-auto items-center pb-2 text-xs font-bold pr-2 pl-2 rounded-lg"
        >
          <div className="">ثبت نام</div>
        </a>
      </div>
      <header className="bg-[#D6A3E4]  w-full h-20 shadow-lg diodfont-semibold text-lg text-slate-700">
        <nav className="flex gap-12 grid-cols-12 w-full mt-0 mx-auto justify-center">
          <div className="col-span-4 flex gap-20 p-6 pr-20">
            <div>
              <a href="/">صفحه اصلی</a>
            </div>
            <div
              onMouseOver={() => setIsOpenMenu(true)}
              onMouseLeave={() => setIsOpenMenu(false)}
            >
              <a href="#">دوره ها</a>
              <div className="absolute">
                {isOpenMenu && (
                  <ul className="diodfont-semibold text-xs pt-1 pb-2 pl-2 pr-2 mt-2 bg-slate-300 min-w-24 rounded-md shadow-yellow-300 shadow-md">
                    <li className="p-1 pb-2 hover:bg-slate-200 rounded-md">
                      <a href="/base/2">پایه چهارم</a>
                    </li>
                    <li className="p-1 pb-2 hover:bg-slate-200 rounded-md">
                      <a href="#">پایه پنجم</a>
                    </li>
                    <li className="p-1 pb-2 hover:bg-slate-200 rounded-md">
                      <a href="#">پایه ششم</a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div>
              <a href="#">گالری عکس</a>
            </div>
          </div>
          <div className="col-span-4 my-auto mt-0 mx-auto justify-center pt-1">
            <a href="/">
              <img src="/img/logo.png" className="w-20" alt="" />
            </a>
          </div>
          <div className="col-span-4 flex gap-20 p-6 pl-20">
            <div>
              <a href="#">مشاوره رایگان</a>
            </div>
            <div>
              <a href="#">درباره ما</a>
            </div>
            <div>
              <a href="#">تماس با ما</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
