import DetailSvg from "@/public/svg/components/detailSvg";
import PlayVideoBlack from "@/public/svg/components/playVideoBlack";
import PlayVideoRed from "@/public/svg/components/playVideoRed";
import TicketSvg from "@/public/svg/components/ticketSvg";

const Roles = () => {
  return (
    <>
      <div className="w-full pt-5">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600 rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            تیکت ها
          </div>
          <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-scroll grid grid-cols-12">
            <div className="col-span-6">
              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="status">
                  دوره :{" "}
                </label>
                <select
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                  name="status"
                  id="status"
                >
                  <option selected value="">
                    انتخاب کنید ...
                  </option>
                  <option value="">طلایی چهارم</option>
                </select>
              </div>

              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="title">
                  موضوع :{" "}
                </label>
                <input
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                  type="text"
                  name="title"
                  id="title"
                />
              </div>

              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="status">
                  اولویت :{" "}
                </label>
                <select
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                  name="status"
                  id="status"
                >
                  <option selected value="کم">
                    کم
                  </option>
                  <option value="معمولی">معمولی</option>
                  <option value="بالا">بالا</option>
                </select>
              </div>

              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="file">
                  فایل ضمیمه :{" "}
                </label>
                <input
                  className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                  type="file"
                  name="file"
                  id="file"
                />
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
              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  className="w-28 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 p-2 pb-3 text-white rounded-lg diodfont-semibold text-md"
                >
                  ثبت
                </button>
              </div>
            </div>

            <div className="col-span-6">
              <div className="w-full pr-16">
              <div className="diodfont-semibold text-sm text-gray-800 mb-5">لیست تیکت های من</div>
                <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                  <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">
                      مشکل در دانلود دوره
                    </span>
                    <span className="flex-1 mr-10">1403-05-21</span>
                    <span className="flex-1">اولویت: بالا</span>
                    <span className="flex-2">
                      <a href="/panel/tickets/2">
                        <DetailSvg/>
                      </a>
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

export default Roles;
