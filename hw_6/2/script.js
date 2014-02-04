var selectedId ="00";
var _rows = 3;
var _columns = 4;
function generateField(rows, columns){
  var row, cell,rowInner;
  var field = document.getElementById("field");
  field.innerHTML ="";
  for(var i =0; i < rows; i++){
    rowInner ="";
    row = document.createElement("div");
    row.setAttribute("id", i);
    for (var j =0; j <columns; j++){
      column = document.createElement("div");
      column.setAttribute("id", ""+i+j);
      row.appendChild(column);
    }
    field.appendChild(row);
  }
}
function clearSelect(){
  var select = document.getElementsByClassName("selected");
  Array.prototype.forEach.call(select, function(cell){
    cell.className = "";

  });
}
function clickSelect(item){  
  clearSelect();
  
  selectedId = item.target.id;
  item.target.className = "selected";
}
function keySelect(id){
  var cell = document.getElementById(id);
  if(cell){
    selectedId = id;
    clearSelect();
    cell.className = "selected";
  }else{
    keySelect("00");
  }
}

function setBindings(){
  var field = document.getElementById("field");
  field.addEventListener("click", clickSelect,  false);
}
function setKeyboardEvents(){
  document.addEventListener("keyup", function(e){
  
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
  var id;
  if(selectedId.length === 2 ){
    id = selectedId.split("")[0]+(parseInt(selectedId.split("")[1]) - 1); 
  }
  keySelect(id);
}
function moveUp(){
  var id;
  if(selectedId.length === 2 ){
    id =(parseInt(selectedId.split("")[0]) - 1)+ selectedId.split("")[1]; 
  }else{
    id = parseInt(selectedId) - 1+"";
  }
  keySelect(id);
}
function moveRight(){
  var id;
  if(selectedId.length === 2 ){
    id = selectedId.split("")[0]+(parseInt(selectedId.split("")[1]) + 1); 
  }
  keySelect(id);
}
function moveDown(){
  var id;
  if(selectedId.length === 2 ){
    id =(parseInt(selectedId.split("")[0]) + 1)+ selectedId.split("")[1]; 
  }else{
    id = parseInt(selectedId) + 1+"";
  }
  keySelect(id);
}
function addColumn(){
  if(_columns >0 && _columns <10 ){
    _columns = _columns + 1;
    generateField(_rows,_columns);
  }
  keySelect(selectedId);
}
function addRow(){
  if(_rows >0 && _rows <10){
    _rows = _rows + 1;
    generateField(_rows,_columns);
  }
  keySelect(selectedId);
}
function deleteColumn(){
  if(_columns >1 && _columns <10 ){
    _columns = _columns - 1;
    generateField(_rows,_columns);
  }
  keySelect(selectedId);
}
function deleteRow(){
  if(_rows >1 && _rows <10){
    _rows = _rows - 1;
    generateField(_rows,_columns);
  }
  keySelect(selectedId);
}



generateField(_rows,_columns);
keySelect(selectedId);
setKeyboardEvents();
setBindings();