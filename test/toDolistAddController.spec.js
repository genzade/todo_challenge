describe("ToDoListAddController", function() {
  beforeEach(module("ToDoListing"));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller("ToDoListAddController");
  }));

  it("initialises with an empty task list", function() {
    expect(ctrl.taskList).toEqual([])
  });

  describe("when adding a task", function() {
    it("adds a task to the list", function() {
      var indexNumber = ctrl.taskList.length;
      ctrl.task = "catch the joker"
      ctrl.addTask();
      expect(ctrl.taskList).toEqual([{taskName: "catch the joker", done: false, index: indexNumber}])
    });
  });

  describe("when editing a task", function() {
    it("edits a task in the list", function() {
      var indexNumber = 0;
      ctrl.task = "catch the joker"
      ctrl.addTask();
      ctrl.editMode(indexNumber);
      ctrl.task = "catch twoFace";
      ctrl.addTask(ctrl.task);
      expect(ctrl.taskList).toEqual([{taskName: "catch twoFace", done: false, index: indexNumber}])
    });
  });
});