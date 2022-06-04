import {
    buttonPause,
    buttonSet,
    buttonPlay,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn
} from "./config.js";

export default function({controls, timer, sound}) {
    buttonPlay.addEventListener('click',function () {
        controls.play();
        timer.countdown();
        sound.pressButton();
    })
    
    buttonPause.addEventListener('click', function () {
        controls.pause();
        timer.pause();
        sound.pressButton();
    })
    
    buttonStop.addEventListener('click',function () {
        controls.reset();
        timer.reset();
        sound.pressButton();
    })
    
    buttonSet.addEventListener('click', function () {
        let newMinutes = controls.getMinutes();
        
        sound.pressButton();
    
        if (!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0);
        timer.updateMinutes(newMinutes);
        
    })
    
    
    buttonSoundOff.addEventListener('click', function () {
        buttonSoundOn.classList.remove('hide');
        buttonSoundOff.classList.add('hide');
        sound.bgAudio.play()
    
    })
    
    buttonSoundOn.addEventListener('click', function () {
        buttonSoundOff.classList.remove('hide');
        buttonSoundOn.classList.add('hide');
        sound.bgAudio.pause()
    
    })
    
    return{

    }
}