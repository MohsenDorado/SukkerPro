"use cliet";

import Image from "next/image";
import VS from "@/public/Versus-VS-sports-fight-battle-logo-icon-Graphics-5159150-1.jpg";
import { useEffect, useState } from "react";

const MatchCard = ({
  teams,
  time,
  leagueName,
  isLoading,
  country,
  leagueFlag,
  date,
  week,
  id,
}: {
  teams?: any;
  time?: string;
  leagueName?: string;
  country?: string;
  isLoading: boolean;
  leagueFlag?: string;
  date?: string;
  week?: string;
  id?: string;
}) => {
  const [matchData, setMatchData] = useState<any>([]);
  const possibleScores = async () => {
    if (id) {
      try {
        const res = await fetch(
          `https://api.soccersapi.com/v2.2/fixtures/?user=donmohsendev&token=f69af267b44ff149c3b86be9675d3453&t=info&id=${id}`
        );
        const data = await res.json();
        setMatchData(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    possibleScores();
  }, []);
  console.log("this is match dataaaaaaaaaaaaaaaaaaaaaa", matchData);

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
  console.log("datarecieved!!!", teams);

  return (
    <div className="z-50">
      {teams ? (
        <div className="flex flex-col  rounded-lg bg-black bg-opacity-15 max-sm:w-full my-10 p-4  ">
          <div className={` text-center pb-3 items-center justify-center`}>
            <p className="font-extrabold p-2 tracking-widest">{leagueName}</p>
            <div className="flex items-center justify-center gap-1">
              <p>{date?.substring(8, 10)}</p>
              <p>
                {months.map(
                  (month) => month.id === date?.substring(5, 7) && month.name
                )}
              </p>
              <p className="">{date?.substring(0, 4)}</p>
            </div>
            <p className="text-sm font-light">Week {week}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-center w-[33%]">
              <Image
                src={teams.home.img}
                alt={teams.home.name}
                width={100}
                height={100}
                className="w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] "
              />
            </div>
            <div hidden={!!matchData} className="text-center">
              <p>{time?.substring(0, time.length - 3)}</p>
            </div>
            {matchData && (
              <div className="flex items-center text-xl justify-between gap-4 lg:text-4xl md:text-2xl">
                <p>{matchData?.scores?.home_score}</p>
                <p>-</p>
                <p>{matchData?.scores?.away_score}</p>
              </div>
            )}
            <div className="flex flex-col items-center justify-center w-[33%]">
              <Image
                src={teams.away.img}
                alt={teams.away.name}
                width={100}
                height={100}
                className="w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] "
              />
            </div>
          </div>
          <div className="flex justify-between ">
            <p className="items-center justify-center flex text-center pt-2 w-[33%]">
              {teams.home.name}
            </p>
            <p className="items-center justify-center flex text-center pt-2 w-[33%]">
              {teams.away.name}
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
