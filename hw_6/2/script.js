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
setBindings();