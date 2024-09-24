const Roles = () => {
  return (
    <>
      <div className="w-full pt-5">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600 rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            نقش ها
          </div>
          <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-scroll grid grid-cols-12">
            <div className="col-span-6">
              {/* عنوان */}
              <div className="flex mt-2 gap-2 items-center justify-between">
                <label className="diodfont-semibold text-md" htmlFor="title">
                  عنوان :{" "}
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
                  وضعیت :{" "}
                </label>
                <select
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
        </div>
      </div>
    </>
  );
};

export default Roles;
