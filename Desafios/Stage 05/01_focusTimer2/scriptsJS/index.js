import Timer from "./timer.js"
import Controls from "./controls.js"
import {
    buttonPlay,
    buttonStop,
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonCampfire,
    minutesDisplay,
    secondsDisplay
} from "./setup.js"
import Events from "./events.js"

const isPlayingTimer = { check: false
}

const controls = Controls({
    buttonCampfire,
    buttonCoffee,
    buttonForest,
    buttonPlay,
    buttonRain,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    stopControls: controls.pause,
    isPlayingTimer
})

Events({controls, timer, isPlayingTimer})
