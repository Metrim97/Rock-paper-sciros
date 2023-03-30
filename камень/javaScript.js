function computerPlay() {
    let choices = ['roccia', 'carta', 'forbici']
    return choices(Math.floor(Math.random() * choices.length))
}
let playerScore = 0;
let computerScore = 0;
const rocciaCartaForbici = ['roccia', 'carta', 'forbici']
function playerSelection() {
    let player = prompt('Ciao inserisci forbici da roccia o carta')

    let validChose = false;
    while (!validChose) {
        if (rocciaCartaForbici.includes(player)) {
            validChose = true;
            return player
        } else {
            alert('Si prega di inserire correttamente forbici di carta di pietra')
            return player = player.toLowerCase()

        }
    }
}
function computerPlay() {
    let computerChoice = ['roccia', 'carta', 'forbici']
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]

}
function playRound(playerSelection) {
 
    let computerSelection = computerPlay()
    let result = ''
    if ((playerSelection == 'roccia ' && computerSelection == 'forbici ') ||
        (playerSelection == 'forbici ' && computerSelection == 'carta ') ||
        (playerSelection == 'carta ' && computerSelection == 'roccia ')) {
        console.log('la tua scelta ' + playerSelection + 'Selezione computerizzata ' + computerSelection);
        return 'Hai Vinto '
    } else if (playerSelection == computerSelection) {
        console.log('la tua scelta ' + playerSelection + 'Selezione computerizzata ' + computerSelection);
        return 'disegno '
    } else {
        console.log('la tua scelta ' + playerSelection + 'Selezione computerizzata ' + computerSelection);
        return 'hai perso '
    }
}
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log('Benvenuto')
    for (let i = 0; i < 5; i++) {
        const playerChoice = playerSelection();
        const computerChoice = computerPlay();
        const result = playRound(playerChoice, computerChoice);
        console.log(result)
        console.log("-------------")
        if (result == 'Hai Vinto') {
            scorePlayer++;
        } else if (result == 'hai perso') {
            scoreComputer++
        }
    }
    console.log('Game Over');
    if (scorePlayer > scoreComputer) {
        console.log('Il giocatore ha vinto')
    } else if (scorePlayer < scoreComputer) {
        console.log('Il computer ha vinto')
    } else {
        console.log('Hai un pareggio')
    }
}
game()