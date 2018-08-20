// Business logic

/* Constructor function for Task objects. "name" parameter is the name of the task (string), "complete" parameter is a boolean value true or false. */

function Task(name, description, complete) {
  this.shortName = name;
  this.description = description;
  this.status = complete;
}













// User interface logic

$(document).ready(function() {
  $("#task-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#task-name").val();
    var inputtedDescription = $("#task-description").val();
    var checkBox = $("input:checkbox[name=task-complete]:checked").val();
    if (checkBox === "true") {
      var inputtedComplete = true;
    } else {
      var inputtedComplete = false;
    }
    var nextTask = new Task(inputtedName, inputtedDescription, inputtedComplete);

    $("#task-list").show();
    $("ul#task-list").append("<li><span class='task-item'>" + nextTask.shortName + "</span></li>");

    $(".task-item").last().click(function() {
      $(".task-details").text("");
      $(".task-details").append("<h4>" + nextTask.shortName + "</h4>");
      $(".task-details").append("<ul>");
      $(".task-details").append("<li>" + "Description: " + nextTask.description + "</li>");
      $(".task-details").append("<li>Click here if this task is finished.</li>") // The idea here is, we have a jQuery click listener here that executes a function when this text is clicked that will change the value of nextTask.complete from True to False. At the same time, when the complete value changes from True to False, the instances of nextTask.shortName here in the task-details panel and the instance in the task-list under the To-Do List header on the left will have the class "finished" added to their span, which will style the text with a striketru effect.

      // ("#show-contact").last().click(function() {
      //
      // })
    });

    $("#task-name").val("");
    $("#task-description").val("");

  });
  //(task-list).click(function())
  //$('ul li a').removeClass();
  //var index-$(this).parent().index();
  //$('ul').each(function() {
  //$('li', this).eq(index).find('a').addClass('clicked')

  //.append("<li><a href=")
})





// User interface logic
