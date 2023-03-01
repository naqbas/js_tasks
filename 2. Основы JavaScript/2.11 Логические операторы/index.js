//1
alert(null || 2 || undefined); //2

//2
alert(alert(1) || 2 || alert(3)); // 1 2

//3
alert( 1 && null && 2 ); //null

//4
alert(alert(1) && alert(2)); // 1 undefined

//5
alert(null || 2 && 3 || 4); //3

//6
if(age>=14 && age<=90) {
    alert(true);
}

//7
if(!(age>=14 && age<=90)){}
if(age<14 || age>90){}

//8
if(-1 || 0) alert('first'); //first
if(-1 && 0) alert('second');
if(null || -1 && 1) alert('third'); //third

//9
let login = prompt("Логин?", "");

if (login == "Админ") {
    let password = prompt("Пароль?", "");
    if (password == "Я главный") {
        alert("Здравствуйте!");
    }
    else if (password == null || password === "") {
        alert("Отменено");
    }
    else {
        alert("Неверный пароль");
    }
}
else if(login == null || login === "") {
    alert("Отменено");
}
else {
    alert("Я вас не знаю");
}