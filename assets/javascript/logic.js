
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

const submitScoreButton = document.getElementById('submit');
const initialsInput = document.getElementById('initials'); 

submitScoreButton.addEventListener("click", function() {
    const initials = initialsInput.value;
    const score = yourScore.textContent;

    if (initials.length > 0 && initials.length <= 3) {
        const newScore = { initials, score };
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        highScores.push(newScore);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        // You might want to redirect or update the UI here
    } else if (initials.length > 3) {
        alert('Initials can not be more than 3 characters');
    } else {
        alert('High score will not be saved if you do not enter initials');
    }
    window.location.href = "highscores.html"

});

