'use client';

import { cookies } from "next/headers";
import LoginForm from "./loginForm";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token','mellicode','password']);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cookies.token) {
      router.push("/admin");
    } else {
      setIsLoading(false);
    }
  }, [cookies, router]);

  if (isLoading) {
    return null;
  }

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
            <LoginForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
