class task {
    constructor(name){
        this.name= name;
        this.isComplete = false;
    }
    editar(newName){
        
        this.name= newName;
        
    }
    eliminar(){

    }
    completar(){
        this.isComplete = true;
    }
}

class List{
    constructor(name){
        this.name= name;
        this.tasks= [];

    }
    addtask(task){
        this.tasks.push(task);//

    }
    removeTask(List){
        this.tasks.splice(i,1);
    }
}

