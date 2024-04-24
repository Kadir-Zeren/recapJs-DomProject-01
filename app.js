const selectionArticle = document.querySelector(".selection");

const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

const messagePar = document.querySelector(".message");

const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");

const modalCardSection = document.querySelector(".modal-card");
const finalMessagePar = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-again");

let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
let pcRandom;

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});

playAgainBtn.addEventListener("click", () => {
  // modalCardSection.classList.toggle("show");
  // modalCardSection.classList.toggle("remove");
  modalCardSection.style.display = "none";
  window.location.reload();
});

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  // console.log(userSelectImg.alt);
  // console.log(pcSelectImg.alt);
  if (userSelectImg.alt === pcRandom) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }

  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "Its a draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};

const youLost = () => {
  messagePar.textContent = "You Lost";
  scoreCardSection.style.color = RED;
  messagePar.style.backgroundColor = RED;
  pcScoreSpan.textContent++;
};

const youWin = () => {
  messagePar.textContent = "You Win";
  scoreCardSection.style.color = GREEN;
  messagePar.style.backgroundColor = GREEN;
  yourScoreSpan.textContent++;
};

const openModal = () => {
  modalCardSection.classList.add("show");

  if (yourScoreSpan.textContent === "10") {
    finalMessagePar.textContent = "💃 You Win 🕺";
    document.querySelector("modal").style.backgroundColor = GREEN;
    playAgainBtn.style.color = GREEN;
  } else {
    finalMessagePar.textContent = "☠️ You Lost ☠️";
    document.querySelector("modal").style.backgroundColor = RED;
    playAgainBtn.style.color = RED;
  }
};

localStorage.setItem("highscore", 5);
console.log(localStorage.getItem("highScore"));

// const rockImg = document.getElementById("rock");
// const paperImg = document.getElementById("paper");
// const scissorImg = document.getElementById("scissor");
// rockImg.addEventListener("click", () => {
//   image.src = "./assets/rock.png";
//   image.alt = "rock";
//   yourChoiceDiv.appendChild(image);
//   // yourChoiceDiv.innerHTML=`<img src="./assets/rock.png" alt="rock">`
// });

// paperImg.addEventListener("click", () => {
//   image.src = "./assets/paper.png";
//   image.alt = "paper";
//   yourChoiceDiv.appendChild(image);
// });

// scissorImg.addEventListener("click", () => {
//   image.src = "./assets/scissor.png";
//   image.alt = "scissor";
//   yourChoiceDiv.appendChild(image);
// });
