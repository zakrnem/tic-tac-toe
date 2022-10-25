let ticTacToe = (function () {
    let gameGrid = document.querySelector('.game-grid')    
    gameGrid.addEventListener('click', (e) => markGridDOM(e))
    let gameTurn = 0
    
    let markGridDOM  = function (e) {
        let target = document.getElementById(`${e.target.id}`);
        if (gameTurn === 0 && target.textContent === '') {
            target.textContent = 'X'
            gameTurn += 1;
            markGridArray(e, 'X')
            gamePlay()
        }
        else if (gameTurn === 1 && target.textContent === '') {
            target.textContent = 'O'
            gameTurn -= 1;
            markGridArray(e, 'O')
            gamePlay()
        }
    }

    let gameGridArray = Array.from({length: 9})
    let markGridArray = function (e, mark) {
        gameGridArray[e.target.id] = mark;
    }

    let result = document.querySelector('.result')
    let gamePlay = function () {
        console.log(gameGridArray)
              
        switch(true) {
            case (gameGridArray[0] === gameGridArray[1]
                && gameGridArray[0] === gameGridArray [2]
                && gameGridArray[0] !== undefined):
                result.textContent = 'Someone won!'
                break;
        }
    }
    
    let resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', () => resetGame())
    
    let resetGame = function () {
        gameTurn = 0
        result.textContent = ''
        let gridArray = gameGrid.getElementsByTagName('div')
        for (let i = gridArray.length-1; i>=0; i--) {
            gridArray[i].textContent = ''
            gameGridArray[i] = undefined
        }
        console.log(gameGridArray)
    }
})()



    




