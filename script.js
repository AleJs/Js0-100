var newtaks = document.getElementById('new-taks');
var list = document.getElementById('taks-list');

function addTask(e) {
    e.preventdefault;
    if (e.which === 13) {
        var newtaks = document.createElement('li')
        var newtakse1 = document.createElement('input')
        var newtakse2 = document.createElement('span')
        newtakse1.type = "checkbox";
        newtaks.textContent = this.value;
        newtaks.appendChild(newtakse1);
        newtaks.appendChild(newtakse2);
        list.appendChild(newtaks);
        this.value = "";
        completedtaks();
    }
}

function completedtaks(){
    for (var i = 0; i < list.children.length; i++) {
        var takscompled = list.children[i].querySelector('input');
        takscompled.addEventListener('change', function(){
                if(this.checked){
                    this.parentElement.classList.add('completada');
                }
        });

    }
}
newtaks.addEventListener('keyup', addTask);