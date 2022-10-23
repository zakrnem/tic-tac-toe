(function () {
    sum = 2;
    gameGrid = document.querySelector('.game-grid')
    gameGrid.addEventListener('click', (e) => logGrid(e));
    return logGrid  = function (e) {
        console.log(e.target.className)
    }
})()
    




