
forumMainPage.onshow=function(){
   
  
  hmbPages9.clear()
  hmbPages9.addItem("See Tournament Location") 
  hmbPages9.addItem("Upload Video")
  hmbPages9.addItem("Submit Game Stats")
  hmbPages9.addItem("View Your Recent Games")
  hmbPages9.addItem("Message Board")
  hmbPages9.addItem("View official 2K Announcements")



hmbPages9.onclick=function(s){
  if (typeof(s) == "object") { // do nothing
       return
    }
    switch(s) {
      case "See Tournament Location":
          ChangeForm(GoogleMaps)
          break
      case "Upload Video":
          // do something
          ChangeForm(uploadVideo)
          break
       case "Submit Game Stats":
          ChangeForm(submitGame)
          break
         case "View Your Recent Games":
          ChangeForm(Charts)
          break
       case "Message Board":
          ChangeForm(forumMainPage)
          break
      case "View official 2K Announcements":
          ChangeForm(rssFeed)
          break
     }

}


lstForumPosts.clear()
  let query = "SELECT main_content, day_time, title FROM message"
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
            lstForumPosts.addItem(results[i][0])
        }
     } 
  } else{
      NSB.MsgBox("Something run")
  }
}





btnNewForumPost.onclick=function(){
  ChangeForm(forumPostInitial)
}
