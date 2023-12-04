
//Start button
let timeRemaining = 60;
document.getElementById("start").addEventListener('click', function(){
    
    let timer= setInterval(function(){
        if(timeRemaining>0){
            document.getElementById("time").textContent= timeRemaining--;
        }
        else{
            clearInterval(timer);
        }
    }, 1000);
    document.getElementById('start-screen').innerHTML = "";
    displayQuestions(currentQuestionIndex);
});

