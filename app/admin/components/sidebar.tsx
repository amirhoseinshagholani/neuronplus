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

const Sidebar = () => {
  const currentRoute = useGetRoute();
  
  return (
    <>
      <div className="col-span-2 bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="pt-3">

          <div className="">
            
            <div className="diodfont-medium text-xs text-white w-full mt-1 pr-1 pb-20 max-h-screen overflow-y-auto">
              
              <div className="flex mx-auto justify-center w-32 p-1">
                <a href="/admin"><img className="" src="/img/neuron+.png" alt="" /> </a>
              </div>
              <hr className="mt-1 w-5/6 mx-auto justify-center mb-3" />

              <Link href="/admin">
                <div className={`${currentRoute=='/admin' ? 'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><ProfileIcon/></div><div><div>پروفایل من</div></div>
                </div>
              </Link>

              
              <Link href="/admin/category">
                <div className={`${currentRoute=='/admin/category'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><CategorySvg/></div><div><div>دسته بندی ها</div></div>
                </div>
              </Link>

              <Link href="/admin/courses">
                <div className={`${currentRoute=='/admin/courses'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                   <div><PackageSvg/></div><div><div>دوره ها</div></div>
                </div>
              </Link>

              <Link href="/admin/teaching">
                <div className={`${currentRoute=='/admin/teaching'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><PlayVideoBlack/></div><div><div>ویدئوها</div></div>
                </div>
              </Link>

              <Link href="/admin/workSheet">
                <div className={`${currentRoute=='/admin/workSheet'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><WorkSheetSvg/></div><div><div>کاربرگ ها</div></div>
                </div>
              </Link>

              <Link href="/admin/onlineQuiz">
                <div className={`${currentRoute=='/admin/onlineQuiz'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><QuizSvg/></div><div><div>آزمون آنلاین</div></div>
                </div>
              </Link>

              <Link href="/admin/roles">
                <div className={`${currentRoute=='/admin/roles'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><RoleSvg/></div><div><div>نقش ها</div></div>
                </div>
              </Link>

              <Link href="/admin/customers">
                <div className={`${currentRoute == '/admin/customers' ? 'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><CustomerSvg/></div><div><div>مشتریان</div></div>
                </div>
              </Link>

              <Link href="/admin/users">
                <div className={`${currentRoute=='/admin/users'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><UsersSvg/></div><div><div>کاربران</div></div>
                </div>
              </Link>

              <Link href="/admin/setting">
                <div className={`${currentRoute=='/admin/setting'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><SettingSvg/></div><div><div>تنظیمات سایت</div></div>
                </div>
              </Link>

              <Link href="/admin/gallery">
                <div className={`${currentRoute == '/admin/gallery'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><EventSvg/></div><div><div>رویدادها</div></div>
                </div>
              </Link>

              <Link href="/admin/comments">
                <div className={`${currentRoute =='/admin/comments' ? 'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><CommentSvg/></div><div><div>کامنت ها</div></div>
                </div>
              </Link>

              <Link href="/admin/tickets">
                <div className={`${currentRoute == '/admin/tickets'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><TicketSvg/></div><div><div>تیکت ها</div></div>
                </div>
              </Link>

              <Link href="/admin/advice">
                <div className={`${currentRoute=='/admin/advice'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><CounselingSvg/></div><div><div>درخواست مشاوره</div></div>
                </div>
              </Link>

              <Link href="/admin/reports">
                <div className={`${currentRoute=='/admin/reports'?'bg-gradient-to-l from-[#6697C5] to-gray-300':''} flex gap-2 p-4 pt-2 w-full hover:bg-gradient-to-l from-[#6697C5] to-gray-300`}>
                  <div><ReportSvg/></div><div><div>گزارشات</div></div>
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
