const timer=document.getElementById("timer");
let hold=null;
let [hours,minutes,seconds]=[0,0,0];
function startTimer(){
    seconds++;
    if(seconds==60){
        minutes++;
        seconds=0;
        if(minutes==60){
            hours++;
            minutes=0;
        }
    }
    let h=(hours<10)?"0"+hours:hours
    let m=(minutes<10)?"0"+minutes:minutes;
    let s=(seconds<10)?"0"+seconds:seconds;
    timer.innerHTML= h+":"+m+":"+s;
}
function eventStart(){
    if(hold!==null){
        clearInterval(hold);
    }
    hold=setInterval(startTimer ,1000);

}
function pauseTimer(){
   clearInterval(hold);
}
function eventReset(){
    clearInterval(hold);
    [hours,minutes,seconds]=[0,0,0];
    timer.innerHTML="00:00:00"
}