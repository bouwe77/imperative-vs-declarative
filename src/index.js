import $ from "jquery";
var serializeForm = require("form-serialize");

var todos = ["Afwassen", "Stofzuigen", "Was opvouwen"];

var $app = $("#app")
  .append("<h1>My To Do App</h1>")
  .append("<ul>")
  .appendTo(document.body);

displayTodos();

function displayTodos() {
  $("ul").html("");
  todos.forEach(todo => {
    $("ul").append(`<li>${todo}</li>`);
  });
}

$app.append(`<form><input name="newTodo"/></form>`).on("submit", event => {
  event.preventDefault();
  const values = serializeForm(event.target, { hash: true });
  todos.push(values.newTodo);
  event.target.reset();
  displayTodos();
});
