function access_json(data){
console.log(data)

}
$.getJSON('http://dahlen.xyz/data.json', function(data) { 
access_json(data)
});
