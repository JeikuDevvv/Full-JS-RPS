export const computerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = randomInteger(0, 2);
    return console.log(choices[randomIndex]);
};

export const Rock = () => {
    computerChoice();
    alert("NANI");
};

export const Paper = () => {
    alert("NANI");
};

export const Scissor = () => {
    alert("NANI");
};
