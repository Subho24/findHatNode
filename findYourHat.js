const prompt = require('prompt-sync')();
const hat  = '^'
const hole = 'O'
const fieldCharacter = '░';
const pathCharacter = '*';
class Field {
    constructor(name) {
        this._name = name;
        this.locationColumn = 0
        this.locationRow = 0
    }
    print(fieldArr) {
        for(let i = 0; i < fieldArr.length; i++) {
            console.log(fieldArr[i].join(''));
        }
    }
    static generateField(rows, columns) {
        let fieldArr = [];
        for(let i = 0; i < rows; i++){
            fieldArr[i] = [];
            for(let n = 0; n < columns; n++) {
                fieldArr[0][0] = '*'
                let difficulty = Math.random();
                let percentage = 0.1
                if(difficulty > percentage) {
                    fieldArr[i][n] = fieldCharacter;
                } else {
                    fieldArr[i][n] = hole;
                }
            }
        }
        fieldArr[(Math.floor(Math.random()*rows))][(Math.floor(Math.random()*columns))] = hat;
       return(fieldArr)
    }
    askQuestion() {
        let move = prompt('Which Way?').toUpperCase();
        move === 'U' ? this.locationRow -= 1 :
        move === 'D' ? this.locationRow += 1 :
        move === 'R' ? this.locationColumn += 1 :
        move === 'L' ? this.locationColumn -= 1 :
        prompt('Enter U D R or L');
    }
    isInBounds() {
        if(this.locationRow >= 0 &&
        this.locationColumn >= 0 &&
        this.locationRow < field.length &&
        this.locationColumn < field[0].length) {
            return true
        } else {return false}
    }
    isHole() {
        if(field[this.locationRow][this.locationColumn] === hole) {
            return true
        } else {return false}
    }
    isHat() {
        if (field[this.locationRow][this.locationColumn] === hat) {
            return true
        } else {return false}
    }
    runGame(field) {
        let playing = true
        while (playing) {
            this.print(field);
            this.askQuestion();
            if (!this.isInBounds()) {
              console.log('Out of bounds instruction!');
              playing = false;
              break;
            } else if (this.isHole()) {
              console.log('Sorry, you fell down a hole!');
              playing = false;
              break;
            } else if (this.isHat()) {
              console.log('Congrats, you found your hat!');
              playing = false;
              break;
            }
            field[this.locationRow][this.locationColumn] = pathCharacter;
          }
    }
}

const myField = new Field('myField')
let field = Field.generateField(10,10);
myField.runGame(field);

