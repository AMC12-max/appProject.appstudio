
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
    
    
btnSubmit22.onclick=function(){
    let name = inptName.value
    let animalType = inptType.value
    
    let query = "INSERT INTO pets (petName,petType) VALUES ('" + name + "', '" + animalType + "')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=BIA375&database=clc90595&query=" + query)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the pet!")
        } else
            NSB.MsgBox("There was a problem with adding the pet to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
}
*/













//button to get back to home page 
btnHomeForumPost.onclick=function(){
  changeForm(PLACEHOLDER)
}

//button to make reply text box appear 
btnForumPostReply.onclick=function(){
  
  txtForumPostReply.style.display = "block"
}
