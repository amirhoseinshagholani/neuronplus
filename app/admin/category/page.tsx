import { useMemo } from "react";
import Grid from "../components/grid"; // مسیر کامپوننت Grid شما

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





          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
