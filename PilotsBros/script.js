const start = document.querySelector('.start');
const buttons = document.querySelectorAll('.cell');
const turnsTable = document.querySelector('.turns');
let turns = 0;
let defPos = ["", "", "", ""];

start.addEventListener('click', main);
main();

function checkWin(){
    let win = true;
    buttons.forEach(button => {
        if(button.style.background === "blue"){
            win = false;
        }
    })
    if (win){
        buttons.forEach(button => {
            button.removeEventListener('click', draw);
        });
        turnsTable.innerText = "Красава! Тебе потребовалось " + turns.toString() + " лет чтобы решить эту загадку";
    }
}

function draw(evt){
    turns++;
    turnsTable.innerText = "Turn: " + turns.toString();
    let row = evt.currentTarget.id[0];
    let column = evt.currentTarget.id[1];
    console.log(row.toString() + " " + column.toString());
    buttons.forEach(button => {
        if (button.id[0] === row || button.id[1] === column){
            if (button.style.background === "black") {
                button.style.background = "blue";
            } else{
                button.style.background = "black";
            }
        }
    })
    checkWin();
}

function main() {
    buttons.forEach(button => {
        button.addEventListener('click', draw);
        if (defPos.includes(button.id)){
            button.style.background = "blue";
        }else{
            button.style.background = "black";
        }
    });
    turnsTable.innerText = "Turn: 0";
    start.innerText = "Restart";
    turns = 0;
}


