import DownloadPdfSvg from "@/public/svg/components/downloadPdfSvg";
import DownSvg from "@/public/svg/components/downSvg";
import FalseSvg from "@/public/svg/components/false";
import LockSvg from "@/public/svg/components/lockSvg";
import TrueSvg from "@/public/svg/components/true";
import UnlockSvg from "@/public/svg/components/unlockSvg";

const AdiceRequest=()=>{
    return (
        <>
          <div className="w-full pt-5 h-[90%]">
            <div className="w-full">
              <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600  rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
                درخواست مشاوره
              </div>
              <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-scroll grid grid-cols-12">
                <div className="col-span-6">

    
                  {/* عنوان */}
                  <div className="flex mt-2 gap-2 items-center justify-between">
                    <label className="diodfont-semibold text-md" htmlFor="title">
                      موضوع :{" "}
                    </label>
                    <input
                      className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                      type="text"
                      name="subject"
                      id="subject"
                    />
                  </div>
    
                  <div className="flex mt-2 gap-2 items-center justify-between">
                    <label className="diodfont-semibold text-md" htmlFor="title">
                      شماره تماس :{" "}
                    </label>
                    <input
                      className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                      type="text"
                      name="phone"
                      id="phone"
                    />
                  </div>
   
                  <div className="flex mt-2 gap-2 items-center justify-between">
                    <label
                      className="diodfont-semibold text-md"
                      htmlFor="description"
                    >
                      توضیحات :{" "}
                    </label>
                    <textarea
                      className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full h-24 max-w-xs p-1 pr-2 pb-2 rounded-xl"
                      name="description"
                      id="description"
                    />
                  </div>
                  <div className="flex justify-center mt-5">
                    <button
                      type="submit"
                      className="w-28 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 p-2 pb-3 text-white rounded-lg diodfont-semibold text-md"
                    >
                      ثبت
                    </button>
                  </div>
                </div>
    
                <div className="col-span-6 pr-10 pl-5">
                  <div className="diodfont-semibold text-md">لیست درخواست ها</div>
                  <div className="w-full p-2">
                    <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                      <div className="flex justify-between">
                        <span className="flex-shrink-0  h-10 overflow-hidden text-ellipsis w-32 whitespace-nowrap">
                          ضعیف بودن ریاضی
                        </span>
                        <span className="flex-shrink-0">1403-06-23</span>
                        <span className="flex-2 w-24">
                          تماس گرفته شده
                        </span>
                      </div>
                    </div>

                    <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                      <div className="flex justify-between">
                        <span className="flex-shrink-0  h-10 overflow-hidden text-ellipsis w-32 whitespace-nowrap">
                          ضعیف بودن ریاضی
                        </span>
                        <span className="flex-shrink-0">1403-06-23</span>
                        <span className="flex-2 w-24">
                          در انتظار  تماس
                        </span>
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
}

export default AdiceRequest;