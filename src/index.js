document.getElementById("add-word").addEventListener("click", e => {
  var template = document.getElementById("template-world");
  var hello = document.getElementById("hello");

  // Create an instance of the template content
  var instance = document.importNode(template.content, true);
  // Append istance to hello element
  hello.appendChild(instance);
});
