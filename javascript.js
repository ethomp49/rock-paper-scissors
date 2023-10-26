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
    return incrementScore(".player-wins");
}

function lose(player, computer) {
    printResult(`You lose. The computer chose ${computer}, and ${computer} beats ${player}.`);
    return incrementScore(".computer-wins");
}

function tie(player) {
    printResult(`It's a tie. You both chose ${player}.`);
}

function printResult(string) {
    const resultText = document.querySelector(".round-result");
    resultText.textContent = string;
}

function incrementScore(spanName) {
    const scoreSpan = document.querySelector(spanName);
    const score = parseInt(scoreSpan.textContent.split(":")[1].trimStart());
    const newScore = score + 1;
    scoreSpan.textContent = scoreSpan.textContent.replace(score, newScore);
    return newScore;
}

function incrementRound() {
    const roundText = document.querySelector(".round-counter");
    const round = parseInt(roundText.textContent.split(" ")[1].slice(0,-1));
    const newRound = round + 1;
    roundText.textContent = roundText.textContent.replace(round, newRound)
}

function playRound(e) {
    const player = e.target.className;
    const computer = computerChoice();
    const result = compareChoices(player, computer);
    if (result(player, computer) >= 5) {
        buttonContainer.removeEventListener('click', playRound);
    }
}

const buttonContainer = document.querySelector(".btn-container");
buttonContainer.addEventListener('click', playRound);