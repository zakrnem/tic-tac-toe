let ticTacToe = {
    //Game global variables
    gameCount: 0,
    gameTurn: 0,
    
    //Grid event listener
    gridListener: (function () {
        let gameGrid = document.querySelector('.game-grid')
        gameGrid.addEventListener('click', (e) => ticTacToe.markGrid(e))
    })(),
    
    //Mark DOM & Array
    markGrid: function (e) {
        let target = document.getElementById(`${e.target.id}`);
        if (this.gameTurn === 0 && target.textContent === '') {
            target.textContent = 'X'
            this.gameTurn += 1;
            this.gameCount += 1;
            this.markGridArray(e, 'X')
            //gamePlay()
        }
        else if (this.gameTurn === 1 && target.textContent === '') {
            target.textContent = 'O'
            this.gameTurn -= 1;
            this.gameCount += 1;
            this.markGridArray(e, 'O')
            //gamePlay()
        }
    },

    //Game array
    gameGridArray: Array.from({length: 9}),

    markGridArray: function (e, mark) {
        this.gameGridArray[e.target.id] = mark;
        console.log(this.gameGridArray)
    }

/*     //Result rules
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
    
    //Reset game
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
    } */
}