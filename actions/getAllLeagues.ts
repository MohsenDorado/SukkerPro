const getAllLeagues = async () => {
  const User= process.env.USER;
  const Token= process.env.TOKEN;


  try {
    let ids:any[]=[];
    const res =
      await fetch(`https://api.soccersapi.com/v2.2/leagues/?user=${User}&token=${Token}&t=list`);
      const data=await res.json();
      console.log("dataof leagueeeeeeeeeeeeeee",data);
      return data;
      

  } catch (error) {
    return [];


  }
};
export default getAllLeagues;