
function Home() {
  return (
    <div className="flex h-screen">
      <div className="bg-slate-500 w-11/12 h-full mx-auto justify-center mt-10 rounded-2xl bg-[#ffffc0] shadow-2xl">
          <div className="bg-[#cc00ff] h-8 rounded-t-2xl flex" dir="ltr">
            <a href="#" className="bg-[#fff500] ml-10 my-auto items-center text-xs font-bold p-1 pr-2 pl-2 rounded-lg">ورود-ثبت نام</a>
          </div>
          <div className="bg-[#EDA4FF] w-full h-20">
            <div className="flex gap-12 grid-cols-12 w-full mt-0 mx-auto justify-center">
              <div className="col-span-4 flex gap-20 p-6 pr-20">
                <div><a href="#">صفحه اصلی</a></div>
                <div><a href="#">دوره ها</a></div>
                <div><a href="#">گالری عکس</a></div>
              </div>
              <div className="col-span-4 my-auto mt-0 mx-auto justify-center pt-1">
                <a href="/"><img src="/img/neuron+.png" className="w-20" alt="" /></a>
              </div>
              <div className="col-span-4 flex gap-20 p-6 pl-20">
                <div><a href="#">مشاوره رایگان</a></div>
                <div><a href="#">درباره ما</a></div>
                <div><a href="#">تماس با ما</a></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}


export default Home;