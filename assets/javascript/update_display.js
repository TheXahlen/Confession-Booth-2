var myObject = document.getElementById("confession_items").innerHTML
JSONarray = []
myObject = JSON.parse(myObject)

length = Object.keys(myObject['entries'])
length = length.length
var myObject = document.getElementById("confession_items").innerHTML = ""
for (let i = 0; i < length; i++) {
   console.log(i)
   let confession = myObject['entries'][i]["index"]["confession"]
   let identiy = myObject['entries'][i]["index"]["identity"]
   JSONarray.push(confession + " Posted by: " + identiy)
function UpdateDisplay(){
   var item = JSONarray[Math.floor(Math.random()*JSONarray.length)];
   document.getElementById("confession_display").innerHTML = item
}}
