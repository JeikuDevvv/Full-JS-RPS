const body = document.body;

const main = document.createElement("main");
main.setAttribute("id", "main");
main.style.cssText = `
    background-image: url("./resources/background.svg");
`;

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

rpsContainer.append(armContainer);
rpsContainer.append(buttonContainer);

main.append(rpsContainer);
body.append(main);
