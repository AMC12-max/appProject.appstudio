homePageSignedIn.onshow=function(){


  hmbPages7.clear()
  hmbPages7.addItem("Home")
  hmbPages7.addItem("See Tournament Location") 
  hmbPages7.addItem("Upload Video")
  hmbPages7.addItem("Submit Game Stats")
  hmbPages7.addItem("View Your Recent Games")
  hmbPages7.addItem("Message Board")
  hmbPages7.addItem("View official 2K Announcements")
  hmbPages7.addItem("Review Video")

}


hmbPages7.onclick=function(s){
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
      case "Review Video":
          ChangeForm(reviewVideo)
          break
     }

}


