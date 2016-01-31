toDoListing.controller("ToDoListAddController", function() {
  var self = this;

  self.taskList = [];
  self.editTask = null;

  self.addTask = function() {
    if (self.task == "") {
      return;
    }

    var indexNumber = self.taskList.length;
    var done = false;
    if (self.editTask != null) {
      indexNumber = self.editTask.index;
      done = self.editTask.done;
    }

    self.taskList.splice(indexNumber, 0, { "taskName": self.task, "done": done, "index": indexNumber });
    self.task = "";
    self.editTask = null;
  };

  self.editMode = function(index) {
    self.editTask = self.taskList[index];
    self.task = self.taskList[index].taskName;
    self.taskList.splice(index, 1);
  };

  self.clearDoneTasks = function() {
    var activeTasks = [];

    for (var i = 0; i < self.taskList.length; i++) {
      if (self.taskList[i].done == false) {
        self.taskList[i].index = i;
        activeTasks.push(self.taskList[i]);
      }
    }
    self.taskList = activeTasks;
  };
});
