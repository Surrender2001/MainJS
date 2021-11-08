const start = document.querySelector('.start');
const buttons = document.querySelectorAll('.cell');
const timerTable = document.querySelector('.timer');
const scoreTable = document.querySelector('.score');
let timeLeft = 30, score = 0;
let timer, gameLoop;
let molePos = null, molePrev = null;
let updateMole = 500;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
start.addEventListener('click', main);
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerTable.innerHTML = "Time: " + timeLeft.toString() + "s";
        if (timeLeft <= 0) {
            stopGame();
        }
    }, 1000);
}
function startGame(){
    gameLoop = setInterval(() => {
        molePrev = molePos;
        if (molePrev != null){
            document.getElementById(molePrev.toString()).style.background = "black";
        }
        while (molePos === molePrev){
            molePos = getRandomInt(1, 5) * 10 + getRandomInt(1, 5);
        }
        document.getElementById(molePos.toString()).style.background = "white";
    }, updateMole);
}
function stopGame() {
    start.innerText = "Restart";
    start.removeEventListener('click', stopGame);
    start.addEventListener('click', main);
    buttons.forEach(button => {
        button.removeEventListener('click', checkMole);
        button.style.background = "black";
    })
    clearInterval(gameLoop);
    clearInterval(timer);
}
function checkMole(evt){
    if (molePos.toString() === evt.currentTarget.id){
        score++;
        scoreTable.innerText = "Score: "+ score.toString();
    }
}
function main() {
    start.removeEventListener('click', main);
    buttons.forEach(button => {
        button.addEventListener('click', checkMole);
    });
    timerTable.innerText = "Time: 30s";
    scoreTable.innerText = "Score: 0";
    start.innerText = "Pause";
    start.addEventListener('click', stopGame);
    timeLeft = 30;
    score = 0;
    startGame();
    startTimer();
}
