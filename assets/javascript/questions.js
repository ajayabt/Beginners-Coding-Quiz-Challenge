// Question bank array
const questionBank = [
    {
     question: "question 1",
     choices: ['1','2','3','4'],
     answer: '1'
    },
    {
     question: "question 2",
     choices: ['1','2','3','4'],
     answer: '2'  

    },
    {
     question: "question 3",
     choices: ['1','2','3','4'],
     answer: '3'
    },
    {
     question: "question 4",
     choices: ['1','2','3','4'],
     answer: '4'
    },
];



const endScreen = document.getElementById('end-screen');
const questionContainer = document.getElementById('questions');
const yourScore = document.getElementById('final-score')

//display question and choices function
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




  
  
    
