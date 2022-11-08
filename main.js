const alternating = true;
let turn = "X"
const totalCells = 9


window.addEventListener('load', function() {
    printCellIds();
})

function cellHover(id){
    console.log(`on hover!! ${id}`);
    //document.getElementById(id).innerText = "x"
}

function cellClick(id){
    console.log(`on click!! ${id}`);
    document.getElementById(id).innerText = turn;
    if(alternating){
        if(turn === "X") turn = "O"
        else turn ="X"
    }
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