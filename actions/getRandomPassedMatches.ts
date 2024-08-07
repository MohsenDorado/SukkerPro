const getRandomPassedMatches = async () => {
    const User= process.env.USER;
    const Token= process.env.TOKEN;


    const date = new Date();

    let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let SomePassed:any=[];
  
  
for (let i = 0; i <10; i++) {
    
    try {
      let res =
        await fetch(`https://api.soccersapi.com/v2.2/fixtures/?user=${User}&token=${Token}&t=schedule&d=${year}-${month}-${day-i}`);
        let data=await res.json();
            if (data.data) {
                // console.log(`data in here is ***********************************${i}`,data.data);
                
                
                SomePassed.push(data.data)
            }
    } catch (error) {
      return [];
  
  
    }
    
}
// console.log("this is after forrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",SomePassed);
return await SomePassed.map((data:any)=>data);
  };
  
  export default getRandomPassedMatches;
