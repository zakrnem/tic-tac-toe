let ticTacToe = {
    //Game global variables
    gameCount: 0,
    gameTurn: 0,
    
    //Grid event listener
    gridListener: document.querySelector('.game-grid').addEventListener('click', (e) => ticTacToe.markGrid(e)),

    
    //Mark DOM & Array
    markGrid: function (e) {
        let target = document.getElementById(`${e.target.id}`);
        if (this.gameTurn === 0 && target.textContent === '') {
            target.textContent = 'X'
            this.gameTurn += 1;
            this.gameCount += 1;
            this.markGridArray(e, 'X')
            this.gamePlay()
        }
        else if (this.gameTurn === 1 && target.textContent === '') {
            target.textContent = 'O'
            this.gameTurn -= 1;
            this.gameCount += 1;
            this.markGridArray(e, 'O')
            this.gamePlay()
        }
    },

    //Game array
    gameGridArray: Array.from({length: 9}),
    markGridArray: function (e, mark) {
        this.gameGridArray[e.target.id] = mark;
        console.log(this.gameGridArray)
    },

    //Result rules
    gamePlay: function() {
        switch(true) {
            case (this.gameGridArray[0] === this.gameGridArray[1]
                && this.gameGridArray[0] === this.gameGridArray [2]
                && this.gameGridArray[0] !== undefined):
                this.resultMessage();
                break;
            case (this.gameGridArray[3] === this.gameGridArray[4]
                && this.gameGridArray[3] === this.gameGridArray [5]
                && this.gameGridArray[3] !== undefined):
                this.resultMessage();
                break;
            case (this.gameGridArray[6] === this.gameGridArray[7]
                && this.gameGridArray[6] === this.gameGridArray [8]
                && this.gameGridArray[6] !== undefined):
                this.resultMessage();
                break;
            case (this.gameGridArray[0] === this.gameGridArray[3]
                && this.gameGridArray[0] === this.gameGridArray [6]
                && this.gameGridArray[0] !== undefined):
                this.resultMessage();
                break;
            case (this.gameGridArray[1] === this.gameGridArray[4]
                && this.gameGridArray[1] === this.gameGridArray [7]
                && this.gameGridArray[1] !== undefined):
                this.resultMessage();
                break;
            case (this.gameGridArray[2] === this.gameGridArray[5]
                && this.gameGridArray[2] === this.gameGridArray [8]
                && this.gameGridArray[2] !== undefined):
                this.resultMessage();
                break;
            case (this.gameGridArray[0] === this.gameGridArray[4]
                && this.gameGridArray[0] === this.gameGridArray [8]
                && this.gameGridArray[0] !== undefined):
                this.resultMessage();
                break;
            case (this.gameGridArray[2] === this.gameGridArray[4]
                && this.gameGridArray[2] === this.gameGridArray [6]
                && this.gameGridArray[2] !== undefined):
                this.resultMessage();
                break;
            case (this.gameCount === 9 && this.result.textContent === ''):
                this.result.textContent = `It's a tie`;
        }             
    },

    //Result message
    result: document.querySelector('.result'),
    resultMessage: function () {
        this.gameTurn === 1 ? ticTacToe.result.textContent = 'Player #1 won!'
        : ticTacToe.result.textContent = 'Player #2 won!'
        this.gameTurn = undefined
    },
    
    //Reset game
    gameGrid: document.querySelector('.game-grid'),
    resetListener: (function() {
        let resetButton = document.querySelector('#reset')
        resetButton.addEventListener('click', () => ticTacToe.resetGame())
    })(),    
    resetGame: function() {
        this.gameTurn = 0
        this.gameCount = 0
        this.result.textContent = ''
        let gridArray = this.gameGrid.getElementsByTagName('div')
        for (let i = gridArray.length-1; i>=0; i--) {
            gridArray[i].textContent = ''
            this.gameGridArray[i] = undefined
        }
    }
}