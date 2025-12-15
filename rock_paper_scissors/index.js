const button = document.querySelector('button');
button.addEventListener('click', () => {
    const userInput = document.getElementById('input').value.toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
   

const humanPlay = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`)
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if(humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors'){
        console.log('Invalid input! Please choose rock, paper, or scissors.')
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
};
humanPlay(userInput, computerChoice);

// location.reload();
 });