let players = [];
let markers = ["X", "O"];
let scores = [0, 0];
let whoseTurn = 0;
let winValues = [7, 56, 73, 84, 146, 273, 292, 448];
let gameOver = false;
players[0] = "Beavis";
players[1] = "Butthead";

function winCheck() {
  for (let i = 0; i < winValues.length; i++) {
    if ((scores[whoseTurn] & winValues[i]) == winValues[i]) {
      document.getElementById("game-message").innerText = players[whoseTurn] + " Wins!";
      gameOver = true;
    }
  }
  if (((scores[0] + scores[1]) == 511) && !gameOver) {
    document.getElementById("game-message").innerText = "Cat Wins!"
    gameOver = true;
  }
}

function play(clickedDiv, divValue) {
  if (!gameOver) {

    scores[whoseTurn] += divValue;
    clickedDiv.onclick = "";
    clickedDiv.innerHTML = "<span>" + markers[whoseTurn] + "</span>";
    document.getElementById("scoreboard").innerHTML = `${scores.toString()}`
    winCheck();
    if (!gameOver) { toggle() };
  }
}
function toggle() {
  if (whoseTurn == 0) whoseTurn = 1;
  else whoseTurn = 0;
  document.getElementById("game-message").innerText = players[whoseTurn] + "'s Turn";
}


