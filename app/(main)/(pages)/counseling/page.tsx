import TicketSvg from "@/public/svg/components/ticketSvg";

const Counseling = () => {
  return (
    <>
      <main className="h-full">
        <div className="grid grid-cols-12 ">
          <div className="col-span-7 p-10 font-semiboldbold">
            <div className="mr-10 mt-5 font-bold">
              <div className="text-3xl diodfont-bold text-[#2d2c2c]">
                درخواست مشاوره
              </div>
              <div className="flex gap-2 mt-3">
                <div className="mt-2 text-[#557ac4] text-md diodfont-semibold">
                  نیاز به کمک داری؟ نگران نباش من اینجام
                </div>
              </div>
              <div className="mt-5 font-medium text-justify text-lg diodfont-semibold">
                <p>
                  درخواستت رو ثبت کن تا باهات تماس بگیرم و بگم که باید چیکار
                  کنی
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 mt-5 flex diodfont-semibold text-sm pl-8">
            <div className="mx-auto flex-col justify-center w-full mr-0 mt-2 pl-10 pb-8 rounded-xl bg-purple-400 p-5 mb-10">
              <form action="#">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="subject">موضوع:</label>
                    <input
                      className="bg-gray-300 h-8 rounded-lg w-1/2 mt-2"
                      type="text"
                      id="subject"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="subject">شماره تماس:</label>
                    <input
                      className="bg-gray-300 h-8 rounded-lg w-1/2 mt-2"
                      type="text"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="description">توضیحات:</label>
                    <textarea
                      className="bg-gray-300 h-20 rounded-lg w-full mt-2"
                      id="description"
                      name="description"
                    />
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                    <input className="h-8 pb-2 pr-2 pl-2 rounded-md bg-green-600 hover:bg-green-700" type="submit" value="ثبت درخواست" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="">
          {/* <hr className="w-5/6 border-purple-600 mx-auto" /> */}
        </div>
      </main>
    </>
  );
};

export default Counseling;
