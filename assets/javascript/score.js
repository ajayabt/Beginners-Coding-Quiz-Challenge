//add highscores function

const addHighScores = function(){

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.sort((a, b) => b.score - a.score)
    
    highScores.forEach(element => {
        let scoresList = document.createElement("li");
        scoresList.textContent = `${element.initials}: ${element.score}`;
        document.getElementById('highscores').appendChild(scoresList);
        
    });

}

addHighScores()