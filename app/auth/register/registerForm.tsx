"use client";
import { getToken, httpService, swalMessage } from "@/app/admin/components/functions";
import FalseSvg from "@/public/svg/components/false";
import { useForm } from "react-hook-form";
import {useRouter} from "next/navigation";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const submitForm = async (data: any) => {
    // const user = {
    //     "firstName":data.firstName,
    //     "lastName":data.lastName,
    //     "mobile":data.mobile,
    //     "phone":data.phone,
    //     "melliCode":data.melliCode,
    //     "state":data.state,
    //     "city":data.city,
    //     "address":data.address,
    //     "password":data.password,
    //     "description":"",
    // }
// console.log(user);

    try{
      const response = await httpService.post('/users/addSelf',{
        firstName:data.firstName,
        lastName:data.lastName,
        mobile:data.mobile,
        phone:data.phone,
        melliCode:data.melliCode,
        state:data.state,
        city:data.city,
        address:data.address,
        password:data.password,
        description:"",
      });
      swalMessage("تبریک میگم!", "ثبت نام با موفقیت انجام شد", "success");
      console.log(response.data);
      router.push('/auth/login');
    }catch(err){
      swalMessage("خطا", "متاسفانه ثبت نام با مشکل مواجه شده است، لطفا دوباره امتحان کنید", "error");
      return false;
    }
  };

  return (
    <>
      {/* <div className="w-full h-10 mb-3">
        {errors.melliCode && (
          <div className="w-full h-full bg-red-600">
            <span className="diodfont-semibold text-xs p-2 flex items-center text-white">
              خطا: {errors.melliCode.message}
            </span>
          </div>
        )}
      </div> */}

      <form
        onSubmit={handleSubmit(submitForm)}
        className="diodfont-medium text-sm"
      >
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <div className="flex justify-center justify-between">
              <label htmlFor="name">نام :</label>
              <input
                {...register("firstName", {
                  required: "لطفا نام خود را وارد کنید",
                })}
                className={`${
                  errors.firstName
                    ? "bg-red-500 border-2 border-black"
                    : "bg-purple-300"
                } h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500`}
                name="firstName"
                type="text"
              />
            </div>
            <div className="flex justify-center mt-2 justify-between">
              <label htmlFor="lastname">نام خانوادگی :</label>
              <input
                {...register("lastName", {
                  required: "لطفا نام خانوادگی خود را وارد کنید",
                })}
                className={`${
                  errors.lastName
                    ? "bg-red-500 border-2 border-black"
                    : "bg-purple-300"
                } h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500`}
                name="lastName"
                type="text"
              />
            </div>

            <div className="flex justify-center mt-2 justify-between">
              <label htmlFor="melliCode">کدملی :</label>
              <input
                {...register("melliCode", {
                  required: "کد ملی الزامی است",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "کد ملی باید 10 رقم باشد و فقط شامل اعداد باشد",
                  },
                })}
                className={`${
                  errors.melliCode
                    ? "bg-red-500 border-2 border-black"
                    : "bg-purple-300"
                } h-8 rounded-md p-1 pt-0 placeholder-slate-500`}
                name="melliCode"
                type="text"
              />
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex justify-center justify-between">
              <label htmlFor="state">استان :</label>
              <input
                {...register("state")}
                className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                name="state"
                type="text"
              />
            </div>
            <div className="flex justify-center mt-2 justify-between">
              <label htmlFor="city">شهر :</label>
              <input
                {...register("city")}
                className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                name="city"
                type="text"
              />
            </div>
            <div className="flex justify-center mt-2 justify-between">
              <label htmlFor="address">آدرس :</label>
              <input
                {...register("address")}
                className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                name="address"
                type="text"
              />
            </div>
          </div>

          <div className="col-span-4">
            <div className="flex justify-center justify-between">
              <label htmlFor="mobile">موبایل :</label>
              <input
                {...register("mobile", {
                  required: "موبایل الزامی است",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "موبایل باید 11 رقم باشد و فقط شامل اعداد باشد",
                  },
                })}
                className={`${
                  errors.mobile
                    ? "bg-red-500 border-2 border-black"
                    : "bg-purple-300"
                } h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500`}
                name="mobile"
                type="text"
              />
            </div>
            <div className="flex justify-center mt-2 justify-between">
              <label htmlFor="phone">تلفن ثابت :</label>
              <input
                {...register("phone")}
                className="bg-purple-300 h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500"
                name="phone"
                type="text"
              />
            </div>
            <div className="flex justify-center mt-2 justify-between">
              <label htmlFor="password">رمزعبور :</label>
              <input
                {...register("password", {
                  required: "لطفا نام خود را وارد کنید",
                })}
                className={`${
                  errors.password
                    ? "bg-red-500 border-2 border-black"
                    : "bg-purple-300"
                } h-8 h-max-8 rounded-md p-1 pt-0 placeholder-slate-500`}
                name="password"
                type="password"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <button
            className="bg-gradient-to-r w-32 from-[#77DD77] to-green-600 p-3 pt-1 pr-10 pl-10 rounded-lg"
            type="submit"
          >
            ثبت نام
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

export default RegisterForm;
