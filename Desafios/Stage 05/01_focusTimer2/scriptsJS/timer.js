let timerTimeout

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    stopControls,
    isPlayingTimer
}) {
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function play() {
        timerTimeout = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
    
            if (isFinished) {
                isPlayingTimer.check = false
                pause()
                updateDisplay()
                stopControls()
                return
            }
            
            if (seconds <= 0){
                seconds = 10
                minutes--
            }
    
            updateDisplay(minutes, (seconds-1))
    
            play();
        }, 1000)
    }

    function pause() {
        clearTimeout(timerTimeout)
    }
    
    function addTime() {
        minutes = minutes + 5
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }
    
    function subTime() {
        minutes = minutes - 5
        if (minutes >= 0) {
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
        }
        else {
            minutes = 0
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
        }
    }

    return {
        updateDisplay,
        play,
        pause,
        addTime,
        subTime
    }
}