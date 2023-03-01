// 1
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert(fruits);
alert(fruits.length);

// 2
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[(styles.length - 1) / 2] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп");
styles.unshift("Регги");
console.log(styles);

// 3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}

// 4
function sumInput() {
    let numbers = [];
    
    while(true) {
        num = +prompt("number?", 0);

        if(num === '' || num === null || !isFinite(num)) {
            break;
        }

        numbers.push(+num);
    }
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }

    return sum; 
}

alert(sumInput());

// 5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let tempSum = 0;

    for(let num of arr) {
        tempSum += num;
        maxSum = Math.max(maxSum, tempSum);
        if(tempSum < 0) {
            tempSum = 0;
        }
    }

    return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0