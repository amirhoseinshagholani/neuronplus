const Login = () => {
  return (
    <>
      <div className="bg-slate-200 h-3/4 w-1/4 rounded-lg">
        <div className="p-5 pt-0">
          <div className="flex justify-center p-5 pb-1 mt-0">
            <a href="/">
              <img src="/img/logo.png" className="w-20" alt="" />
            </a>
          </div>
          <div className="flex justify-center mt-0 diodfont-bold text-lg">
            <p>ورود</p>
          </div>
          <div className="flex justify-center mt-3 diodfont-semibold text-md">
            <p>نام کاربری و رمزعبورت رو وارد کن</p>
          </div>
          <div className="flex justify-center mt-3 diodfont-semibold text-sm">
            <p>هنوز ثبت نام نکردی؟ پس <a className="text-blue-700" href="/auth/register">اینجا</a> رو کلیک کن</p>
          </div>

          <div className="pt-10">
            <form action="#" className="diodfont-medium text-sm">
              <div>
                <div className="flex justify-center justify-between">
                  {/* <label className="" htmlFor="username">نام کاربری :</label> */}
                  <input
                    className="bg-purple-300 rounded-md w-full p-1 pt-0 placeholder-slate-500"
                    placeholder="نام کاربری"
                    name="username"
                    type="text"
                  />
                </div>
                <div className="flex justify-center mt-2 justify-between">
                  {/* <label className="" htmlFor="username"> رمزعبور :</label> */}
                  <input
                    className="bg-purple-300 rounded-md p-1 w-full pt-0 placeholder-slate-500"
                    placeholder="رمزعبور"
                    name="username"
                    type="text"
                  />
                </div>
                <div className="flex justify-start mt-10 gap-2">
                  <input
                    className="bg-purple-300 rounded-md mt-2"
                    name="remember"
                    type="checkbox"
                  />
                  <label className="" htmlFor="username">
                    مرا به خاطر بسپار
                  </label>
                </div>
              </div>
              <div className="mt-10 flex justify-center gap-2">
                <button
                  className="bg-gradient-to-r w-32 from-[#77DD77] to-green-600 p-3 pt-1 pr-10 pl-10 rounded-lg"
                  type="submit"
                >
                  ورود
                </button>
                <a href="/"
                  className="bg-gradient-to-r w-32 from-[#FF6961] to-red-600 p-3 pt-1 pr-10 pl-10 rounded-lg"
                >
                  انصراف
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
