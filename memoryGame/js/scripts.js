
// setup game board
//when item is clicked it flips over
// if two items are flipped check if they are the same
// check that same card isnt clicked twice.
const gameBoard = document.getElementById('game-board');
const cardArr = [1,1,2,2,3,3,4,4];
let clickedArr = [];
let itemArr=[];
let itemClass =[];
let cardMatches = 0;
const infoBox = document.getElementById('info-box');
let attempts = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function setupGame(){
    gameBoard.innerHTML = "";
    shuffleArray(cardArr);
    setupCards();
    infoBox.innerHTML ="";
}

function setupCards() {
    cardArr.forEach((a,b) => {return gameBoard.innerHTML += `<div id='card' class='card${b}'>${a}</div>`});
    
}

function resetClicks (){
    clickedArr = [];
    itemArr = [];
    itemClass = [];
}
function removeClass() {
    itemArr.map(a => {a.classList.remove('active')});
    resetClicks();
}

function checkClick (){
    let classList = event.srcElement.className.split(/\s+/);
       
        // console.log(`CLASS LIST: ${classList}`);
        // itemClass.forEach(a => {console.log(a)});

        // console.log(`ITEM: ${itemClass[0]} CLASS: ${classList[0]}`);
        // console.log(`BOOLEAN: ${itemClass[0] !== classList[0]}`);
 
    
            if(itemArr.length <= 1 && itemClass[0] !== classList[0]){
                
                itemClass.push(event.target.classList[0]);
                itemArr.push(event.target);
    
                if(clickedArr.length  <= 2 ){
                    clickedArr.push(event.target.innerHTML);
                    event.target.classList.add('active');
                }
            }



    if(clickedArr.length === 2){
        if(clickedArr[0] === clickedArr[1]){
            setTimeout(function () { itemArr.map(a => {a.classList.remove('active'); a.classList.add('matched');}) }, 300); 
            // console.log('matched');
            cardMatches++;
        }
        attempts++;
        setTimeout(function () { removeClass() }, 500);
        
    }

        




    if(cardMatches === 4){
        setTimeout(function () { infoBox.innerHTML = `<p>You Win! Attempts: ${attempts}</p> <button id='reset' onClick='setupGame()'>Reset</button>`; }, 500);
        // console.log('win');
    }
    // console.log(`MATCHES: ${cardMatches}`);

    // console.log(`ITEM ARR: ${itemArr}`);

    // console.log(`CARD CLASSES: ${cardClass}`);
    // console.log(`EVENT: ${event} TARGET: ${event.target}`);
    // console.log(`CLICKED ARR: ${clickedArr}`);
}


setupGame();


document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('#card')) return;
    checkClick();   

}, false);
