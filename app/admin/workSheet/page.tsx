import Check from "@/public/svg/components/true";
import FalseSvg from "@/public/svg/components/false";
import TrueSvg from "@/public/svg/components/true";
import LockSvg from "@/public/svg/components/lockSvg";
import UnlockSvg from "@/public/svg/components/unlockSvg";
import DownloadSvg from "@/public/svg/components/downloadPdfSvg";
import DownloadPdfSvg from "@/public/svg/components/downloadPdfSvg";
import DownloadVideoSvg from "@/public/svg/components/downloadVideo";

const WorkSheet = ()=>{
    return(
        <>
        <div className="w-full pt-5 h-[90%]">
          <div className="w-full">
            <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600 rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
              کاربرگ ها
            </div>
            <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-scroll grid grid-cols-12">
              <div className="col-span-6">
                <div className="flex gap-2 items-center justify-between">
                  <label className="diodfont-semibold text-md" htmlFor="category">
                    دوره :{" "}
                  </label>
                  <select
                    className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                    name="category"
                    id="category"
                  >
                    <option value="">انتخاب کنید ...</option>
                    <option value="چهارم">طلایی چهارم</option>
                    <option value="پنجم">نقره ای چهارم</option>
                    <option value="ششم">دقیقه 90 - چهارم</option>
                  </select>
                </div>
  
                {/* عنوان */}
                <div className="flex mt-2 gap-2 items-center justify-between">
                  <label className="diodfont-semibold text-md" htmlFor="title">
                    عنوان :{" "}
                  </label>
                  <input
                    className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                    type="text"
                    name="title"
                    id="title"
                  />
                </div>
  
                <div className="flex mt-2 gap-2 items-center justify-between">
                  <label className="diodfont-semibold text-md" htmlFor="file">
                    کاربرگ :{" "}
                  </label>
                  <input
                    className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                    type="file"
                    name="file"
                    id="file"
                  />
                </div>
                <div className="flex mt-2 gap-2 items-center justify-between">
                  <label className="diodfont-semibold text-md" htmlFor="file">
                    کاور ویدئو :{" "}
                  </label>
                  <input
                    className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                    type="file"
                    name="file"
                    id="file"
                  />
                </div>
                <div className="flex mt-2 gap-2 items-center justify-between">
                  <label className="diodfont-semibold text-md" htmlFor="file">
                    ویدئو :{" "}
                  </label>
                  <input
                    className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                    type="file"
                    name="file"
                    id="file"
                  />
                </div>
  
                <div className="flex mt-2 gap-2 items-center justify-between">
                  <label className="diodfont-semibold text-md" htmlFor="status">
                    وضعیت :{" "}
                  </label>
                  <select
                    className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                    name="status"
                    id="status"
                  >
                    <option selected value="فعال">
                      فعال
                    </option>
                    <option value="غیرفعال">غیرفعال</option>
                  </select>
                </div>
  
                <div className="flex mt-2 gap-2 items-center justify-between">
                  <label className="diodfont-semibold text-md" htmlFor="category">
                    مشاهده رایگان :{" "}
                  </label>
                  <select
                    className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                    name="category"
                    id="category"
                  >
                    <option selected value="0">
                      خیر
                    </option>
                    <option value="1">بله</option>
                  </select>
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
                <div className="diodfont-semibold text-md">لیست ویدئوها</div>
                <div className="w-full p-2">
  
                  <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                    <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">1- مقدمه</span><span className="flex-1 mr-10">20:34</span><span className="flex-1"><LockSvg/></span><span className="flex-1"><a href="#"><DownloadVideoSvg/></a></span><span className="flex-1"><a href="#"><DownloadPdfSvg/></a></span><span className="flex-2"><TrueSvg/></span>
                    </div>
                  </div>
                  <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                    <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">2- معادلات درجه 1</span><span className="flex-1 mr-10">20:34</span><span className="flex-1"><UnlockSvg/></span><span className="flex-1"><a href="#"><DownloadVideoSvg/></a></span><span className="flex-1"><a href="#"><DownloadPdfSvg/></a></span><span className="flex-2"><TrueSvg/></span>
                    </div>
                  </div>
                  <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                    <div className="flex justify-between">
                      <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">3- معادلات درجه 2</span><span className="flex-1 mr-10">20:34</span><span className="flex-1"><UnlockSvg/></span><span className="flex-1"><a href="#"><DownloadVideoSvg/></a></span><span className="flex-1"><a href="#"><DownloadPdfSvg/></a></span><span className="flex-2"><FalseSvg/></span>
                    </div>
                  </div>
                  <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                    <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">4- حد و پیوستگی</span><span className="flex-1 mr-10">20:34</span><span className="flex-1"><UnlockSvg/></span><span className="flex-1"><a href="#"><DownloadVideoSvg/></a></span><span className="flex-1"><a href="#"><DownloadPdfSvg/></a></span><span className="flex-2"><TrueSvg/></span>
                    </div>
                  </div>



                </div>
              </div>
  
              <div className="col-span-12">
  
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default WorkSheet;