// define variables in Win Loss Tie record
var w = 0;
var l = 0;
var t = 0;

// set playAgain to true so you play at least one time
var playAgain = true;

// list possible selections
choices = ['R','P','S', 'L', 'V'];


// makes sure the user input is a valid option
function validChoice(c){
    if (choices.includes(c)){
        return true;
    } else {
        return false;
    } // end else
} // end function



// returns the computer's choice
function computerChoice (){
    var rand = Math.floor((Math.random() * choices.length));
    return choices[ rand ];
} // end function




// sends win-loss record to the console and the browser
function showRecord(){
    var record = "Wins: " + w + `
Losses: ` + l + `
Ties: ` + t;
    console.log(record);
    alert (record);
    return;
} // end function


// sends both choices to the console and the browser
function showChoices(u, i){
    var ch = "You chose: " + u + " and I chose: " + i;
    console.log(ch);
    alert (ch);
    return;
} // end function



// notifies user of a loss and updates record
function iWin (){
    alert("I win!");
    l++;
    return;
} // end function


// notifies user of a win and updates record
function uWin (){
    alert("You win!");
    w++;
    return;
} // end function

// notifies user of a tie and updates record
function tie (){
    alert("It was a tie...");
    t++;
    return;
} // end function

function determineWinner(userChoice, compChoice){
    if (userChoice === compChoice){
        tie();
    } else if ( userChoice === 'R') {
        if (compChoice === 'S') { 
            alert("Rock smashes Scissors.");
            uWin(); 
        }   else if (compChoice === 'L') { 
            alert("Rock crushed Lizard.");
            uWin(); 
        }   else if (compChoice === 'V') { 
            alert("Spock vaporized Rock.");
            iWin(); 
        }   else if (compChoice === 'P') { 
            alert("Paper covers Rock.");
            iWin(); 
        }   
    } else if ( userChoice === 'P') {
        if (compChoice === 'R') { 
            alert("Paper covers Rock.");
            uWin(); 
        }   else if (compChoice === 'V') { 
            alert("Paper disproves Spock.");
            uWin(); 
        }   else if (compChoice === 'S') { 
            alert("Scissors cuts Paper.");
            iWin(); 
        }   else if (compChoice === 'L') { 
            alert("Lizard eats Paper.");
            iWin(); 
        }
    } else if ( userChoice === 'S') {
        if (compChoice === 'P') { 
            alert("Scissors cuts Paper.");
            uWin(); 
        }   else if (compChoice === 'L') { 
            alert("Scissors decapitates Lizard.");
            uWin(); 
        }   else if (compChoice === 'V') { 
            alert("Spock smashes Scissors.");
            iWin(); 
        }   else if (compChoice === 'R') { 
            alert("Rock crushes Scissors.");
            iWin(); 
        }
    } else if ( userChoice === 'L') {
        if (compChoice === 'V') { 
            alert("Lizard poisons Spock.");
            uWin(); 
        }   else if (compChoice === 'P') { 
            alert("Lizard eats Paper.");
            uWin(); 
        }   else if (compChoice === 'S') { 
            alert("Scissors decapitates Lizard.");
            iWin(); 
        }   else if (compChoice === 'R') { 
            alert("Rock crushes Lizard");
            iWin(); 
        }   
    } else if ( userChoice === 'V') {
        if (compChoice === 'S') { 
            alert("Spock smashes Scissors.");
            uWin(); 
        }   else if (compChoice === 'R') { 
            alert("Spock vaporizes Rock.");
            uWin(); 
        }   else if (compChoice === 'P') { 
            alert("Paper disproves Spock.");
            iWin(); 
        }   else if (compChoice === 'L') { 
            alert("Lizard poisons Spock.");
            iWin(); 
        }
    } else {
        alert("Something went wrong. Do over!");
    }// end else
    return;
} // end function


// plays the game with the user
function play() {

    // asks user to make a selection
    var userChoice = prompt("Please select 'R' for rock; 'P' for paper; 'S' for scissors; 'L' for lizard; or 'V' for Spock.");
    userChoice = userChoice.toUpperCase();

    // if user chose a valid option play the game, if not, have them try again
    if(validChoice(userChoice)){
        compChoice = computerChoice();
        showChoices(userChoice, compChoice);
        determineWinner(userChoice, compChoice);
        showRecord();
        playAgain = confirm ("Do you want to play again?");
    } else {
        alert("You entered an invalid choice.");
    }

    return;
} // end function play




// loop to keep playing until user wants to stop
while (playAgain == true) {
    play();
} // end while