//first way
const math =  {
    add(num1, num2) {
        return num1 +num2;
    },
    subtract(num1,num2) {
        return num1 - num2;
    }
}

//second way
class Calculate {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
      return this.num1 + this.num2; 
    }
    subtract() {
      return this.num1 - this.num2; 
    }
}

// let math = new Calculate(2, 1);

// console.log(math.add());
// console.log(math.subtract());