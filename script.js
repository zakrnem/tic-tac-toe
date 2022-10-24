let ticTacToe = (function () {
    let gameGrid = document.querySelector('.game-grid')    
    gameGrid.addEventListener('click', (e) => markGridDOM(e))
    let gameTurn = 0
    
    let markGridDOM  = function (e) {
        let target = document.getElementById(`${e.target.id}`);
        if (gameTurn === 0) {
            target.textContent = 'X'
            gameTurn += 1;
            markGridArray(e, 'X')
        }
        else if (gameTurn === 1) {
            target.textContent = 'O'
            gameTurn -= 1;
            markGridArray(e, 'O')
        }
    }

    let gameGridArray = Array.from({length: 9})
    let markGridArray = function (e, mark) {
        gameGridArray[e.target.id] = mark;
        console.log(gameGridArray)
    }
    
    let resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', () => resetGrid())
    
    let resetGrid = function () {
        let gridArray = gameGrid.getElementsByTagName('div')
        for (let i = gridArray.length-1; i>=0; i--) {
            gridArray[i].textContent = ''
            gameGridArray[i] = ''
            console.log(gameGridArray)
        }
    }
})()



    




