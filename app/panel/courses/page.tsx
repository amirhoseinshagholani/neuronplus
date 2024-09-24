import Check from "@/public/svg/components/true";
import FalseSvg from "@/public/svg/components/false";
import TrueSvg from "@/public/svg/components/true";
import LockSvg from "@/public/svg/components/lockSvg";
import UnlockSvg from "@/public/svg/components/unlockSvg";
import DownloadSvg from "@/public/svg/components/downloadPdfSvg";
import PlayVideoBlack from "@/public/svg/components/playVideoBlack";
import DownSvg from "@/public/svg/components/downSvg";
import UpSvg from "@/public/svg/components/upSvg";

const Teaching = () => {
  return (
    <>
      <div className="w-full pt-5 h-[90%]">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600  rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            دوره های ثبت نام شده
          </div>
          <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-scroll grid grid-cols-12">
            <div className="col-span-12 pr-10 pl-5">
              <div className="diodfont-semibold text-md">لیست دوره ها</div>
              <div className="w-full p-2">
                
                <div>
                  <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-400 to-purple-500 shadow-md h-10 w-full mt-2 rounded-lg">
                    <div className="flex justify-between">
                      <span className="flex-1 overflow-hidden text-ellipsis w-32 whitespace-nowrap pb-1">
                        1- طلایی چهارم
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

                  <div className="">
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

                <div>
                  <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-400 to-purple-500 shadow-md h-10 w-full mt-2 rounded-lg">
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

            <div className="col-span-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaching;
