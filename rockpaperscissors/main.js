var score = 0;
var games = 0;
var userChoice = "";
var computerChoice = 0;

function printer(msg) {
  document.getElementById('result').innerHTML = msg;
  document.getElementById('score').innerHTML = score + "/" + games;
}

document.getElementById('reset').onclick = function() {
  score = 0;
  games = 0;
  printer("&nbsp;");
}


function userChose(choice){
	userChoice = choice;
 	compare(userChoice, compChoose());
}


function compChoose() {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice < 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  return computerChoice;
}


function compare(user, comp) {
  var result = "";
  if (user === comp) {

    result = "tie";
  } else if (user === "rock") {
    games++;
    if (comp === "paper") {
      result = "i chose paper. you lose."
    } else {
      result = "i chose scissor. you win."
      score++;
    }
  } else if (user === "paper") {
    games++;
    if (comp === "scissor") {
      result = "i chose scissor. you lose."
    } else {
      result = "i chose rock. you win."
      score++;
    }
  } else {
    games++;
    if (comp === "rock") {
      result = "i chose rock. you lose."
    } else {
      result = "i chose paper. you win."
      score++;
    }
  }
  printer(result);
}



