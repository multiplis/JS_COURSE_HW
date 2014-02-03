function selectItem(item){  
  var select = document.getElementsByClassName("selected");
  Array.prototype.forEach.call(select, function(cell){
    cell.className = "";
  });  
  item.target.className = "selected";
}

function setBindings(){
  var table = document.getElementById("field");
  table.addEventListener("click", selectItem,  false);
}
function setKeyboardEvents(){
  document.addEventListener("keydown", function(e){
  
    switch (e.keyCode){
      case 37:
        moveLeft();
        break;
      case 38:
        moveUp();
        break;
      case 39:
        moveRight();
        break;
      case 40:
        moveDown();
        break;
      case 13:
        if(e.shiftKey){
          addColumn();
        }else{
          addRow();
        }
        break;
      case 46:
        if(e.shiftKey){
          deleteColumn();
        }else{
          deleteRow();
        }
        break;
      default:
        break;
    }
  },false);
}
function moveLeft(){
  console.log('left');
}
function moveUp(){
  console.log('up');
}
function moveRight(){
  console.log('right');
}
function moveDown(){
  console.log('down');
}
function addColumn(){
  console.log("add column");
}
function addRow(){
  console.log("add row");
}
function deleteColumn(){
  console.log("delete column");
}
function deleteRow(){
  console.log("delete row");
}
setKeyboardEvents();
setBindings();