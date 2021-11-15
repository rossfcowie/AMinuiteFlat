const gamebox = document.querySelector("#content");

function gridsetup(size){
    let columns = "";
    for(var i = 0; i < size; i++) {
        columns += " 1fr";
    }

        
gamebox.style.gridTemplateColumns = columns;
}

function show(board){
    board = this.board;
let size = board.length;
gamebox.innerHTML='';
if(islose(board)){
    loss("broken board");
}else{
    for(var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++) {
            let t = `
            <div id = "content" class="content" style = "background: rgba` + getcolour(board[i][j]) + `" onclick="clicked(`+i+`,`+j+`)" >`+
            +board[i][j];
             + `</div>`
            gamebox.innerHTML+= t;
            
          }
    }
}
    
}
module.exports = show;

function getcolour(value){
    let r = value*32 % 256;
    let g = value*32 % 256;
    let b = value*32 % 256;


    if(value%2==0){
        r= 255;
        g= 255;
    }
    if(value==1){
        b= 255;
        g= 255;
    }

    if(value%3==0){
        r= 255;
    }
    if(value%5==0){
        g= 255;
    }    
    if(value%7==0){
        b= 255;
    }
    return `(`+parseInt(r)+`,` +parseInt(g)+`,` +parseInt(b)+`, `+0.3+`);`

}

    function clicked(x,y){
            board[x][y]-=1;
    }
    module.exports = clicked;


