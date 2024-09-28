'use client';

import Check from "@/public/svg/components/true";
import FalseSvg from "@/public/svg/components/false";
import TrueSvg from "@/public/svg/components/true";
import LockSvg from "@/public/svg/components/lockSvg";
import UnlockSvg from "@/public/svg/components/unlockSvg";
import DownloadSvg from "@/public/svg/components/downloadPdfSvg";
import PlayVideoBlack from "@/public/svg/components/playVideoBlack";
import DownSvg from "@/public/svg/components/downSvg";
import UpSvg from "@/public/svg/components/upSvg";
import CourseList from "./components/courseList";

const Teaching = () => {
  return (
    <>
      <div className="w-full pt-5 h-[90%]">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600  rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            دوره های ثبت نام شده
          </div>
          <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-scroll grid grid-cols-12">
            <CourseList/>            
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaching;
