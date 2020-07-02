const itemBox = document.getElementsByClassName("item-box");

let gameArr = ["","","","","","","","",""];

// for(let i = 0; i < itemBox.length; i++){
//     itemBox[i].style.backgroundColor = "red";
// }

function userTurn(current){
    if(gameArr[current] === ""){
        gameArr[current] = "X";
        addElements();
    }
}

function computerTurn(num) {
    console.log(`GAME ARR: ${gameArr}`);
    while(gameArr[num] !== ""){
        console.log("nope");
        num = randomNum();
    }
    if(gameArr[num] == ""){
        console.log("ye");
        gameArr[num] = "O";
        addElements();
    } 

}

function randomNum(){
    console.log(Math.floor(Math.random() * gameArr.length));
    return Math.floor(Math.random() * gameArr.length);
}


function addElements(){
    for(let i = 0; i < gameArr.length; i++){
        document.getElementById(i).innerHTML = gameArr[i];
    }
}

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.item-box')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
    // console.log(event.target.id);
    let current = event.target.id;

    userTurn(current);
    computerTurn(randomNum(), current);

    console.log(`GAME ARR: ${gameArr}`);
}, false);