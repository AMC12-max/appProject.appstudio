

submitGame3.onshow=function(){



  hmbPages11.clear()
  hmbPages11.addItem("Home")
  hmbPages11.addItem("See Tournament Location") 
  hmbPages11.addItem("Upload Video")
  hmbPages11.addItem("Submit Game Stats")
  hmbPages11.addItem("View Your Recent Games")
  hmbPages11.addItem("Message Board")
  hmbPages11.addItem("View official 2K Announcements")
  




hmbPages11.onclick=function(s){
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

btnSubmit3.onclick=function(){

let teamYouUsed = teamPlayedAs3.value
let fgPercentage1 = iptFgPercentage1.value
let assists1 = iptAssists1.value
let rebounds1 = iptsRebounds1.value
let yourScore1 = iptYourScore1.value
let opponentScore1 = iptOpponentScore1.value
let turnoverMargin1 = iptTurnoverMargin1.value
let tOP1 = iptTOP1.value
let userID1 = iptUserID1.value
  
    let query = "INSERT INTO statistics (user_id,field_goal_percentage,assists,rebounds,turnover_margin,time_of_posession,team_name,your_score,opponents_score) VALUES ('"+userID1+"', '"+fgPercentage1+"', '"+assists1+"', '"+rebounds1+"', '"+turnoverMargin1+"', '"+tOP1+"', '"+teamYouUsed+"', '"+yourScore1+"', '"+opponentScore1+"')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=375groupb6&query=" + query)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully submitted your stats")
        } else
            NSB.MsgBox("There was a problem with submitting your stats.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  

}
}


  