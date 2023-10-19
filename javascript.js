function playerChoice(roundNum) {
    let choice = promptChoice(roundNum);
    while (!(checkChoice(choice))) {
        alert('Choice did not match rock, paper, or scissors. Try again.');
        choice = promptChoice();
    }
    return choice;
}

function promptChoice(roundNum) {
    const choice =  prompt(`Round #${roundNum}: Choose rock, paper, or scissors.`);
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

function playRound(roundNum) {
    const player = playerChoice(roundNum);
    const computer = computerChoice();
    const result = compareChoices(player, computer);
    return result(player, computer);
}

function game() {

}