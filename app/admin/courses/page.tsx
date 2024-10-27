import { useMemo, useState } from "react";
import Grid from "../components/grid"; // مسیر کامپوننت Grid شما
import TrueSvg from "@/public/svg/components/true";
import DownloadPdfSvg from "@/public/svg/components/downloadPdfSvg";
import UnlockSvg from "@/public/svg/components/unlockSvg";
import FalseSvg from "@/public/svg/components/false";
import ImageSvg from "@/public/svg/components/imageSvg";
import EditSvg from "@/public/svg/components/editSvg";
import CoursesAddForm from "./coursesAddForm";


const Courses = () => {

  return (
    <>
      <div className="w-full pt-5">
        <div className="w-full">
        <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600  rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
          دوره ها
        </div>
        <CoursesAddForm />
      </div>
    </div >
    </>
  );
};

export default Courses;
