let isOTurn = true;
// document.getElementById('nextPlayer').innerHTML = 'O';
function playGame(elementId) {
	if (isOTurn) {
		document.getElementById(elementId).innerHTML = 'O'
	} else {
		document.getElementById(elementId).innerHTML = 'X'
	}
	isOTurn = !isOTurn;
	// document.getElementById('nextPlayer').innerHTML = isOTurn?'O':'X';
};
