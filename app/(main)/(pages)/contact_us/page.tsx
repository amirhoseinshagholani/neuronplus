import EmailSvg from "@/public/svg/components/emailSvg";
import InstagramSvg from "@/public/svg/components/instagramSvg";
import SearchSvg from "@/public/svg/components/searchSvg";
import TelegramSvg from "@/public/svg/components/telegramSvg";

const Contact_us = () => {
  return (
    <>
      <main className="h-full">
        <div className="grid grid-cols-12 ">
          <div className="col-span-7 p-10 font-semiboldbold">
            <div className="mr-10 mt-5 font-bold">
              <div className="text-3xl diodfont-bold text-[#2d2c2c]">
                تماس با ما
              </div>
              <div className="flex gap-2 mt-3">
                <div className="mt-2 text-[#557ac4] text-md diodfont-semibold">
                    هرچه میخواهد دل تنگت بگو
                </div>
              </div>
              <div className="mt-5 font-medium text-justify text-md diodfont-semibold">
                <p>
                اگر واسه بهتر شدن خدمات سایت پیشنهاد یا انتقادی داری توی فرم رو به رو بنویس، نظر شما برای ما خیلی ارزشمنده، همچنین میتونی توی اینستاگرام و تلگرام با ما در ارتباط باشی یا ایمیل بزنی
                </p>
                <div dir="ltr" className="text-sm mt-5">
                    <div className="flex gap-2">
                        <span><InstagramSvg/></span><span><a className="text-blue-700" href="#">https://www.instagram.com/mohaddeseh_shagholani</a></span>
                    </div>
                    <div className="flex gap-2 mt-1">
                        <span><TelegramSvg/></span><span><a className="text-blue-700" href="#">@mohaddeseh_shagholani</a></span>
                    </div>
                    <div className="flex gap-2 mt-1">
                        <span><EmailSvg/></span><span><a className="text-blue-700" href="#">info@neuronplus.ir</a></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 mt-5 flex diodfont-semibold text-sm pl-8">
            <div className="mx-auto flex-col justify-center w-full mr-0 mt-2 pl-10 pb-8 rounded-xl bg-gray-400 p-5 mb-10">
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
                    <label htmlFor="subject">ایمیل:</label>
                    <input
                      className="bg-gray-300 h-8 rounded-lg w-1/2 mt-2"
                      type="text"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="description">متن پیام:</label>
                    <textarea
                      className="bg-gray-300 h-20 rounded-lg w-full mt-2"
                      id="description"
                      name="description"
                    />
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <input
                    className="h-8 pb-2 pr-2 pl-2 rounded-md bg-green-600 hover:bg-green-700"
                    type="submit"
                    value="ارسال"
                  />
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

export default Contact_us;
