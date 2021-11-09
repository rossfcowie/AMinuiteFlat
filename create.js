/*
Developer: Ross Cowie (Arumage)

*/
var x;
var y;
var board;

function create(size){
x=size;
y=size;
board = new Array(x);
let total = size*size *2;
big=3;

for(var i = 0; i < x; i++) {
    board[i] = new Array(y); 
    
    for(var j = 0; j < y; j++) {
        board[i][j] = Math.floor(Math.random()* Math.min(big,total))+1; 
       total-= board[i][j];
      }
      
  }
  return board;
}

module.exports = create;