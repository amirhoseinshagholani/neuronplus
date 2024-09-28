const TicketDetail = () => {
  return (
    <>
      <div className="w-full pt-5">
        <div className="w-full h-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600 rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            جزئیات تیکت
          </div>
          <div className="w-full bg-white p-5 rounded-b-2xl h-[90%] overflow-auto grid grid-cols-12">
            <div className="col-span-12">
              <div className="grid grid-cols-12">
                <div className="col-span-4 ">
                  <div className="text-xs">
                    <span className="diodfont-semibold">موضوع: </span>
                    <span className="diodfont-medium">مشکل در دانلود دوره</span>
                  </div>
                </div>
                <div className="col-span-4 ">
                  <div className="text-xs">
                    <span className="diodfont-semibold">تاریخ ثبت: </span>
                    <span className="diodfont-medium">1403/06/25</span>
                  </div>
                </div>
                <div className="col-span-4 ">
                  <div className="text-xs">
                    <span className="diodfont-semibold">وضعیت: </span>
                    <span className="diodfont-medium text-green-600">
                      پاسخ داده شده
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 mb-10">
              <hr className="mt-10 mb-10 border-gray-800 w-full" />
              <div>
                <div className="flex justify-start mt-2">
                  <span className="bg-green-500 p-3 pt-2 rounded-t-3xl rounded-bl-3xl diodfont-medium text-sm max-w-lg">
                    سلام. من برای دانلود دوره ها مشکل دارم چیکار کنم؟ من میخوام
                    دوره ها رو بریزم تو فلش بدم به دوستم
                  </span>
                </div>

                <div className="flex mt-2 justify-end">
                  <span className="bg-gray-300 p-3 pt-2 rounded-t-3xl rounded-br-3xl diodfont-medium text-sm max-w-lg">
                    سلام، وقت بخیر. دوره ها قابل دانلود نیستن. شما فقط باید در
                    صفحه مربوط به دوره حضور داشته باشید و دوره رو روی سایت تماشا
                    کنید.
                  </span>
                </div>

                <div className="flex justify-start mt-2">
                  <span className="bg-green-500 p-3 pt-2 rounded-t-3xl rounded-bl-3xl diodfont-medium text-sm max-w-lg">
                    ممنون. راستی دوره علوم نمیذارید
                  </span>
                </div>

                <div className="flex mt-2 justify-end">
                  <span className="bg-gray-300 p-3 pt-2 rounded-t-3xl rounded-br-3xl diodfont-medium text-sm max-w-lg">
                    از صفحه اخبار سایت پیگیری کنید
                  </span>
                </div>
              </div>
              <hr className="mt-10 mb-10 border-gray-800 w-full" />
              <div className="diodfont-medium text-sm">
                <label htmlFor="description">پاسخ خود را بنویسید</label>
                <div className="flex gap-2">
                  <textarea
                    className="bg-purple-200 w-full h-20 mt-2 rounded-lg"
                    name="description"
                    id="description"
                  ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 diodfont-semibold text-xs rounded-lg pt-1 pb-2 pr-4 pl-4">
                    ارسال
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetail;
