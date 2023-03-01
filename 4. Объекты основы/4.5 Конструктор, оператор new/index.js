// 1
let obj = {};

function A() {
    return obj;
}
function B() {
    return obj;
}

alert(new A() == new B());

// 2
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Calculator() {
    this.read = function() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

// 3
let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("value?", 0);
    }
}