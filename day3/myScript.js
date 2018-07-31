let isOTurn = true; //true if it is O's turn, false means it is X's turn 
let gameOver = false; //false until then game is over 


/*
This function gets the text from each of the buttons and checks to see if any of the button texts are the same in any specific row
If a row has all X or all O, it returns that button text which is either X or O (whoever won)
*/
function checkWinner(){
    //if there is a row has same char
    const buttonText0= document.getElementById(0).innerHTML;
    const buttonText1= document.getElementById(1).innerHTML;
    const buttonText2= document.getElementById(2).innerHTML;
    const buttonText3= document.getElementById(3).innerHTML;
    const buttonText4= document.getElementById(4).innerHTML;
    const buttonText5= document.getElementById(5).innerHTML;
    const buttonText6= document.getElementById(6).innerHTML;
    const buttonText7= document.getElementById(7).innerHTML;
    const buttonText8= document.getElementById(8).innerHTML;
    

    //Write the first if statement first to see if the top row has a winner 
    //***Day 3 code start***//
    if(
        buttonText0 == buttonText1
        && buttonText1 == buttonText2
        && buttonText0 != '+'
    ){
        return buttonText0
    }else if(
        buttonText3 == buttonText4
        && buttonText4 == buttonText5
        && buttonText3 != '+'
    ){ 
        return buttonText3
    }else if(
        buttonText6 == buttonText7
        && buttonText7 == buttonText8
        && buttonText6 != '+'
    ){
        return buttonText6
    }else if(
        buttonText0 == buttonText3
        && buttonText3 == buttonText6
        &&buttonText0 != '+'
    ){
        return buttonText0
    }else if(
        buttonText1 == buttonText4
        && buttonText4 == buttonText7
        && buttonText1 != '+'
    ){
        return buttonText1
    }else if(
        buttonText2 == buttonText5
        && buttonText5 == buttonText8
        && buttonText2 != '+'
    ){
        return buttonText2
    }else if(
        buttonText0 == buttonText4
        && buttonText4 == buttonText8
        && buttonText0 != '+'
    ){
        return buttonText0
    }else if(
        buttonText2 == buttonText4
        && buttonText4 == buttonText6
        && buttonText2 != '+'
    ){
        return buttonText2
    }else{
        return //no one won yet
    }
    //***Day 3 code end***//
}


function playGame(elementId) {
    //game is over, return nothing 
    if(gameOver){
        return
    }

    //***Day 3 code start***// 
    if(document.getElementById(elementId).innerHTML == 'O' || document.getElementById(elementId).innerHTML=='X'){
        return;
    }
    //***Day 3 code end***//

    //Day 2 code start
    if(isOTurn){
        document.getElementById(elementId).innerHTML ='O' 
    }else{
        document.getElementById(elementId).innerHTML ='X' 
    }
    isOTurn = !isOTurn;
    //Day 2 code ends

    //Given function 
    const winner = checkWinner();
    if(winner=='O'){
        setTimeout(()=>alert("O wins"), 100);
        gameOver = true;
    }else if(winner =='X'){
        setTimeout(()=>alert("X wins"), 100);
        gameOver = true;
    }else{
       return 
    }
};
// element.onclick = () => alert('did stuff #2');
