import React from "react";
import RoleAddForm from "./roleAddForm";

const Roles = () => {
  return (
    <>
      <div className="w-full pt-5 pb-10">
        <div className="w-full h-[90%] ">
          <div className="w-full h-12 bg-gradient-to-r  from-blue-300 to-blue-600 rounded-t-2xl p-2 pr-4 text-white diodfont-semibold text-ld">
            نقش ها
          </div>
          <RoleAddForm/>
        </div>
      </div>
    </>
  );
};

export default Roles;
