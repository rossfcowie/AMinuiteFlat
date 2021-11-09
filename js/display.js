const gamebox = document.querySelector("#content");
var board;

function show(board){
    board = this.board;
let size = board.length;
gamebox.innerHTML='';
    for(var i = 0; i < size; i++) {
        
        for(var j = 0; j < size; j++) {
            let t = `
            <div id = "content" class="content" onclick="clicked(`+i+`,`+j+`)">`+
            `<div class = content`+Math.abs(board[i][j]%5)+`>`
            +board[i][j];
             + `</div>`
             + `</div>`
            gamebox.innerHTML+= t;
            
          }
          
      
    }
}
module.exports = show;

    function clicked(x,y){
        if(event.shiftKey){
            board[x][y]+=1;
        }else{
            board[x][y]-=1;
        }
    }
    module.exports = clicked;