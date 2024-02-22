import { Player } from './player';
import { Ship } from './ship';
import { Gameboard } from './gameboard';
let p1, p2; 

export function startGame() {
p1 = new Player('you');
p2 = new Player('computer');
shipCoordinates(p1);
shipCoordinates(p2);
}

function shipCoordinates(player) {
    let carrier = new Ship(5);
    let battleship = new Ship(4);
    let destroyer = new Ship(3);
    let submarine = new Ship(3);
    let patrolBoat = new Ship(2);
    player.gameBoardArray.placeShip(carrier, 0, 0);
    player.gameBoardArray.placeShip(battleship, 1, 1);
    player.gameBoardArray.placeShip(destroyer, 2, 2);
    player.gameBoardArray.placeShip(submarine, 3, 3);
    player.gameBoardArray.placeShip(patrolBoat, 4, 4);
}