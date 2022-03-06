// Get text that includes the information of color
//set random colors to the buttons



var colorValue = document.getElementById("color-value"),
    buttons = document.getElementsByClassName("color-button"),
    numberofbuttons = buttons.length,
    answerMessage = document.getElementById('answer-message'),
    answer,
    reloadpagebutton = document.getElementById("reset-button")
;





startGame();

reloadpagebutton.addEventListener('click', startGame);

function startGame(){
    //choose random button-(correct it)
    answer = Math.floor(Math.random() * (numberofbuttons) );

    //set colors of all buttons
    setButtonColorForAll();  
    
    //reset answerMessage
    answerMessage.innerHTML = ""



    //Eventlistener for buttons
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            if(this === buttons[answer]) {
                answerMessage.innerHTML = "Correct!";
            } else {
                answerMessage.innerHTML = "Wrong answer! Guess again!";
            }
        });
    }
}






//function:set color of button
function setButtonColor(button, red, green, blue){
    button.setAttribute('style', 'background-color: rgb('+ red +','+ green +','+ blue +');');
}

//function: apply setButtonColor to all buttons with random values
function setButtonColorForAll(){
    for(var i = 0; i < numberofbuttons; i++){
        var red =Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        
        setButtonColor(buttons[i],red, green, blue );

        // Get text that includes the information of color
        if(i === answer){
            colorValue.innerHTML = `(${red}, ${green}, ${blue})`;
        }
    }
}

