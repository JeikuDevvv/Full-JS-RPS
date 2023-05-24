import { Rock, Paper, Scissors } from "./static/functions.js";

const body = document.body;

const main = document.createElement("main");
main.setAttribute("id", "main");
main.style.cssText = `
    background-image: url("./assets/background.svg");
`;

function nani() {
    alert("nani");
}

const rpsContainer = document.createElement("div");
rpsContainer.setAttribute("class", "rps-container");
const armContainer = document.createElement("div");
armContainer.setAttribute("class", "arm-container");

const playerOne = document.createElement("div");
playerOne.setAttribute("class", "player-one");
const playerOneChoice = document.createElement("img");
playerOneChoice.setAttribute("id", "player-one-img");
playerOneChoice.src = "./assets/icons/nani.svg";
playerOne.append(playerOneChoice);

const vsTextContainer = document.createElement("div");

const vsText = document.createElement("h1");
vsText.setAttribute("id", "vsText");
vsText.innerText = "V.S";
vsTextContainer.append(vsText);

const playerTwo = document.createElement("div");
playerTwo.setAttribute("class", "player-two");
const playerTwoChoice = document.createElement("img");
playerTwoChoice.setAttribute("id", "player-two-img");
playerTwoChoice.src = "./assets/icons/nani.svg";
playerTwo.append(playerTwoChoice);

armContainer.append(playerOne, vsTextContainer, playerTwo);

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("class", "button-container");

const rockButton = document.createElement("button");
rockButton.setAttribute("id", "rock-button");
const iconRockButton = document.createElement("img");
iconRockButton.src = "./assets/icons/rock.png";
rockButton.append(iconRockButton);
const buttonTextRock = document.createTextNode("rock");
rockButton.appendChild(buttonTextRock);
rockButton.addEventListener("click", Rock);

const paperButton = document.createElement("button");
paperButton.setAttribute("id", "paper-button");
const iconPaperButton = document.createElement("img");
iconPaperButton.src = "./assets/icons/paper.png";
paperButton.append(iconPaperButton);
const buttonTextPaper = document.createTextNode("paper");
paperButton.appendChild(buttonTextPaper);
paperButton.addEventListener("click", Paper);

const scissorsButton = document.createElement("button");
scissorsButton.setAttribute("id", "scissors-button");
const iconScissorsButton = document.createElement("img");
iconScissorsButton.src = "./assets/icons/scissors.png";
scissorsButton.append(iconScissorsButton);
const buttonTextScissors = document.createTextNode("scissor");
scissorsButton.appendChild(buttonTextScissors);
scissorsButton.addEventListener("click", Scissors);

buttonContainer.append(rockButton, paperButton, scissorsButton);

rpsContainer.append(armContainer, buttonContainer);

main.append(rpsContainer);
body.append(main);
