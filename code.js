const time = document.getElementById("Time");
const playPauseButton = document.getElementById("play-pause");

let stopwatchInterval;
let runningTime = 0;

const playPause = () =>{
    const isPaused = !playPauseButton.classList.contains("running");
    if(isPaused){
        playPauseButton.classList.add("running");
        start();
    }else{
        playPauseButton.classList.remove(`running`);
        pause();
    }    
} 

const start = () =>{
    let startTime = Date.now() - runningTime;
    stopwatchInterval = setInterval( () =>{
        runningTime = Date.now() - startTime;
        time.innerHTML = calculateTime(runningTime);
    },1000);
}


const pause = () =>{
    clearInterval(stopwatchInterval);
}


const stop = () =>{
    playPauseButton.classList.remove("running");
    runningTime = 0;
    clearInterval(stopwatchInterval);
    time.textContent = `00:00`
}




const calculateTime = runningTime =>{
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const display_second = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");
    return `${display_minutes}:${display_second}`;

}


