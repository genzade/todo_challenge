describe("ToDo List", function() {
  var taskfield = element(by.model("addCtrl.task"));
  var addButton = element(by.className("addBtn"));
  var taskList = element(by.className("taskList"));

  beforeEach(function() {
    browser.get("http://localhost:8080");
  });

  it("has a title", function() {
    expect(browser.getTitle()).toEqual("To Do List");
  });

  it("adding toDo's on the page", function() {
    taskfield.sendKeys("enter batcave");
    addButton.click();
    expect(taskList.getText()).toEqual("enter batcave");
  });

  // it("can clear completed", function() {
  //   taskfield.sendKeys("enter batcave");
  //   addButton.click();
  //   element.all(by.className("checkbox")).first().click();
  //   element(by.className("clearBtn")).click();
  //   expect(taskList.getText()).toEqual("edit");
  // });

});