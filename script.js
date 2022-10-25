let ticTacToe = (function () {
    let gameGrid = document.querySelector('.game-grid')    
    gameGrid.addEventListener('click', (e) => markGridDOM(e))
    let gameTurn = 0
    let gameCount = 0
    
    function markGridDOM(e) {
        let target = document.getElementById(`${e.target.id}`);
        if (gameTurn === 0 && target.textContent === '') {
            target.textContent = 'X'
            gameTurn += 1;
            gameCount += 1;
            markGridArray(e, 'X')
            gamePlay()
        }
        else if (gameTurn === 1 && target.textContent === '') {
            target.textContent = 'O'
            gameTurn -= 1;
            gameCount += 1;
            markGridArray(e, 'O')
            gamePlay()
        }
    }

    let gameGridArray = Array.from({length: 9})
    function markGridArray (e, mark) {
        gameGridArray[e.target.id] = mark;
    }

    let result = document.querySelector('.result')
    function gamePlay() {
        switch(true) {
            case (gameGridArray[0] === gameGridArray[1]
                && gameGridArray[0] === gameGridArray [2]
                && gameGridArray[0] !== undefined):
                resultMessage();
                break;
            case (gameGridArray[3] === gameGridArray[4]
                && gameGridArray[3] === gameGridArray [5]
                && gameGridArray[3] !== undefined):
                resultMessage();
                break;
            case (gameGridArray[6] === gameGridArray[7]
                && gameGridArray[6] === gameGridArray [8]
                && gameGridArray[6] !== undefined):
                resultMessage();
                break;
            case (gameGridArray[0] === gameGridArray[3]
                && gameGridArray[0] === gameGridArray [6]
                && gameGridArray[0] !== undefined):
                resultMessage();
                break;
            case (gameGridArray[1] === gameGridArray[4]
                && gameGridArray[1] === gameGridArray [7]
                && gameGridArray[1] !== undefined):
                resultMessage();
                break;
            case (gameGridArray[2] === gameGridArray[5]
                && gameGridArray[2] === gameGridArray [8]
                && gameGridArray[2] !== undefined):
                resultMessage();
                break;
            case (gameGridArray[0] === gameGridArray[4]
                && gameGridArray[0] === gameGridArray [8]
                && gameGridArray[0] !== undefined):
                resultMessage();
                break;
            case (gameGridArray[2] === gameGridArray[4]
                && gameGridArray[2] === gameGridArray [6]
                && gameGridArray[2] !== undefined):
                resultMessage();
                break;
            case (gameCount === 9 && result.textContent === ''):
                result.textContent = `It's a tie`;
        }
        function resultMessage() {
            gameTurn === 1 ? result.textContent = 'Player #1 won!'
            : result.textContent = 'Player #2 won!'
            gameTurn = undefined
        }
    }
    
    let resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', () => resetGame())
    
    function resetGame() {
        gameTurn = 0
        gameCount = 0
        result.textContent = ''
        let gridArray = gameGrid.getElementsByTagName('div')
        for (let i = gridArray.length-1; i>=0; i--) {
            gridArray[i].textContent = ''
            gameGridArray[i] = undefined
        }
        console.log(gameTurn)
    }
})()