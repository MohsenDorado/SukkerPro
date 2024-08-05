"use client";
import React, { useEffect, useState } from "react";
import MatchCard from "../MatchCard";

const Upcoming = () => {
  const [allData, setAllData] = useState<any>([]);
  const [loading, setLoading] = useState(false)
  const findAFeature = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        "https://api.soccersapi.com/v2.2/fixtures/?user=donmohsendev&token=f69af267b44ff149c3b86be9675d3453&t=schedule&d=2023-06-04"
      );
      const data: any = await res.json();
      console.log("datafirst====", data);

      if (data) {
        setAllData(data.data);
      } 
    } catch (error) {
      return error;
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    findAFeature();
  }, []);

  console.log("datarecieved!!!", allData);

  const [feature, setFeature] = useState<any>([]);
  useEffect(() => {
    if (allData) {
      setFeature(allData);
    }
  }, [allData]);

  console.log("feature=====", feature);

  return (
    <div className=" bg-gradient-to-bl from-slate-900 via-sky-900 to-slate-900 z-50">

        <div className=" max-sm:w-full px-[50px] md:grid md:grid-cols-2 md:gap-10">
          {feature&&feature.map((item:any)=>(
            <MatchCard id={item.id} week={item.week} leagueFlag={item.league.country_flag} key={item.id} teams={item.teams} time={item.time.time} date={item.time.date} leagueName={item.league.name} country={item.league.country_id} isLoading={false} ></MatchCard>
          ))
          
          
          
          
        }
        <div>{loading&&<MatchCard isLoading={true}/>}</div>
        <div>{loading&&<MatchCard isLoading={true}/>}</div>
        <div>{loading&&<MatchCard isLoading={true}/>}</div>

        </div>
        </div>

      
  );
};

export default Upcoming;
