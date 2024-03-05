import { Gameboard } from './gameboard';
import { Player } from './player';
import { Ship } from './ship';
import { Computer } from "./computer";

let playerBoard = new Gameboard()
let computerBoard = new Gameboard()
let p1 = new Player('you');
let computer = new Computer('computer', p1, playerBoard);
let carrier = new Ship(5, 'carrier');
let battleship = new Ship(4, 'battleship');
let destroyer = new Ship(3, 'destroyer');
let submarine = new Ship(3, 'submarine');
let patrolBoat = new Ship(2, 'patrolBoat');

let ComputerCarrier = new Ship(5, 'carrier');
let ComputerBattleship = new Ship(4, 'battleship');
let ComputerDestroyer = new Ship(3, 'destroyer');
let ComputerSubmarine = new Ship(3, 'submarine');
let ComputerPatrolBoat = new Ship(2, 'patrolBoat');

let userPrompt = document.querySelector('.userPrompt')
const battleshipHTML = document.querySelector("#battleship");
const carrierHTML = document.querySelector("#carrier");
const submarineHTML = document.querySelector("#submarine");
const destroyerHTML = document.querySelector("#destroyer");
const patrolboatHTML = document.querySelector("#patrolBoat");
const addShips = document.querySelector(".addShips");
const playerName = document.querySelector(".playerName")

updateDisplay("playerBoard", playerBoard);
updateDisplay("computerBoard", computerBoard);
createGameboard('playerBoard');
createGameboard('computerBoard');
dragStarter(battleshipHTML);
dragStarter(carrierHTML);
dragStarter(submarineHTML);
dragStarter(destroyerHTML);
dragStarter(patrolboatHTML);
computerShips()

function createGameboard (boardName) {
  let boardClass = document.querySelector(`.${boardName}`);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.setAttribute('id', `${boardName}Colour`)
      cell.classList.add("cell");
      cell.setAttribute("data-x", j);
      cell.setAttribute("data-y", i);
      if (boardName == "computerBoard") {
        cell.addEventListener("click", (e) => {
          attackEvent(e.target);
        });
      } else if (boardName == "playerBoard") {
        cell.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        cell.addEventListener("drop", (e) => {
          e.preventDefault();
          dropShip(e);
        });
      }
      boardClass.appendChild(cell);
    }
  }
}

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  const message = document.getElementById('message');
  const playerOneInput = document.getElementById('playerOneInput').value;
  if (playerOneInput == '') {
    message.innerHTML = 'Please enter your name'
    return false
  } else {
  document.getElementById('mainPage').style.display = 'block';
  document.getElementById('playerSelection').style.display = 'none';
  const playerName = document.getElementById('playerName');
  playerName.innerHTML = `${playerOneInput}`;
  }
});

function dragStarter(element) {
  element.addEventListener("dragstart", (event) => {
    userPrompt.innerHTML = "";
    event.dataTransfer.setData("text/plain", event.target.id);
  });
}

function dropShip(e) {
  let data = e.dataTransfer.getData("text");
  let x = parseInt(e.target.getAttribute("data-x"));
  let y = parseInt(e.target.getAttribute("data-y"));

  switch (data) {
    case "carrier":
      if (playerBoard.chechIfShipPlacementIsValid(carrier.length, x, y)) {
        playerBoard.placeShip(carrier, x, y);
        console.log(playerBoard.gameBoardArray)
        updateDisplay('playerBoard', playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
        }
      }
      break;
    case "battleship":
      if (playerBoard.chechIfShipPlacementIsValid(battleship.length, x, y)) {
        playerBoard.placeShip(battleship, x, y);
        updateDisplay("playerBoard", playerBoard);
        let ship = document.querySelector(`#${data}`);
        addShips.removeChild(ship);
        if (addShips.childNodes.length <= 6) {
          addShips.style.display = "none";
        }
      }
        break;
      case "submarine":
    if (playerBoard.chechIfShipPlacementIsValid(submarine.length, x, y)) {
      playerBoard.placeShip(submarine, x, y);
      updateDisplay("playerBoard", playerBoard);
      let ship = document.querySelector(`#${data}`);
      addShips.removeChild(ship);
      if (addShips.childNodes.length <= 6) {
        addShips.style.display = "none";
      }
    }
    break;
      case "destroyer":
    if (playerBoard.chechIfShipPlacementIsValid(destroyer.length, x, y)) {
      playerBoard.placeShip(destroyer, x, y);
      updateDisplay("playerBoard", playerBoard);
      let ship = document.querySelector(`#${data}`);
      addShips.removeChild(ship);
      if (addShips.childNodes.length <= 6) {
        addShips.style.display = "none";
      }
    }
    break;
      case "patrolBoat":
    if (playerBoard.chechIfShipPlacementIsValid(patrolBoat.length, x, y)) {
      playerBoard.placeShip(patrolBoat, x, y);
      updateDisplay("playerBoard", playerBoard);
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
    computerBoard.placeShip(ComputerCarrier, 0, 4);
    computerBoard.placeShip(ComputerBattleship, 1, 0);
    computerBoard.placeShip(ComputerSubmarine, 2, 0);
    computerBoard.placeShip(ComputerDestroyer, 3, 0);
    computerBoard.placeShip(ComputerPatrolBoat, 4, 0);
}

function attackEvent(element) {
  let x = element.getAttribute("data-x");
  let y = element.getAttribute("data-y");
  p1.attack(x, y, computer, computerBoard);
  updateDisplay('computerBoard', computerBoard);
  if(computerBoard.checkIfAllShipSunk()) {
    endGame(`${playerName.innerHTML}`);
  }
 computer.generateRandomAttack();
 updateDisplay('playerBoard', playerBoard);
 if(playerBoard.checkIfAllShipSunk()) {
  endGame("Computer");
  }
}

function endGame(winner) {
  userPrompt.textContent = `${winner} is the winner!!`;
}

function updateDisplay(boardName, board) {
  let boardArray = board.getGameBoard();
  let missedAttacksArray = board.getMissedAttacksArray();

  boardArray.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell.shipName) {
        if (
          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ==
          true
        ) {
          let selectedCell = document.querySelector(
            `.${boardName} [data-x="${x}"][data-y ="${y}"]`
          );
          selectedCell.textContent = "•";
          selectedCell.classList.add("hit");
          selectedCell.setAttribute('id', "hit");
          selectedCell.classList.remove("occupied");
        } else if (
          cell.shipName.checkHit(cell.shipName.getShip()[cell.shipIndex]) ==
          false
        ) {
          if (boardName == "playerBoard") {
            let selectedCell = document.querySelector(
              `.${boardName} [data-x="${x}"][data-y ="${y}"]`
            );
            selectedCell.classList.add("occupied");
            selectedCell.setAttribute('id', "occupied");
          }
        }
      }
    });
  });
  missedAttacksArray.forEach((attack) => {
    let selectedCell = document.querySelector(
      `.${boardName} [data-x="${attack.x}"][data-y ="${attack.y}"]`
    );
    selectedCell.textContent = "•";
    selectedCell.classList.add("missed");
    selectedCell.setAttribute('id', `${boardName}Missed`);
  });
}


