function computerMove(e) {
  let select = Math.floor(Math.random() * 3) + 1;
  let comp;
  if (select == 1) {
    comp = "rock";
  } else if (select == 2) {
    comp = "paper";
  } else {
    comp = "scissor";
  }
}

window.addEventListener("click", computerMove);
