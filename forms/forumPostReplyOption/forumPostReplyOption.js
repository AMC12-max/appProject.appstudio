 
 
 forumPostReplyOption.onshow=function(){
 
 forumPosts.clear()
  let query = "SELECT title FROM message"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query)
  
  if (req1.status == 200) { //transit worked.
    let results = JSON.parse(req1.responseText)
    
    //get the array
    if (results.length == 0)
        txtDetail.value("There are no teams.")
    else {        
  
        let message = ""
        for (i = 0; i <= results.length - 1; i++){
            message = message + results[i][0] + "\n"
            forumPosts.addItem(results[i][0])
        }
     } 
  } else{
      NSB.MsgBox("Something run")
  }


forumPosts.onclick=function(s){
    if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
    }else {
      forumPosts.value = s   // make dropdown show choice user made
      
      //get the information from the database
      let query2 = "SELECT main_content FROM message WHERE title=" + '"' + forumPosts.selection + '"' 
      req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query2)
      
      
      if (req2.status == 200) { //transit worked.
          let results2 = JSON.parse(req2.responseText)
        
          //get the array
          if (results2.length == 0){
              txtForum.value("There are no post.")
          }else {        
              let message2 = ""
              for (i = 1; i <= 2; i++)
                  message2 = message2 + results2[0][i] + "\n"
              for (i =3; i <=5; i++)
                message2 = message2 + results2[0][i] + "\n "
              txtForum.value = message2
          } 
      }else{
        NSB.MsgBox("Something wrong")
      }
   }



btnForumPostReply.onclick=function(){
let postReply = txtForumPostMain.value 

//let query = "INSERT INTO message (reply_content) VALUES ('" + postReply + "') WHERE main_content = " + '"' + forumPosts.selection + '"' 
//  let query = "INSERT INTO users (user_email, username, user_password, first_name, last_name, phone_number) VALUES ('" + email + "', '" + username + "', '" + password + "' , '" + firstName + "' , '" + lastName + "' , '"  + phoneNumber + "')"

let query = "UPDATE message SET reply_content = '" + postReply + "' WHERE title = '"  + forumPosts.selection + "'"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mlc55572&pass=cHarliE125!&database=375groupb6&query=" + query)
   
      if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully responded to the post!")
        } else
            NSB.MsgBox("There was a problem with adding your response to the forum.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  

}
}
}


















//button to get back to home page 
btnHomeForumPost.onclick=function(){
  ChangeForm(homePageSignedIn)
}



