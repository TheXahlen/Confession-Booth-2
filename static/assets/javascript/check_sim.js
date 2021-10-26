function check_sim(){
var current_posts = Get_All_Posts(identity_made)
for (let i = 0; i < current_posts.length; i++) {
var similarity = current_posts[i].confession
var similarity_of_item = stringSimilarity.compareTwoStrings($('#confession_input').val().toLowerCase(), similarity.toLowerCase())
console.log(similarity_of_item)
if (similarity_of_item > 0.74){
return false
}
}return true}
