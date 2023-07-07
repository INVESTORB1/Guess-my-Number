"use strict";
const clearInput = function(){
	document.querySelector('.guess').value= '';
};

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//To know the answer in the console
console.log(secretNumber);

let highscore = document.querySelector(".highscore").textContent;

document.querySelector(".check").addEventListener("click", function () {
	// console.log(document.querySelector('.guess').value);
	let guess = Number(document.querySelector(".guess").value);
	// console.log(typeof guess);


	//When there is no input from the user
	if (!guess) {
		document.querySelector(".message").textContent = "No Answer";
	} else if (guess == secretNumber) {
		clearInput();
		document.querySelector(".message").textContent = "Correct Answer";

		document.querySelector(".number").textContent = secretNumber;

		document.querySelector("body").style.backgroundColor = "#60b347";
		// document.querySelector('.score').textContent =score;
		

		document.querySelector(".number").style.width = "15rem";

		document.querySelector(".highscore").textContent = score;

		if (score > highscore){
			highscore = score;
			document.querySelector('.highscore').textContent=highscore;
		}else{
			document.querySelector(".highscore").textContent = highscore;
		}
//Calling the clear input function that is created at the top of this code
		
// console.log
		
	}
	//When the input is less than the score
	else if (guess < secretNumber) {
		  clearInput();
		if (score > 1) {
			document.querySelector(".message").textContent =
				"Less than Correct Answer";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "You Lost";
			document.querySelector(".score").textContent = 0;
		}

		//When the guess is greater than the answer
	} else if (guess > secretNumber) {
		clearInput();
		if (score > 1) {
			document.querySelector(".message").textContent = "Greater than Answer";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "You Lost";
			document.querySelector(".score").textContent = 0;
		}
	}
}
	

);



//For the Again button
document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".message").textContent = "Have Fun Guesing";
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").style.width = "12rem";
	document.querySelector(".number").textContent = "?";
	document.querySelector("body").style.backgroundColor = "#222";
	clearInput();
	
});

//For the Reset button
document.querySelector(".Reset").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".message").textContent = "Have Fun Guesing";
	document.querySelector(".number").style.width = "12rem";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".highscore").textContent = 0;
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	// document.querySelector(".guess").value= '';
	clearInput();
});


