/*
Developer: Ross Cowie (Arumage)

*/
var x;5
var y;
var board;

function create(size, difficulty){
x=size;
y=size;
board = new Array(x);
let total = size*size * (3 + (1 + difficulty));
big=Math.max((difficulty*difficulty/3),(3+difficulty));
let cleared = 0;
console.log(big);

for(var i = 0; i < x; i++) {
    board[i] = new Array(y); 
    
    for(var j = 0; j < y; j++) {
        cleared++;
        console.log(Math.min(big,(total/((size*size)-cleared))));
        board[i][j] = Math.floor(Math.random()* Math.min(big,(total/((size*size)-cleared))))+1; 
       total-= board[i][j];
      }
      
  }
  return board;
}


module.exports = create;