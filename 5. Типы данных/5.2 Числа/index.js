// 1
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert((a + b).toFixed(2));

// 2 
alert(1.35.toFixed(1));
alert(Math.round(6.35 * 10)/10);

// 3
alert(readNumber());

function readNumber() {
    let num = +prompt("number?", 0);

    while(!isFinite(num)) {
        num = +prompt("number?", 0);
    }

    if (num === null || num === '') {
        return null;
    }
    return +num;
}

// 4
let i = 0;
while (i < 10) {
    i += 0.2;
    alert(i);
}

// 5
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

function random(min, max)  {
    return (max - min) * Math.random() + min;
}

// 6
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );

function randomInteger(min, max) {
    return Math.trunc((max - min) * Math.random() + min);
}