//This Javascript was written by Matt Wiese as an assignment
//		that was prescribed by The Odin Project.

//Generates row divs inside the container class div
function generateRowDivs(numberOfRows) {
	for(i = 0; i < numberOfRows; i++) {
		const rowDiv = document.createElement("div");
		rowDiv.setAttribute("class", "row");
		document.getElementsByClassName("container")[0].appendChild(rowDiv)
	}
}

//Generates square divs inside the row class divs
function generateSquareDivs(numberOfSquares) {
	for(j = 0; j < numberOfSquares; j++) {
		const squareDiv = document.createElement("div");
		squareDiv.setAttribute("class", "square");
		const rows = Array.from(document.querySelectorAll('.row'));
		for(i = 0; i < numberOfSquares; i++) {
			rows[i].insertAdjacentHTML('afterbegin', '<div class="square" onmouseover="playerHover(event, this)"></div>');
		}
	}
}

//Generates the grid
function generateGrid(sizeOfGrid) {
	generateRowDivs(sizeOfGrid);
	generateSquareDivs(sizeOfGrid);
}

//Changes the color to a random color
function playerHover(e, object) {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	object.style.background = "rgb(" + red + "," + blue + "," + green + ")";
}

//Resets the page
function playerReset(e) {
	//Reset squares to original color.
	const squares = Array.from(document.querySelectorAll('.square'));
	for(i = 0; i < squares.length; i++){
		squares[i].style.background = "rgb(" + 235 + "," + 95 + "," + 128 + ")";
	}

	//Get size of grid from user
	const gridSize = prompt("What size nxn grid should I create??", "e.g. 5");
	
	//Clear DOM below .container div
	const container = document.getElementsByClassName("container")[0];
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	//Generate new grid
	generateGrid(gridSize);


}

//Generate grid
generateGrid(4);

//Add reset listener
const reset = document.querySelectorAll('.reset');
reset.forEach(reset => reset.addEventListener('click', playerReset));


//Add changecolor listener
//const squares = document.querySelectorAll('.square');
//squares.forEach(square => square.addEventListener('mouseover', playerHover));
