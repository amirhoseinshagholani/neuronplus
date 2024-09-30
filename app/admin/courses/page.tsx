import { useMemo } from "react";
import Grid from "../components/grid"; // مسیر کامپوننت Grid شما
import TrueSvg from "@/public/svg/components/true";
import DownloadPdfSvg from "@/public/svg/components/downloadPdfSvg";
import UnlockSvg from "@/public/svg/components/unlockSvg";
import FalseSvg from "@/public/svg/components/false";
import ImageSvg from "@/public/svg/components/imageSvg";
import EditSvg from "@/public/svg/components/editSvg";

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

const data: Person[] = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
];

const Courses = () => {
  // تعریف ستون‌ها با استفاده از useMemo برای جلوگیری از رندرهای غیرضروری
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", // مسیر برای دسترسی به داده‌ها
        header: "First Name",
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
    ],
    []
  );

  return (
    <>
      <div className="w-full pt-5">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600  rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            دوره ها
          </div>
          <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-auto grid grid-cols-12">
            <div className="col-span-6">
              <div className="flex gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="category">
                  دسته بندی :{" "}
                </label>
                <select
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                  name="category"
                  id="category"
                >
                  <option value="">انتخاب کنید ...</option>
                  <option value="چهارم">چهارم</option>
                  <option value="پنجم">پنجم</option>
                  <option value="ششم">ششم</option>
                </select>
              </div>

              {/* عنوان */}
              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="title">
                  نام دوره :{" "}
                </label>
                <input
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                  type="text"
                  name="title"
                  id="title"
                />
              </div>

              {/* <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="title">نامک  : </label>
                <input
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                  type="text"
                  name="slug"
                  id="slug"
                />
              </div> */}

              {/* قیمت */}
              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="price">
                  هزینه ثبت نام :{" "}
                </label>
                <input
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                  type="text"
                  name="price"
                  id="price"
                />
              </div>

              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="file">
                  کاور :{" "}
                </label>
                <div className="w-full max-w-xs justify-between gap-2 flex">
                  <input
                    className="diodfont-semibold text-sm shadow-md bg-blue-200 h-9 p-1 pr-2 pb-2 rounded-xl"
                    type="file"
                    name="file"
                    id="file"
                  />
                  <div className="justify-end w-1/3 h-1/3">
                    <img
                      className="rounded-xl"
                      src="/img/images.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="status">
                  وضعیت :{" "}
                </label>
                <select
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                  name="status"
                  id="status"
                >
                  <option  value="فعال">
                    فعال
                  </option>
                  <option selected value="غیرفعال">غیرفعال</option>
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
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full h-32 max-w-xs p-1 pr-2 pb-2 rounded-xl"
                  name="description"
                  id="description"
                />
              </div>

              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="w-28 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 p-2 pb-3 text-white rounded-lg diodfont-semibold text-md"
                >
                  ثبت
                </button>
              </div>
            </div>

            <div className="col-span-6 pr-10 pl-5">
              <div className="diodfont-semibold text-md">لیست دوره ها</div>
              <div className="w-full p-2">

                <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                  <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap">
                      چهارم طلایی
                    </span>
                    <span className="flex-1 mr-5 diodfont-medium">
                      پایه چهارم
                    </span>
                    <span className="flex-1 mr-3 diodfont-medium">1450000</span>

                    <span className="flex-1 mr-5">
                      <a href="#">
                        <ImageSvg />
                      </a>
                    </span>
                    <span className="flex-1 mr-3">
                      <TrueSvg/>
                    </span>
                    <span className="flex-2 mr-3">
                      <EditSvg/>
                    </span>
                  </div>
                </div>

                <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                  <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap">
                      علوم نقره ای
                    </span>
                    <span className="flex-1 mr-5 diodfont-medium">
                      پایه پنجم
                    </span>
                    <span className="flex-1 mr-3 diodfont-medium">1600000</span>

                    <span className="flex-1 mr-5">
                      <a href="#">
                        <ImageSvg />
                      </a>
                    </span>
                    <span className="flex-1 mr-3">
                      <FalseSvg/>
                    </span>
                    <span className="flex-2 mr-3">
                      <EditSvg/>
                    </span>
                  </div>
                </div>



              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
