const selectionArticle = document.querySelector(".selection");

const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

const userSelectImg = document.createElement("img");
const pcSelectImg = document.createElement("img");

selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
};

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
