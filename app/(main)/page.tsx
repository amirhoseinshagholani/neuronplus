import BrainSvg from "@/public/svg/components/brainSvg";
import dynamic from "next/dynamic";
import EmblaCarousel from "./components/home/emblaCarousel";
import Slider from "./components/imageSlider";
import ImageSlider from "./components/imageSlider";
import SearchSvg from "@/public/svg/components/searchSvg";

function Home() {
  
  return (
    <>
      <main className="h-full">
        <div className="grid grid-cols-12 ">
          <div className="col-span-7 p-10 font-semiboldbold">
            <div className="mr-10 mt-5 font-bold">
              <div className="text-3xl diodfont-bold text-[#2d2c2c]">
                نورون پلاس
              </div>
              <div className="flex gap-2 mt-3">
                <div className="w-7 mt-2">
                  <SearchSvg/>
                </div>
                <div className="mt-2 text-[#557ac4] text-md diodfont-semibold">
                  اینجا استعدادت رو کشف میکنی
                </div>
              </div>
              <div className="mt-5 font-medium text-justify text-xl diodfont-semibold">
                <p>
                  آکادمی نورون پلاس سعی دارد بهترین برنامه و محتوای آموزشی را در
                  اختیار دانش آموزان در هر سطحی قرار دهد. هدف ما این است که هر
                  دانش آموز با هر سطح توانایی، بتواند از منابع ما بهره مند شود و
                  به یادگیری و پیشرفت خود ادامه دهد.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 mt-5">
            <div className="mx-auto justify-center w-fit">
              <img className="w-5/6" src="/img/mohad.png" alt="" />
            </div>
          </div>
        </div>


        <div>
          <div className="p-10">
            <div className="pr-20 text-xl diodfont-bold text-[#cc00ff]">
              پایه چندمی؟
            </div>
            <div className="mt-2 pr-20 text-[#557ac4] text-md diodfont-semibold">
              یکی از پایه های زیر رو انتخاب کن تا بترکونیم
            </div>
          </div>

          <div className="flex mt-5">
            <div className="mx-auto">
              <div className="grid grid-cols-12 gap-20">
                <div className="col-span-4 h-44 w-44  rounded-xl shadow-2xl mx-auto">
                  <a href="/base/2">
                    <img
                      className="rounded rounded-xl"
                      src="/img/4th.jpg"
                      alt="پایه چهارم"
                    />
                  </a>
                </div>

                <div className="col-span-4 h-44 w-44 rounded-xl shadow-2xl mx-auto">
                  <a href="/pages/base/3">
                    <img
                      className="rounded rounded-xl"
                      src="/img/5th.jpg"
                      alt="پایه پنجم"
                    />
                  </a>
                </div>

                <div className="col-span-4 h-44 w-44 rounded-xl shadow-2xl mx-auto">
                  <a href="/pages/base/4">
                    <img
                      className="rounded rounded-xl"
                      src="/img/6th.png"
                      alt="پایه ششم"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <hr className="w-5/6 border-purple-600 mx-auto" />
        </div>
        <div>
          <div className="p-10 pr-20 text-xl">
            <div className="flex">
              <div>
                <BrainSvg />
              </div>
              <div className="mt-5 mr-2 text-xl diodfont-bold text-[#cc00ff]">
                اصلا نورون پلاس چیه؟
              </div>
            </div>
            <div className="p-10">
              <div className="w-full mx-auto bg-gradient-to-r from-[#d5addf] to-[#cc00ff] rounded rounded-xl text-sm p-7 text-gray-800">
                <p className="diodfont-semibold">
                  نورون پلاس، مجموعه ای است که به منظور ارتقاء یادگیری و آموزش
                  دانش‌آموزان، به ویژه دانش آموزان متقاضی تیزهوشان و مدارس برتر
                  راه‌اندازی شده است. ما در نورون پلاس به تولید محتوای آموزشی
                  جذاب و کارآمد پرداخته‌ایم که به یادگیری مفاهیم درسی کمک می‌کند
                  و انگیزه و اشتیاق دانش‌آموزان را برای یادگیری افزایش می‌دهد.
                </p>
                <br />
                <p className="diodfont-semibold">
                  هدف ما این است که با استفاده از روش‌های نوین آموزشی و منابع
                  متنوع، محیطی تعاملی و سرگرم‌کننده برای یادگیری فراهم کنیم.
                  محتوای ما شامل ویدئوهای آموزشی، تمرینات تعاملی، و منابع
                  کمک‌درسی است که به شکلی طراحی شده‌اند تا نیازهای مختلف
                  دانش‌آموزان را پوشش دهند.
                </p>
                <br />
                <p className="diodfont-semibold">
                  با نورون پلاس، یادگیری دیگر یک وظیفه خسته‌کننده نیست، بلکه
                  تجربه‌ای لذت‌بخش و مفید خواهد بود.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <hr className="w-5/6 border-purple-600 mx-auto" />
        </div>

        <div>
          <div className="p-10 pr-20 text-xl diodfont-bold text-[#cc00ff]">
            نظرات نورونی ها
          </div>
          <div className="h-full">
        <div className="">
          <div className="p-10 font-semiboldbold flex justify-center">
            <div className="w-3/5 shadow-xl rounded-xl">
              <ImageSlider />
            </div>
          </div>
          {/* سایر محتواها */}
        </div>
      </div>
          
        </div>
      </main>
    </>
  );
}

export default Home;
