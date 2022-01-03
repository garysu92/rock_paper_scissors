function computerMove(e) {
  let select = Math.floor(Math.random() * 3) + 1;
  let comp, result;
  if (select == 1) {
    comp = "rock";
  } else if (select == 2) {
    comp = "paper";
  } else {
    comp = "scissor";
  }
  let user = e.target.className;
  if (comp == user) result = "tie";
  else if (
    (comp == "rock" && user == "scissor") ||
    (comp == "scissor" && user == "paper") ||
    (comp == "paper" && user == "rock")
  )
    result = "loss";
  else result = "win";
}
let userScore = 0,
  compScore = 0;
document.getElementsByClassName("header").innerHTML = "score";
window.addEventListener("click", computerMove);
