export class Ship {
    constructor(length, name, sunk) {
        this.length = length;
        this.name = name;
        this.sunk = sunk;
        this.ship = this.createShip();
    }

    createShip() {
        let shipArray = [];
        let i = this.length;
        while (i > 0) {
          shipArray.push({ hit: false });
          i--;
        }
        return shipArray;
      }

    getShip() {
        return this.ship;
      }

      hit(index) {
        this.ship[index].hit = true;
      }
      checkHit(item) {
        if (item.hit == true) {
          return true;
        } else {
          return false;
        }
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
