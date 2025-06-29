const computerScore = document.getElementById("computerScore")
const userScore = document.getElementById("userScore")

computerScore.textContent = 0
userScore.textContent = 0

let computerCount = Number(computerScore.textContent)
let userCount = Number(userScore.textContent)

function gamePlay(userChoice){
    arr = ["rock","paper","scissors"]

    const index = Math.floor(Math.random() * arr.length);
    const computerChoice = arr[index]

    if(userChoice===computerChoice){
        alert("It's a draw")
    }

    else{
        switch (userChoice){
            case "rock":
                if(computerChoice==="paper"){
                    computerCount += 1
                    computerScore.textContent = computerCount
                }
                else{
                    userCount += 1
                    userScore.textContent = userCount
                }
                break
            case "paper":
                if(computerChoice==="rock"){
                    userCount += 1
                    userScore.textContent = userCount
                }
                else{
                    computerCount += 1
                    computerScore.textContent = computerCount 
                }
                break
            case "scissors":
                if(computerChoice==="rock"){
                    computerCount += 1
                    computerScore.textContent = computerCount
                }
                else{
                    userCount += 1
                    userScore.textContent = userCount
                }
        }

    }
  
}
