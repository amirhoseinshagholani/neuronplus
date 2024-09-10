const Sidebar = () => {
  return (
    <>
      <div className="col-span-2 bg-[#2670b4]">
        <div className="pt-3">
          <div className="flex mx-auto justify-center w-32 p-1">
            <img className="" src="/img/neuron+.png" alt="" /> 
          </div>
          <div className="">
            <hr className="mt-5 w-5/6 mx-auto justify-center" />
            <div className="diodfont-medium text-xs text-white w-full mt-2 pr-1">
              <div className="p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">پروفایل من</div>
              <div className="p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">مشتریان</div>
              <div className="p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">کاربران</div>
              <div className="p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">دوره ها</div>
              <div className="p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">تنظیمات سایت</div>
              <div className="p-4 pt-3 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">گالری عکس</div>
              <div className="p-4 pt-3 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">کامنت ها</div>
              <div className="p-4 pt-3 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">تیکت ها</div>
              <div className="p-4 pt-3 w-full hover:bg-gradient-to-l from-[#6697C5] to-purple-100">درخواست مشاوره</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
