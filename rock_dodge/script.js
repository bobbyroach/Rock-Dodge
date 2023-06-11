import { hideRocks, isRockNearBottom, getScore, resetScore, startWithRocks, 
        increaseDifficulty } from './rocks.js'


const stickmanElem = document.querySelector('[data-stickman]')
const grid = document.getElementById("grid")
const rockElems = document.querySelectorAll('[data-rock]')
const startScreenElem = document.querySelector('[data-start-screen]')
const loseMessageElem = document.querySelector('[data-lose-message]')
loseMessageElem.style.display = 'none'
const scoreElem = document.querySelector('[data-score]')

let interval
let isMoving = false
let counter
let isLost = false
let ROCKNUM = 10
let MAXROCKNUM = 18





/* creates grid */
for (let i = 0; i < 9; i++) {
    for (let x = 0; x < 9; x++) {
        var item = document.createElement("div")
        item.setAttribute("grid-column", x + " / span 1")
        item.setAttribute("grid-row", i + " / span 1")
        item.setAttribute("id", "grid-item")
        grid.appendChild(item)
    }
}



window.addEventListener("keydown", handleStart, { once: true })

/**
 * Handles the start of the game.
 */
function handleStart() {
    document.addEventListener("keydown", keyPressed)

    startWithRocks(ROCKNUM)
    stickmanElem.style.top = 325
    stickmanElem.style.left = 335
    inGame()
    
    isLost = false
    isMoving = false
    counter = 0
    startScreenElem.style.display = 'none'
    loseMessageElem.style.display = 'none'
    checkLose()
}



/* Handles functions for mid-game */
function inGame() {
    let levelOne = false
    let levelTwo = false
    let levelThree = false 
    let levelFour = false
    
    var activeGameInterval = setInterval(() => {
        
        if (gameOver()) {
            clearInterval(activeGameInterval)
        }

        if (getScore() == 100) {
            if (!(levelOne)) {
                levelOne = true
                setTimeout(function() {
                    increaseDifficulty()
                }, 10)
            }
        }

        if (getScore() == 256) {
            if (!(levelTwo)) {
                levelTwo = true 
                setTimeout(function() {
                    increaseDifficulty()
                }, 10)
            }
        }

        if (getScore() == 508) {
            if (!(levelThree)) {
                levelThree = true 
                setTimeout(function() {
                    increaseDifficulty()
                }, 10)
            }
        }

        if (getScore() == 812) {
            if (!(levelFour)) {
                levelFour = true 
                setTimeout(function() {
                    increaseDifficulty()
                }, 10)
            }
        }
        
    }, 10)

}










/**
 * Given a string representing a direction, moves the player in that direction 
 * by one tile, not allowing another move until the first is completed.
 * 
 * @param { String } dir 
 */
function move(dir) {
    
    isMoving = true
    var left = parseInt(window.getComputedStyle(stickman).getPropertyValue("left"))
    var top = parseInt(window.getComputedStyle(stickman).getPropertyValue("top"))
    
    if (dir == 'left') {
        stickman.style.left = left - 2 + "px"
    } else if (dir == 'right') {
        stickman.style.left = left + 2 + "px"
    } else if (dir == 'up') {
        stickman.style.top = top - 2 + "px"
    } else if (dir == 'down') {
        stickman.style.top = top + 2 + "px"
    } 

    counter += 2
    if (top <= 5 && dir == 'up') {
        stickman.style.top = 5 + "px"
    } if (top >= 645 && dir == 'down') {
        stickman.style.top = 645 + "px"
    } if (left >= 655 && dir == 'right'){
        stickman.style.left = 655 + "px"
    } if (left <= 15 && dir == 'left'){
        stickman.style.left = 15 + "px"
    }

    if (counter == 80) {
        clearInterval(interval)
        isMoving = false
        counter = 0
    }
}

/**
 * Handles the keys typed to move the character.
 * 
 * @param { Event } event 
 * @returns String 
 */
function keyPressed(event) {
    if (isMoving) return
    
        if (event.key == "ArrowLeft" || event.key == "a"){
            interval = setInterval(() => {
                move('left')
            }, 1)
        }
        else if (event.key == "ArrowRight" || event.key == "d"){
            interval = setInterval(() => {
                move('right')
            }, 1)
        }
        else if (event.key == "ArrowUp" || event.key == "w"){
            interval = setInterval(() => {
                move('up')
            }, 1)
        }
        else if (event.key == "ArrowDown" || event.key == "s"){
            interval = setInterval(() => {
                move('down')
            }, 1)
        }
}












/**
 * Constantly checks if player is in contact with a rock that's near its intended
 * tile.
 */
function checkLose() {
    let rectArr = []

    setInterval(() => {
        const stickmanRect = stickmanElem.getBoundingClientRect()

        for (let i = 0; i < MAXROCKNUM; i++) {
            rectArr[i] = rockElems[i].getBoundingClientRect()
        }
        for (let k = 0; k < MAXROCKNUM; k++) {
            if (isCollision(rectArr[k], stickmanRect) && isRockNearBottom(k)) {
                handleLose()
            }
        }
    }, 1)
}
  
function isCollision(rect1, rect2) {
    return rect1.left < rect2.right && rect1.top < rect2.bottom &&
        rect1.right > rect2.left && rect1.bottom > rect2.top
}




/**
 * Handles the state of the game when the player has lost.
 */
function handleLose() {
    document.removeEventListener('keydown', keyPressed)
    hideRocks()
    isMoving = true
    stickmanElem.style.top = 325
    stickmanElem.style.left = 335
    
    /* Displays the final score */
    scoreElem.style.fontSize = 50
    scoreElem.style.top = 155
    scoreElem.style.left = 250

    isLost = true
    loseMessageElem.style.display = null

    /* Prevents player from moving when game is ended */
    var counter = 0
    var xx = setInterval(() => {
        stickmanElem.style.top = 325
        stickmanElem.style.left = 335
        counter += 1
        if (counter >= 400) {
            clearInterval(xx)
        }
    }, 5)

    setTimeout(() => {
        startScreenElem.style.display = null
        loseMessageElem.style.display = 'none'
        resetScore()
        document.addEventListener('keydown', handleStart, { once: true })
    }, 1500)
}






function scoreTracker() {
    return getScore()
}

export function gameOver() {
    return isLost
}

// Constantly updates the score of the game
setInterval(() => {
    document.getElementById('score').innerHTML = 'score: ' + scoreTracker()
}, 10)

export function maxRockNum() {
    return MAXROCKNUM
}
