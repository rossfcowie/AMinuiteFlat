const gamebox = document.querySelector("#content");
function show(board){
    board = this.board;
let size = board.length;
let columns = "";
gamebox.innerHTML='';
    for(var i = 0; i < size; i++) {
        columns += " 1fr";
        for(var j = 0; j < size; j++) {
            let t = `
            <div id = "content" class="content" style = "background: rgba(`+parseInt(16*(3*board[i][j])%255)+`,` +parseInt(128+ 16*(5*board[i][j])%255)+`,` +parseInt(128+ 16*(7*board[i][j])%255)+`, `+0.3+`);" onclick="clicked(`+i+`,`+j+`)">`+
            +board[i][j];
             + `</div>`
            gamebox.innerHTML+= t;
            
          }
    }
    
gamebox.style.gridTemplateColumns = columns;
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
