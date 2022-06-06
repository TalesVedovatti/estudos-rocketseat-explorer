import {
    buttonPlay,
    buttonStop,
    buttonAdd,
    buttonSub,
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonCampfire,
} from "./setup.js"


export default function Events({controls, timer, isPlayingTimer}) {

    buttonPlay.addEventListener('click', function () {
        if (!isPlayingTimer.check) {
            controls.play()
            timer.play()
            isPlayingTimer.check = true
        }
        
    })

    buttonStop.addEventListener('click', function () {
        if (isPlayingTimer.check) {
            controls.pause()
            timer.pause()
            isPlayingTimer.check = false
        }
        
    })
    buttonAdd.addEventListener('click', function () {
        timer.addTime()
    })
    buttonSub.addEventListener('click', function () {
        timer.subTime()
    })
    buttonForest.addEventListener('click', function () {
        controls.forest()
    })
    buttonRain.addEventListener('click', function () {
        controls.rain()
    })
    buttonCoffee.addEventListener('click', function () {
        controls.coffee()
    })
    buttonCampfire.addEventListener('click', function () {
        controls.campfire()
    })
}