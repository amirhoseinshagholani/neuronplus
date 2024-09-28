"use client";

import DownSvg from "@/public/svg/components/downSvg";
import UpSvg from "@/public/svg/components/upSvg";
import { useState } from "react";

const CourseList = () => {
  const [isShow, setIsShow] = useState(false);

  const onClickDownBtn = () => {
    setIsShow(true);
  };

  const onClickUpBtn = () => {
    setIsShow(false);
  };

  return (
    <>
      <div className="col-span-12 pr-10 pl-5">
        <div className="mb-5"><a className="text-blue-600 diodfont-semibold" href="/">برای ثبت نام در دوره ها اینجا کلیک کنید</a></div>
        <div className="diodfont-semibold text-md">لیست دوره ها</div>
        <div className="w-full p-2">

          <div>
            <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-400 to-purple-500 h-10 w-full mt-2 rounded-lg">
              <div className="flex justify-between">
                <span className="flex-1 overflow-hidden text-ellipsis w-32 whitespace-nowrap pb-1">
                  1- طلایی چهارم
                </span>
                <span className="flex-1">تاریخ ثبت نام: 1403/3/14</span>
                <span className="flex-1">
                  <a href="#">مدرس: محدثه شاقلانی</a>
                </span>
                <span className="flex-2">
                  <div className="flex">
                    <div className={isShow == true ? "hidden" : ""}>
                      <button
                        onClick={onClickDownBtn}
                        className="text-blue-700"
                      >
                        <DownSvg />
                      </button>
                    </div>
                    <div className={isShow == true ? "" : "hidden"}>
                      <button onClick={onClickUpBtn} className="text-blue-700">
                        <UpSvg />
                      </button>
                    </div>
                  </div>
                </span>
              </div>
            </div>

            <div className={`transition-all duration-500 ease-in-out  ${isShow ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="h-8 bg-orange-300 shadow-md mt-1 w-full mr-4 rounded-lg diodfont-semibold text-xs p-1">
                <div className="flex justify-between">
                  <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap pb-1">
                    ویدئوها
                  </span>
                  <span className="flex-1 mr-10">تعداد جلسات: 19</span>
                  <span className="flex-2 pl-2">
                    <a className="text-blue-700" href="/panel/courses/1">
                      مشاهده
                    </a>
                  </span>
                </div>
              </div>

              <div className="h-8 bg-orange-300 shadow-md mt-1 w-full mr-4 rounded-lg diodfont-semibold text-xs p-1">
                <div className="flex justify-between">
                  <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap pb-1">
                    نمونه سوالات
                  </span>
                  <span className="flex-1 mr-10">تعداد جلسات: 19</span>
                  <span className="flex-2 pl-2">
                    <a className="text-blue-700" href="/panel/courses/1">
                      مشاهده
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-400 to-purple-500 h-10 w-full mt-2 rounded-lg">
              <div className="flex justify-between">
                <span className="flex-1 overflow-hidden text-ellipsis w-32 whitespace-nowrap pb-1">
                  2- علوم پنجم
                </span>
                {/* <span className="flex-1 mr-10">تعداد جلسات: 19</span> */}
                <span className="flex-1">تاریخ ثبت نام: 1403/3/14</span>
                <span className="flex-1">
                  <a href="#">مدرس: محدثه شاقلانی</a>
                </span>
                <span className="flex-2">
                  <a className="text-blue-700" href="#">
                    <div className="flex">
                      <div>
                        <DownSvg />
                      </div>
                      <div className="hidden">
                        <UpSvg />
                      </div>
                    </div>
                  </a>
                </span>
              </div>
            </div>

            <div className="hidden">
              <div className="h-8 bg-orange-300 mt-1 w-full mr-4 rounded-lg diodfont-semibold text-xs p-1">
                <div className="flex justify-between">
                  <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap pb-1">
                    ویدئوها
                  </span>
                  <span className="flex-1 mr-10">تعداد جلسات: 19</span>
                  <span className="flex-2 pl-2">
                    <a className="text-blue-700" href="/panel/courses/1">
                      مشاهده
                    </a>
                  </span>
                </div>
              </div>

              <div className="h-8 bg-orange-300 mt-1 w-full mr-4 rounded-lg diodfont-semibold text-xs p-1">
                <div className="flex justify-between">
                  <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap pb-1">
                    نمونه سوالات
                  </span>
                  <span className="flex-1 mr-10">تعداد جلسات: 19</span>
                  <span className="flex-2 pl-2">
                    <a className="text-blue-700" href="/panel/courses/1">
                      مشاهده
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseList;
