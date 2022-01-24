//time
var everyday = new Date();
var hrs = everyday.getHours();
if(hrs<10){
    hrs=`0${hrs}`;
}
var min = everyday.getMinutes();
if(min<10){
    min=`0${min}`;
}
var time = hrs + " : " + min;
document.getElementById('firsttime').innerHTML = time;

var msec=0, sec=0, min=0, d=0, e=0, z=0;
var check=true;
var clear=0;
var stopwatch=document.getElementById('display');
stopwatch.innerHTML='00:00:00';
function starts(){
    msec=addZeroMsec(msec+1);
    if(msec>99){
        sec=addZeroSec(sec+1);
        msec=addZeroMsec(0);
    }
    if(sec>59){
        sec=addZeroSec(0);
        msec=addZeroMsec(0);
        min=addZeroMin(min+1);
    }
    stopwatch.innerHTML=''+z+min+':'+e+sec+':'+d+msec;
}

function start(){
    if(check===true){
        check=false;
        clear=setInterval(starts,10);
    }
}

function stop(){
    check=true;
    clearInterval(clear);
}

function reset(){
    msec=0;
    sec=0;
    min=0;
    check=true;
    clearInterval(clear);
    stopwatch.innerHTML='00:00:00';
}

function addZeroMsec(time){
    var length= time.toString().length;
    if(length<2){
        d=0;
    }
    else{
        d='';
    }
    return time;
}

function addZeroSec(time){
    var length=time.toString().length;
    if(length<2){
        e=0;
    }
    else{
        e='';
    }
    return time;
}

function addZeroMin(time){
    var length=time.toString().length;
    if(length<2){
        z=0;
    }
    else{
        z='';
    }
    return time;
}