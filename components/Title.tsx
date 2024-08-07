import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center  w-full
     ">
        <div className="bg-green-700 rounded-br-3xl rounded-tl-3xl flex items-center justify-center">

      <p className=" font-Barlow Condensed  flex font-bold text-7xl max-sm:text-2xl max-lg:text-4xl max-md:text-center  tracking-widest p-4 text-black">
        {text}
      </p>
        </div>
    </div>
  );
};

export default Title;