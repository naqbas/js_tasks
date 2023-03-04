// 1
let d = new Date(2012, 1, 20, 3, 12);
console.log(d);

// 2
let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

// 3
let date2 = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date2) );       // вторник, нужно показать 2

function getLocalDay(date) {
    let day = date.getDay();
    if(day==0) {
        day = 7;
    }
    return day;
}

// 4
let date3 = new Date(2015, 0, 2);

console.log( getDateAgo(date3, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date3, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date3, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

// 5
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log( getLastDayOfMonth(2012, 0) );
console.log( getLastDayOfMonth(2016, 1) );
console.log( getLastDayOfMonth(2000, 1) );

// 6

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToday());

function getSecondsToTomorrow() { 
    let now = new Date();
    return 86400 - getSecondsToday();
}
console.log(getSecondsToTomorrow());
