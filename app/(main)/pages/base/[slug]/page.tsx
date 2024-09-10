

const BaseCourse = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <main className="h-full main-back-img">
        <div className="grid grid-cols-12 ">
          <div className="col-span-7">
            <div className="p-10">
              <div>
                <p className="text-3xl diodfont-bold text-slate-700">
                  مقطع چهارم:
                </p>
              </div>
              <div>
                <p className="mt-4 text-[#557ac4] text-md diodfont-semibold">
                  شامل آموزش جامع مقطع چهارم به همراه آزمون و نمونه سوال
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
        <div className="mt-5 mb-5">
          <div className="p-10 diodfont-semibold text-xl text-slate-700">
            پکیج های مقطع چهارم
          </div>

          <div className="grid grid-cols-12 mt-5">

          <div className="col-span-4">
            <div className="w-2/3 mt-1 mx-auto justify-center">
              <div className="w-60">
                <img className="rounded-t-3xl w-60 h-36" src="/img/gold.jpg" />
                <div className="bg-gray-300 p-4 pt-1 rounded-b-3xl">
                  <p className="flex mx-auto justify-center diodfont-semibold text-lg text-purple-800">دوره طلایی</p>
                  <p className="diodfont-semibold text-slate-800 text-sm">شامل:</p>
                  <p className="diodfont-medium text-slate-800 text-xs p-1 min-h-16">تدریس ویدیویی و جامع، نمونه سوال، حل نمونه سوال به صورت ویدئویی و آزمون آنلاین</p>
                  <div className="flex mt-2">
                    <a className="diodfont-semibold rounded-lg text-xs mx-auto justify-center bg-[#37c60b] pt-1 pb-2 pr-3 pl-3" href="#">مشاهده</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="w-2/3 mt-1 mx-auto justify-center">
              <div className="w-60">
                <img className="rounded-t-3xl w-60 h-36" src="/img/silver.jpg" />
                <div className="bg-gray-300 p-4 pt-1 rounded-b-3xl">
                  <p className="flex mx-auto justify-center diodfont-semibold text-lg text-purple-800">دوره نقره ای</p>
                  <p className="diodfont-semibold text-slate-800 text-sm">شامل:</p>
                  <p className="diodfont-medium text-slate-800 text-xs p-1 min-h-16">تدریس ویدیویی و جامع و آزمون آنلاین</p>
                  <div className="flex mt-2">
                    <a className="diodfont-semibold rounded-lg text-xs mx-auto justify-center bg-[#37c60b] pt-1 pb-2 pr-3 pl-3" href="#">مشاهده</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="w-2/3 mt-1 mx-auto justify-center">
              <div className="w-60">
                <img className="rounded-t-3xl w-60 h-36" src="/img/90min.jpg" />
                <div className="bg-gray-300 p-4 pt-1 rounded-b-3xl">
                  <p className="flex mx-auto justify-center diodfont-semibold text-lg text-purple-800">دوره دقیقه 90</p>
                  <p className="diodfont-semibold text-slate-800 text-sm">شامل:</p>
                  <p className="diodfont-medium text-slate-800 text-xs p-1 min-h-16">نمونه سوال و حل نمونه سوال به صورت ویدئویی</p>
                  <div className="flex mt-2">
                    <a className="diodfont-semibold rounded-lg text-xs mx-auto justify-center bg-[#37c60b] pt-1 pb-2 pr-3 pl-3" href="#">مشاهده</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>

      </main>
    </>
  );
};

export default BaseCourse;
