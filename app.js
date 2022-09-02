const Game = () =>{

    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const startBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const gameScreen = document.querySelector(".match");

        startBtn.addEventListener("click",()=>{
            introScreen.classList.add("fadeOut");
            gameScreen.classList.add("fadeIn");
        });
    };

    const playGame = ()=>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function (){
                this.style.animation = "";
            });
        });

        const computerOptions = ["rock","paper","scissors"];
        
        options.forEach(option =>{
            
            
            option.addEventListener("click",function (){
                const computerNumber= Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(()=>{
                    // Here We call Compare Hands
                compareHands(this.textContent, computerChoice);
                //Update Images 
                playerHand.src = `images/${this.textContent}.png`;
                computerHand.src = `images/${computerChoice}.png`;
                },2000)

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                
            });
        });

    };

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");

        
        //Checking for a tie
        if (playerChoice === computerChoice) {
          winner.textContent = "It is a tie";
          // checkScore();
          return;
        }
        //Check for Rock
        if (playerChoice === "rock") {
          if (computerChoice === "scissors") {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            // checkScore();
            return;
          } else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            // checkScore();
            return;
          }
        }
        //Check for Paper
        if (playerChoice === "paper") {
          if (computerChoice === "scissors") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            // checkScore();
            return;
          } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            // checkScore();
            return;
          }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
          if (computerChoice === "rock") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            // checkScore();
            return;
          } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            // checkScore();
            return;
          }
        }

        
    };

    


    //Calling the all inner function 
    startGame();
    playGame();
};

Game();