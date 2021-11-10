
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

module.exports = iswin;