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