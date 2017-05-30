'use strict';

var newTaskEl = document.getElementById('new-taks');
var newListEl = document.getElementById('taks-list');
var inbox = new List('inbox');
function addtask(e) {
  var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

  e.preventDefault();
  if (e.which === 13) {
    var newtask = new task(this.value);

    list.addtask(newtask);
    prinTask(this.value);
    this.value = "";
    console.table(list.tasks);
  }
}
//
function editTask() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inbox;

  var listItems = newListEl.children;

  var _loop = function _loop(i) {
    listItems[i].querySelector('span').addEventListener('blur', function () {
      list.tasks[i].editar(listItems[i].querySelector('span').textContent);
      console.table(list.tasks);
    });
  };

  for (var i = 0; i < listItems.length; i++) {
    _loop(i);
  }
}
//
function completeTask() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inbox;

  var listItems = newListEl.children;

  var _loop2 = function _loop2(i) {
    listItems[i].querySelector('input').addEventListener('clic', function () {
      if (listItems[i].querySelector('input').checked) {
        list.tasks[i].completar();
        listItems[i].classList.add('complete');
      }
      console.table(list.tasks);
    });
  };

  for (var i = 0; i < listItems.length; i++) {
    _loop2(i);
  }
}

function remove() {
  var _this = this;

  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : inbox;

  var listItems = newListEl.children;

  var _loop3 = function _loop3(i) {
    listItems[i].querySelector('input').addEventListener('clic', function () {
      e.preventDefault();
      var _i = i;

      list.removeTask(_i);
      _this.parentElement.remove();

      console.table(i);
    });
  };

  for (var i = 0; i < listItems.length; i++) {
    _loop3(i);
  }
}

newTaskEl.addEventListener('keyup', addtask);