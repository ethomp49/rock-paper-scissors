function computerChoice() {
    switch (getRandomInt(3)) {
        case 1:
            return 'rock';
            
        case 2:
            return 'paper';

        case 3:
            return 'scissors';
    }
}

function getRandomInt(n) {
    return Math.ceil(Math.random() * n);
}

function compareChoices(player, computer) {
    if (player === computer) {
        return tie;
    } else {    
        switch (player) {
            case 'rock':
                switch (computer) {
                    case 'scissors':
                        return win;
                        
                    case 'paper':
                        return lose;
                }
                break;

            case 'paper':
                switch (computer) {
                    case 'rock':
                        return win;

                    case 'scissors':
                        return lose;
                }
                break;

            case 'scissors':
                switch (computer) {                    
                    case 'paper':
                        return win;

                    case 'rock':
                        return lose;
                }
                break;

            default:
                throw 'Player choice not recognized';
        }
    }
}

function win(player, computer) {
    printResult(`You win! The computer chose ${computer}, and ${player} beats ${computer}!`);
    return incrementValue("player-score");
}

function lose(player, computer) {
    printResult(`You lose. The computer chose ${computer}, and ${computer} beats ${player}.`);
    return incrementValue("computer-score");
}

function tie(player) {
    printResult(`It's a tie. You both chose ${player}.`);
}

function printResult(string) {
    const resultText = document.querySelector(".round-result");
    resultText.textContent = string;
}

function getScore(scoreSpan) {
    return parseInt(scoreSpan.textContent.split(":")[1].trimStart());
}

function getRound(roundElement) {
    return parseInt(roundElement.textContent.split(" ")[1].slice(0,-1));
}

function incrementValue(choice) {
    let element, value;
    switch (choice) {
        case "round":
            element = document.querySelector(".round-counter");
            value = getRound(element)
            break;

        case "player-score":
            element = document.querySelector(".player-wins");
            value = getScore(element);
            break;

        case "computer-score":
            element = document.querySelector(".computer-wins");
            value = getScore(element);
            break;
    }
    const newValue = value + 1;
    element.textContent = element.textContent.replace(value, newValue);
    return newValue;
}

function playRound(e) {
    const player = e.target.className;
    const computer = computerChoice();
    const result = compareChoices(player, computer);
    const round = incrementValue("round");
    if (result(player, computer) >= 5) {
        const finalResult = document.querySelector(".final-result");
        switch (result) {
            case win:
                finalResult.textContent = `Congratulations! You beat the computer in ${round - 1} rounds. Refresh the page to play again!`;
                break;

            case lose:
                finalResult.textContent = `Sorry! You lost to the computer in ${round - 1} rounds. Refresh the page to try again!`;
                break;
        }
        buttonContainer.removeEventListener('click', playRound);
    }
}

const buttonContainer = document.querySelector(".btn-container");
buttonContainer.addEventListener('click', playRound);