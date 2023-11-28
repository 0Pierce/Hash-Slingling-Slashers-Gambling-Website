function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTrack() {
    const start = 0;
    const end = getRandomNumber(20, 30);
    return { start, end };
}

function moveHorse(horse) {
    const move = getRandomNumber(0, 3);
    horse.position += move;

    if (horse.position >= horse.end) {
        horse.position = horse.end;
    }
}

function placeBet(person, horse, amount) {
    if (amount <= person.currency) {
        person.bet = { horse: horse.number, amount: amount };
        console.log("Bet placed on Horse " + horse.number + " with amount: " + amount);
    } else {
        console.log("Insufficient funds for the bet!");
    }
}

function race() {
    let horse1 = { ...generateTrack(), number: 1, position: 0 };
    let horse2 = { ...generateTrack(), number: 2, position: 0 };
    let horse3 = { ...generateTrack(), number: 3, position: 0 };
    let horse4 = { ...generateTrack(), number: 4, position: 0 };

    const person = { currency: 100, bet: null };

    const betAmount = parseInt(prompt("Place a bet amount:"));
    const selectedHorse = parseInt(prompt("Select a horse (1-4):"));

    if (selectedHorse >= 1 && selectedHorse <= 4) {
        const selectedHorseObject = [horse1, horse2, horse3, horse4].find(horse => horse.number === selectedHorse);
        placeBet(person, selectedHorseObject, betAmount);
    } else {
        console.log("Invalid horse selection!");
        return;
    }

    // Run the race
    while (horse1.position < horse1.end && horse2.position < horse2.end && horse3.position < horse3.end && horse4.position < horse4.end) {
        moveHorse(horse1);
        moveHorse(horse2);
        moveHorse(horse3);
        moveHorse(horse4);

        console.log("Race update:");
        console.log("Horse 1: " + horse1.position + "/" + horse1.end);
        console.log("Horse 2: " + horse2.position + "/" + horse2.end);
        console.log("Horse 3: " + horse3.position + "/" + horse3.end);
        console.log("Horse 4: " + horse4.position + "/" + horse4.end);
    }

    const winners = [horse1, horse2, horse3, horse4].sort((a, b) => b.position - a.position);
    console.log("Race finished!");
    console.log("Winner: Horse " + winners[0].number);

    if (person.bet && person.bet.horse === winners[0].number) {
        const winnings = person.bet.amount * 2;
        person.currency += winnings;
        console.log("Congratulations! You won " + winnings + " currency.");
    } else {
        console.log("Better luck next time! You lost your bet of " + person.bet.amount + " currency.");
    }
}

race();
