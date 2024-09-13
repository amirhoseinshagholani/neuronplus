import LockSvg from "@/public/svg/components/lockSvg";
import PlayVideoRed from "@/public/svg/components/playVideoRed";

const WorkSheet=()=>{
    return(
        <>
        <div>
          <div className="p-10">
            <div className="pb-0 diodfont-bold text-2xl text-slate-700">
              نمونه سوالات
            </div>
            <div>
              <p className="mt-4 text-[#557ac4] text-md diodfont-semibold text-md">
                <a href="#">
                شما هنوز در این دوره ثبت نام نکرده اید، برای ثبت نام اینجا کلیک
                کنید
                </a>
              </p>
            </div>
          </div>
  
          <div className="grid grid-cols-12">
            <div className="col-span-6 p-10 pt-3 pl-5">
              <div className="mt-5">
                  <div className="bg-red-300 mt-1 flex justify-between shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                  <span className="w-60">قسمت اول - معادلات درجه 1</span>
                    <span className="mx-auto justify-center">
                        <a className="text-blue-600 hover:text-blue-900 diodfont-semibold" href="#">دانلود نمونه سوال</a>
                    </span>
                    <span className="mr-auto">
                        <a className="text-purple-600 hover:text-purple-900 diodfont-semibold" href="#">مشاهده حل ویدئویی</a>
                    </span>
                  </div>
                
                
                  <div className="bg-red-300  flex justify-between mt-3 shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                    <span className="w-60">قسمت دوم - معادلات درجه 2</span>
                    <span className="mr-auto">
                      <LockSvg/>
                    </span>
                  </div>
                
                  <div className="bg-red-300  flex justify-between mt-3 shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                    <span className="w-60">قسمت سوم - حد و پیوستگی</span>
                    <span className="mr-auto">
                      <LockSvg/>
                    </span>
                  </div>
                
                  <div className="bg-red-300  flex justify-between mt-3 shadow-purple-700  p-3 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                    <span className="w-60">قسمت چهارم - مشتق و انتگرال</span>
                    <span className="mr-auto justify-center">
                      <LockSvg/>
                    </span>
                  </div>
                
                  <div className="bg-red-300  flex justify-between mt-3 shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                    <span className="w-60">قسمت چهارم - مشتق و انتگرال</span>
                    <span className="mr-auto">
                      <LockSvg/>
                    </span>
                  </div>
                
              </div>
            </div>
            <div className="col-span-6 p-10 pt-5 pl-5">
              <video
                className="rounded-xl shadow-lg"
                controls
                width="500"
                height="500"
                poster="/img/4th.jpg"
              >
                <source src="/videos/baseCourses/4th.mp4" type="video/mp4" />
                مرورگر شما از فرمت ویدیویی پشتیبانی نمی‌کند.
              </video>
            </div>
          </div>
        </div>
      </>
    )
}

export default WorkSheet;