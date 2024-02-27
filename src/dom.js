import { Gameboard } from './gameboard';
import { Player } from './player';
import { Ship } from './ship';
let gameboard = new Gameboard
let carrier = new Ship(5, 'carrier');
let battleship = new Ship(4, 'battleship');
let destroyer = new Ship(3, 'destroyer');
let submarine = new Ship(3, 'submarine');
let patrolBoat = new Ship(2, 'patrolBoat');
let p1 = new Player('you');
let computer = new Player('computer');

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
  const playerBoard = document.querySelector('.playerBoard');
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
      };
    };
    const computerBoard = document.querySelector('.computerBoard');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-x", j);
        cell.setAttribute("data-y", i);
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
    case "carrier":
      if (gameboard.chechIfShipPlacementIsValid(carrier.length, x, y)) {
        p1.gameBoardArray.placeShip(carrier, x, y);
        //updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
        }
      }
      break;
    case "battleship":
      if (gameboard.chechIfShipPlacementIsValid(battleship.length, x, y)) {
       p1.gameBoardArray.placeShip(battleship, x, y);
        //updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
        }
      }
        break;
      case "submarine":
    if (gameboard.chechIfShipPlacementIsValid(submarine.length, x, y)) {
      p1.gameBoardArray.placeShip(submarine, x, y);
      //updateDisplay("playerBoard", playerBoard);
      let ship = document.querySelector(`#${data}`);
      addShips.removeChild(ship);
      if (addShips.childNodes.length <= 6) {
        addShips.style.display = "none";
      }
    }
    break;
      case "destroyer":
    if (gameboard.chechIfShipPlacementIsValid(destroyer.length, x, y)) {
      p1.gameBoardArray.placeShip(destroyer, x, y);
      //updateDisplay("playerBoard", playerBoard);
      let ship = document.querySelector(`#${data}`);
      addShips.removeChild(ship);
      if (addShips.childNodes.length <= 6) {
        addShips.style.display = "none";
      }
    }
    break;
      case "patrolBoat":
    if (gameboard.chechIfShipPlacementIsValid(patrolBoat.length, x, y)) {
      p1.gameBoardArray.placeShip(patrolBoat, x, y);
      //updateDisplay("playerBoard", playerBoard);
      let ship = document.querySelector(`#${data}`);
      addShips.removeChild(ship);
      if (addShips.childNodes.length <= 6) {
        addShips.style.display = "none";
      }
    }
    break;
    }
  }

  function computerShips() {
    computer.gameBoardArray.placeShip(carrier, 0, 0);
    computer.gameBoardArray.placeShip(battleship, 1, 1);
    computer.gameBoardArray.placeShip(destroyer, 2, 2);
    computer.gameBoardArray.placeShip(submarine, 3, 3);
    computer.gameBoardArray.placeShip(patrolBoat, 4, 4);
}

function updateDisplay(player) {

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

