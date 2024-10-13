import RegisterForm from "./registerForm";

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

          <div className="pt-5">
            <RegisterForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
