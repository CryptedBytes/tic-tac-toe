const alternating = true;
const debug_showCellIDs = false;
let turn = "X";
const totalCells = 9;
let cells_x = [];
let cells_o = [];
let concluded = false;
let winner = ""

const O = "O"
const X = "X"

let playcount = 0;

//let board = [3][3]
let board = new Array(3).fill(0).map(() => new Array(3).fill(0));

const arraysum = arr => arr.reduce((a,b)=>a+b);

String.prototype.count = function (c) {
  var result = 0,
    i = 0;
  for (i; i < this.length; i++) if (this[i] == c) result++;
  return result;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    console.log(board);
  }
});

window.addEventListener("load", function () {
  if (debug_showCellIDs) printCellIds();
});

function cellHover(id) {
  console.log(`on hover!! ${id}`);
  //document.getElementById(id).innerText = "x"
}

function cellClick(id) {
  if(document.getElementById(id).innerText != "X" && document.getElementById(id).innerText != "O"){
    playcount++;
    console.log("playcount: ", playcount);
    
    let cellID2 = id.replace("cell", "");
    cellID2 = parseInt(cellID2);
    //console.log("cellid2: " + cellID2)
  
    switch (true) {
      case cellID2 < 3:
        console.log("case 1");
        board[0][cellID2 % 3] = turn;
        break;
  
      case cellID2 >= 3 && cellID2 < 6:
        console.log("case 2");
        board[1][cellID2 % 3] = turn;
        break;
  
      case cellID2 >= 6 && cellID2 < 9:
        console.log("case 3");
        board[2][cellID2 % 3] = turn;
        break;
  
      default:
        console.log("case def");
        break;
    }
  
    console.log(`on click!! ${id}`);
    document.getElementById(id).innerText = turn;
    let cellID = id.replace("cell", "");
    cellID = parseInt(cellID);
    if (alternating) {
      if (turn === "X") {
        turn = "O";
        if(!cells_x.includes(cellID)) cells_x.push(cellID);
      } else {
        turn = "X";
        if(!cells_o.includes(cellID)) cells_o.push(cellID);
      }
    }
    console.log("cells_x: " + cells_x + "\ncells_o: " + cells_o);
  
    checkGameStatus(id);
  }
  
}

function printCellIds() {
  console.log(`printCellIds`);
  var y = document.getElementsByClassName("tableCell");

  console.log(y.length);

  for (
    let i = 0;
    i < document.getElementsByClassName("tableCell").length;
    i++
  ) {
    let element = document.getElementsByClassName("tableCell")[i];
    element.innerText = i;
  }
}

function checkGameStatus(id) {
  let row0 = board[0].toString();
  console.log("🚀 ~ file: main.js ~ line 87 ~ checkGameStatus ~ row0", row0);
  let row1 = board[1].toString();
  console.log("🚀 ~ file: main.js ~ line 89 ~ checkGameStatus ~ row1", row1);
  let row2 = board[2].toString();
  console.log("🚀 ~ file: main.js ~ line 91 ~ checkGameStatus ~ row2", row2);

  //let col0 = board[0].toString();

  let col0 = "",
    col1 = "",
    col2 = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == 0) {
        col0 = col0 + board[j][0].toString();
        console.log("case 0 col0");
      } else if (i == 1) {
        col1 = col1 + board[j][1].toString();
        console.log("case 1 col1");
      } else if (i == 2) {
        col2 = col2 + board[j][2].toString();
        console.log("case 2 col2");
      }
    }
  }

  console.log("🚀 ~ file: main.js ~ line 96 ~ checkGameStatus ~ col2", col2);
  console.log("🚀 ~ file: main.js ~ line 96 ~ checkGameStatus ~ col1", col1);
  console.log("🚀 ~ file: main.js ~ line 96 ~ checkGameStatus ~ col0", col0);

  if(col0.count("X") == 3 || col1.count("X") == 3 || col2.count("X") == 3 || row0.count("X") == 3 || row1.count("X") == 3 || row2.count("X") == 3)
  {
    gameConcluded(id,X)
  }
  else if(col0.count("O") == 3 || col1.count("O") == 3 || col2.count("O") == 3 || row0.count("O") == 3 || row1.count("O") == 3 || row2.count("O") == 3)
  {
  
    gameConcluded(id,O)
  }
  //diagonal
  else if(board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"){
    gameConcluded(id,X)
  }
  else if(board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"){
    gameConcluded(id,O)
  }
  //diagonal
  else if(board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X"){
    gameConcluded(id,X)
  }
  else if(board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"){
    gameConcluded(id,O)
  }
  else if(playcount == 9){
    gameConcluded(id, "draw")
  }

  

  // BAD LOGIC
  // else if(arraysum(cells_x) == 12){
  //   gameConcluded(id,X)
  // }
  // else if(arraysum(cells_o) == 12){
  //   gameConcluded(id,Y)
  // }
  
}


function onRestartClick(){
  document.location.reload();
}

function gameConcluded(lastTilePlayed,winner) {

    let gameOverView = document.getElementById("gameOverView");
    gameOverView.style.visibility = "visible";
    document.getElementById("gameOverView_subtitle").innerText = winner + " won!";
    if(winner == "draw") document.getElementById("gameOverView_subtitle").innerText = "It's a draw!";
    
    console.log("gameConcluded");
    let element =  document.getElementById(lastTilePlayed);
    element.classList.remove("highlightedOnHover");
  
    setTimeout(() => {
  
      if(winner == X){
        console.log("No doubts, X won!");
        //alert("No doubts, X won!");
      }
      else{
        console.log("It's official, O won!");
        //alert("It's official, O won!");
      }

      
    }, 250);


    setTimeout(() => {
      element.classList.add("highlightedOnHover")
    }, 500);
    
}
