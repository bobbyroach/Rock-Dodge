import { increaseSpeed } from './script.js'

const rockElems = document.querySelectorAll('[data-rock]')
const shadowElems = document.querySelectorAll('[data-shadow]')
const scoreElem = document.querySelector('[data-score]')


let ROCK_COUNT = 0
let SPEED = 3


let x, x2, x3, x4, x5, x6, x7, x8, x9, x10
let y, y2, y3, y4, y5, y6, y7, y8, y9, y10

let interval1, interval2, interval3, interval4, interval5, interval6, 
    interval7, interval8, interval9, interval10

let rockNearBottom1 = false
let rockNearBottom2 = false
let rockNearBottom3 = false
let rockNearBottom4 = false
let rockNearBottom5 = false
let rockNearBottom6 = false
let rockNearBottom7 = false
let rockNearBottom8 = false
let rockNearBottom9 = false
let rockNearBottom10 = false


function updateSpeed() {
    setInterval(() => {
        SPEED = increaseSpeed()

    }, 1)
}


export function setupRocks() {
    handleRock1(rockElems[0])
    handleRock2(rockElems[1])
    handleRock3(rockElems[2])
    handleRock4(rockElems[3])
    handleRock5(rockElems[4])
    handleRock6(rockElems[5])
    
    setTimeout(() => {
        handleRock7(rockElems[6])
    }, 15000)
    setTimeout(() => {
        handleRock8(rockElems[7])
    }, 30000)
    setTimeout(() => {
        handleRock9(rockElems[8])
    }, 45000)
    setTimeout(() => {
        handleRock10(rockElems[9])
    }, 60000)

    updateSpeed()
}

 

function handleRock1(rock) {
    x = num()
    y = num()
    rockElems[0].style.left = (x * 80) + 10 + "px"
    rockElems[0].style.top = (y * 80) - 990 + "px"
    createShadow(shadowElems[0], x, y)
    var top1 = parseInt(window.getComputedStyle(document.getElementById('rock1')).getPropertyValue("top"))
    
    interval1 = setInterval( () => {
        var top1 = parseInt(window.getComputedStyle(document.getElementById('rock1')).getPropertyValue("top"))
        rockElems[0].style.top = top1 + SPEED + "px"

        if (top1 >= y * 80 + 15)
            restartRock1()

        if (top1 >= y * 80 - 5)
            rockNearBottom1 = true
        else
            rockNearBottom1 = false
        
        , 1
    })

    function restartRock1() {
        x = num()
        y = num()
        rockElems[0].style.left = (x * 80) + 10 + "px"
        rockElems[0].style.top = (y * 80) - 990 + "px"
        createShadow(shadowElems[0], x, y)
        ROCK_COUNT++
    }

}
    
function handleRock2(rock) {
    x2 = num()
    y2 = num()

    rockElems[1].style.left = (x2 * 80) + 10 + "px"
    rockElems[1].style.top = (y2 * 80) - 990 + "px"
    createShadow(shadowElems[1], x2, y2)
    interval2 = setInterval( () => {
        var top2 = parseInt(window.getComputedStyle(document.getElementById('rock2')).getPropertyValue("top"))
        rockElems[1].style.top = top2 + SPEED + "px"

        if (top2 >= y2 * 80 + 15)
            restartRock2()
        
        if (top2 >= y2 * 80 - 5)
            rockNearBottom2 = true
        else
            rockNearBottom2 = false
        , 1
    })

    function restartRock2() {
        x2 = num()
        y2 = num()
        rockElems[1].style.left = (x2 * 80) + 10 + "px"
        rockElems[1].style.top = (y2 * 80) - 990 + "px"
        createShadow(shadowElems[1], x2, y2)
        ROCK_COUNT++
    }
}

function handleRock3(rock) {
    x3 = num()
    y3 = num()
    rockElems[2].style.left = (x3 * 80) + 10 + "px"
    rockElems[2].style.top = (y3 * 80) - 990 + "px"
    createShadow(shadowElems[2], x3, y3)
    interval3 = setInterval( () => {
        var top3 = parseInt(window.getComputedStyle(document.getElementById('rock3')).getPropertyValue("top"))
        rockElems[2].style.top = top3 + SPEED + "px"
        if (top3 >= y3 * 80 + 15)
            restartRock3()
        if (top3 >= y3 * 80 - 5)
            rockNearBottom3 = true
        else
            rockNearBottom3 = false
        , 1
    })

    function restartRock3() {
        x3 = num()
        y3 = num()
        rockElems[2].style.left = (x3 * 80) + 10 + "px"
        rockElems[2].style.top = (y3 * 80) - 990 + "px"
        createShadow(shadowElems[2], x3, y3)
        ROCK_COUNT++
    }
}

