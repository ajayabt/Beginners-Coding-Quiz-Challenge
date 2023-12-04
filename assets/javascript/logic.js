
//Start button
let timer;
let timeRemaining = 10;
document.getElementById("start").addEventListener('click', function(){
    
    timer= setInterval(function(){
        if(timeRemaining>-1){
            document.getElementById("time").textContent= timeRemaining--;
        }
        else{
            clearInterval(timer);
            questionContainer.style.display = 'none';
            endScreen.style.display = 'block';
            yourScore.textContent = timeRemaining + 1;
        }
    }, 1000);
    document.getElementById('start-screen').innerHTML = "";
    displayQuestions(currentQuestionIndex);
});

//Submit score button



