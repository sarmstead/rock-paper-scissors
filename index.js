// 0 = rock
// 1 = paper
// 2 = scissors

let computer = Math.floor(Math.random() * 3);

const checkWinner = (user) => {
    let winner = '';
    
    if(user === computer) {
        winner = 'tie';
    } else if (user > computer) {
        winner = 'you';
    } else if (computer > user) {
        winner = 'computer';
    }

    return winner;
}

console.log(checkWinner(2));