//1
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}
let age=prompt("Возраст?", 18);
checkAge(age);

//2
function checkAge(age) {
    return (age>18) ? true : confirm('Родители разрешили?');
    // return (age>18) || confirm('Родители разрешили?');
}
age=prompt("Возраст?", 18);
checkAge(age);

//3
function min(a, b) {
    return (a < b) ? a : b;
}
console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);

//4
function pow(x, n) {
    return x**n;
}
let x=prompt("x?");
let n=prompt("n?");
if(n<1) {
    alert(`Степень ${n} не поддерживается, замените на -> n>=1`)
}
else {
    alert(pow(x, n));
}