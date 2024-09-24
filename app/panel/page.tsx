const HomePage = () => {
  return (
    <>
      <div className="w-full pt-5 flex h-[90%]">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600 rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            پروفایل من
          </div>
          <div className="h-full bg-white rounded-b-xl p-1 pb-0 shadow-lg md:flex diodfont-semibold text-md">
            <div className="w-1/2">
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">
                  نام و نام خانوادگی:
                </div>
                <div className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl">
                  آراد حسینی
                </div>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">کدملی:</div>
                <div className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl">
                  4311409338
                </div>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">تلفن ثابت:</div>
                <div className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl">
                  02133665544
                </div>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">موبایل:</div>
                <div className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl">
                  09011813758
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">استان:</div>
                <div className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl">
                  تهران
                </div>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">شهر:</div>
                <div className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl">
                  تهران
                </div>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">آدرس:</div>
                <div className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl">
                  نارمک، خیابان رودباری، پلاک370
                </div>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md  p-1 pb-2">
                  تاریخ شروع همکاری:
                </div>
                <div className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl">
                  1403-06-02
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
