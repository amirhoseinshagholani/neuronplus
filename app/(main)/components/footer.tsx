const Footer = () => {
  return (
    <>
      <footer className="bg-[#cc00ff] h-40 w-full rounded-b-2xl pt-3 pr-3 pl-3 diodfont-light">
        <div className="flex gap-52">
          <div className="text-white">
            <div className="text-sm mb-1">فهرست</div>
            <hr className="w-48" />
            <div className="flex gap-10">
              <ul className="text-xs text-gray-300">
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
              <ul className="text-xs text-gray-300">
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

          <div className="text-white">
            <div className="text-sm mb-1">دسترسی سریع</div>
            <hr className="w-24" />
            <div className="flex gap-10">
              <ul className="text-xs text-gray-300">
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

          <div className="text-white">
            <div className="text-sm mb-1">حساب</div>
            <hr className="w-24" />
            <div className="flex gap-10">
              <ul className="text-xs text-gray-300">
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
          <hr className="pb-2 mt-3" />
          <span className="diodfont-semibold text-yellow-500">
            کلیه حقوق این سایت متعلق به نورون پلاس می باشد
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
