

/*

btnSubmitForumPost.onclick=function(){
    let name = inptName.value
    let animalType = inptType.value
  
    let query = "INSERT INTO message (petName,petType) VALUES ('" + name + "', '" + animalType + "')"
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
  changeForm(PLACEHOLDER)
}
*/
