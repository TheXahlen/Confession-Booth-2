var myObject =  '{{ json| tojson | safe }}'
	myObject = JSON.parse(myObject)
	var length = Object.keys(myObject['entries'])
	length = length.length
   let empty = []
	for(let i = 0; i < length; i++) {
		console.log(i)
		let confession = myObject['entries'][i]["index"]["confession"]
		let identiy = myObject['entries'][i]["index"]["identity"]
      let size = myObject['entries'][i]["index"]["size"]
      let color = myObject['entries'][i]["index"]["color"]
      let confession_complete = confession + " Posted by: " + identiy
      empty.push({
         confession:  confession_complete,
         size: size,
         color : color 
      });
      console.log(empty)
		function UpdateDisplay() {
         number_created = Gen_Number(empty)
			var item =  empty[number_created].confession;
			document.getElementById("confession_display").innerHTML = item
		}
	}
	UpdateDisplay()
	$("#confession_items").remove();
