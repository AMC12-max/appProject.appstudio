
/*
let title = mainPostTitle
let main_content = mainPostContent 
let reply_content = replyPostContent  
let user_id = username  
let day_time = 

let txtForumPostMain.header = `${username} - ${mainPostTitle} - ${day_time}`
let txtForumPostMain.value = `${mainPostContent}`
let txtForumPostReply.header = `${username} - ${day_time}`
let txtForumPostReply.value = `${replyPostContent}`

 let queryForum = "SELECT * FROM message"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=376groupb6&query=" + queryForum)
    */



//hides reply option until button hit 
btnForumPostReply.onclick=function(){
     txtForumPostReply.style.display = "block"
}




//button to get back to home page 
btnHomeForumPost.onclick=function(){
  changeForm(PLACEHOLDER)
}
