import { setupRocks, hideRocks, isRockNearBottom1,
    isRockNearBottom2, isRockNearBottom3, isRockNearBottom4, isRockNearBottom5,
    isRockNearBottom6, isRockNearBottom7, isRockNearBottom8, isRockNearBottom9,
    isRockNearBottom10, getScore, resetScore } from './rocks.js'


const stickmanElem = document.querySelector('[data-stickman]')
const grid = document.getElementById("grid")
const rockElems = document.querySelectorAll('[data-rock]')
const startScreenElem = document.querySelector('[data-start-screen]')
const loseMessageElem = document.querySelector('[data-lose-message]')
loseMessageElem.style.display = 'none'
const scoreElem = document.querySelector('[data-score]')

let interval
let isMoving = false
let counter = 0
let SPEED
let score = 0




function moveLeft(){
    var left = parseInt(window.getComputedStyle(stickman).getPropertyValue("left"))
    stickman.style.left = left - 2 + "px"
    counter += 2

    if(left<=15){
        stickman.style.left = 15 + "px"
    }
    if (counter == 80) {
        clearInterval(interval)
        isMoving = false
        counter = 0
    }
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(stickman).getPropertyValue("left"))
    stickman.style.left = left + 2 + "px"
    counter += 2

    if(left>=655){
        stickman.style.left = 655 + "px"
    }
    if (counter == 80) {
        clearInterval(interval)
        isMoving = false
        counter = 0
    }
}
function moveUp(){
    var top = parseInt(window.getComputedStyle(stickman).getPropertyValue("top"))
    stickman.style.top = top - 2 + "px"
    counter += 2
    if(top<=5){
        stickman.style.top = 5 + "px"
    }
    if (counter == 80) {
        clearInterval(interval)
        isMoving = false
        counter = 0
    }
}
function moveDown(){
    var top = parseInt(window.getComputedStyle(stickman).getPropertyValue("top"))
    stickman.style.top = top + 2 + "px"
    counter += 2

    if(top >= 645){
        stickman.style.top = 645 + "px"
    }
    if (counter == 80) {
        clearInterval(interval)
        isMoving = false
        counter = 0
    }
}

function keyPressed(event) {
    if (isMoving) return
    
        if(event.key==="ArrowLeft" || event.key==="a"){
            interval = setInterval(moveLeft, 1)
            isMoving = true
        }
        if(event.key==="ArrowRight" || event.key==="d"){
            interval = setInterval(moveRight, 1)
            isMoving = true
        }
        if(event.key==="ArrowUp" || event.key==="w"){
            interval = setInterval(moveUp, 1)
            isMoving = true
        }
        if(event.key==="ArrowDown" || event.key==="s"){
            interval = setInterval(moveDown, 1)
            isMoving = true
        }
};

//creates grid
for (let i = 0; i < 9; i++) {
    for (let x = 0; x < 9; x++) {
        var item = document.createElement("div")
        //item.setAttribute("style", "grid-area:" + i + " / " + x + " / " + i + " / " + x);
        item.setAttribute("grid-column", x + " / span 1")
        item.setAttribute("grid-row", i + " / span 1")
        item.setAttribute("id", "grid-item")
        grid.appendChild(item)

    }
}


window.addEventListener("keydown", handleStart, { once: true })

function handleStart() {
    document.addEventListener("keydown", keyPressed)
    stickmanElem.style.top = 325
    stickmanElem.style.left = 335
    setupRocks()
    checkLose()
    isMoving = false
    counter = 0
    startScreenElem.style.display = 'none'
    loseMessageElem.style.display = 'none'

    
}

function getStickmanRect() {
    return stickmanElem.getBoundingClientRect()
}

function getRockRects(rock) {
    return rock.getBoundingClientRect()
}
  
function isCollision(rect1, rect2) {
    return rect1.left < rect2.right && rect1.top < rect2.bottom &&
        rect1.right > rect2.left && rect1.bottom > rect2.top
}

function checkLose() {
    setInterval(() => {
        const stickmanRect = getStickmanRect()
        const rect1 = getRockRects(rockElems[0])
        const rect2 = getRockRects(rockElems[1])
        const rect3 = getRockRects(rockElems[2])
        const rect4 = getRockRects(rockElems[3])
        const rect5 = getRockRects(rockElems[4])
        const rect6 = getRockRects(rockElems[5])
        const rect7 = getRockRects(rockElems[6])
        const rect8 = getRockRects(rockElems[7])
        const rect9 = getRockRects(rockElems[8])
        const rect10 = getRockRects(rockElems[9])
        
        if (isCollision(rect1, stickmanRect) && isRockNearBottom1())
            handleLose()
        if (isCollision(rect2, stickmanRect) && isRockNearBottom2())
            handleLose()
        if (isCollision(rect3, stickmanRect) && isRockNearBottom3())
            handleLose()
        if (isCollision(rect4, stickmanRect) && isRockNearBottom4())
            handleLose()
        if (isCollision(rect5, stickmanRect) && isRockNearBottom5())
            handleLose()
        if (isCollision(rect6, stickmanRect) && isRockNearBottom6())
            handleLose()
        if (isCollision(rect7, stickmanRect) && isRockNearBottom7())
            handleLose()
        if (isCollision(rect8, stickmanRect) && isRockNearBottom8())
            handleLose()
        if (isCollision(rect9, stickmanRect) && isRockNearBottom9())
            handleLose()
        if (isCollision(rect10, stickmanRect) && isRockNearBottom10())
            handleLose()
    })
}

function handleLose() {
    document.removeEventListener('keydown', keyPressed)
    hideRocks()
    isMoving = true
    stickmanElem.style.top = 325
    stickmanElem.style.left = 335
    showScore()
 
    loseMessageElem.style.display = null

    setTimeout(() => {
        stickmanElem.style.top = 325
        stickmanElem.style.left = 335
        
    }, 500)
    setTimeout(() => {
        stickmanElem.style.top = 325
        stickmanElem.style.left = 335

    }, 1000)
    setTimeout(() => {
        startScreenElem.style.display = null
        loseMessageElem.style.display = 'none'
        resetScore()
        document.addEventListener('keydown', handleStart, { once: true })
    }, 1500)
}

function scoreTracker() {
        return score = getScore()
}

setInterval(() => {
    document.getElementById('score').innerHTML = 'score: ' + scoreTracker()
}, 10)


export function increaseSpeed() {
    if (score >= 1300)
        return 7
    else if (score >= 1000)
        return 6.5
    else if (score >= 700)
        return 6
    else if (score >= 588)
        return 5.5
    else if (score >= 507)
        return 5
    else if (score >= 426)
        return 4.5
    else if (score >= 365)
        return 4.25
    else if (score >= 304)
        return 4
    else if (score >= 243)
        return 3.75
    else if (score >= 162)
        return 3.5
    if (score >= 81)
        return 3.25
    else return 3
}

function showScore() {
    scoreElem.style.fontSize = 50
    scoreElem.style.top = 155
    scoreElem.style.left = 250
}