import PlayVideoBlack from "@/public/svg/components/playVideoBlack";
import PlayVideoRed from "@/public/svg/components/playVideoRed";

const CourseContent = () => {
  return (
    <>
      <div className="w-full pt-5 h-[90%]">
        <div className="w-full">
          <div className="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-600  rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            دوره طلایی چهارم
          </div>
          <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-scroll grid grid-cols-12">
            <div className="col-span-5 pr-10 pl-5">
              <div className="diodfont-semibold text-md">لیست ویدئوها</div>
              <div className="w-full p-2">
                <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                  <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">
                      1- مقدمه
                    </span>
                    <span className="flex-1 mr-10">20:34</span>
                    <span className="flex-1"></span>
                    <span className="flex-1">
                      <a href="#"></a>
                    </span>
                    <span className="flex-2">
                      <PlayVideoRed />
                    </span>
                  </div>
                </div>
                <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                  <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">
                      2- معادلات درجه 1
                    </span>
                    <span className="flex-1 mr-10">20:34</span>
                    <span className="flex-1"></span>
                    <span className="flex-1">
                      <a href="#"></a>
                    </span>
                    <span className="flex-2">
                      <PlayVideoBlack />
                    </span>
                  </div>
                </div>
                <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                  <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">
                      3- معادلات درجه 2
                    </span>
                    <span className="flex-1 mr-10">20:34</span>
                    <span className="flex-1"></span>
                    <span className="flex-1">
                      <a href="#"></a>
                    </span>
                    <span className="flex-2">
                      <PlayVideoBlack />
                    </span>
                  </div>
                </div>
                <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                  <div className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden text-ellipsis w-32 whitespace-nowrap">
                      4- حد و پیوستگی
                    </span>
                    <span className="flex-1 mr-10">20:34</span>
                    <span className="flex-1"></span>
                    <span className="flex-1">
                      <a href="#"></a>
                    </span>
                    <span className="flex-2">
                      <PlayVideoBlack />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-7">
              <div className="col-span-6 p-10 pt-5 pl-5">
                <video
                  className="rounded-xl shadow-lg"
                  controls
                  width="500"
                  height="500"
                  poster="/img/4th.jpg"
                >
                  <source src="/videos/baseCourses/4th.mp4" type="video/mp4" />
                  مرورگر شما از فرمت ویدیویی پشتیبانی نمی‌کند.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
