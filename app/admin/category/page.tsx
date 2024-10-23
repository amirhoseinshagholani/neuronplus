import { useMemo } from "react";
import Grid from "../components/grid"; // مسیر کامپوننت Grid شما
import TrueSvg from "@/public/svg/components/true";
import EditSvg from "@/public/svg/components/editSvg";
import CategoryAddForm from "./categoryAddForm";


const Category = () => {

  return (
    <>
      <div className="w-full pt-5">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600 rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            دسته بندی ها
          </div>
          <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-auto grid grid-cols-12">
            <CategoryAddForm/>

            <div className="col-span-6 pr-10 pl-5">
              <div className="diodfont-semibold text-md mb-3">دسته ها</div>
                <div className="h-[80%] p-2 rounded-lg bg-slate-600 overflow-auto">
                    <div className="w-full p-1">
                      <div className="text-gray-800 p-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full rounded-lg">
                        <div className="flex justify-between h-full">
                          <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                            چهارم
                          </span>
                          <span className="flex-1">
                            <div className="flex">
                            <TrueSvg /><span>فعال</span>
                            </div>
                          </span>
                          <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                            توضیحات
                          </span>
                          <span className="flex-1"></span>
                          <span className="flex-2">
                            <a className="" href="#">
                              <EditSvg />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
