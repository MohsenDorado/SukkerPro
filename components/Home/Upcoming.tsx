"use client";
import { useEffect, useState } from "react";
import MatchCard from "../MatchCard";

const Upcoming = ({ data }: { data: any }) => {
  console.log("datarecieved inside of upcoming.tsx!!!", data);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
  if (data) {
    setLoading(false)
    
  }
  }, [data])
  

  return (
    <div className=" bg-gradient-to-bl from-slate-900 via-sky-900 to-slate-900 z-50">
      <div className=" max-sm:w-full px-[50px] md:grid md:grid-cols-2 md:gap-10">
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
