import Check from "@/public/svg/components/true";
import FalseSvg from "@/public/svg/components/false";
import TrueSvg from "@/public/svg/components/true";
import LockSvg from "@/public/svg/components/lockSvg";
import UnlockSvg from "@/public/svg/components/unlockSvg";
import DownloadPdfSvg from "@/public/svg/components/downloadPdfSvg";
import EditSvg from "@/public/svg/components/editSvg";
import DownloadVideoSvg from "@/public/svg/components/downloadVideo";
import TeachingAddForm from "./teachingAddForm";

const Teaching = () => {
  return (
    <>
      <div className="w-full pt-5">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600  rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            ویدئوها
          </div>
          <TeachingAddForm/>
        </div>
      </div>
    </>
  );
};

export default Teaching;
