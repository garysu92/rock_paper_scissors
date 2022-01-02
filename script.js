function rps() {
  let select = Math.floor(Math.random() * 3) + 1;
  let comp, user, message;
  user = prompt("What do you choose (rock, paper, scissor)?");
  if (select == 1) {
    comp = "rock";
  } else if (select == 2) {
    comp = "paper";
  } else {
    comp = "scissor";
  }
  if (comp == user) {
    message = "Tie, both you and the computer chose " + comp;
  } else if (
    (comp == "paper" && user == "rock") ||
    (comp == "rock" && user == "scissor") ||
    (comp == "scissor" && user == "paper")
  ) {
    message = "You lose, the computer chose " + comp + " and you chose " + user;
  } else {
    message = "You win, the computer chose " + comp + " and you chose " + user;
  }
  return message;
}

for (let i = 0; i < 5; i++) {
  alert(rps());
}
