const alternating = true;
const debug_showCellIDs = true;
let turn = "X"
const totalCells = 9
let cells_x = [];
let cells_o = [];

window.addEventListener('load', function() {
   if(debug_showCellIDs) printCellIds();
})

function cellHover(id){
    console.log(`on hover!! ${id}`);
    //document.getElementById(id).innerText = "x"
}

function cellClick(id){
    console.log(`on click!! ${id}`);
    document.getElementById(id).innerText = turn;
    let cellID = id.replace("cell", "");
    if(alternating){
        if(turn === "X"){
            turn = "O";
            cells_x.push(cellID);

        }
        else{
            turn ="X"
            cells_o.push(cellID);
        }
    }
    console.log("cells_x: " + cells_x + "\ncells_o: " + cells_o);
}


function printCellIds(){
    console.log(`printCellIds`);
    var y = document.getElementsByClassName('tableCell');

    console.log(y.length);

    
  for (let i = 0; i < document.getElementsByClassName("tableCell").length; i++) {
    let element = document.getElementsByClassName("tableCell")[i];
    element.innerText = i;
  }
}



function checkGameStatus(){

}