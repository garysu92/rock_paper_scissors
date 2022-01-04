function updateScore(result) {
  if (result == "win") userScore++;
  else if (result == "loss") compScore++;
  else ties++;
  document.getElementById("header").innerHTML =
    "Your wins: " +
    userScore +
    "\t Computer wins: " +
    compScore +
    "\t Ties: " +
    ties;
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML = result;
  played++;
  if (played == 5) {
    if (compScore > userScore) alert("You lost");
    else if (compScore < userScore) alert("You won");
    else alert("Tie");
    played = 0;
    compScore = 0;
    userScore = 0;
    ties = 0;
    document.getElementById("header").innerHTML =
      "Your wins: " + 0 + "\t Computer wins: " + 0 + "\t Ties: " + 0;
    document.getElementById("result").innerHTML =
      "Click one of the above to start!";
  }
}

function computerMove(e) {
  if (e.target.className !== "icon") return;
  let select = Math.floor(Math.random() * 3) + 1;
  let comp, result;
  if (select == 1) {
    comp = "rock";
  } else if (select == 2) {
    comp = "paper";
  } else {
    comp = "scissor";
  }
  let user = e.target.id;
  if (comp == user) result = "tie";
  else if (
    (comp == "rock" && user == "scissor") ||
    (comp == "scissor" && user == "paper") ||
    (comp == "paper" && user == "rock")
  )
    result = "loss";
  else result = "win";
  updateScore(result);
}

let userScore = 0,
  compScore = 0,
  ties = 0;
played = 0;
document.getElementById("header").innerHTML =
  "Your wins: " +
  userScore +
  "\t Computer wins: " +
  compScore +
  "\t Ties: " +
  ties;
document.getElementById("result").innerHTML =
  "Click one of the above to start!";
window.addEventListener("click", computerMove);
