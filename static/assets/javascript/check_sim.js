function check_sim(){
var current_posts = Get_All_Posts(identity_made)
for (let i = 0; i < current_posts.length; i++) {
var similarity = current_posts[i].confession
var similarity_of_item = stringSimilarity.compareTwoStrings($('#confession_input').val(), similarity)
if (similarity_of_item > 0.74){
console.log($('#confession_input').val(),similarity_of_item,similarity)
}}}
