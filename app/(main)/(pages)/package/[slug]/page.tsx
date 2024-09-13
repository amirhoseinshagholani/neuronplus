import Check from "@/public/svg/components/check";
import LockSvg from "@/public/svg/components/lockSvg";
import PlayVideo from "@/public/svg/components/playVideoBlack";

const Package = () => {
  return (
    <>
      <main className="h-full">
        <div className="grid grid-cols-12 ">
          <div className="col-span-7">
            <div className="p-10">
              <div>
                <p className="text-3xl diodfont-bold text-slate-700">
                  پکیج طلایی چهارم
                </p>
              </div>
              <div>
                <p className="mt-4 text-[#557ac4] text-md diodfont-semibold">
                  پکیج طلایی چیست؟
                </p>
              </div>
              <div>
                <p className="mt-5 font-medium text-justify text-sm diodfont-semibold text-slate-800">
                  اگر پایه چهارم هستی و دلت میخواد توی مدارس برتر تحصیل کنی اما
                  نمیدونی چجوری باید شروع کنی من اینجام، نگران نباش واسه مقطع
                  چهارم کلی دوره های جذاب و فوق العاده داریم که دیگه خیالت از
                  آینده راحته اگر پایه چهارم هستی و دلت میخواد توی مدارس برتر
                  تحصیل کنی اما نمیدونی چجوری باید شروع کنی من اینجام، نگران
                  نباش واسه مقطع چهارم کلی دوره های جذاب و فوق العاده داریم که
                  دیگه خیالت از آینده راحته اگر پایه چهارم هستی و دلت میخواد توی
                  مدارس برتر تحصیل کنی اما نمیدونی چجوری باید شروع کنی من
                  اینجام، نگران نباش واسه مقطع چهارم کلی دوره های جذاب و فوق
                  العاده داریم که دیگه خیالت از آینده راحته اگر پایه چهارم هستی
                  و دلت میخواد توی مدارس برتر تحصیل کنی اما نمیدونی چجوری باید
                  شروع کنی من اینجام، نگران نباش واسه مقطع چهارم کلی دوره های
                  جذاب و فوق العاده داریم که دیگه خیالت از آینده راحته اگر پایه
                  چهارم هستی و دلت میخواد توی مدارس برتر تحصیل کنی اما نمیدونی
                  چجوری باید شروع کنی من اینجام، نگران نباش واسه مقطع چهارم کلی
                  دوره های جذاب و فوق العاده داریم که دیگه خیالت از آینده راحته
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 p-10 mt-5">
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
        <div className="grid grid-cols-12 text-slate-700">
          <div className="col-span-6 p-10 pl-5">
            <div className="diodfont-semibold text-2xl">
              سر فصل های دوره،{" "}
              <span className="text-lg diodfont-medium">
                <a className="text-blue-500" href="/package/1/teaching/2">
                  برای مشاهده دوره ها کلیک کنید
                </a>
              </span>
            </div>
            <div className="mt-5">
              <a href="/package/1/teaching/2">
                <div className="bg-purple-300 mt-3 flex justify-between shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                  <span className="w-60">مقدمه</span>
                  <span className="mr-auto">
                    <Check />
                  </span>
                </div>
              </a>
              <a href="/package/1/teaching/2">
                <div className="bg-purple-300 flex justify-between mt-3 shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                  <span className="w-60">قسمت اول - معادلات درجه 1</span>
                  <span className="mr-auto">
                    <Check />
                  </span>
                </div>
              </a>
              <a href="/package/1/teaching/2">
                <div className="bg-purple-300 flex justify-between mt-3 shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                  <span className="w-60">قسمت دوم - معادلات درجه 2</span>
                  <span className="mr-auto">
                    <Check />
                  </span>
                </div>
              </a>
              <a href="/package/1/teaching/2">
                <div className="bg-purple-300 flex justify-between mt-3 shadow-purple-700  p-3 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                  <span className="w-60">قسمت سوم - حد و پیوستگی</span>
                  <span className="mr-auto justify-center">
                    <Check />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="col-span-6 p-10 pl-5">
            <div className="diodfont-semibold text-2xl">
              لیست نمونه سوالات،{" "}
              <span className="text-lg diodfont-medium">
                <a className="text-blue-500" href="/package/1/worksheet/2">
                  برای مشاهده نمونه سوالات کلیک کنید
                </a>
              </span>
            </div>
            <div className="mt-5">
              <div className="bg-red-300 mt-3 flex justify-between shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                <span className="w-60">قسمت اول - معادلات درجه 1</span>
                <span className="mr-auto">
                  <Check />
                </span>
              </div>
              <div className="bg-red-300 mt-3 flex justify-between shadow-purple-700  p-3 pb-4 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                <span className="w-60">قسمت دوم - معادلات درجه 2</span>
                <span className="mr-auto">
                  <Check />
                </span>
              </div>
              <div className="bg-red-300 mt-3 flex justify-between shadow-purple-700  p-3 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                <span className="w-60">قسمت سوم - حد و پیوستگی</span>
                <span className="mr-auto">
                  <Check />
                </span>
              </div>
              <div className="bg-red-300 mt-3 flex justify-between shadow-purple-700  p-3 shadow-sm rounded-xl text-sm diodfont-medium text-xs">
                <span className="w-60">قسمت چهارم - مشتق و انتگرال</span>
                <span className="mr-auto">
                  <Check />
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-6 h-60"></div>
        </div>
      </main>
    </>
  );
};

export default Package;
