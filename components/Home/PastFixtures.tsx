"use client"
import React from 'react'
import Title from '../Title';
import MatchCard from '../MatchCard';

const PastFixtures =  ({ data }: { data: any }) => {


    return (
      <div className=" bg-white to-slate-900 z-50 px-[50px]">
        <div className="flex mt-4">
        <Title text="Previous Matches"/>
        
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
  
export default PastFixtures