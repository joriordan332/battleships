import { Gameboard } from './gameboard';


const createGameboard = (() => {
for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const playerBoard = document.querySelector('.playerBoard');
        const boardSquares = document.createElement('div');
        boardSquares.classList.add('row-p1');
        row.setAttribute("id", `p1-row${i}`);
        playerBoard.appendChild(boardSquares);
      }
    }
    return { createGameboard };
})()