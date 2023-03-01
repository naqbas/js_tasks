// 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2
function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

// 3
const user = {
    name: "John"
};
user.name = "Pete";
console.log(user);

// 4 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum=0;
for(let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// 5
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric() {
    for(let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}