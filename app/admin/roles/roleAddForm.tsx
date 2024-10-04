'use client';
import React from "react";
import {useForm} from "react-hook-form"; 
import { httpService, swalMessage } from "../components/functions";


const RoleAddForm = () => {
  const { register, handleSubmit } = useForm();
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJpbmZvQG5ldXJvbnBsdXMuaXIiLCJpYXQiOjE3MjgwNzY2NjEsImV4cCI6MTcyODA4MDI2MX0.nXQC3PSCvqpsCDNIDJoxlRemhGtailDacbpLZJ92c4I';

  const submitForm = async () => {
    swalMessage("تبریک میگم!","نقش مورد نظر با موفقیت ثبت شد","success");
    return false;
    try{
      const responseAddRole = await httpService.post('/roles/add',{
        "title":"مدیر مالی",
        "status":"0",
        "type":"1",
        "description":""
      },{
        headers:{
          "Authorization":token
        }
      });
      if(responseAddRole.data.success){
        alert("نقش مورد نظر با موفقیت ثبت گردید");
      }else{
        alert("مشکلی در ثبت نقش وجود دارد، لطفا داده های ورودی را بررسی کرده یا با پشتیبانی تماس بگیرید");
        return false;
      }
      
    }catch(err){
      alert("مشکلی پیش آمده است، بعدا امتحان کنید");
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-auto grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex mt-2 gap-2 items-center justify-between">
              <label className="diodfont-semibold text-md" htmlFor="title">
                عنوان :{" "}
              </label>
              <input {...register('title')}
                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                type="text"
                name="title"
                id="title"
              />
            </div>

            <div className="flex mt-2 gap-2 items-center justify-between">
              <label className="diodfont-semibold text-md" htmlFor="status">
                وضعیت :{" "}
              </label>
              <select {...register('status')}
                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                name="status"
                id="status"
              >
                <option selected value="فعال">
                  فعال
                </option>
                <option value="غیرفعال">غیرفعال</option>
              </select>
            </div>

            <div className="flex mt-2 gap-2 items-center justify-between">
              <label className="diodfont-semibold text-md" htmlFor="status">
                نوع نقش :{" "}
              </label>
              <select {...register('type')}
                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                name="status"
                id="status"
              >
                <option selected value="1">
                  کارمند
                </option>
                <option value="0">دانش آموز</option>
              </select>
            </div>

            <div className="flex mt-2 gap-2 items-center justify-between">
              <label
                className="diodfont-semibold text-md"
                htmlFor="description"
              >
                توضیحات :{" "}
              </label>
              <textarea {...register('description')}
                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full h-32 max-w-xs p-1 pr-2 pb-2 rounded-xl"
                name="description"
                id="description"
              />
            </div>
          </div>

          <div className="col-span-12">
            <div className="flex justify-end mt-5 ml-10">
              <button
                type="submit"
                className="w-28 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 p-2 pb-3 text-white rounded-lg diodfont-semibold text-md"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RoleAddForm;
