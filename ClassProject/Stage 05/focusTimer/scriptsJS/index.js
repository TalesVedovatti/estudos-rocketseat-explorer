import Controls from "./controls.js";
import Timer from "./timer.js";
import {
    buttonPause,
    buttonSet,
    buttonPlay,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./config.js";
import Sound from "./sounds.js";
import events from "./events.js";

const sound = Sound()

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

events({ controls, timer, sound })