function handleRock4(rock) {
    x4 = num()
    y4 = num()
    rockElems[3].style.left = (x4 * 80) + 10 + "px"
    rockElems[3].style.top = (y4 * 80) - 990 + "px"
    createShadow(shadowElems[3], x4, y4)
    interval4 = setInterval( () => {
        var top4 = parseInt(window.getComputedStyle(document.getElementById('rock4')).getPropertyValue("top"))
        rockElems[3].style.top = top4 + SPEED + "px"
        if (top4 >= y4 * 80 + 15)
            restartRock4()
        if (top4 >= y4 * 80 - 5)
            rockNearBottom4 = true
        else
            rockNearBottom4 = false
        , 1
    })

    
    function restartRock4() {
        x4 = num()
        y4 = num()
        rockElems[3].style.left = (x4 * 80) + 10 + "px"
        rockElems[3].style.top = (y4 * 80) - 990 + "px"
        createShadow(shadowElems[3], x4, y4)
        ROCK_COUNT++
    }
}

function handleRock5(rock) {
    x5 = num()
    y5 = num()
    rockElems[4].style.left = (x5 * 80) + 10 + "px"
    rockElems[4].style.top = (y5 * 80) - 990 + "px"
    createShadow(shadowElems[4], x5, y5)
    interval5 = setInterval( () => {
        var top5 = parseInt(window.getComputedStyle(document.getElementById('rock5')).getPropertyValue("top"))
        rockElems[4].style.top = top5 + SPEED + "px"
        if (top5 >= y5 * 80 + 15)
            restartRock5()
        if (top5 >= y5 * 80 - 5)
            rockNearBottom5 = true
        else
            rockNearBottom5 = false
        , 1
    })
    function restartRock5() {
        x5 = num()
        y5 = num()
        rockElems[4].style.left = (x5 * 80) + 10 + "px"
        rockElems[4].style.top = (y5 * 80) - 990 + "px"
        createShadow(shadowElems[4], x5, y5)
        ROCK_COUNT++
    }
}

function handleRock6(rock) {
    x6 = num()
    y6 = num()
    rockElems[5].style.left = (x6 * 80) + 10 + "px"
    rockElems[5].style.top = (y6 * 80) - 990 + "px"
    createShadow(shadowElems[5], x6, y6)
    interval6 = setInterval( () => {
        var top6 = parseInt(window.getComputedStyle(document.getElementById('rock6')).getPropertyValue("top"))
        rockElems[5].style.top = top6 + SPEED + "px"
        if (top6 >= y6 * 80 + 15)
            restartRock6()
        if (top6 >= y6 * 80 - 5)
            rockNearBottom6 = true
        else
            rockNearBottom6 = false
        , 1
    })

    function restartRock6() {
        x6 = num()
        y6 = num()
        rockElems[5].style.left = (x6 * 80) + 10 + "px"
        rockElems[5].style.top = (y6 * 80) - 990 + "px"
        createShadow(shadowElems[5], x6, y6)
        ROCK_COUNT++
    }
}

function handleRock7(rock) {
    x7 = num()
    y7 = num()
    rockElems[6].style.left = (x7 * 80) + 10 + "px"
    rockElems[6].style.top = (y7 * 80) - 990 + "px"
    createShadow(shadowElems[6], x7, y7)
    interval7 = setInterval( () => {
        var top7 = parseInt(window.getComputedStyle(document.getElementById('rock7')).getPropertyValue("top"))
        rockElems[6].style.top = top7 + SPEED + "px"
        if (top7 >= y7 * 80 + 15)
            restartRock7()
        if (top7 >= y7 * 80 - 5)
            rockNearBottom7 = true
        else
            rockNearBottom7 = false
        , 1
    })

    function restartRock7() {
        x7 = num()
        y7 = num()
        rockElems[6].style.left = (x7 * 80) + 10 + "px"
        rockElems[6].style.top = (y7 * 80) - 990 + "px"
        createShadow(shadowElems[6], x7, y7)
        ROCK_COUNT++
    }
}

