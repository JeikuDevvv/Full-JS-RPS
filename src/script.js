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

const vsText = document.createElement("h1");
vsText.innerText = "V.S";

const playerTwo = document.createElement("div");
playerTwo.setAttribute("class", "player-two");

armContainer.append(playerOne);
armContainer.append(vsText);
armContainer.append(playerTwo);

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("class", "button-container");

const rockButton = document.createElement("button");
rockButton.setAttribute("id", "rock-button");
const iconRockButton = document.createElement("img");
iconRockButton.src = "./assets/icons/rock.png";
rockButton.append(iconRockButton);
const buttonTextRock = document.createTextNode("rock");
rockButton.appendChild(buttonTextRock);
rockButton.addEventListener("click", nani);

const paperButton = document.createElement("button");
paperButton.setAttribute("id", "paper-button");
const iconPaperButton = document.createElement("img");
iconPaperButton.src = "./assets/icons/paper.png";
paperButton.append(iconPaperButton);
const buttonTextPaper = document.createTextNode("paper");
paperButton.appendChild(buttonTextPaper);

const scissorButton = document.createElement("button");
scissorButton.setAttribute("id", "scissor-button");
const iconScissorButton = document.createElement("img");
iconScissorButton.src = "./assets/icons/scissor.png";
scissorButton.append(iconScissorButton);
const buttonTextScissor = document.createTextNode("scissor");
scissorButton.appendChild(buttonTextScissor);

buttonContainer.append(rockButton, paperButton, scissorButton);

rpsContainer.append(armContainer, buttonContainer);

main.append(rpsContainer);
body.append(main);
