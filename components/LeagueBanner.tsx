"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const LeagueBanner = ({league}:{league:any}) => {
  
  const date = new Date();

  let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

  const [isloading, setIsloading] = useState(false)
  let nextMatches:any=[];
  const url:string=`${league.id}-${league.name}`

  const string=url.split('-')[0]
  const fetchLeagueMatches=async()=>{


    for (let i = 0; i <=3; i++) {
      try {
        const res=await fetch(`https://api.soccersapi.com/v2.2/fixtures/?user=mohsendorado&token=e0d9c95ce073bdffdcab177e6e78044e&t=schedule&d=${year}-${month}-${day+i}&league_id=${league.id}`)
        const data=await res.json()
        console.log("current data inside for",data);
        if (data.data) {
          
         await nextMatches.push(data.data);
        }
  
        
      } catch (error) {
        console.log(error);
        
        
      }
      
    }
  }
  console.log(string);
    useEffect(() => {
      fetchLeagueMatches();
      
    }, [])
    

    console.log("these are matches",nextMatches);
    return (
    <div className='flex items-center justify-center flex-col'>
      
    <Link
    href={`/fixtures/${url}`}
    className='flex flex-col items-center justify-center w-full border-2 rounded-full px-6 py-2 my-5 hover:bg-green-100 transition-all duration-300 font-bold '>
      <div 
      >

        {league.name}
      </div>
      <p className='font-light text-sm'>
        {league.country_name}
      </p>

    </Link>
    <div>
      {/* <LittleMatchCard data={} Isloading={} /> */}
    </div>

      </div>
  )
}

export default LeagueBanner