const minutesEl = document.querySelector("#minutes")
const segundsEl = document.querySelector("#segunds")
const millisegunsEl = document.querySelector("#millisegunds")
const startBtn= document.querySelector("#startBtn")
const pauserBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let minutes = 0;
let segunds = 0;
let millisegunds = 0;
let isPaused = false;
startBtn.addEventListener("click",starTimer)
pauserBtn.addEventListener("click",pauserTime)
resumeBtn.addEventListener("click",resumeTime)
resetBtn.addEventListener("click",resetTime)

function starTimer(){
    interval = setInterval(()=>{
        if(!isPaused){
            millisegunds+=10;
            if(millisegunds=== 1000){
                segunds++;
                millisegunds = 0;
               
            }
            if(segunds===60){
            minutes++;
            segunds = 0;
            }
            minutesEl.textContent = formatTime( minutes);
            segundsEl.textContent =formatTime( segunds) ;
            millisegunsEl.textContent =formatMillisegunds(millisegunds);
            startBtn.style.display = "none"
            pauserBtn.style.display = "block"
        }

    },10);

}
function pauserTime(){
    isPaused = true;
    pauserBtn.style.display = "none";
    resumeBtn.style.display = "block"
}
function resumeTime(){
    isPaused = false;
    pauserBtn.style.display = "block";
    resumeBtn.style.display = "none"

}
function resetTime(){
    clearInterval(interval)
    minutes = 0;
    segunds = 0;
    millisegunds = 0;

    startBtn.style.display ="block";
    pauserBtn.style.display = "none";
    resumeBtn.style.display = "none";
    
    millisegunsEl.textContent ="000"
    segundsEl.textContent ="00"
    minutesEl.textContent ="00"
    isPaused = false
}
function formatTime(time){
    return time < 10 ?`0${time}` : time;
}
function formatMillisegunds(time){
    return time < 100 ? `${time}`.padStart(3,"0"): time;
}