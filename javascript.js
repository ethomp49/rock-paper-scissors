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
}

function lose(player, computer) {
    printResult(`You lose. The computer chose ${computer}, and ${computer} beats ${player}.`);
}

function tie(player) {
    printResult(`It's a tie. You both chose ${player}.`);
}

function printResult(string) {
    const resultText = document.querySelector(".round-result");
    resultText.textContent = string;
}

function playRound(e) {
    const player = e.target.className;
    const computer = computerChoice();
    const result = compareChoices(player, computer);
    return result(player, computer);
}

const buttonContainer = document.querySelector(".btn-container");
buttonContainer.addEventListener('click', playRound);