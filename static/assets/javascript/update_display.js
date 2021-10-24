myObject = JSON.parse(myObject);
var length_of_array = Object.keys(myObject["entries"]);
length_of_array = length_of_array.length;
let empty = [];
for (let i = 0; i < length_of_array; i++) {
  let confession = myObject["entries"][i]["index"]["confession"];
  let identiy = myObject["entries"][i]["index"]["identity"];
  let size = myObject["entries"][i]["index"]["size"];
  let color = myObject["entries"][i]["index"]["color"];
  let confession_complete = confession + " Posted by: " + identiy;
  empty.push({
    confession: confession_complete,
    size: size,
    color: color,
  });
  function UpdateDisplay() {
    number_created = Gen_Number(empty);
    var item = empty[number_created].confession;
    var size = empty[number_created].size;
    var color = empty[number_created].color;
    document.getElementById("confession_display").style.color = color;
    document.getElementById("confession_display").innerHTML = item;
    document.getElementById("confession_display").style.fontSize = size;
  }
}
UpdateDisplay();
$("#for_delete").remove();
