function computerMove() {
  let select = Math.floor(Math.random() * 3) + 1;
  let comp;
  if (select == 1) {
    comp = "rock";
  } else if (select == 2) {
    comp = "paper";
  } else {
    comp = "scissor";
  }
  return comp;
}

for (let i = 0; i < 5; i++) {
  alert(rps());
}
