import { Gameboard } from './gameboard';


export const createGameboard = (() => {
for(let i = 0; i < 10; i++) {
    const playerBoard = document.querySelector('.playerBoard');
    const row = document.createElement('div');
    row.classList.add('row-p1');
    row.setAttribute("id", `p1-row${i}`);
    playerBoard.appendChild(row);
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell-p1');
        cell.setAttribute("id", `p1-cell${j}`);
        playerBoard.appendChild(cell);
      }
    }
    for(let i = 0; i < 10; i++) {
      const computerBoard = document.querySelector('.computerBoard');
      const row = document.createElement('div');
      row.classList.add('row-p2');
      row.setAttribute("id", `p2-row${i}`);
      computerBoard.appendChild(row);
      for (let j = 0; j < 10; j++) {
          const cell = document.createElement('div');
          cell.classList.add('cell-p2');
          cell.setAttribute("id", `p2-cell${j}`);
          computerBoard.appendChild(cell);
        }
      } 
});

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  document.getElementById('mainPage').style.display = 'block';
  document.getElementById('playerSelection').style.display = 'none';

  const playerOneInput = document.getElementById('playerOneInput').value;
  const playerName = document.getElementById('playerName');
  playerName.innerHTML = `${playerOneInput}`;
});

