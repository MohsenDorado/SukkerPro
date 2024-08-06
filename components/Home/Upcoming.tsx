"use client";
import { useEffect, useState } from "react";
import MatchCard from "../MatchCard";
import Title from "../Title";

const Upcoming = ({ data }: { data: any }) => {


  return (
    <div className=" bg-white to-slate-900 z-50 px-[50px]">
      <div className="flex mt-4">
      <Title text="Random next fixtures"/>
      
      </div>
      <div className=" max-sm:w-full md:grid md:grid-cols-2 md:gap-10">
        {data &&
          data.map((item: any) => (
            <MatchCard
            key={item.id}
            data={item}

            />
          ))}
     
      </div>
    </div>
  );
};

export default Upcoming;
