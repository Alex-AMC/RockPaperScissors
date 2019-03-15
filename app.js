//Sets Starting Values 
let compScore = 0;
let userScore = 0; 
//Cashing the Dom for future use. 
const compScore_span = document.getElementById("computer-score");
const userScore_span = document.getElementById("user-score"); 
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function wins(userChoice,computerChoice){
    console.log("User Wins!");
    userScore++; 
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + " beats" + computerChoice + ". Human Wins!"
    
}

function lose(userChoice,computerChoice){
    console.log("User Loses!");
    compScore++;
    compScore_span.innerHTML = compScore;  
}

function draw(userChoice,computerChoice){
    console.log("Draw!")
}

function getCompChoice(){
    /*
    Calculates the choice for the computer
    */

    const choices = ['r', 'p' , 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice){
    /*
    The "Engine" of the game. 
    */

    const computerChoice = getCompChoice();
    console.log("User Has picked :  " + userChoice);
    console.log("Computer has picked : " + computerChoice);
    switch (userChoice + computerChoice) { 
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice,computerChoice);
            break; 
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;      
    }
}

function main() {
    /*
    Event Listeners 
    */

    rock_div.addEventListener('click', function(){
        //console.log("Nice Rock Bro!");
        game("r");
    })

    paper_div.addEventListener('click', function(){
        //console.log("Nice Paper Bro!");
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        //console.log("Nice Scissors Bro!");
        game("s");
    })

}

main();