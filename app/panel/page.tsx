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
                <input type="text" defaultValue={"آراد حسینی"} className="h-9 diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl"/>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">کدملی:</div>
                <input type="text" defaultValue={"4311409338"} className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl"/>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">تلفن ثابت:</div>
                <input type="text" defaultValue={"02133665544"} className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl"/>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">موبایل:</div>
                <input type="text" defaultValue={"09011813758"} className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl"/>
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">استان:</div>
                <input type="text" defaultValue={"تهران"} className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl"/>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">شهر:</div>
                <input type="text" defaultValue={"تهران"} className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl"/>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">آدرس:</div>
                <input type="text" defaultValue={" نارمک، خیابان رودباری، پلاک370"} className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl"/>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md  p-1 pb-2">
                  تاریخ شروع همکاری:
                </div>
                <input type="text" defaultValue={"1403-06-02"} className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl"/>
              </div>
              <div className="flex gap-2 text-sm p-2 justify-end mt-10 ml-5">
                <button type="submit" className="diodfont-semibold h-10 text-sm text-gray-800 shadow-md bg-gradient-to-r from-green-400 to-green-600 p-1 pl-1 w-1/3 pr-2 pb-2 rounded-lg">
                  ثبت تغییرات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
