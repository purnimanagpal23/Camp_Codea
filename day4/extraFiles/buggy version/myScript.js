var isOTurn = true;
var gameOver = false;

function checkWinner() {
    //if there is a row has same char
    /***Day 4 code start, For loop to remove duplicate code ***/
    var buttonTexts = [];
    for (var i = 0; i < 9; i++) {
        buttonTexts[i] = document.getElementById(i).innerHTML;
    }
    /***Day 4 code end ***/

    if (buttonTexts[0] == buttonTexts[1] && buttonTexts[1] == buttonTexts[2] && buttonTexts[0] != '+') {
        return buttonTexts[0]
    } else if (buttonTexts[3] == buttonTexts[4] && buttonTexts[4] == buttonTexts[5] && buttonTexts[0] != '+') {
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
        return
    }
}

function playGame(buttonId) {
    if (gameOver)
        return
    //Fix me 
    if (document.getElementById(buttonId).innerHTML = 'O' || document.getElementById(buttonId).innerHTML == 'X') {
        return;
    }
    if (isOTurn) {
        document.getElementById(buttonId).innerHTML = 'O'
    } else {
        document.getElementById(buttonId).innerHTML = 'X'
    }
    isOTurn = !isOTurn;

    var winner = checkWinner();
    if (winner == 'O') {
        setTimeout(function () {
            alert("O wins");
        }, 100);

        /***Day 4 code start, update score board***/
        document.getElementById('o-win-times').innerHTML++;
        /***Day 4 code end ***/
        gameOver = true;
    } else if (winner == 'X') {
        setTimeout(function () {
            alert("X wins");
        }, 100);
        /***Day 4 code start ***/
        document.getElementById('x-win-times').innerHTML++;
        /***Day 4 code end ***/
        gameOver = true;
    } else {
        return
    }
};

/***Day 4 code start, reset game to initial state ***/
function resetGame() {
    for (var i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "+";
    }
    isOTurn = true;
    gameOver = false;
}
/***Day 4 code end ***/