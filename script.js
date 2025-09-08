//General
const body = document.body;
// Array
const mark = [0, 0, 0,
              0, 0, 0,
              0, 0, 0]

//Obj
const Tile = function (mark){
    this.mark=mark;
}

//Board
const board = document.createElement('div'); 
board.className='board';
body.append(board);

//Individual Tile
function createTiles(){
    for(i=0;i<9;i++){
        const div = document.createElement('div');
        div.className = `div ${i}`;
        const tile = new Tile(mark[i]);
        div.append(tile.mark);
        board.append(div);
    }
}

createTiles();