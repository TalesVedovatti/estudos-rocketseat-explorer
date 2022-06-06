    const forest = new Audio('./scriptsJS/music/Floresta.wav')
    const rain = new Audio('./scriptsJS/music/Chuva.wav')
    const coffee = new Audio('./scriptsJS/music/Cafeteria.wav')
    const campfire = new Audio('./scriptsJS/music/Lareira.wav')

export default function Sound() {
    forest.loop = true
    rain.loop = true
    coffee.loop = true
    campfire.loop = true


    function pause() {
        forest.pause()
        rain.pause()
        coffee.pause()
        campfire.pause()
    }

    function playForest() {
        if(forest.paused) {
            forest.play()
            rain.pause()
            coffee.pause()
            campfire.pause()
        }
    }

    function playRain() {
        if(rain.paused) {
            forest.pause()
            rain.play()
            coffee.pause()
            campfire.pause()
            
        }
    }

    function playCoffee() {
        if(coffee.paused) {
            forest.pause()
            rain.pause()
            coffee.play()
            campfire.pause()
        }
    }
    
    function playCampfire() {
        if(campfire.paused) {
            forest.pause()
            rain.pause()
            coffee.pause()
            campfire.play()
        }
    }

    return {
        playForest,
        playRain,
        playCoffee,
        playCampfire,
        pause
    }
}