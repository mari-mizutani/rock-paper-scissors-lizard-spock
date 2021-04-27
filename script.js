var userChoice;
var computerChoice;

//choose rock
document.getElementById("rock").addEventListener("click", function() {        
    userChoice = "rock";
});

//choose paper
document.getElementById("paper").addEventListener("click", function() {        
    userChoice = "paper";   
});

//choose scissors
document.getElementById("scissors").addEventListener("click", function() {        
    userChoice = "scissors";  
});

//choose lizard
document.getElementById("lizard").addEventListener("click", function() {        
    userChoice = "lizard";  
});

//choose spock
document.getElementById("spock").addEventListener("click", function() {        
    userChoice = "spock";   
});

//computer random choice by click
var computerChoice = ['rock', 'paper', 'scissors','lizard', 'spock']; 
document.getElementById("start").addEventListener("click", function() {        
    var randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    document.getElementById("rps-com-choice").innerHTML = "Computer choose  " + randomChoice; 

//compare the result    
    if(userChoice === randomChoice) {
        document.getElementById("result").innerHTML = "the result is a tie!";

    } else if (userChoice === "rock") {
		if (randomChoice === "paper") {
            document.getElementById("result").innerHTML = "You Lose :\(";
		} else if (randomChoice === "scissors") {
            document.getElementById("result").innerHTML = "You Win! :\)";
		} else if (randomChoice === "lizard") {
			document.getElementById("result").innerHTML = "You Win! :\) ";
		} else {
			document.getElementById("result").innerHTML = "You Lose :\(";
		}
    } else if (userChoice === "paper") {
		if (randomChoice === "rock") {
			document.getElementById("result").innerHTML = "You Win! :\)";
		} else if (randomChoice === "scissors") {
			document.getElementById("result").innerHTML = "You Lose :\(";
		} else if (randomChoice === "lizard") {
			document.getElementById("result").innerHTML = "You Lose :\(";
		} else {
			document.getElementById("result").innerHTML = "You Win! :\)";
		}
	}else if (userChoice === "scissors") {
		if (randomChoice === "rock") {
			document.getElementById("result").innerHTML = "You Lose :\(";
		} else if (randomChoice === "paper") {
			document.getElementById("result").innerHTML = "You Win! :\)";
		} else if (randomChoice === "lizard") {
			document.getElementById("result").innerHTML = "You Win! :\)";
		} else {
			document.getElementById("result").innerHTML = "You Lose :\(";
		}
	} else if (userChoice === "lizard") {
		if (randomChoice === "rock") {
			document.getElementById("result").innerHTML = "You Lose :\(";
		} else if (randomChoice === "paper") {
			document.getElementById("result").innerHTML = "You Win! :\)";
		} else if (randomChoice === "scissors") {
			document.getElementById("result").innerHTML = "You Lose :\(";
		} else {
			document.getElementById("result").innerHTML = "You Win! :\)";
		}
	} else if (userChoice === "spock") {
		if (randomChoice === "rock") {
			document.getElementById("result").innerHTML = "You Win! :\)";
		} else if (randomChoice === "paper") {
			document.getElementById("result").innerHTML = "You Lose :\(";
		} else if (randomChoice === "scissors") {
			document.getElementById("result").innerHTML = "You Win! :\) ";
		} else {
			document.getElementById("result").innerHTML = "You Lose :\(";
		}
	}
});  

//reset
document.getElementById("reset").addEventListener("click", function() {  
    document.getElementById("rps-com-choice").innerHTML = "  " ; 
    document.getElementById("result").innerHTML = "  " ;     
});  
