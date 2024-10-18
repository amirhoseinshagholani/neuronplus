"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { httpService, swalMessage } from "./components/functions";
import { headers } from "next/headers";
import useGregorianToJalali from "../hooks/useGregorianToJalali";

const HomePage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token", "mellicode", "password"]);
  const [user, setUser] = useState<any>();
  const createdDateUser = useGregorianToJalali(user ? user.created_at : '');

  const getUser = async () => {
    try {

      const response_user = await httpService.get(
        "/users/getUser",
        {
          params: {
            item: "mellicode",
            itemValue: cookies.mellicode
          },
          headers: {
            Authorization: "Bearer " + cookies.token,
          },
        }
      );
      setUser(response_user.data.data[0]);
      const createddate = response_user.data.data[0].created_at;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, [cookies.mellicode]);




  return (
    <>
      <div className="w-full pt-5 flex h-[90%]">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600 rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            پروفایل من
          </div>
          <div className="h-full bg-white rounded-b-xl p-1 pb-0 shadow-lg md:flex diodfont-semibold text-md">
            <div className="w-1/2">
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">
                  نام و نام خانوادگی:
                </div>
                <input className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl" type="text" value={user ? user.firstName + ' ' + user.lastName : ''} />
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">سمت:</div>
                <input className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl" type="text" value={user ? user.role_title : ''} />
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">کدملی:</div>
                <input className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl" type="text" value={user ? user.melliCode : ''} />
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">
                  شماره تلفن:
                </div>
                <input className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl" type="text" value={user ? user.phone : "-"} />
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">استان:</div>
                <input className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl" type="text" value={user ? user.state : ''} />
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">شهر:</div>
                <input className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl" type="text" value={user ? user.city : ''} />
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md p-1 pb-2">آدرس:</div>
                <input className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl" type="text" value={user ? user.address : ''} />
              </div>
              <div className="flex gap-2 text-sm p-2 justify-between mt-3">
                <div className="diodfont-semibold text-md  p-1 pb-2">
                  تاریخ شروع همکاری:
                </div>
                <input className="diodfont-semibold text-md text-slate-500 shadow-md bg-blue-100 p-1 pr-2 pb-2 w-2/3 rounded-xl" type="text" value={createdDateUser ? createdDateUser : ''} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
