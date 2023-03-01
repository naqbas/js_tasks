//1
let i=3;
while (i) {
    alert(i--); // 3 2 1
}

//2
i=0;
while (++i < 5) alert(i); //1 2 3 4

i=0;
while(i++ < 5) alert(i); //1 2 3 4 5

//3
for(let i=2; i<=10; i++) {
    if(i%2==0) {
        alert(i);
    }
}

//4
i=0;
while(i<3) {
    alert(`number ${i}!`);
    i++;
}

//5
let number; 
do {
    number=prompt("ввести число, больше 100");
} while (+number <= 100 && number) 
alert("ты смог!");

//6
let n=10;
nextPrime: for(let i=2; i<=10; i++) {
    for(let j=2; j<i; j++) {
        if(i%j==0) continue nextPrime;
    }
    alert(i);
}