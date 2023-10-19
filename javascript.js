function playerChoice() {
    const choice = prompt('Choose Rock, Paper, or Scissors.').toLowerCase();
    while (!(checkChoice(choice))) {
        alert('Choice did not match rock, paper, or scissors. Try again.');
        choice = prompt('Choose Rock, Paper, or Scissors.').toLowerCase();
    }
    return choice;
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
                    tie();
                    break;

                case 'paper':
                    lose();
                    break;

                case 'scissors':
                    win();
                    break;
            }
            break;

        case 'paper':
            switch (computer) {
                case 'rock':
                    win();
                    break;

                case 'paper':
                    tie();
                    break;

                case 'scissors':
                    lose();
                    break;
            }
            break;

        case 'scissors':
            switch (computer) {
                case 'rock':
                    lose();
                    break;

                case 'paper':
                    win();
                    break;

                case 'scissors':
                    tie();
                    break;
            }
            break;

        default:
            throw 'Player choice not recognized';
    }
}

function win() {

}

function lose() {

}

function tie() {

}