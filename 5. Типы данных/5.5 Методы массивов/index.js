// 1
function camelize(str) {
    let arr = str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
    return arr.join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// 2

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

function filterRange(arr, a, b) {
    return arr.filter(item => item>=a && item<=b);
}

// 3
arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]<a || arr[i]>b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

// 4
arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);

// 5
arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted(arr) {
    let newArr = arr.slice();
    return newArr.sort();
}

console.log(sorted);
console.log(arr);

// 6
let calc = new Calculator;

console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("3 - 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }

    this.calculate = function(str) {
        let split = str.split(" ");
        let a = +split[0];
        let sign = split[1];
        let b = +split[2];

        if(isNaN(a) || isNaN(b) || !this.methods[sign]) {
            return NaN;
        }

        return this.methods[sign](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

// 7
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log(names);
console.log(users);

// 8
vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}) );

console.log(usersMapped);
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин

// 9
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

arr = [ vasya, petya, masha ];

sortByAge(arr);
console.log(arr);

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

// 10
arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);


function shuffle(arr) {
    arr.sort(() => Math.random - 0.5);
}

// 11
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );

function getAverageAge(arr) {
    return arr.reduce((sum, user) => sum + user.age, 0) / arr.length;
}

// 12
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

function unique(arr) {
    let res=[];

    for(let str of arr) {
        if(!res.includes(str)) {
            res.push(str);
        }
    }

    return res;
}

// 13
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
  
let usersById = groupById(users);
console.log(usersById);

function groupById(arr) {
    return arr.reduce((obj, val) => {
        obj[val.id] = val;
        return obj;
    }, {});
}