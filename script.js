//General
const body = document.body;
const gameBoard = document.createElement('div');
const gamePlayers=document.createElement('div');
const gameTurn=document.createElement('div');
const gameResult=document.createElement('div');

gameBoard.className='game';
body.append(gameBoard);

gamePlayers.className='players';
body.append(gamePlayers);

gameTurn.className='turn';
body.append(gameTurn);

gameResult.className='results';
body.append(gameResult);

const btnReset=document.createElement('button');
btnReset.textContent='Clear'
body.append(btnReset)

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
        btn.className='tile'
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

const btns = document.querySelectorAll('.tile')


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

const players = []
players.push(playerOne);
players.push(playerTwo);


gamePlayers.textContent=`${playerOne.info()}\n${playerTwo.info()}`

// Function for Switching player Turns
let activePlayer = players[0];

function switchPlayerTurn(){
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
};

const getActivePlayer = () => activePlayer;

btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.textContent===''){
        btn.textContent= activePlayer===players[0]?'O':'X'
        switchPlayerTurn();
        announceResult();
        checkTie();
        }
    })
})

switchPlayerTurn();

function clearGame(){   
    //reset
    btns.forEach((btn)=>{
        btn.textContent='';
        btn.disabled=false;
    })
    
}

btnReset.addEventListener('click',()=>{
    clearGame();
})

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');

const btnTiles = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

const winningCombo=[
    [btn1,btn2,btn3],
    [btn4,btn5,btn6],
    [btn7,btn8,btn9],
    [btn1,btn4,btn7],
    [btn2,btn5,btn8],
    [btn3,btn6,btn9],
    [btn1,btn5,btn9],
    [btn3,btn5,btn7]
]

function announceResult(){
    for(let i=0;i<winningCombo.length;i++){
        const combo=winningCombo[i];

        if(
            combo[0].textContent!==''&&
            combo[0].textContent===combo[1].textContent&&
            combo[0].textContent===combo[2].textContent
        ){
            gameResult.textContent=`${activePlayer.name} wins!`

        btns.forEach(btn=>btn.disabled=true);
        return true;
        }
    }
    return false;
}

function checkTie(){
    const allFilled= btns.every(btn=>btn.textContent!=='');
    if(allFilled && !announceResult()){
        gameResult.textContent='No Contest. Play again?'
        btns.forEach(btn=>btn.disabled=true);
        return true;
    }
return false;
}