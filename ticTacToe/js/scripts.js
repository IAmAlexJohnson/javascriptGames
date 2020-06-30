const itemBox = document.getElementsByClassName("item-box");

let gameArr = ["","","","","","","","",""];

// for(let i = 0; i < itemBox.length; i++){
//     itemBox[i].style.backgroundColor = "red";
// }

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.item-box')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
    console.log(event.target.id);
    let current = event.target.id;

    if(gameArr[current] === ""){
        gameArr[current] = "X";
        event.target.innerHTML = "X";
    }

    console.log(`GAME ARR: ${gameArr}`);
}, false);