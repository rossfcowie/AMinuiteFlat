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
            board[i][j];
             + `</div>`
            gamebox.innerHTML+= t;
            
          }
          
      
    }
}
module.exports = show;

    function clicked(x,y){
        console.log("clicked");
        if(event.shiftKey){
            board[x][y]+=1;
        }else{
            
            board[x][y]-=1;
        }
        show(board);
    }