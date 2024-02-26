import { Gameboard } from './gameboard';
import { Player } from './player';
import { Ship } from './ship';
let carrier = new Ship(5, 'carrier');
let battleship = new Ship(4, 'battleship');
let destroyer = new Ship(3, 'destroyer');
let submarine = new Ship(3, 'submarine');
let patrolBoat = new Ship(2, 'patrolBoat');
let p1 = new Player('you');

const battleshipHTML = document.querySelector("#battleship");
const carrierHTML = document.querySelector("#carrier");
const submarineHTML = document.querySelector("#submarine");
const destroyerHTML = document.querySelector("#destroyer");
const patrolboatHTML = document.querySelector("#patrolboat");
const addShips = document.querySelector(".addShips");
dragStarter(battleshipHTML);
dragStarter(carrierHTML);
dragStarter(submarineHTML);
dragStarter(destroyerHTML);
dragStarter(patrolboatHTML);

export const createGameboard = (() => {
  let playerBoard = document.querySelector('.playerBoard');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-x", j);
      cell.setAttribute("data-y", i);
      playerBoard.appendChild(cell);
        cell.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        cell.addEventListener("drop", (e) => {
          e.preventDefault();
          dropShip(e);
        });
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


function dragStarter(element) {
  element.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
}

function dropShip(e) {
  let data = e.dataTransfer.getData("text");
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));
  switch (data) {
    case "battleship":
      p1.gameBoardArray.placeShip(battleship, x, y);
        //updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        console.log(p1.gameBoardArray)
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
        }
    }
  }


 
  //const ship = document.getElementById('addShips') 
  //ship.addEventListener('click', console.log('hi'), false);
//function selectShip(e) {
//  const userPrompt = document.getElementById('userPrompt')
 // if(e.target.getAttribute('id') === 'battleship') {
//    shipLength = 4;
//    userPrompt = 'Place your battleship!';
//  } else if(e.target.getAttribute('id') === 'carrier') {
   // shipLength = 5;
  //  userPrompt = 'Place your carrier!';
 // } else if(e.target.getAttribute('id') === 'submarine') {
 //   shipLength = 3;
 //   userPrompt = 'Place your submarine!';
//  } else if(e.target.getAttribute('id') === 'destroyer') {
//    shipLength = 3;
//    userPrompt = 'Place your destroyer!';
//  } else if(e.target.getAttribute('id') === 'patrolboat') {
 //   shipLength = 2;
 //   userPrompt = 'Place your patrolboat!';
//  }
//}

