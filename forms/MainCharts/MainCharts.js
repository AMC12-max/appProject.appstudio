MainPages.onshow=function(){


  hmbPages12.clear()
  hmbPages12.addItem("Home")
  hmbPages12.addItem("See Tournament Location") 
  hmbPages12.addItem("Upload Video")
  hmbPages12.addItem("Submit Game Stats")
  hmbPages12.addItem("View Your Recent Games")
  hmbPages12.addItem("Message Board")
  hmbPages12.addItem("View official 2K Announcements")

}


hmbPages12.onclick=function(s){
  if (typeof(s) == "object") { // do nothing
       return
    }
    switch(s) {
    case "Home":
          ChangeForm(homePageSignedIn)
          break
      case "See Tournament Location":
          ChangeForm(GoogleMaps)
          break
      case "Upload Video":
          // do something
          ChangeForm(uploadVideo)
          break
       case "Submit Game Stats":
          ChangeForm(submitGame3)
          break
         case "View Your Recent Games":
          ChangeForm(MainCharts)
          break
       case "Message Board":
          ChangeForm(forumMainPage)
          break
      case "View official 2K Announcements":
          ChangeForm(rssFeed)
          break
     }

}