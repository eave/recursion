// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var classes = className.split(" ");
  var elements = [];

  var elementSearch = function(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var pass = true;
      for (var j = 0; j < classes.length; j++) {
        if (!nodes[i].classList.contains(classes[j]))
          pass = false;
      }
      if (pass === true)
        elements.push(nodes[i]);
      if (nodes[i].children.length > 0)
        elementSearch(nodes[i].children);
    }
  }

  elementSearch(document.children);
  return elements;
};