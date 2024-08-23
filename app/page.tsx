function Home() {
  return (
    <div className="">
      <div className="w-11/12 h-full mx-auto justify-center mt-10 rounded-2xl bg-[#e9e9b9] shadow-2xl">
        <div className="bg-[#cc00ff] h-8 rounded-t-2xl flex" dir="ltr">
          <div className="bg-[#fff500] diodfont-regular shadow-lg ml-10 my-auto items-center pb-2 text-xs font-bold p-1 pr-2 pl-2 rounded-lg">
            <a
              href="#"
              className=""
            >
              ورود-ثبت نام
            </a>
          </div>
        </div>
        <header className="bg-[#EDA4FF] w-full h-20 shadow-lg diodfont-semibold">
          <nav className="flex gap-12 grid-cols-12 w-full mt-0 mx-auto justify-center">
            <div className="col-span-4 flex gap-20 p-6 pr-20">
              <div>
                <a href="#">صفحه اصلی</a>
              </div>
              <div>
                <a href="#">دوره ها</a>
              </div>
              <div>
                <a href="#">گالری عکس</a>
              </div>
            </div>
            <div className="col-span-4 my-auto mt-0 mx-auto justify-center pt-1">
              <a href="/">
                <img src="/img/neuron+.png" className="w-20" alt="" />
              </a>
            </div>
            <div className="col-span-4 flex gap-20 p-6 pl-20">
              <div>
                <a href="#">مشاوره رایگان</a>
              </div>
              <div>
                <a href="#">درباره ما</a>
              </div>
              <div>
                <a href="#">تماس با ما</a>
              </div>
            </div>
          </nav>
        </header>

        <main className="h-full">
          <div className="grid grid-cols-12">
            <div className="col-span-7 h-10 p-10 font-semiboldbold">
              <div className="mr-10 mt-20">
                <div className="text-3xl diodfont-bold">نورون پلاس</div>
                <div className="flex gap-2 mt-3">
                  <div className="w-7 mt-2">
                    <img src="/svg/talent-search-svgrepo-com.svg" alt="" />
                  </div>
                  <div className="font-normal mt-3 text-[#6183C5] text-md diodfont-regular">
                    اینجا استعدادت رو کشف میکنی
                  </div>
                </div>
                <div className="mt-5 font-medium text-justify text-lg diodfont-medium">
                  <div>
                    آکادمی نورون پلاس سعی دارد بهترین برنامه و محتوای آموزشی را
                    در اختیار دانش آموزان در هر سطحی قرار دهد. هدف ما این است که
                    هر دانش آموز با هر سطح توانایی، بتواند از منابع ما بهره مند
                    شود و به یادگیری و پیشرفت خود ادامه دهد.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5 mt-5">
              <div className="mx-auto justify-center w-fit">
                <img className="" src="/img/mohad.png" alt="" width={400}/>
              </div>
            </div>
          </div>
          <div className="">
            sfdsfsdfdsfd
          </div>
        </main>

        <footer className="bg-[#cc00ff] h-40 w-full mt-20 rounded-b-2xl pt-3 pr-3 pl-3">
          <div className="flex gap-52">
            <div className="text-white font-semibold">
              <div className="text-sm mb-1">فهرست</div>
              <hr className="w-48" />
              <div className="flex gap-10">
                <ul className="text-xs">
                  <a href="#">
                    <li className="mt-2">صفحه اصلی</li>
                  </a>
                  <a href="#">
                    <li className="mt-2">دوره ها</li>
                  </a>
                  <a href="#">
                    <li className="mt-2">گالری عکس</li>
                  </a>
                </ul>
                <ul className="text-xs">
                  <a href="#">
                    <li className="mt-2">مشاوره رایگان</li>
                  </a>
                  <a href="#">
                    <li className="mt-2">درباره ما</li>
                  </a>
                  <a href="#">
                    <li className="mt-2">تماس با ما</li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="text-white font-semibold">
              <div className="text-sm mb-1">دسترسی سریع</div>
              <hr className="w-24" />
              <div className="flex gap-10">
                <ul className="text-xs">
                  <a href="#">
                    <li className="mt-2">پایه چهارم</li>
                  </a>
                  <a href="#">
                    <li className="mt-2">پایه پنجم</li>
                  </a>
                  <a href="#">
                    <li className="mt-2">پایه ششم</li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="text-white font-semibold">
              <div className="text-sm mb-1">حساب</div>
              <hr className="w-24" />
              <div className="flex gap-10">
                <ul className="text-xs">
                  <a href="#">
                    <li className="mt-2">ورود</li>
                  </a>
                  <a href="#">
                    <li className="mt-2">ثبت نام</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-xs text-center mt-auto p-2">
            <hr className="pb-2" />
            <span className="diodfont-extralight">
              کلیه حقوق این سایت متعلق به نورون پلاس می باشد
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
