import getRandomFutureMatches from "@/actions/getRandomFutureMatches";
import getRandomPassedMatches from "@/actions/getRandomPassedMatches";
import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero";
import PastFixtures from "@/components/Home/PastFixtures";
import Upcoming from "@/components/Home/Upcoming";


export default async function Home() {
  const passedMatches=await getRandomPassedMatches(); 
  
  const allData= await getRandomFutureMatches();
  let alldata;
  allData.map((data)=>{
    alldata=data;

  })
  
console.log("these are are passedddddddddddddddddddddddddddddddddddddddd",passedMatches);
let passedmatchesdata;
passedMatches.map((data:any)=>{
  passedmatchesdata=data;
})


  return (
    <div className="flex flex-col w-full">
      
      
      <div className="flex flex-col w-full">

        <Header/>
        <Hero/>
        <Upcoming data={alldata}/>
        <PastFixtures data={passedmatchesdata}/>
        
        </div>
      

    </div>
  );
}
