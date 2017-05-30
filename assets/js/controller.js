var newTaskEl =  document.getElementById('new-taks');
var newListEl= document.getElementById('taks-list');
var inbox = new List('inbox');
function addtask(e, list= inbox) {
    e.preventDefault();
    if(e.which === 13){
        var newtask= new task(this.value);
        
        list.addtask(newtask);
        prinTask(this.value);
        this.value= "";
        console.table(list.tasks);
    }

}
//
function editTask(list = inbox){
  var listItems = newListEl.children;
  for(let i = 0; i < listItems.length; i++){
    listItems[i].querySelector('span').addEventListener('blur', () => {
      list.tasks[i].editar(listItems[i].querySelector('span').textContent);
      console.table(list.tasks);
    })
  }
}
//
function completeTask(list = inbox){
  var listItems = newListEl.children;
  for(let i = 0; i < listItems.length; i++){
    listItems[i].querySelector('input').addEventListener('clic', () => {
      if(listItems[i].querySelector('input').checked){
        list.tasks[i].completar();
        listItems[i].classList.add('complete');
      }
      console.table(list.tasks);
    })
  }
}

function remove(list = inbox){
  var listItems = newListEl.children;
  for(let i = 0; i < listItems.length; i++){
    listItems[i].querySelector('input').addEventListener('clic', () => {
        e.preventDefault();
        var _i = i;
        
        list.removeTask(_i);
        this.parentElement.remove();
      
      console.table(i);
    })
  }
}

newTaskEl.addEventListener('keyup', addtask);