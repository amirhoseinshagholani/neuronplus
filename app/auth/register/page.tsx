const Register = () => {
  return (
    <>
      <div className="bg-slate-200 h-3/4 w-3/4 rounded-lg">
        <div className="p-5 pt-0">
          <div className="flex justify-center p-5 pb-1 mt-0">
            <a href="/">
              <img src="/img/logo.png" className="w-20" alt="" />
            </a>
          </div>
          <div className="flex justify-center mt-0 diodfont-bold text-lg">
            <p>ثبت نام</p>
          </div>
          <div className="flex justify-center mt-3 diodfont-semibold text-md">
            <p>نورونی عزیز، اطلاعاتت رو وارد کن تا شروع کنیم</p>
          </div>
          <div className="flex justify-center mt-1 diodfont-semibold text-sm">
            <p>
              اگر قبلا ثبت نام کردی،{" "}
              <a className="text-blue-700 diodfont-semibold" href="/auth/login">
                اینجا
              </a>{" "}
              رو کلیک کن
            </p>
          </div>

          <div className="pt-10">
            <form action="#" className="diodfont-medium text-sm">
              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-4">
                  <div className="flex justify-center justify-between">
                    <label className="" htmlFor="name">
                      نام :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div className="flex justify-center mt-2 justify-between">
                    <label className="" htmlFor="lastname">
                      نام خانوادگی :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="lastname"
                      type="text"
                    />
                  </div>
                  <div className="flex justify-center mt-2 justify-between">
                    <label className="" htmlFor="melliCode">
                      کدملی :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="melliCode"
                      type="text"
                    />
                  </div>
                </div>
                
                <div className="col-span-4">
                  <div className="flex justify-center justify-between">
                    <label className="" htmlFor="state">
                      استان :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="state"
                      type="text"
                    />
                  </div>
                  <div className="flex justify-center mt-2 justify-between">
                    <label className="" htmlFor="city">
                       شهر :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="city"
                      type="text"
                    />
                  </div>
                  <div className="flex justify-center mt-2 justify-between">
                    <label className="" htmlFor="address">
                       آدرس :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="address"
                      type="text"
                    />
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="flex justify-center justify-between">
                    <label className="" htmlFor="mobile">
                      موبایل :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="mobile"
                      type="text"
                    />
                  </div>
                  <div className="flex justify-center mt-2 justify-between">
                    <label className="" htmlFor="phone">
                       تلفن ثابت :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="phone"
                      type="text"
                    />
                  </div>
                  <div className="flex justify-center mt-2 justify-between">
                    <label className="" htmlFor="password">
                       رمزعبور :
                    </label>
                    <input
                      className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                      name="password"
                      type="password"
                    />
                  </div>
                </div>

              </div>
              <div className="mt-14 flex justify-center gap-2">
                <button
                  className="bg-gradient-to-r w-32 from-[#77DD77] to-green-600 p-3 pt-1 pr-10 pl-10 rounded-lg"
                  type="submit"
                >
                  ثبت نام
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

export default Register;
