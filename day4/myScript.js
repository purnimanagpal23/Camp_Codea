let isOTurn = true;
let gameOver = false;

/*
This function gets the text from each of the buttons and checks to see if any of the button texts are the same in any specific row
If a row has all X or all O, it returns that button text which is either X or O (whoever won)
*/
function checkWinner() {
    //if there is a row has same char
    /***Day 4 code start: For loop to remove duplicate code ***/
    const buttonTexts = [];
    for (let i = 0; i < 9; i++) {
        buttonTexts[i] = document.getElementById(i).innerHTML;
    }
    /***Day 4 code end ***/

    //Write the first if statement first to see if the top row has a winner 
    /***Day 4 code start: Reference elements in the array by index ***/
    if (buttonTexts[0] == buttonTexts[1] && buttonTexts[1] == buttonTexts[2] && buttonTexts[0] != '+') {
        return buttonTexts[0]
    } else if (buttonTexts[3] == buttonTexts[4] && buttonTexts[4] == buttonTexts[5] && buttonTexts[3] != '+') {
        return buttonTexts[3]
    } else if (buttonTexts[6] == buttonTexts[7] && buttonTexts[7] == buttonTexts[8] && buttonTexts[6] != '+') {
        return buttonTexts[6]
    } else if (buttonTexts[0] == buttonTexts[3] && buttonTexts[3] == buttonTexts[6] && buttonTexts[0] != '+') {
        return buttonTexts[0]
    } else if (buttonTexts[1] == buttonTexts[4] && buttonTexts[4] == buttonTexts[7] && buttonTexts[1] != '+') {
        return buttonTexts[1]
    } else if (buttonTexts[2] == buttonTexts[5] && buttonTexts[5] == buttonTexts[8] && buttonTexts[2] != '+') {
        return buttonTexts[2]
    } else if (buttonTexts[0] == buttonTexts[4] && buttonTexts[4] == buttonTexts[8] && buttonTexts[0] != '+') {
        return buttonTexts[0]
    } else if (buttonTexts[2] == buttonTexts[4] && buttonTexts[4] == buttonTexts[6] && buttonTexts[2] != '+') {
        return buttonTexts[2]
    } else {
        return //no one won yet
    }
    /***Day 4 code end ***/
}

function playGame(buttonId) {
    if (gameOver)
        return
    
    if (document.getElementById(buttonId).innerHTML == 'O' || document.getElementById(buttonId).innerHTML == 'X') {
        return;
    }

    if (isOTurn) {
        document.getElementById(buttonId).innerHTML = 'O'
    } else {
        document.getElementById(buttonId).innerHTML = 'X'
    }

    isOTurn = !isOTurn;

    const winner = checkWinner();
    if (winner == 'O') {

        /***Day 4 code start: Update score board ***/
        const element = document.getElementById('o-win-times');
        let score = Number(element.innerHTML);
        score++;
        element.innerHTML = score;
        /***Day 4 code end ***/

        setTimeout(()=>alert("O wins"), 100);
        gameOver = true;
    } else if (winner == 'X') { 

        /***Day 4 code start: Update score board ***/
        const element = document.getElementById('x-win-times');
        let score = Number(element.innerHTML);
        score++;
        element.innerHTML = score;
        /***Day 4 code end ***/

        setTimeout(()=>alert("X wins"), 100);
        gameOver = true;
    } else {
        return
    }
};

/***Day 4 code start, reset game to initial state ***/
function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "+";
    }
    isOTurn = true;
    gameOver = false;
}
/***Day 4 code end ***/