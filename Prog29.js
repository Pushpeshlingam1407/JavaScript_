checkspeed(108);
function checkspeed(speed){
    const sl=70;
    const kmp=5;
    if(speed<sl+kmp){ 
        console.log('ok');
        return;
    }
    const points=Math.floor((speed-sl)/kmp);
    if(points>=12){
        console.log('Liscence suspended')
    }
    else console.log('Points: ',points);
}


