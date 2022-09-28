function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}



var setTimerLoopExecute = 500;
async function execLoop() {
    clearInterval(looping);
    function SetTimeLoopExecute(intervalToExecute) {
        setTimerLoopExecute = intervalToExecute;
        looping = setInterval(execLoop, setTimerLoopExecute);
        // =============== tudo que deve ser executado entra aqui =============== //


        console.log(`Executing again in:  ${millisToMinutesAndSeconds(setTimerLoopExecute)}`)


        // ====================================================================== //
    }
    if (setTimerLoopExecute >= 4000) {
        console.log(`Reseting timer to 1000ms`)
        SetTimeLoopExecute(1000)
    } else {
        SetTimeLoopExecute(setTimerLoopExecute + 1000) // increment Time to loop
    }
}
var looping = setInterval(execLoop, setTimerLoopExecute);
