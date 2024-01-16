function isSunk(length, hitsTaken) {
    if(hitsTaken <= 1) {
        return false
    }
    if(length == 2 && hitsTaken == 2) {
        return true
    }
    if(length == 3 && hitsTaken == 3) {
        return true
    } 
    if(length == 4 && hitsTaken == 4) {
        return true
    } 
    if(length == 5 && hitsTaken == 5) {
        return true
    } else {
        return false
    }
};

module.exports = isSunk;