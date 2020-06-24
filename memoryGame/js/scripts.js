const gameBoard = document.getElementById('game-board');
let cardArr = [];
const cardArrEasy = ['&#9728;','&#9728;','&#9729;','&#9729;','&#9730;','&#9730;','&#9731;','&#9731;','&#9732;','&#9732;'];
const cardArrMed =['&#9728;','&#9728;','&#9729;','&#9729;','&#9730;','&#9730;','&#9731;','&#9731;','&#9732;','&#9732;','&#9733;','&#9733;','&#9734;','&#9734;','&#9742;','&#9742;','&#9743;','&#9743;','&#9752;','&#9752;'];
const cardArrHard =['&#9728;','&#9728;','&#9729;','&#9729;','&#9730;','&#9730;','&#9731;','&#9731;','&#9732;','&#9732;','&#9733;','&#9733;','&#9734;','&#9734;','&#9742;','&#9742;','&#9743;','&#9743;','&#9752;','&#9752;','&#9760;','&#9760;','&#9762;','&#9762;','&#9763;','&#9763;','&#9787;','&#9787;','&clubs;','&clubs;'];
const cardArrExtreme =['&#9728;','&#9728;','&#9729;','&#9729;','&#9730;','&#9730;','&#9731;','&#9731;','&#9732;','&#9732;','&#9733;','&#9733;','&#9734;','&#9734;','&#9742;','&#9742;','&#9743;','&#9743;','&#9752;','&#9752;','&#9760;','&#9760;','&#9762;','&#9762;','&#9763;','&#9763;','&#9787;','&#9787;','&clubs;','&clubs;','&hearts;','&hearts;','&diams;','&diams;','&spades;','&spades;','&#9835;','&#9835;','&#9836;','&#9836;'];

let clickedArr = [];
let itemArr=[];
let itemClass =[];
let cardMatches = 0;
const infoBox = document.getElementById('info-box');
let attempts = 0;
let difficulty = "easy";
let extreme = false;
let matchesNeeded;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateInfoBox(){
    infoBox.innerHTML =`<p>Attempts: ${attempts}</p>
    <p>Card Matches: ${cardMatches}</p>
    <p>&nbsp;</p>`;
}
function setupGame(){
    selectDifficulty();
    gameBoard.innerHTML = "";
    shuffleArray(cardArr);
    setupCards();
    updateInfoBox();
    attempts = 0;
    cardMatches = 0;
    updateInfoBox();
}

function setupCards() {
    cardArr.forEach((a,b) => {
        return gameBoard.innerHTML += 
        `<div id='card' class='card${b}'>
            ${a}
        </div>`
    });
    
}

function removeClasses() {
    gameBoard.classList.remove('easy');
    gameBoard.classList.remove('medium');
    gameBoard.classList.remove('hard');
    gameBoard.classList.remove('extreme');
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

function selectDifficulty () {
    if(difficulty == "easy"){
        cardArr = cardArrEasy;
        extreme = false;
        removeClasses();
        gameBoard.classList.add('easy');
    } else if(difficulty == "medium"){
        cardArr = cardArrMed;
        extreme = false;
        removeClasses();
        gameBoard.classList.add('medium');
    }else if(difficulty == "hard"){
        cardArr = cardArrHard;
        extreme = false;
        removeClasses();
        gameBoard.classList.add('hard');
    }else if(difficulty == "extreme"){
        cardArr = cardArrExtreme;
        extreme = true;
        removeClasses();
        gameBoard.classList.add('extreme');
    }
    matchesNeeded= (cardArr.length/2);
}

function checkClick (){
    let classList = event.srcElement.className.split(/\s+/);

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
            setTimeout(function () { itemArr.map(a => {a.classList.remove('active'); a.classList.add('matched');}) }, 800); 
            cardMatches++;
        }
        attempts++;
        setTimeout(function () { removeClass() }, 800);
        
    }

    if(cardMatches >= matchesNeeded){
        setTimeout(function () { infoBox.innerHTML = `<p>You Win! Attempts: ${attempts}</p> <button id='reset' onClick='setupGame()' class="btn">Reset</button>`; }, 500);
    }
    if(extreme == true && attempts >= 70){
        setTimeout(function () { infoBox.innerHTML = 
            `<p>You Lose! Attempts: ${attempts}</p> <button id='reset' onClick='setupGame()' class="btn">Reset</button>`; 
            gameBoard.innerHTML = "";
        }, 100);
        gameBoard.innerHTML = "";
    }
}


setupGame();


document.addEventListener('click', function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (event.target.matches('#easy')) {difficulty = "easy"; setupGame()}
    if (event.target.matches('#medium')) {difficulty = "medium"; setupGame()}
    if (event.target.matches('#hard')) {difficulty = "hard"; setupGame()}
    if (event.target.matches('#extreme')) {difficulty = "extreme"; setupGame()}

    if (!event.target.matches('#card')) {return};
    
    
    checkClick();   
    updateInfoBox();

}, false);


