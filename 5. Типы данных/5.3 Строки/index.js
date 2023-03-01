// 1
alert(ucFirst("вася"));

function ucFirst(str) {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

// 2
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

function checkSpam(str) {
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}

// 3
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, str.length - 1) + '…' : str;
}

// 4
alert( extractCurrencyValue('$120') === 120 );

function extractCurrencyValue(str) {
    return +str.slice(1);
}