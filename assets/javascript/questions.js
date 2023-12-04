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

//display question and choices function

let currentQuestionIndex = 0;

const displayQuestions = function (i){

const questionsObj = questionBank[i];
const questionContainer = document.getElementById('questions')
const questionTitle = document.getElementById('question-title');
const choicesTitle = document.getElementById('choices');    
const feedbackAnswer = document.getElementById('feedback');
const timerElement = document.getElementById('time')
questionContainer.style.display = 'block';

questionTitle.textContent = questionsObj.question;
choicesTitle.innerHTML = "";

questionsObj.choices.forEach((choice, choiceIndex)=>{
    let choiceButton = document.createElement('button');
    choiceButton.textContent = choice;

    choiceButton.addEventListener('click', function(){
        if(choice===questionsObj.answer){
        feedbackAnswer.style.display ='block';
        feedbackAnswer.textContent = 'Correct!';

        }else
        {
        feedbackAnswer.style.display ='block';
        feedbackAnswer.textContent = 'Wrong!'; 
        timeRemaining -= 10;
        timerElement.textContent = timeRemaining;
        }
        currentQuestionIndex++;
        if(currentQuestionIndex<questionBank.length){
            displayQuestions(currentQuestionIndex);
            
        }
    });

    choicesTitle.appendChild(choiceButton);
    
});
};




  
  
    
