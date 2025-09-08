// Array
const mark = [0, 0, 0,
              0, 0, 0,
              0, 0, 0]

//Obj
function Tile(mark){
    this.mark = mark;
}

//Gameboard
const body = document.body;
const board = document.createElement('div');
board.className = 'board';
const title = document.createElement('h1');
title.textContent = 'Tic-Tac-Toe'
body.append(title);

function createTile(){
    for(i=0;i<9;i++){
        const tile = document.createElement('div');
        tile.className = `tile ${i}`;
        tileMark = mark[i];
        tile.append(tileMark);
        board.append(tile);
    }
}

createTile();
body.append(board);

//Event Listeners

const tiles = document.querySelectorAll('.tile');

tiles.forEach((item)=>{
    item.addEventListener('click', ()=>{
        console.log("I'm a tile")
        item.style.backgroundColor="#eeeeee";
    })
})

//Players
const playerOne = tiles.forEach((item)=>{
    item.addEventListener('click', ()=>{
    })
})
const playerTwo = tiles.forEach((item)=>{
    item.addEventListener('click', ()=>{
    })
})
//Game Mechanics
function gameRound(){

}