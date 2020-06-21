
// setup game board
//when item is clicked it flips over
// if two items are flipped check if they are the same
// check that same card isnt clicked twice.
const gameBoard = document.getElementById('game-board');
const cardArr = [1,1,2,2,3,3,4,4];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function setupGame(){
    shuffleArray(cardArr);
    setupCards();
    
}

function setupCards() {
    cardArr.forEach((a) => {return gameBoard.innerHTML += `<div id='card'>${a}</div>`});
}


setupGame();



