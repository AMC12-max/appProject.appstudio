homePage.onshow=function(){


  hmbPages.clear()
  hmbPages.addItem("See Tournament Location") 
  hmbPages.addItem("Upload Video")
  hmbPages.addItem("Submit Game Stats")
  hmbPages.addItem("View Your Recent Games")
  hmbPages.addItem("Message Board")
  hmbPages.addItem("View official 2K Announcements")

}


hmbPages.onclick=function(s){
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


btnSignUp.onclick=function(){
  ChangeForm(Sign_Up)
}

btnSignIn.onclick=function(){
  ChangeForm(Sign_in)
}
