function playerChoice(roundNum) {
    let choice = promptChoice(roundNum);
    while (!(checkChoice(choice))) {
        alert('Choice did not match rock, paper, or scissors. Try again.');
        choice = promptChoice(roundNum);
    }
    return choice;
}

function promptChoice(roundNum) {
    const choice =  prompt(`Round #${roundNum}: Choose rock, paper, or scissors.`);
    return (choice === null) ? null : choice.toLowerCase(); 
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
    alert(`You win! The computer chose ${computer}, and ${player} beats ${computer}!`);
    return 'win';
}

function lose(player, computer) {
    alert(`You lose. The computer chose ${computer}, and ${computer} beats ${player}.`);
    return 'lose';
}

function tie(player) {
    alert(`It's a tie. You both chose ${player}.`)
    return 'tie';
}

function playRound(roundNum) {
    const player = playerChoice(roundNum);
    const computer = computerChoice();
    const result = compareChoices(player, computer);
    return result(player, computer);
}

function game() {
    alert('Welcome to Rock, Paper, Scissors! You will be playing 5 rounds against a computer. Press OK to continue.');
    
    let wins = 0
      , losses = 0
      , ties = 0
      , result;

    for (round = 1; round <= 5; round++) {
        result = playRound(round);

        switch (result) {
            case 'win':
                wins++;
                break;

            case 'lose':
                losses++;
                break;

            case 'tie':
                ties++;
                break;
        }
    }

    alert(`The game is over. The final results are: ${wins} wins, ${ties} ties, and ${losses} losses.`)
}

game();