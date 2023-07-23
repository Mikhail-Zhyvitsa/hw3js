const userName = prompt('Please, enter your name');
const play = () => {
    var userChoice = prompt('Rock, Scissors, Paper... Please make your move');
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = 'rock';
    } else if (computerChoice <= 0.67) {
      computerChoice = 'paper';
    } else {
      computerChoice = 'scissors';
    }

    console.log('Player Choice: ' + userChoice);
    console.log('Computer Choice: ' + computerChoice);
    if (computerChoice === userChoice) {
      return 'The result is tie!';
    }
    if (computerChoice === 'rock') {
      if (userChoice === 'scissors') {
        return 'Computer won this round';
      } else {
        if (userChoice === 'paper')
          return 'You won this round';
      }
    }
    if (computerChoice === 'paper') {
      if (userChoice === 'scissors') {
        return 'Computer won this round';
      } else {
        if (userChoice === "rock")
          return 'You won this rounds';
      }
    }
    if (computerChoice === 'scissors') {
      if (userChoice === 'rock') {
        return 'Computer won this round';
      } else {
        if (userChoice === 'scissors')
          return 'You won this round';
      }
    }
  };
  const round = () => {
    const res = play();
    console.log(res)
    cnt--
    wins[cnt] = res.startsWith('Player') ? 1 : 0;
    if (cnt === 0) {
      const total = wins.reduce((a, b) => a + b)
      console.log(`You beat the computer ${total} time${total===1?"":"s"}`)
      return
    }
    setTimeout(round, 10)  
  }
  round()
