(function () {
    let ticTacToe = {
        //Game global variables
        gameCount: 0,
        gameTurn: 0,
        //player1 turn = 0
        //player2 turn = 1

        
        gameMode: 0,
        //computer mode = 0
        //multiplayer mode = 1

        //Grid event listener
        gridListener: document.querySelector('.game-grid')
        .addEventListener('click', (e) => ticTacToe.markGrid(e)),

        
        //Mark DOM & Array
        markGrid: function (e) {
            let target = document.getElementById(`${e.target.id}`);
            let userChoice = e.target.id
                    
            if (this.gameTurn === 0 && target.textContent === '') {
                mark = 'X'
                this.gameTurn = 1;
                this.markGridArray(userChoice, mark)
                setTimeout(this.computerPlayer,300)
            }
            else if (this.gameTurn === 1 && target.textContent === '') {
                mark = 'O'
                this.gameTurn = 0;
                this.markGridArray(userChoice, mark)
            }
        },

         //Game array
         gameGridArray: Array.from({length: 9}),

         markGridArray: function (choice, mark) {
            document.getElementById(choice).textContent = mark
            this.gameGridArray[choice] = mark;
            this.gameCount += 1;
            this.gamePlay()
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
            console.clear()
            this.gameTurn = 0
            this.gameCount = 0
            this.result.textContent = ''
            let gridArray = this.gameGrid.getElementsByTagName('div')
            for (let i = gridArray.length-1; i>=0; i--) {
                gridArray[i].textContent = ''
                this.gameGridArray[i] = undefined
            }
        },

        //Multiplayer mode listener
        multiplayerMode: document.getElementById('multiplayer')
        .addEventListener('click', () => {
            ticTacToe.gameMode = 1
        }),

        //Computer vs player mode listener
        computerMode: document.getElementById('computer')
        .addEventListener('click', () => {
            ticTacToe.gameMode = 0
        }),
        
        computerPlayer: function () {
            const computerChoice = Math.round(Math.random()*8)
            //const gameMode = ticTacToe.gameMode
            //console.log(gameMode)
            if (document.getElementById(computerChoice).textContent === ''
            && ticTacToe.gameTurn !== undefined && ticTacToe.gameMode === 0) {
                ticTacToe.gameTurn = 0
                ticTacToe.markGridArray(computerChoice, 'O')
            }
            else if (ticTacToe.gameCount < 9 && ticTacToe.gameTurn !== undefined
                && ticTacToe.gameMode === 0) {
                ticTacToe.computerPlayer()
            }
        }
    }
})()