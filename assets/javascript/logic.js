
//


//Start button

document.getElementById("start").addEventListener('click', function(){
    let timeRemaining = "60";
    let timer= setInterval(function(){
        if(timeRemaining>0){
            document.getElementById("time").textContent= timeRemaining--;
        }
        else{
            clearInterval(timer);
        }
    }, 1000);
});

