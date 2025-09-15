//General
const body = document.body;
const gameBoard = document.createElement('div');
const gamePlayers=document.createElement('div');
const gameResult=document.createElement('div');

gameBoard.className='game';
body.append(gameBoard);

gamePlayers.className='players';
body.append(gamePlayers);

gameResult.className='results';
body.append(gameResult);

//Value
let tiles = [];

// Tile
function Tile(id, value){
    this.id=id;
    this.value=value;
}

Tile.prototype.info=function(){
    return `Tile ${this.id}: ${this.value}`;
}

function makeTile(){
    for(i=1;i<=9;i++){
        const btn = document.createElement('button');
        gameBoard.append(btn);

        const tile = {
            id:`${i}`,
            value:0,
            info: function(){
                return `Tile ${this.id}: ${this.value}`
            }
        }
        tiles.push(tile);

        btn.setAttribute('id',tile.id);
        console.log(btn);
    }
    console.log(tiles);
}

makeTile();

const btns = document.querySelectorAll('button')


// Player
function Player(name, marker){
    this.name=name;
    this.marker=marker;
}

Player.prototype.info=function(){
    return `${this.name}: ${this.marker}`;
}

const playerOne = new Player('player 1', 'O');
const playerTwo = new Player('player 2', 'X');
console.log(playerOne.info());
console.log(playerTwo.info());

const players = [
    playerOne,
    playerTwo
]

// Function for Switching player Turns
function switchPlayerTurn(){
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
    if(activePlayer===playerOne){
        btns.forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                btn.textContent='O'
            })
        })
    }
    else if(activePlayer===playerTwo){
        btns.forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                btn.textContent='X'
            })
        })
    }
};

function playGame(){
    //activate switchPlayerTurn()
    //announce winner when three in a row
}

function threeInARow(){
    // arrangements of different array announces win
    // first row
    // second row
    // third row
    // first column
    // second column
    // third column
    // first diagonal
    // second diagonal
}