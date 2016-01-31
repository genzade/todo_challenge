describe("ToDoListAddController", function() {
  beforeEach(module("ToDoListing"));

  var ctrl;
  var indexNumber;

  beforeEach(inject(function($controller) {
    ctrl = $controller("ToDoListAddController");
  }));

  it("initialises with an empty task list", function() {
    expect(ctrl.taskList).toEqual([])
  });

  describe("#tasks", function() {
    beforeEach(function() {
      indexNumber = ctrl.taskList.length;
      ctrl.task = "catch the joker"
      ctrl.addTask();
    });

    describe("when adding a task", function() {
      it("adds a task to the list", function() {
        expect(ctrl.taskList)
        .toEqual([{taskName: "catch the joker", done: false, index: indexNumber}])
      });
    });

    describe("when editing a task", function() {
      it("edits a task in the list", function() {
        ctrl.editMode(indexNumber);
        ctrl.task = "catch twoFace";
        ctrl.addTask(ctrl.task);
        expect(ctrl.taskList)
        .toEqual([{taskName: "catch twoFace", done: false, index: indexNumber}])
      });
    });

    describe("when checking off done", function() {
      it("clear tasks that are done", function() {
        ctrl.task = "catch penguin"
        ctrl.addTask();
        ctrl.taskList[1].done = true;
        ctrl.clearDoneTasks();
        expect(ctrl.taskList)
        .toEqual([{taskName: "catch the joker", done: false, index: indexNumber}])
      });
    });
  });
});