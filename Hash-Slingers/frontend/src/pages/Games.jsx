import {React,useState} from 'react'
import Header from '../components/Header.jsx'
import '../styles/Games.css'
import wheelIcon from "../assets/images/rouletteWhl.png"
import h1 from "../assets/images/horse0.png"
import h2 from "../assets/images/horse1.png"
import h3 from "../assets/images/horse2.png"
import h4 from "../assets/images/horse3.png"
import Footer from '../components/Footer.jsx'
function Games() {
  const [coinResult, setCoinResult] = useState(0);

  const headsImage = require("../assets/images/heads.png")
  const tailsImage = require("../assets/images/tails.png")


 


    const rotationValues = [
      [
        { minDegree: 0, maxDegree: 9.7, value: 0 },
        { minDegree: 9.8, maxDegree: 19.4, value: 32 },
        { minDegree: 19.5, maxDegree: 29.1, value: 15 },
        { minDegree: 29.2, maxDegree: 38.8, value: 19 },
        { minDegree: 38.9, maxDegree: 48.5, value: 4 },
        { minDegree: 48.6, maxDegree: 58.2, value: 21 },
        { minDegree: 58.3, maxDegree: 67.9, value: 2 },
        { minDegree: 68.0, maxDegree: 77.6, value: 25 },
        { minDegree: 77.7, maxDegree: 87.3, value: 17 },
        { minDegree: 87.4, maxDegree: 97.0, value: 34 },
        { minDegree: 97.1, maxDegree: 106.7, value: 6 },
        { minDegree: 106.8, maxDegree: 116.4, value: 27 },
        { minDegree: 116.5, maxDegree: 126.1, value: 13 },
        { minDegree: 126.2, maxDegree: 135.8, value: 36 },
        { minDegree: 135.9, maxDegree: 145.5, value: 11 },
        { minDegree: 145.6, maxDegree: 155.2, value: 30 },
        { minDegree: 155.3, maxDegree: 164.9, value: 8 },
        { minDegree: 165.0, maxDegree: 174.6, value: 23 },
        { minDegree: 174.7, maxDegree: 184.3, value: 10 },
        { minDegree: 184.4, maxDegree: 194.0, value: 5 },
        { minDegree: 194.1, maxDegree: 203.7, value: 24 },
        { minDegree: 203.8, maxDegree: 213.4, value: 16 },
        { minDegree: 213.5, maxDegree: 223.1, value: 33 },
        { minDegree: 223.2, maxDegree: 232.8, value: 1 },
        { minDegree: 232.9, maxDegree: 242.5, value: 20 },
        { minDegree: 242.6, maxDegree: 252.2, value: 14 },
        { minDegree: 252.3, maxDegree: 261.9, value: 31 },
        { minDegree: 262.0, maxDegree: 271.6, value: 9 },
        { minDegree: 271.7, maxDegree: 281.3, value: 22 },
        { minDegree: 281.4, maxDegree: 291.0, value: 18 },
        { minDegree: 291.1, maxDegree: 300.7, value: 29 },
        { minDegree: 300.8, maxDegree: 310.4, value: 7 },
        { minDegree: 310.5, maxDegree: 320.1, value: 28 },
        { minDegree: 320.2, maxDegree: 329.8, value: 12 },
        { minDegree: 329.9, maxDegree: 339.5, value: 35 },
        { minDegree: 339.6, maxDegree: 349.2, value: 3 },
        { minDegree: 349.2, maxDegree: 360, value: 26 },
      ],
    ];
    const [rotation, setRotation] = useState(0);
    
    let balance = 100; // Initial balance
    let selectedRange = null; // Stores rotation
    let tempRotation = null;
    function getRandomRouletteValue() {
      const randomDegree = Math.random() * 360;

      let selectedValue = null;
      for (let i = 0; i < rotationValues[0].length; i++) {
        const range = rotationValues[0][i];
        if (randomDegree >= range.minDegree &&randomDegree < range.maxDegree) {
          selectedValue = range.value;
          break;
        }
      }

      const isEven = selectedValue % 2 === 0;

      if (selectedValue !== null) {
        selectedRange = rotationValues[0].find(
          (range) => range.value === selectedValue
        );
    }

      return { value: selectedValue, isEven };
    }

    function placeBet() {
      const betAmount = parseFloat(document.getElementById("betInput").value);
      const userGuess = document
        .getElementById("guessInput")
        .value.toLowerCase();
      const { value, isEven } = getRandomRouletteValue();

      if (selectedRange) {
        setRotation(-selectedRange.minDegree);
      }

      console.log(`Random Roulette Value: ${value}, Is Even: ${isEven}`);

      if (isNaN(betAmount) || betAmount <= 0) {
        alert("Please enter a valid bet amount.");
        return;
      }

      if (balance < betAmount) {
        alert("Insufficient balance. Please enter a smaller bet amount.");
        return;
      }

      if (
        (userGuess === "even" && isEven) ||
        (userGuess === "odd" && !isEven)
      ) {
        
        setTimeout(() => {
          alert(`Congratulations! You won $${betAmount * 2}!`);
          balance += betAmount * 2;
        }, 1500);
      
      } else {
        
        setTimeout(() => {
          alert(`Sorry, you lost $${betAmount}.`);
        balance -= betAmount;
        }, 1500);
        
      }

      updateBalance();
    }

    function updateBalance() {
      document.getElementById(
        "balance"
      ).textContent = `Balance: $${balance.toFixed(2)}`;
    }
    const [hBet, sethBet] = useState(0);
    const [horse, setHorse] = useState(0);










    const [translations, setTranslations] = useState([0, 0, 0, 0]);
    const[winner, setWinner] = useState();
    const[won, setwon] = useState();
    //const [places, setPlaces] = useState([3,2,1,0]);

    function horseGame(){
      console.log(hBet)
      console.log(horse);
      const goalNumber = Math.floor(Math.random() * 100) + 1;

  
    let winningHorse = null;
    let closestDistance = Infinity;

    //sets the winning horse
    for (let i = 1; i <= 4; i++) {
       
        const horseNumber = Math.floor(Math.random() * 100) + 1;
        const distance = Math.abs(horseNumber - goalNumber);
        if (distance < closestDistance) {
            closestDistance = distance;
            winningHorse = i;
        }

        
        console.log(`Horse ${i} number: ${horseNumber}`);
       
        
    }
    if(winningHorse == 1){
      console.log("Set first horse first")
      setWinner("First Horse")
      setTranslations([425, 75, 250,50])
    }else if(winningHorse == 2){
      console.log("Set second horse first")
      setWinner("Second Horse")
      setTranslations([305, 425, 150,25])
    }else if(winningHorse == 3){
      console.log("Set third horse first")
      setWinner("Third Horse")
      setTranslations([305, 150, 425,90])
    }else{
      console.log("Set fourth horse first")
      setWinner("Fourth Horse")
      setTranslations([225, 150, 75,425])
    }
    console.log(`Goal number: ${goalNumber}`);
    console.log(`Winning horse: ${winningHorse}`);
    if (horse === winningHorse) {
        console.log("Congratulations! You won!");
        setwon("You win!!")
        
    } else {
        console.log("Sorry, you lost. Try again!");
        setwon("You lose!!")
    }


  


  
    setTimeout(() => {
      setTranslations([0, 0, 0, 0]);
      setWinner();
      setwon();
    }, 3500);
  }
  
  

  function flipCoin() {
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }

  const [fBet, setfBet] = useState(0);
  const [isButtonClicked, setButtonClicked] = useState(false);
  function coinFlip() {
    if (fBet < 1) {
      alert("Please enter a bet amount more than $1.")
      return;
    }

    const userChoice = fBet > 0.5 ? 'heads' : 'tails';
  
    const coinResult = flipCoin();
    setCoinResult(coinResult);
    setButtonClicked(!isButtonClicked);
  
    if (userChoice.toLowerCase() === coinResult) {
      const winnings = fBet * 1.5;
      alert("Congratulations! You win $" + winnings + "!");
    } else {
      alert("Sorry, you lose $" + fBet + ". Better luck next time!");
    }
  }
  

  return (
    <>
    
    <Header/>
    <div className="gamesBody">
    <div className="playableGames">
      <div className="coinTossGame"></div>
      <div className="rouletteGame">
      <h1>Roulette: </h1>
      
    <p id="balance">Balance: $100</p>
    

    <form id="betForm">
      <label for="betInput">Enter your bet amount:</label>
      <input
        type="number"
        id="betInput"
        placeholder="Enter bet amount"
        required
      />
      <label for="guessInput">Do you bet on 'even' or 'odd'?</label>
      <input
        type="text"
        id="guessInput"
        placeholder="Enter 'even' or 'odd'"
        required
      />
      <button type="button" onClick={placeBet} >Place Bet</button>
    </form>

    <div className="gameWheel">
      <img src={wheelIcon} alt="" style={{  transform: `rotate(${rotation}deg)`,
       transition: 'transform 1s ease-in-out'
    
    
    }} />
    </div>
   
      </div>
      <hr />
    <div className="horceRacing">

      <div className="horseTrack">
        <div className="horse" >
        <img src={h1} alt="" style={{ transform: `translateX(${translations[0]}px)`, transition: 'transform 1s ease-in-out' }}/>
        <hr />
      </div>
      
      <div className="horse" >
        <img src={h2} alt="" style={{ transform: `translateX(${translations[1]}px)`, transition: 'transform 1s ease-in-out' }}/>
        <hr />
      </div>
      
      <div className="horse" >
        <img src={h3} alt="" style={{ transform: `translateX(${translations[2]}px)`, transition: 'transform 1s ease-in-out' }} />
        <hr />
      </div>
      
      <div className="horse" >
        <img src={h4} alt="" style={{ transform: `translateX(${translations[3]}px)`, transition: 'transform 1s ease-in-out' }} />
        <hr />
      </div>
      
      </div>

      <div className="horseInput">
        <div className="horseIContent">
      <form onSubmit={(e) => {e.preventDefault();horseGame();}}>
        <input type="number" placeholder='Enter Bet' onChange={(e) => sethBet(e.target.value)} required/>
        <label htmlFor="Horses">Horses</label>
        <select name="Horses" id="Horses" onChange={(e) => setHorse(parseInt(e.target.value, 10))}>
          <option value="1">Horse One</option>
          <option value="2">Horse Two</option>
          <option value="3">Horse Three</option>
          <option value="4">Horse Four</option>
        </select>
        
        <button type="submit">Start Race</button>
        </form>
        <div className="Winner">
         <div className="WinnerContent">
           <h3>Winner is: </h3>
           <h2>{winner}</h2>
           <h1>{won}</h1>
         </div>
        
        </div>
       
        </div>
      </div>
    
      </div>
      <hr />
      <div className="coinFlipGame">
            <h1>Coin Flip</h1>
            <form id="coinBetForm">
              <label htmlFor="coinBetInput">Enter your bet amount:</label>
              <input
                type="number"
                id="coinBetInput"
                placeholder="Enter bet amount"
                value={fBet}
                onChange={(e) => setfBet(e.target.value)}
                required
              />

              <label htmlFor="coinChoice">Choose Heads or Tails:</label>
              <select id="coinChoice" name="coinChoice">
                <option value="heads">Heads</option>
                <option value="tails">Tails</option>
              </select>
            </form>

            <button onClick={coinFlip}>Flip Coin</button>
            {coinResult !== null && (
              <><p>
                The coin landed on: {coinResult === 'heads' ? 'Heads' : 'Tails'}
              </p>
              <img
              src={coinResult === 'heads' ? headsImage : tailsImage}
              alt={coinResult === 'heads' ? 'Heads' : 'Tails'}
              style={{
                transform: isButtonClicked ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.5s ease-in-out',
              }}
              />
            </>
          )}
    </div>
  </div>
  </div>
  <Footer />
    
    </>
    
  )
}

export default Games
