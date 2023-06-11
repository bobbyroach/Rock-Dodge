import { gameOver, maxRockNum } from './script.js'

const rockElems = document.querySelectorAll('[data-rock]')
const shadowElems = document.querySelectorAll('[data-shadow]')
const scoreElem = document.querySelector('[data-score]')

let SCORE = 0
let SPEED = 3

let nearBottomArray = []
let doneFallingArray = []
let x_arr = []
let y_arr = []

let DIFFICULTY = 10






/**
 * Specifies how many rocks to start the game with.
 * 
 * @param { int } rocks
 */
export function startWithRocks(rocks) {
    DIFFICULTY = rocks
    initRocks()
}


/**
 * Adds two more rocks and resets them to start falling again.
 */
export function increaseDifficulty() {
    DIFFICULTY += 2
    SPEED += 0.3
}






/**
 * Initializes the nearBottom and doneFalling arrays and calls the 
 * moveRock function for every rock from 1 to the DIFFICULTY constant.
 */
function initRocks() {
    x_arr = []
    y_arr = [] 

    for (let i = 0; i < maxRockNum(); i++) {
        nearBottomArray[i] = false
        doneFallingArray[i] = false
        
    }
    for (let k = 0; k < DIFFICULTY; k++) {
        moveRock(k)
    }

}
  



/**
 * Gives rock and corresponding shadow a random x and y coordinate, each 
 * being 1-9 to represent every square on the board. Then, and interval is set
 * to move the rocks downward. Once the rocks reach their intended square, they
 * are reset to 1000 pixels above a new, random square.  
 * 
 * @param { rock } n : A rock object selected from html rock data attribute
 */
function moveRock(n) {

    x_arr[n] = Math.floor(Math.random() * 9)
    y_arr[n] = Math.floor(Math.random() * 9)


    /* Prevents duplicate rock and shadow coordinates */
    let dup = true
    while (dup) {
        dup = false

        for (let rock = 0; rock < n; rock++) {

            if (x_arr[rock] == x_arr[n] && y_arr[rock] == y_arr[n]) {
                x_arr[n] = Math.floor(Math.random() * 9)
                y_arr[n] = Math.floor(Math.random() * 9)
                dup = true
            }
        }
    }


    /* Initialize rock's coordinates */
    rockElems[n].style.left = (x_arr[n] * 80) + 10 + "px"
    rockElems[n].style.top = (y_arr[n] * 80) - 990 + "px"

    /* Initialize shadow's coordinates */
    shadowElems[n].style.left = (x_arr[n] * 80) + 10
    shadowElems[n].style.top = (y_arr[n] * 80) + 10


    var x = setInterval(function() {            

        /* Access each rock by their html ID */
        var top = parseInt(window.getComputedStyle(document.getElementById(`rock${n + 1}`)).getPropertyValue("top"))
        rockElems[n].style.top = top + SPEED + "px"

        if (gameOver()) {
            clearInterval(x)
        }

        
        /* Checks when rock reaches intended tile. */
        if (top >= y_arr[n] * 80 + 15) {
            doneFallingArray[n] = true
            rockElems[n].style.top = -1000 + 'px'
            SCORE++
            clearInterval(x)
        }

        /* Checks when rock is near its intended tile for player collision detection */
        if (top >= y_arr[n] * 80 - 5) {
            nearBottomArray[n] = true
        } else {
            nearBottomArray[n] = false
        }
        
        /* If every rock is done falling, reset array, and then calls moveRocksAgain */
        if (doneFallingArray.slice(0, DIFFICULTY).every(elem => elem === true) && !(gameOver())) {
            for (let b = 0; b < DIFFICULTY; b++) {
                doneFallingArray[b] = false
            }
            setTimeout(() => {
                moveRocksAgain()
            }, 20)
        }

    }, 1
    )
}


function moveRocksAgain() {
    for (let i = 0; i < DIFFICULTY; i++) {
        moveRock(i)
    }
}






export function getScore() {
    return SCORE
}

export function hideRocks() {
    rockElems.forEach((rock) => {
        rock.style.top = -1000 + 'px'
    })
    shadowElems.forEach((shadow) => {
        shadow.style.top = -1000 + 'px'
    })


}

export function resetScore() {
    SCORE = 0
    scoreElem.style.top = -63
    scoreElem.style.fontSize = 30
    scoreElem.style.left = 0
}

export function isRockNearBottom(rock) {
    return nearBottomArray[rock]
}


 
