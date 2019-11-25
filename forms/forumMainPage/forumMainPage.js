











forumMainPage.onshow=function(){
    hmbPages6.clear()
  hmbPages6.addItem("See Tournament Location") 
  hmbPages6.addItem("Upload Video")
  hmbPages6.addItem("Submit Game Stats")
  hmbPages6.addItem("View your recent games")
  hmbPages6.addItem("Message Board")
  hmbPages6.addItem("View official 2K Announcements")

}


hmbPages6.onclick=function(){
  
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
       case "View your recent games":
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
