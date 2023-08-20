let wins = 0
let looses = 0
let count = 0

function getComputerChoice() {
    /*generating a random number between 0 and 2 */
    let random = () => {
    return Math.floor(Math.random() * 3)
    }
    
    /* switch statement to assign rock, paper and scissors strings depending on the random number generated by random()*/
    switch(random()) {
        case 0: 
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }
}

/* function with the logic to play one round of rock paper and scissors */
function playRound(playerSelection) {
    let computerSelection = getComputerChoice().toLowerCase()
    // let gameCount = `Wins: ${wins} Looses: ${looses}`

    if(playerSelection === computerSelection) { 
        //count++
        //console.log(gameCount)
        return console.log("This is a tie") , console.log('--------------------')
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        //wins++
        //count++
        //console.log(gameCount)
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`) , console.log('--------------------')
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        //wins++
        //count++
        //console.log(gameCount)
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`) , console.log('--------------------')
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        //wins++
        //count++
        //console.log(gameCount)
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`) , console.log('--------------------')
    } else {
        //count++
        //looses++
        //console.log(gameCount)
        return console.log(`You loose! ${computerSelection} beats ${playerSelection}`),  console.log('--------------------')
    }
}

/*function to play the game 5 times and added a conditional to add a message when the game ends (fifth round) and a message to announce who wins */

/*
function game() {
    while(count < 5) {
        playRound()
    }

    if(count === 5) {
        console.log('GAME ENDS')
        if(wins === looses){
            console.log('Draw!!')
        } else if(wins > looses) {
            console.log('Player wins!!')
        } else {
            console.log('Computer wins!!')
        }
    }
}

game()

*/

//This is the logic for the DOM management

const container = document.querySelector('#container')

const button1 = document.createElement('button')
const button2 = document.createElement('button')
const button3 = document.createElement('button')

button1.classList.add('button')
button1.setAttribute('id', 'rock')
button1.textContent = 'Rock'
container.appendChild(button1)

button2.classList.add('button')
button2.setAttribute('id', 'paper')
button2.textContent = 'Paper'
container.appendChild(button2)

button3.classList.add('button')
button3.setAttribute('id', 'scissors')
button3.textContent = 'Scissors'
container.appendChild(button3)

const buttons = container.querySelectorAll('button')

const rock = document.querySelector(`button[id="rock"]`)
const paper = document.querySelector(`button[id="paper"]`)
const scissors = document.querySelector(`button[id="scissors"]`)

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target == rock) playRound('rock')
        if(e.target == paper) playRound('paper')
        if(e.target == scissors) playRound('scissors')
    })
})
