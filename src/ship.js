export class Ship {
    constructor(length, hitsTaken, sunk) {
        this.length = length;
        this.hitsTaken = hitsTaken;
        this.sunk = sunk;
    }

    hit(hitsTaken) {
        hitsTaken++
        return hitsTaken;
    };

    isSunk(length, hitsTaken) {
        if(length == hitsTaken ) {
            return true
        }   
        else {
            return false
        }
    };
}
