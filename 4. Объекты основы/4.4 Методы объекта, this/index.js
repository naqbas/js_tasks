// 1
// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this;
//       }
//     };
// }
  
// let user = makeUser();
  
// alert( user.ref().name );

// 2
// let calculator = {
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// };
  
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// 3 
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep();