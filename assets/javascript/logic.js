
//Start button
let timer;
let timeRemaining = 100;
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
        const newScore = {initials, score};
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        highScores.push(newScore);
        localStorage.setItem("highScores", JSON.stringify(highScores));
    } else if (initials.length > 3) {
        alert('Initials can not be more than 3 characters');
    } else {
        alert('High score will not be saved if you do not enter initials');
    }
    window.location.href = "highscores.html"

});

//display question and choices function
const endScreen = document.getElementById('end-screen');
const questionContainer = document.getElementById('questions');
const yourScore = document.getElementById('final-score')

let currentQuestionIndex = 0;

const displayQuestions = function (i){

const questionsObj = questionBank[i];
const questionTitle = document.getElementById('question-title');
const choicesTitle = document.getElementById('choices');    
const feedbackAnswer = document.getElementById('feedback');
const timerElement = document.getElementById('time')
;

questionContainer.style.display = 'block';


questionTitle.textContent = questionsObj.question;
choicesTitle.innerHTML = "";

questionsObj.choices.forEach((choice)=>{
    let choiceButton = document.createElement('button');
    choiceButton.textContent = choice;

    choiceButton.addEventListener('click', function(){
        if(choice===questionsObj.answer){
        feedbackAnswer.style.display ='block';
        feedbackAnswer.textContent = 'Correct!';

        }else if(timeRemaining>0)
        {
        feedbackAnswer.style.display ='block';
        feedbackAnswer.textContent = 'Wrong!'; 
        timeRemaining -= 10;
        timerElement.textContent = timeRemaining;
        }
        else{
            questionContainer.classList.add('hide');
            yourScore.textContent = timeRemaining

        }
        currentQuestionIndex++;
        if(currentQuestionIndex<questionBank.length){
            displayQuestions(currentQuestionIndex);
            
        }
        else{
            clearInterval(timer);
            questionContainer.style.display = 'none';
            feedbackAnswer.style.display = 'none';
            endScreen.style.display = 'block';
            yourScore.textContent = timeRemaining;

        

        }
    });

    choicesTitle.appendChild(choiceButton);
    
});
};




  
  
    
