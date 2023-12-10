function getUserBet() {
    var bet = parseFloat(prompt("Enter the amount you want to bet:"));

    if (isNaN(bet) || bet <= 0) {
        alert("Invalid bet amount. Please enter a positive number.");
        return getUserBet();
    }

    return bet;
}

function coinFlipGameWithBetting() {
    var userChoice = getUserChoice();
    var userBet = getUserBet();
    var coinResult = flipCoin();

    console.log("You bet: $" + userBet);
    console.log("You chose: " + userChoice);
    console.log("The coin landed on: " + coinResult);

    if (userChoice === coinResult) {
        var winnings = userBet * 1.5;
        console.log("Congratulations! You win $" + winnings + "!");
    } else {
        console.log("Sorry, you lose $" + userBet + ". Better luck next time!");
    }
}

coinFlipGameWithBetting();
