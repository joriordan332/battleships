export class Ship {
    constructor(length, name, sunk) {
        this.length = length;
        this.hitsTaken = 0;
        this.name = name;
        this.sunk = sunk;
    }

    getShip() {
        return this.ship;
      }

    hit() {
        this.hitsTaken += 1;
        return this.hitsTaken;
    }

    isSunk(length, hitsTaken) {
        if(length == hitsTaken ) {
            return true
        }   
        else {
            return false
        }
    };
}
