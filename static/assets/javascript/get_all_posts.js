function Get_All_Posts(identity_passed){
    $('#confession_all').empty();
    $('#confession_all').attr("style", "visibility: visible  !important");
    $('#total_display').attr("style", "display: none !important");
    all_posts = []
for (let i = 0; i < empty.length; i++) {
    console.log(empty[i].identity)
  if(empty[i].identity == identity_passed){
    var confession =  empty[i].confession;
    var size =  empty[i].size;
    var color =  empty[i].color;
    var decoration =  empty[i].decoration;
    var identity = empty[i].identity
    var time = empty[i].time
    all_posts.push({
       confession: confession,
       size: size,
       color: color,
       decoration: decoration,
       time: time,
       identity: identity,
       time:time
      
    });
    
}}
for (let i = 0; i < all_posts.length; i++) {
    var first_node = document.createElement("P"); 
    first_node.setAttribute("id", "Identity" + i);
    var second_node = document.createElement("P"); 
    second_node.setAttribute("id", "Confession" + i);
    second_node.setAttribute("class","d-flex justify-content-center")
    first_node.setAttribute("class","display-5 bg-dar border-light rounded border d-flex justify-content-center p-2 text-white")
    var first_text_node = document.createTextNode("Posted by: " + all_posts[i].identity + " at " + all_posts[i].time ); 
    var second_text_node = document.createTextNode(all_posts[i].confession); 
    first_node.appendChild(first_text_node);
    second_node.appendChild(second_text_node);
    document.getElementById("confession_all").appendChild(first_node);
    document.getElementById("confession_all").appendChild(second_node);
    var confession_element  = document.getElementById("Confession" + i);
    var identity_element  = document.getElementById("Identity" + i);

    confession_element.style.color = all_posts[i].color
    confession_element.style.fontSize = all_posts[i].size
    confession_element.style.textDecoration = all_posts[i].decoration
    identity_element.style.color = "white"

    
    
    
    
    }
return all_posts}
