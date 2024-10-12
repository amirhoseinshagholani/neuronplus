"use client";
import { getToken, httpService, swalMessage } from "@/app/admin/components/functions";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  
  const submitForm = async(data:any)=>{
    const mellicode = data['mellicode'];
    const password  = data['password'];
    if(!mellicode){
        swalMessage('خطا','لطفا کدملی را وارد نمایید','warning');
        return false;
    }
    if(!password){
        swalMessage('خطا','لطفا رمزعبور را وارد نمایید','warning');
        return false;
    }
    
    const user = await getToken(mellicode,password);
    
    if(user.success){
      router.push('/admin');
    }else{
      alert("no");
    }
    
    return false;
    
  }

  return (
    <>
      <form action="#" onSubmit={handleSubmit(submitForm)} className="diodfont-medium text-sm">
        <div>
          <div className="flex justify-center justify-between">
            <input
              {...register('mellicode')}
              className="bg-purple-300 rounded-md w-full p-1 pt-0 placeholder-slate-500"
              placeholder="کد ملی"
              id="mellicode"
              type="text"
            />
          </div>
          <div className="flex justify-center mt-2 justify-between">
            <input
              {...register('password')}
              className="bg-purple-300 rounded-md p-1 w-full pt-0 placeholder-slate-500"
              placeholder="رمزعبور"
              id="password"
              type="text"
            />
          </div>
          <div className="flex justify-start mt-10 gap-2">
            <input
              {...register('remember')}
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
