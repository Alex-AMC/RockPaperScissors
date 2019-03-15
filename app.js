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


function charConverter(letter){
    /*
    Converts from a character to a word. 
    */
    switch (letter){
        case "r":
            return "Rock".fontcolor("red");
        case "p":
            return "Paper".fontcolor("red");
        case "s":
            return "Scissors".fontcolor("red");
    }
}

function wins(userChoice,computerChoice){
    console.log("User Wins!");
    const userChoice_div = document.getElementById(userChoice); 
    userScore++; 
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${charConverter(userChoice)} beats ${charConverter(computerChoice)}. Human Wins!`
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 300);
}

function lose(userChoice,computerChoice){
    console.log("User Loses!");
    const userChoice_div = document.getElementById(userChoice); 
    compScore++; 
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${charConverter(userChoice)} loses to ${charConverter(computerChoice)}. Computer Wins!` 
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(userChoice,computerChoice){
    console.log("Draw!")
    const userChoice_div = document.getElementById(userChoice); 
    result_p.innerHTML = `${charConverter(userChoice)} does nothing to ${charConverter(computerChoice)}. DRAW!`
    userChoice_div.classList.add('grey-glow');
    setTimeout(function(){userChoice_div.classList.remove('grey-glow')}, 300);
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