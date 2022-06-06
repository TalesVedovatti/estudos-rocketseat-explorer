import Sound from "./sounds.js"

let isPlayingForest = false
let isPlayingRain = false
let isPlayingCoffee = false
let isPlayingCampfire = false

export default function Controls({
    buttonCampfire,
    buttonCoffee,
    buttonForest,
    buttonPlay,
    buttonRain,
    buttonStop
}) {
    function play() {
        buttonPlay.classList.add('selected')
        buttonStop.classList.remove('selected')
    }

    function pause() {
        buttonPlay.classList.remove('selected')
        buttonStop.classList.add('selected')
    }

    function forest() {
        if (!isPlayingForest) {
            buttonForest.classList.add('selected')
            buttonRain.classList.remove('selected')
            buttonCoffee.classList.remove('selected')
            buttonCampfire.classList.remove('selected')
            Sound().playForest()
            isPlayingForest = true
            isPlayingCampfire = false
            isPlayingCoffee = false
            isPlayingRain = false
        }
        else {
            buttonForest.classList.remove('selected')
            Sound().pause()
            isPlayingForest = false
        }
    }

    function rain() {
        if(!isPlayingRain){
            buttonForest.classList.remove('selected')
            buttonRain.classList.add('selected')
            buttonCoffee.classList.remove('selected')
            buttonCampfire.classList.remove('selected')
            Sound().playRain()
            isPlayingRain = true
            isPlayingCampfire = false
            isPlayingCoffee = false
            isPlayingForest = false
        }
        else {
            buttonRain.classList.remove('selected')
            Sound().pause()
            isPlayingRain = false
        }
        
        
    }

    function coffee() {
        if (!isPlayingCoffee) {
            buttonForest.classList.remove('selected')
            buttonRain.classList.remove('selected')
            buttonCoffee.classList.add('selected')
            buttonCampfire.classList.remove('selected')
            Sound().playCoffee()
            isPlayingCoffee = true
            isPlayingCampfire = false
            isPlayingRain = false
            isPlayingForest = false
        }
        else {
            buttonCoffee.classList.remove('selected')
            Sound().pause()
            isPlayingCoffee = false
        }
    }

    function campfire() {
        if (!isPlayingCampfire) {
            buttonForest.classList.remove('selected')
            buttonRain.classList.remove('selected')
            buttonCoffee.classList.remove('selected')
            buttonCampfire.classList.add('selected')
            Sound().playCampfire()
            isPlayingCampfire = true
            isPlayingCoffee = false
            isPlayingRain = false
            isPlayingForest = false
        }
        else {
            buttonCampfire.classList.remove('selected')
            Sound().pause()
            isPlayingCampfire = false
        }
    }

    return {
        play,
        pause,
        forest,
        rain,
        coffee,
        campfire
    }
}