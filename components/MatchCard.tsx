"use cliet";

import Image from "next/image";
import { useEffect, useState } from "react";

const MatchCard = ({
  data,
}: {
  data?:any
}) => {
 
  const [matchData, setMatchData] = useState<any>([]);


  const months = [
    { name: "January", id: "01" },
    { name: "Febuary", id: "02" },
    { name: "March", id: "03" },
    { name: "April", id: "04" },
    { name: "May", id: "05" },
    { name: "June", id: "06" },
    { name: "July", id: "07" },
    { name: "August", id: "08" },
    { name: "September", id: "09" },
    { name: "October", id: "10" },
    { name: "November", id: "11" },
    { name: "December", id: "12" },
  ];
// console.log("this is id",data);

  return (
   
    <div className="">
      {data ? (
        <div className="flex flex-col  rounded-lg bg-black bg-opacity-15 max-sm:w-full my-10 p-4  ">
          <div className={` text-center pb-3 items-center justify-center`}>
            <p className="font-extrabold p-2 tracking-widest">{data.leagueName}</p>
            <div className="flex items-center justify-center gap-1">
              <p>{data.time.date?.substring(8, 10)}</p>
              <p>
                {months.map(
                  (month) => month.id === data.time.date?.substring(5, 7) && month.name
                )}
              </p>
              <p className="">{data.time.date?.substring(0, 4)}</p>
            </div>
            <p className="text-sm font-light">Week {data.week}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-center w-[33%]">
              <Image
                src={data.teams.home.img}
                alt={data.teams.home.name}
                width={100}
                height={100}
                className="w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] "
              />
            </div>
            <div hidden={!!data.scores.home_score} className="text-center">
              <p>{data.time.time?.substring(0, data.time.time.length - 3)}</p>
            </div>
            {data.scores.home_score!=='' && (
              <div
              
              className="flex items-center text-xl justify-between gap-4 lg:text-4xl md:text-2xl">
                <p>{data?.scores?.home_score}</p>
                <p>-</p>
                <p>{data?.scores?.away_score}</p>
              </div>
            )}
            <div className="flex flex-col items-center justify-center w-[33%]">
              <Image
                src={data.teams.away.img}
                alt={data.teams.away.name}
                width={100}
                height={100}
                className="w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] "
              />
            </div>
          </div>
          <div className="flex justify-between ">
            <p className="items-center justify-center flex text-center pt-2 w-[33%]">
              {data.teams.home.name}
            </p>
            <p className="items-center justify-center flex text-center pt-2 w-[33%]">
              {data.teams.away.name}
            </p>
          </div>
        </div>
      ) : (
        <div className="md:grid grid-cols-3 max-md:flex">Loading</div>
      )}
    </div>
  );
};

export default MatchCard;
