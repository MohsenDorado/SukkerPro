
const getRandomPassedMatches =async () => {

    const User=(process.env.USER);
    const Token=(process.env.TOKEN)
    const res=await fetch( `https://api.soccersapi.com/v2.2/fixtures/?user=${User}&token=${Token}&t=schedule&d=2023-06-04`);
    const data=await res.json();
    const allData=data.data;
    
    return allData;
 
}

export default getRandomPassedMatches