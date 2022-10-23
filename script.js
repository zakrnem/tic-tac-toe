let gameTurn = 0;
    
gameGrid = document.querySelector('.game-grid')    
gameGrid.addEventListener('click', (e) => markGrid(e))
markGrid  = function (e) {
    let target = gameGrid.querySelector(`.${e.target.className}`);
    if (gameTurn === 0) {
        target.textContent = 'X'
        gameTurn += 1;
    }
    else if (gameTurn === 1) {
        target.textContent = 'O'
        gameTurn -= 1;
    }
}

resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', () => resetGrid())
resetGrid = function () {
    let gridArray = gameGrid.getElementsByTagName('div')
    for (let i = gridArray.length-1; i>=0; i--) {
        gridArray[i].textContent = ''
    }
}

    




