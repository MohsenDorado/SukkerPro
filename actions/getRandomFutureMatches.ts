
const getRandomFutureMatches =async () => {
 
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

    const User=(process.env.USER);
    const Token=(process.env.TOKEN)
    let res=await fetch( `https://api.soccersapi.com/v2.2/fixtures/?user=${User}&token=${Token}&t=schedule&d=${year}-${month}-${day+3}`);
    
    let data=await res.json();
    // const fetchAgain=async()=>{
    //     res=await fetch( `https://api.soccersapi.com/v2.2/fixtures/?user=${User}&token=${Token}&t=schedule&d=${year}-${month}-${day+1}`);
    //     data=await res.json();
    //     if(data.meta.count===0){
    //         fetchAgain();
    
    //     }else return data;


    // }
    // if(data.meta.count===0){
    //     fetchAgain();

    // }
    
    let allData=[];
    allData.push(data.data)
    
    
    return allData;
 
}

export default getRandomFutureMatches