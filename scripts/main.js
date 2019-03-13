// Game workings

//let btnSq1 = document.getElementById("btn-sq1");
//let btnSq1val = document.getElementById("btn-sq1").innerHTML;
//console.log(btnSq1val);



// Game board module and Game board array

const gameBoard = (() => {
	
	let btnSq1val = document.getElementById("btn-sq1").value;
	let btnSq2val = document.getElementById("btn-sq2").value;
	let btnSq3val = document.getElementById("btn-sq3").value;
	let btnSq4val = document.getElementById("btn-sq4").value;
	let btnSq5val = document.getElementById("btn-sq5").value;
	let btnSq6val = document.getElementById("btn-sq6").value;
	let btnSq7val = document.getElementById("btn-sq7").value;
	let btnSq8val = document.getElementById("btn-sq8").value;
	let btnSq9val = document.getElementById("btn-sq9").value;

	let gameBoardArr = [btnSq1val, btnSq2val, btnSq3val, btnSq4val, btnSq5val, btnSq6val, btnSq7val, btnSq8val, btnSq9val]
	
  return {
    gameBoardArr
		
  };
	
})();

//console.log(gameBoard.gameBoardArr);

//console.log(gameBoard.btnSq1);
//console.log(gameBoard.gameBoardArr);


// Game controller object

const displayController = (() => {
	
  return {
		
  };
	
	
})();


// Player factory functions

const playerFactory = (name) => {
  return { name };
};

let player1 = playerFactory('player1');
let player2 = playerFactory('player2');


//console.log(player1.name);
//console.log(player2.name);

// Game functions & workings

function clicked(clickedId) {
	
	clkId = document.getElementById(clickedId);
	clkIdval = document.getElementById(clickedId).innerHTML;

	if (clkIdval === "") {
		clkId = "X";
		document.getElementById(clickedId).innerHTML="X";
	}
	else if (clkIdval === "X") {
		clkId = "O";
		document.getElementById(clickedId).innerHTML="O";
	}
	
	else if (clkIdval === "O") {
		clkId = "";
		document.getElementById(clickedId).innerHTML="";
	}
	
	
}
