document.body.style.border = "5px solid red";
var elements = document.getElementsByClassName("expando-button");

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.click();
}

document.body.style.border = "5px green solid";

