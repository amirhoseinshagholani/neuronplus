'use client';
import CategorySvg from "@/public/svg/components/categorySvg";
import CommentSvg from "@/public/svg/components/commentSvg";
import CounselingSvg from "@/public/svg/components/counselingSvg";
import CustomerSvg from "@/public/svg/components/customersSvg";
import DownloadPdfSvg from "@/public/svg/components/downloadPdfSvg";
import GallerySvg from "@/public/svg/components/eventSvg";
import PackageSvg from "@/public/svg/components/packageSvg";
import PlayVideoBlack from "@/public/svg/components/playVideoBlack";
import ProfileIcon from "@/public/svg/components/profileIcon";
import QuizSvg from "@/public/svg/components/quizSvg";
import ReportSvg from "@/public/svg/components/reportSvg";
import SettingSvg from "@/public/svg/components/settingSvg";
import TicketSvg from "@/public/svg/components/ticketSvg";
import UsersSvg from "@/public/svg/components/usersSvg";
import WorkSheetSvg from "@/public/svg/components/workSheetSvg";
import useGetRoute from "../functions/getRouter";
import RoleSvg from "@/public/svg/components/roleSvg";
import Link from "next/link";
import EventSvg from "@/public/svg/components/eventSvg";
import CheckListSvg from "@/public/svg/components/checklistSvg";

const Sidebar = () => {
  const currentRoute = useGetRoute();
  
  return (
    <>
      <div className="col-span-2 bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="pt-3">

          <div className="">
            
            <div className="diodfont-medium text-xs text-white w-full mt-1 pr-1 pb-20 max-h-screen overflow-y-auto">
              
              <div className="flex mx-auto justify-center w-32 p-1">
                <a href="/" target="_blank"><img className="" src="/img/neuron+.png" alt="" /> </a>
              </div>
              <hr className="mt-1 w-5/6 mx-auto justify-center mb-3" />

              <Link href="/panel">
                <div className={`${currentRoute=='/panel' ? 'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><ProfileIcon/></div><div><div>پروفایل من</div></div>
                </div>
              </Link>

              <Link href="/panel/courses">
                <div className={`${currentRoute=='/panel/courses'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                   <div><PackageSvg/></div><div><div>دوره ها</div></div>
                </div>
              </Link>

              <Link href="/panel/orders">
                <div className={`${currentRoute=='/panel/orders'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><CheckListSvg/></div><div><div>سفارشات</div></div>
                </div>
              </Link>
              
              <Link href="/panel/tickets">
                <div className={`${currentRoute == '/panel/tickets'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><TicketSvg/></div><div><div>تیکت های من</div></div>
                </div>
              </Link>

              <Link href="/panel/advice">
                <div className={`${currentRoute=='/panel/advice'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><CounselingSvg/></div><div><div>درخواست مشاوره</div></div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
