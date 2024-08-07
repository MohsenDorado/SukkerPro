import getAllLeagues from '@/actions/getAllLeagues'
import LeagueBanner from '@/components/LeagueBanner';
import Title from '@/components/Title'

const fixturesPage = async() => {
    const allLeagues=await getAllLeagues();
    console.log("ids:::::::",allLeagues);
   
  
return (
    <div className='md:mt-[100px] mt-5'>
      <Title text='All fixtures '/>
      {
        allLeagues.map((league:any)=>(
          <LeagueBanner key={league.id} league={league}/>

        ))
      }
     

      

    </div>
  )
}

export default fixturesPage