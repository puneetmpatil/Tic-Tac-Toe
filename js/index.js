console.log("This is index.js")
let turn = 0;
let player1_score = 0
let player2_score = 0

const input = (id) => {
    id = document.getElementById(id);

    let str;
    if (turn % 2 == 0) {
        str = `<b>X</b>`
        id.innerHTML = str;
        id.setAttribute('disabled', true)
    }
    else {
        str = `<b>O</b>`
        id.innerHTML = str;
        id.setAttribute('disabled', true)
    }
    turn++;

}
const winner = () => {
    let btn1 = document.getElementById('1').innerText
    let btn2 = document.getElementById('2').innerText
    let btn3 = document.getElementById('3').innerText
    let btn4 = document.getElementById('4').innerText
    let btn5 = document.getElementById('5').innerText
    let btn6 = document.getElementById('6').innerText
    let btn7 = document.getElementById('7').innerText
    let btn8 = document.getElementById('8').innerText
    let btn9 = document.getElementById('9').innerText

    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X')
        return 1;
    else if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O')
        return 2;
    else if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X')
        return 1;
    else if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O')
        return 2;
    else if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X')
        return 1;
    else if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O')
        return 2;
    else if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X')
        return 1;
    else if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O')
        return 2;
    else if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X')
        return 1;
    else if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O')
        return 2;
    else if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X')
        return 1;
    else if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O')
        return 2;
    else if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X')
        return 1;
    else if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O')
        return 2;
    else if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X')
        return 1;
    else if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O')
        return 2;
    else
        return -1;
}

const areAllButtonsDisabled = () => {
    let button;
    for (let i = 1; i <= 9; i++) {
        button = document.getElementById(i);
        if (button.hasAttribute('disabled') == false)
            return false;
    }
    return true
}
const gameOver = () => {
    let alertID = document.getElementById('alert')
    if (areAllButtonsDisabled() == true) {
        if (winner() == -1) {
            alertID.innerHTML = `<div class="alert alert-primary" role="alert">
        It's a draw 
      </div>`
            setTimeout(() => {
                alertID.innerHTML = ""
            }, 2000)
        }
        else {
            player1_score++;
            alertID.innerHTML = `<div class="alert alert-success" role="alert">
            Congrats ! Player 1 is the winner
            </div>`
            setTimeout(() => {
                alertID.innerHTML = ""
            }, 2000)
        }
        let player1 = document.getElementById('player1')
        let player2 = document.getElementById('player2')
        player1.innerText = player1_score;
        player2.innerText = player2_score;
        setTimeout(() => {
            reset()
        },2000)
        return true;
    }
    else if (winner() != -1) {
        let win;
        let str;
        switch (winner()) {
            case 1: win = '1'
                    player1_score++;
                    str = `<div class="alert alert-success" role="alert">
                    Congrats ! Player ${win} is the winner
                  </div>`
                    disableButtons()
                    break;
            case 2: win = '2'
                    player2_score++;
                    str = `<div class="alert alert-info" role="alert">
                    Congrats ! Player ${win} is the winner
                    </div>`
                    disableButtons()
                    break;
        }
        alertID.innerHTML = str;
        setTimeout(() => {
            alertID.innerHTML = ""
        }, 2000)
        let player1 = document.getElementById('player1')
        let player2 = document.getElementById('player2')
        player1.innerText = player1_score;
        player2.innerText = player2_score;
        setTimeout(() => {
            reset()
        },2000)
        return true;
    }
    else
        return false;
}

function disableButtons() {
    let button;
    for (let i = 1; i <= 9; i++) {
        button = document.getElementById(i);
        if (button.hasAttribute('disabled') == false)
            button.setAttribute('disabled', true)
    }
}

let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', reset)

function reset() {
    for (let i = 1; i <= 9; i++) {
        let id = document.getElementById(i)
        id.innerHTML = ''
        id.removeAttribute('disabled')
    }
    turn = 0;
}

let resetScoresBtn = document.getElementById('resetScoresBtn')
resetScoresBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your scores?')){
        player1_score = 0;
        player2_score = 0;
        let player1 = document.getElementById('player1')
        let player2 = document.getElementById('player2')
        player1.innerText = player1_score;
        player2.innerText = player2_score;
        
    }
})