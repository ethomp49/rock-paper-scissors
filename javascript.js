function playerChoice() {
    let choice = promptChoice();
    while (!(checkChoice(choice))) {
        alert('Choice did not match rock, paper, or scissors. Try again.');
        choice = promptChoice();
    }
    return choice;
}

function promptChoice() {
    const choice =  prompt('Choose Rock, Paper, or Scissors.');
    return choice.toLowerCase();
}

function checkChoice(choice) {
    return choice === 'rock' || choice === 'paper' || choice === 'scissors';
}

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
                    case 'paper':
                        return lose;

                    case 'scissors':
                        return win;
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
                    case 'rock':
                        return lose;

                    case 'paper':
                        return win;
                }
                break;

            default:
                throw 'Player choice not recognized';
        }
    }
}

function win(player, computer) {
    console.log(`You win! The computer chose ${computer}, and ${player} beats ${computer}!`);
    return 'win';
}

function lose(player, computer) {
    console.log(`You lose. The computer chose ${computer}, and ${computer} beats ${player}.`);
    return 'lose';
}

function tie(player) {
    console.log(`It's a tie. You both chose ${player}.`)
    return 'tie';
}

/* function capitalizeFirst(string) {
    return string.replace(string[0], string[0].toUpperCase());
} */

function playRound() {
    const player = playerChoice();
    const computer = computerChoice();
    const result = compareChoices(player, computer);
    return result(player, computer);
}