function handleRock8(rock) {
    x8 = num()
    y8 = num()
    rockElems[7].style.left = (x8 * 80) + 10 + "px"
    rockElems[7].style.top = (y8 * 80) - 990 + "px"
    createShadow(shadowElems[7], x8, y8)
    interval8 = setInterval( () => {
        var top8 = parseInt(window.getComputedStyle(document.getElementById('rock8')).getPropertyValue("top"))
        rockElems[7].style.top = top8 + SPEED + "px"
        if (top8 >= y8 * 80 + 15)
            restartRock8()
        if (top8 >= y8 * 80 - 5)
            rockNearBottom8 = true
        else
            rockNearBottom8 = false
        , 1
    })
   
    function restartRock8() {
        x8 = num()
        y8 = num()
        rockElems[7].style.left = (x8 * 80) + 10 + "px"
        rockElems[7].style.top = (y8 * 80) - 990 + "px"
        createShadow(shadowElems[7], x8, y8)
        ROCK_COUNT++
    }
}

function handleRock9(rock) {
    x9 = num()
    y9 = num()
    rockElems[8].style.left = (x9 * 80) + 10 + "px"
    rockElems[8].style.top = (y9 * 80) - 990 + "px"
    createShadow(shadowElems[8], x9, y9)
    interval9 = setInterval( () => {
        var top9 = parseInt(window.getComputedStyle(document.getElementById('rock9')).getPropertyValue("top"))
        rockElems[8].style.top = top9 + SPEED + "px"
        if (top9 >= y9 * 80 + 15)
            restartRock9()
        if (top9 >= y9 * 80 - 5)
            rockNearBottom9 = true
        else
            rockNearBottom9 = false
        , 1
    })

    function restartRock9() {
        x9 = num()
        y9 = num()
        rockElems[8].style.left = (x9 * 80) + 10 + "px"
        rockElems[8].style.top = (y9 * 80) - 990 + "px"
        createShadow(shadowElems[8], x9, y9)
        ROCK_COUNT++
    }
}

function handleRock10(rock) {
    x10 = num()
    y10 = num()
    rockElems[9].style.left = (x10 * 80) + 10 + "px"
    rockElems[9].style.top = (y10 * 80) - 990 + "px"
    createShadow(shadowElems[9], x10, y10)
    interval10 = setInterval( () => {
        var top10 = parseInt(window.getComputedStyle(document.getElementById('rock10')).getPropertyValue("top"))
        rockElems[9].style.top = top10 + SPEED + "px"
        if (top10 >= y10 * 80 + 15)
            restartRock9()
        if (top10 >= y10 * 80 - 5)
            rockNearBottom10 = true
        else
            rockNearBottom10 = false
        , 1
    })

    function restartRock9() {
        x10 = num()
        y10 = num()
        rockElems[9].style.left = (x10 * 80) + 10 + "px"
        rockElems[9].style.top = (y10 * 80) - 990 + "px"
        createShadow(shadowElems[9], x10, y10)
        ROCK_COUNT++
    }
}

function createShadow (shadow, x, y) {
    shadow.style.left = (x * 80) + 10
    shadow.style.top = (y * 80) + 10
}

export function getScore() {
    return ROCK_COUNT
}


export function isRockNearBottom1() {
    return rockNearBottom1
}
export function isRockNearBottom2() {
    return rockNearBottom2
}
export function isRockNearBottom3() {
    return rockNearBottom3
}
export function isRockNearBottom4() {
    return rockNearBottom4
}
export function isRockNearBottom5() {
    return rockNearBottom5
}
export function isRockNearBottom6() {
    return rockNearBottom6
}
export function isRockNearBottom7() {
    return rockNearBottom7
}
export function isRockNearBottom8() {
    return rockNearBottom8
}
export function isRockNearBottom9() {
    return rockNearBottom9
}
export function isRockNearBottom10() {
    return rockNearBottom10
}





function num() {
    return Math.floor(Math.random() * 9)
}



export function hideRocks() {
    rockElems.forEach((rock) => {
        rock.style.top = -1000
    })
    shadowElems.forEach((shadow) => {
        shadow.style.top = -1000
    })
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)
    clearInterval(interval4)
    clearInterval(interval5)
    clearInterval(interval6)
    clearInterval(interval7)
    clearInterval(interval8)
    clearInterval(interval9)
    clearInterval(interval10)


}

export function resetScore() {
    ROCK_COUNT = 0
    scoreElem.style.top = -63
    scoreElem.style.fontSize = 30
    scoreElem.style.left = 0
}