//TODO:forEach loop

const nums=[1,2,3,4,5];
// let nums;
nums?.forEach((x)=>console.log(x));

var res=nums.map((x)=>{
    if(x>3) return(x);

    else return null;
});

var res=nums?.map((x)=>x>3?x:null);
console.log(res);

var res=nums?.filter((x)=>x>3 && x<5);
console.log(res);
