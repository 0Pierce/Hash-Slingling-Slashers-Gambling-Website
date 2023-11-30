

const rotationValues = [ [
    {minDegree: 0, maxDegree: 9.7, value: 0},
    {minDegree: 9.8, maxDegree: 19.4, value: 32},
    {minDegree: 19.5, maxDegree: 29.1, value: 15},
    {minDegree: 29.2, maxDegree: 38.8, value: 19},
    {minDegree: 38.9, maxDegree: 48.5, value: 4},
    {minDegree: 48.6, maxDegree: 58.2, value: 21},
    {minDegree: 58.3, maxDegree: 67.9, value: 2},
    {minDegree: 68.0, maxDegree: 77.6, value: 25},
    {minDegree: 77.7, maxDegree: 87.3, value: 17},
    {minDegree: 87.4, maxDegree: 97.0, value: 34},
    {minDegree: 97.1, maxDegree: 106.7, value: 6},
    {minDegree: 106.8, maxDegree: 116.4, value: 27},
    {minDegree: 116.5, maxDegree: 126.1, value: 13},
    {minDegree: 126.2, maxDegree: 135.8, value: 36},
    {minDegree: 135.9, maxDegree: 145.5, value: 11},
    {minDegree: 145.6, maxDegree: 155.2, value: 30},
    {minDegree: 155.3, maxDegree: 164.9, value: 8},
    {minDegree: 165.0, maxDegree: 174.6, value: 23},
    {minDegree: 174.7, maxDegree: 184.3, value: 10},
    {minDegree: 184.4, maxDegree: 194.0, value: 5},
    {minDegree: 194.1, maxDegree: 203.7, value: 24},
    {minDegree: 203.8, maxDegree: 213.4, value: 16},
    {minDegree: 213.5, maxDegree: 223.1, value: 33},
    {minDegree: 223.2, maxDegree: 232.8, value: 1},
    {minDegree: 232.9, maxDegree: 242.5, value: 20},
    {minDegree: 242.6, maxDegree: 252.2, value: 14},
    {minDegree: 252.3, maxDegree: 261.9, value: 31},
    {minDegree: 262.0, maxDegree: 271.6, value: 9},
    {minDegree: 271.7, maxDegree: 281.3, value: 22},
    {minDegree: 281.4, maxDegree: 291.0, value: 18},
    {minDegree: 291.1, maxDegree: 300.7, value: 29},
    {minDegree: 300.8, maxDegree: 310.4, value: 7},
    {minDegree: 310.5, maxDegree: 320.1, value: 28},
    {minDegree: 320.2, maxDegree: 329.8, value: 12},
    {minDegree: 329.9, maxDegree: 339.5, value: 35},
    {minDegree: 339.6, maxDegree: 349.2, value: 3},
    {minDegree: 349.2, maxDegree: 360, value: 26}
]];

let balance = 100;

    function getRandomRouletteValue() {
        const randomDegree = Math.random() * 360;

        let selectedValue = null;
        for (let i = 0; i < rotationValues[0].length; i++) {
            const range = rotationValues[0][i];
            if (randomDegree >= range.minDegree && randomDegree < range.maxDegree) {
                selectedValue = range.value;
                break;
            }
        }
        const isEven = selectedValue % 2 === 0;
        return { value: selectedValue, isEven };
        }

    function placeBet() {
        const betAmount = parseFloat(document.getElementById('betInput').value);
        const userGuess = document.getElementById('guessInput').value.toLowerCase();
        const { value, isEven } = getRandomRouletteValue();

        console.log(`Random Roulette Value: ${value}, Is Even: ${isEven}`);

        if (isNaN(betAmount) || betAmount <= 0) {
            alert('Please enter a valid bet amount.');
            return;
        }

        if (balance < betAmount) {
            alert('Insufficient balance. Please enter a smaller bet amount.');
            return;
        }

        if ((userGuess === 'even' && isEven) || (userGuess === 'odd' && !isEven)) {
            alert(`Congratulations! You won $${betAmount * 2}!`);
            balance += betAmount * 2;
        } else {
            alert(`Sorry, you lost $${betAmount}.`);
            balance -= betAmount;
        }
        updateBalance();
    }

    function updateBalance() {
        document.getElementById('balance').textContent = `Balance: $${balance.toFixed(2)}`;
    }