toDoListing.controller("ToDoListAddController", [function() {
  var self = this;

  self.taskList = [];
  self.editTask = null;

  self.addTask = function() {
    var indexNumber = self.taskList.length;
    if (self.editTask != null) {
      indexNumber = self.editTask.index;
    }

    self.taskList.splice(indexNumber, 0, { taskName: self.task, done: false, index: indexNumber });
    self.task = "";
    self.editTask = null;
  };

  self.editMode = function(index) {
    self.editTask = self.taskList[index];
    self.task = self.taskList[index].taskName;
    self.taskList.splice(index, 1);
  };

  // self.editTask = function(index) {
  // };
}]);
