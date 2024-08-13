'use strict';
let secretNumber = Math.floor(Math.random()*20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector(".section-two__message").textContent = message;
}
document.querySelector(".section-two__btn").addEventListener("click",function() {

    const guess = Number(document.querySelector(".section-two__guess").value);
    console.log(guess, typeof guess);

    if(!guess) {
        displayMessage( "⛔️ No number!");
    }
    else if(guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector(".section-one__number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".section-one__number").style.width = "25rem";
        if(score > highscore) {
            highscore = score
            document.querySelector(".section-two__highscore").textContent = "🥇 Highscore: "+highscore;
        }
    }
    else if(guess < secretNumber) {
        displayMessage("📉 Too low!");
        score--;
        document.querySelector(".section-two__score").textContent = "💯 Score: "+score;
    }
    else if(guess > secretNumber) {
        displayMessage("📈 Too high!");
        score--;
        document.querySelector(".section-two__score").textContent = "💯 Score: "+score;
    }
});
document.querySelector(".section-one__head-btn").addEventListener("click", function() {
    secretNumber = Math.floor(Math.random()*20) + 1;
    score = 20;
    displayMessage("Start guessing...");
    document.querySelector('.section-two__score').textContent = "💯 Score: "+score;
    document.querySelector('.section-one__number').textContent = '?';
    document.querySelector('.section-two__guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.section-one__number').style.width = '15rem';
});