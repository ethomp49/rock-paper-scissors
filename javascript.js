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
    switch (player) {
        case 'rock':
            switch (computer) {
                case 'rock':
                    tie(player);
                    break;

                case 'paper':
                    lose(player, computer);
                    break;

                case 'scissors':
                    win(player, computer);
                    break;
            }
            break;

        case 'paper':
            switch (computer) {
                case 'rock':
                    win(player, computer);
                    break;

                case 'paper':
                    tie(player);
                    break;

                case 'scissors':
                    lose(player, computer);
                    break;
            }
            break;

        case 'scissors':
            switch (computer) {
                case 'rock':
                    lose(player, computer);
                    break;

                case 'paper':
                    win(player, computer);
                    break;

                case 'scissors':
                    tie(player);
                    break;
            }
            break;

        default:
            throw 'Player choice not recognized';
    }
}

function win(player, computer) {
    console.log(`You win! ${capitalizeFirst(player)} beats ${computer}!`);
}

function lose(player, computer) {
    console.log(`You lose. ${capitalizeFirst(computer)} beats ${player}.`);
}

function tie(player) {
    console.log(`It's a tie. You both chose ${player}.`)
}

function capitalizeFirst(string) {
    return string.replace(string[0], string[0].toUpperCase());
}