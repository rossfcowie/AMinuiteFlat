
const timebox = document.querySelector("#countdown");

function iswin(board){
    let base = board[0][0];
    let x = board.length;
    let y = board.length;
    for(var i = 0; i < x; i++) {
        for(var j = 0; j < y; j++) {
           if(board[i][j] != base){
                return false;
           }; 
          }
      }
      return true;
}
function islose(board){
    let x = board.length;
    let y = board.length;
    for(var i = 0; i < x; i++) {
        for(var j = 0; j < y; j++) {
           if(board[i][j] <= 0){
                return true;
           }; 
          }
      }
      return false;
}
function loss(cause){       
    clearInterval(interval);           
    timebox.innerHTML=`<h1 id = "alert" onclick="reset()">You Lose, `+ cause + `!</h1>`;

}
function win(seconds){       
    clearInterval(interval);           
    timebox.innerHTML=`<h1 id = "alert" onclick="reset()">"You win, time left:`+seconds+`!</h1>`;

}


module.exports = iswin;
module.exports = islose;