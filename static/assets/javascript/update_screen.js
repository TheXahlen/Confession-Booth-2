
    myObject = JSON.parse(myObject)
	var length_of_array = Object.keys(myObject['entries'])
	length_of_array = length_of_array.length
   let empty = []
	for(let i = 0; i < length_of_array; i++) {
	  let confession = myObject['entries'][i]["index"]["confession"]
	  let identity = myObject['entries'][i]["index"]["identity"]
      let size = myObject['entries'][i]["index"]["size"]
      let color = myObject['entries'][i]["index"]["color"]
      let time = myObject['entries'][i]["index"]["time"]
      let decoration = myObject['entries'][i]["index"]["decoration"]
      empty.push({
         confession: confession,
         size: size,
         color: color,
         decoration: decoration,
         time: time,
         identity: identity,
         time:time
    
      });}
		function UpdateDisplay() {


         number_created = Gen_Number(empty)
        var item =  empty[number_created].confession;
        var size =  empty[number_created].size;
		var color =  empty[number_created].color;
        var decoration =  empty[number_created].decoration;
        var identity = empty[number_created].identity
        var time = empty[number_created].time
        window.current_identity = empty[number_created].identity
        document.getElementById("confession_display").style.color = color
		document.getElementById("confession_display").innerHTML = item
        document.getElementById("confession_display").style.fontSize = size
        document.getElementById("confession_display").style.textDecoration = decoration
        document.getElementById("confession_info").innerHTML = "Posted by: " + identity + " on " + time 
		}
	UpdateDisplay()
    function Cycle(){
    $('#confession_all').empty();
    $('#total_display').attr("style", "visibility: visible !important");

    }
	$("#for_delete").remove();
