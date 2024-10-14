"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getToken, httpService, swalMessage } from "../components/functions";
import { log } from "node:console";
import TrueSvg from "@/public/svg/components/true";
import EditSvg from "@/public/svg/components/editSvg";

const RoleAddForm = () => {
  interface Role {
    id: number;
    title: string;
    description: string;
  }
  const { register, handleSubmit } = useForm();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [roles, setRoles] = useState<Role[] | null>(null);

  const getRoles = async () => {
    try {
      const token = await getToken();
      const currentToken = "Bearer " + token.data.token;
      const responseGetAllRoles = await httpService.get("/roles/get/all", {
        headers: {
          Authorization: currentToken,
        },
      });
      // console.log(responseGetAllRoles.data.data.length);
      if (responseGetAllRoles.data.data.length != 0) {
        setRoles(responseGetAllRoles.data["data"]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRoles();
  }, []);

  const submitForm = async (data: any) => {
    var title = data["title"];
    const status = data["status"];
    const type = data["type"];
    const description = data["description"];

    if (!title) {
      swalMessage("خطا!", "عنوان نقش را وارد کنید", "warning");
      return false;
    }

    const token = await getToken();
    const currentToken = "Bearer " + token.token;

    if (!token.success) {
      swalMessage("خطا!", "مشکلی پیش آمده است، لطفا بعدا امتحان کنید", "error");
      return false;
    }

    try {
      const responseAddRole = await httpService.post(
        "/roles/add",
        {
          title: title,
          status: status,
          type: type,
          description: description,
        },
        {
          headers: {
            Authorization: currentToken,
          },
        }
      );

      if (responseAddRole.data.success) {
        swalMessage("تبریک میگم!", "نقش مورد نظر با موفقیت ثبت شد", "success");
        title = "";
        setTitleValue("");
        setDescriptionValue("");
        getRoles();
      } else {
        swalMessage(
          "خطا!",
          "مشکلی در ثبت نقش وجود دارد، لطفا داده های ورودی را بررسی کنید",
          "error"
        );
        return false;
      }
    } catch (err) {
      swalMessage("خطا!", "مشکلی پیش آمده است، لطفا بعدا امتحان کنید", "error");
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-full bg-white p-5 rounded-b-2xl grid grid-cols-12">
        <div className="col-span-6">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex mt-2 gap-2 items-center justify-between">
              <label className="diodfont-semibold text-md" htmlFor="title">
                عنوان :{" "}
              </label>
              <input
                {...register("title")}
                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                type="text"
                name="title"
                id="title"
                onChange={(e) => {
                  setTitleValue(e.target.value);
                }}
                value={titleValue}
              />
            </div>

            <div className="flex mt-2 gap-2 items-center justify-between">
              <label className="diodfont-semibold text-md" htmlFor="status">
                وضعیت :{" "}
              </label>
              <select
                {...register("status")}
                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                name="status"
                id="status"
              >
                <option value="1">فعال</option>
                <option value="0">غیرفعال</option>
              </select>
            </div>

            <div className="flex mt-2 gap-2 items-center justify-between">
              <label className="diodfont-semibold text-md" htmlFor="status">
                نوع نقش :{" "}
              </label>
              <select
                {...register("type")}
                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                name="status"
                id="status"
              >
                <option value="1">کارمند</option>
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
              <textarea
                {...register("description")}
                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full h-32 max-w-xs p-1 pr-2 pb-2 rounded-xl"
                name="description"
                id="description"
                onChange={(e) => {
                  setDescriptionValue(e.target.value);
                }}
                value={descriptionValue}
              />
            </div>
            <div className="flex justify-end mt-5 ml-5">
              <button className="w-28 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 p-2 pb-3 text-white rounded-lg diodfont-semibold text-md">
                ثبت
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-6 pr-10 pl-5">
          <div className="diodfont-semibold text-md mb-3">نقش ها</div>
          {/* {
              roles && (
              )
            } */}
          {/* <div className="h-[80%] p-2 rounded-lg bg-slate-700 overflow-auto"> */}

          {roles ? (
            <div className="h-[80%] p-2 rounded-lg bg-slate-600 overflow-auto">
              {roles.map((role) => (
                <div key={role.id} className="w-full p-1">
                  <div className="text-gray-800 p-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full rounded-lg">
                    <div className="flex justify-between h-full">
                      <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                        {role.title}
                      </span>
                      <span className="flex-1">
                        <TrueSvg />
                      </span>
                      <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                        {role.description}
                      </span>
                      <span className="flex-1"></span>
                      <span className="flex-2">
                        <a className="" href="#">
                          <EditSvg />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex mx-auto justify-center diodfont-semibold text-sm text-red-400">
              در حال حاظر هیچ نقشی ثبت نشده است
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default RoleAddForm;
