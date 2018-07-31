var isOTurn = true;
var gameOver = false;

function checkWinner() {
    //if there is a row has same char
    var elements = [];
    for (var i = 0; i < 9; i++) {
        elements[i] = document.getElementById(i).innerHTML;
    }

    if (elements[0] == elements[1] && elements[1] == elements[2] && elements[0] != '') {
        return [0, 1, 2];
    } else if (elements[3] == elements[4] && elements[4] == elements[5] && elements[3] != '') {
        return [3, 4, 5];
    } else if (elements[6] == elements[7] && elements[7] == elements[8] && elements[6] != '') {
        return [6, 7, 8];
    } else if (elements[0] == elements[3] && elements[3] == elements[6] && elements[0] != '') {
        return [0, 3, 6];
    } else if (elements[1] == elements[4] && elements[4] == elements[7] && elements[1] != '') {
        return [1, 4, 7];
    } else if (elements[2] == elements[5] && elements[5] == elements[8] && elements[2] != '') {
        return [2, 5, 8];
    } else if (elements[0] == elements[4] && elements[4] == elements[8] && elements[0] != '') {
        return [0, 4, 8];
    } else if (elements[2] == elements[4] && elements[4] == elements[6] && elements[2] != '') {
        return [2, 4, 6];
    } else {
        return
    }
}

function myFunction(elementId) {
    if (gameOver)
        return
    //Fixed me, if already been clicked, don't do anything
    if (document.getElementById(elementId).innerHTML == 'O' || document.getElementById(elementId).innerHTML == 'X') {
        return;
    }
    if (isOTurn) {
        document.getElementById(elementId).innerHTML = 'O'
    } else {
        document.getElementById(elementId).innerHTML = 'X'
    }
    isOTurn = !isOTurn;

    var winner = checkWinner();
    if (winner &&  document.getElementById(winner[0]).innerHTML== 'O') {
        setTimeout(function () {
            for(var i = 0; i< winner.length; i++){

                document.getElementById(winner[i]).classList.add('blink_me');
            }
        
        }, 100);
        document.getElementById('o-win-times').innerHTML++;
        gameOver = true;
    } else if (winner && document.getElementById(winner[0]).innerHTML == 'X') {
        setTimeout(function () {
            for(var i = 0; i< winner.length; i++){
                document.getElementById(winner[i]).classList.add('blink_me');
            }
        
        }, 100);
        document.getElementById('x-win-times').innerHTML++;
        gameOver = true;
    } else {
        return
    }
};

function resetGame() {
    for (var i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).classList.remove('blink_me');
    }
    isOTurn = true;
    gameOver = false;
}
// element.onclick = function () { alert('did stuff #2'); };