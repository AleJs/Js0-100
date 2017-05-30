"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var task = function () {
    function task(name) {
        _classCallCheck(this, task);

        this.name = name;
        this.isComplete = false;
    }

    _createClass(task, [{
        key: "editar",
        value: function editar(newName) {

            this.name = newName;
        }
    }, {
        key: "eliminar",
        value: function eliminar() {}
    }, {
        key: "completar",
        value: function completar() {
            this.isComplete = true;
        }
    }]);

    return task;
}();

var List = function () {
    function List(name) {
        _classCallCheck(this, List);

        this.name = name;
        this.tasks = [];
    }

    _createClass(List, [{
        key: "addtask",
        value: function addtask(task) {
            this.tasks.push(task); //
        }
    }, {
        key: "removeTask",
        value: function removeTask(List) {
            this.tasks.splice(i, 1);
        }
    }]);

    return List;
}();