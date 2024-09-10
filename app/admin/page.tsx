const HomePage = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-[#2670b4] to-blue-400 h-10 mt-7 rounded-t-xl shadow-lg p-1 pr-2 text-white text-sm diodfont-semibold">
        پروفایل من
      </div>
      <div className=" h-5/6 bg-slate-300 rounded-b-xl p-1 shadow-lg md:flex">
        <div className="w-1/2">
          <div className="flex gap-2 text-sm p-2 justify-between mt-3">
            <div className="diodfont-medium p-1 pb-2">نام و نام خانوادگی:</div>
            <div className="diodfont-light bg-white p-1 pr-2 pb-2 w-2/3 rounded-xl">
              محدثه شاقلانی
            </div>
          </div>
          <div className="flex gap-2 text-sm p-2 justify-between mt-3">
            <div className="diodfont-medium p-1 pb-2">سمت:</div>
            <div className="diodfont-light bg-white p-1 pr-2 pb-2 w-2/3 rounded-xl">
              مدیرعامل
            </div>
          </div>
          <div className="flex gap-2 text-sm p-2 justify-between mt-3">
            <div className="diodfont-medium p-1 pb-2">کدملی:</div>
            <div className="diodfont-light bg-white p-1 pr-2 pb-2 w-2/3 rounded-xl">
              4311409338
            </div>
          </div>
          <div className="flex gap-2 text-sm p-2 justify-between mt-3">
            <div className="diodfont-medium p-1 pb-2">شماره تلفن:</div>
            <div className="diodfont-light bg-white p-1 pr-2 pb-2 w-2/3 rounded-xl">
              09011813758
            </div>
          </div>
        </div>

        <div className="w-1/2">
        <div className="flex gap-2 text-sm p-2 justify-between mt-3">
            <div className="diodfont-medium p-1 pb-2">استان:</div>
            <div className="diodfont-light bg-white p-1 pr-2 pb-2 w-2/3 rounded-xl">
              تهران
            </div>
          </div>
          <div className="flex gap-2 text-sm p-2 justify-between mt-3">
            <div className="diodfont-medium p-1 pb-2">شهر:</div>
            <div className="diodfont-light bg-white p-1 pr-2 pb-2 w-2/3 rounded-xl">
              تهران
            </div>
          </div>
          <div className="flex gap-2 text-sm p-2 justify-between mt-3">
            <div className="diodfont-medium p-1 pb-2">آدرس:</div>
            <div className="diodfont-light bg-white p-1 pr-2 pb-2 w-2/3 rounded-xl">
              نارمک، خیابان رودباری، پلاک370
            </div>
          </div>
          <div className="flex gap-2 text-sm p-2 justify-between mt-3">
            <div className="diodfont-medium p-1 pb-2">تاریخ شروع همکاری:</div>
            <div className="diodfont-light bg-white p-1 pr-2 pb-2 w-2/3 rounded-xl">
              1403-06-02
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
