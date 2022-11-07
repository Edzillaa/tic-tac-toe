/*----- app's state (variables) -----*/
let player = 'x'

  
/*----- cached element references -----*/
let squareEls = document.querySelectorAll('.square')
console.log(squareEls)

let resetBtnEl = document.getElementById('reset-btn')
console.log(resetBtnEl)

let messageEl = document.getElementById('win-message')
console.log(messageEl)
  
/*----- event listeners -----*/
for(let element of squareEls) {
    element.addEventListener("click", handleClick)
}

resetBtnEl.addEventListener("click", reset)

  
/*----- functions -----*/
function handleClick(evt) {
    let square = evt.target
    if (square.innerHTML === "") {
        square.innerHTML = player
        console.log(evt.target)
        if (player === "x") {
            player = "o"
        } else {
            player = 'x'
        }    
    } 
}

function reset() {
    player = 'x'
    console.log("reset")
    for(let element of squareEls) {
        element.innerHTML = ""
    }
}