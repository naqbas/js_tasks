//1
if("0") {
    alert('Привет');
}

//2
let checkName = prompt("Какое «официальное» название JavaScript?");
alert((checkName=="ECMAScript") ? "Верно!" : "Не знаете? ECMAScript!");

//3
let checkNumber = prompt('Введите число', 0);
if (checkNumber > 0) {
    alert(1);
}
else if (checkNumber < 0) {
    alert(-1);
}
else {
    alert(0);
}

//4
let result = (a + b < 4) ? "Мало" : "Много";

//5
let message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ?  'Нет логина' : ''; 