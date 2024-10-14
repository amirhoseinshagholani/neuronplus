"use client";
import {
  getToken,
  httpService,
  swalMessage,
} from "@/app/admin/components/functions";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies(['token','mellicode','password']);
  const router = useRouter();

  const submitForm = async (data: any) => {
    const mellicode = data["mellicode"];
    const password = data["password"];
    const remember = data["remember"];
    
    if (!mellicode) {
      swalMessage("خطا", "لطفا کدملی را وارد نمایید", "warning");
      return false;
    }
    if (!password) {
      swalMessage("خطا", "لطفا رمزعبور را وارد نمایید", "warning");
      return false;
    }

    try {
      const user:any = await getToken(mellicode, password);

      if (user.data.token) {
        setCookie("token", user.data.token, { path: "/admin", maxAge: 60 * 60 });
        if(remember){
          // if(!cookies.mellicode){
            const oneMonthFromNow = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
            setCookie('mellicode',mellicode,{path:"/auth/login",expires:oneMonthFromNow});
            setCookie('password',password,{path:"/auth/login",expires:oneMonthFromNow});
          // }
        }
        router.push("/admin");
      } else {
        swalMessage("خطا", "نام کاربری یا رمزعبور اشتباه است", "warning");
        return false;
      }
    } catch (error) {
      swalMessage("خطا", "مشکلی در ارتباط با سرور رخ داده است", "error");
      return false;
    }
  };

  return (
    <>
      <form
        action="#"
        onSubmit={handleSubmit(submitForm)}
        className="diodfont-medium text-sm"
      >
        <div>
          <div className="flex justify-center justify-between">
            <input
              {...register("mellicode")}
              className="bg-purple-300 rounded-md w-full p-1 pt-0 placeholder-slate-500"
              placeholder="کد ملی"
              id="mellicode"
              type="text"
              defaultValue={cookies.mellicode || ''}
            />
          </div>
          <div className="flex justify-center mt-2 justify-between">
            <input
              {...register("password")}
              className="bg-purple-300 rounded-md p-1 w-full pt-0 placeholder-slate-500"
              placeholder="رمزعبور"
              id="password"
              type="password"
              defaultValue={cookies.password || ''}
            />
          </div>
          <div className="flex justify-start mt-10 gap-2">
            <input
              {...register("remember")}
              className="bg-purple-300 rounded-md mt-2"
              id="remember"
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
          <a
            href="/"
            className="bg-gradient-to-r w-32 from-[#FF6961] to-red-600 p-3 pt-1 pr-10 pl-10 rounded-lg"
          >
            انصراف
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
