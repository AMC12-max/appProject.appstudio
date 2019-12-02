
//cannot use apostrophe's when putting in information

btnSubmitForumPost.onclick=function(){
    let postText = txtForumPostInitial.value

  
    let query = "INSERT INTO message (main_content) VALUES ('" + postText + "')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=375groupb6&query=" + query)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully created the post!")
        } else
            NSB.MsgBox("There was a problem with adding the post to the forum.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  

}




btnReturnHomeForumInitial.onclick=function(){
  ChangeForm(homePageSignedIn)
}

