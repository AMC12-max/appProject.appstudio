statsAndGraphs.onshow=function(){
  teamPlayedAs.clear()
  let query = "SELECT team_name FROM teams"
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
            teamPlayedAs.addItem(results[i][0])
        }
     } 
  } else{
      NSB.MsgBox("Something run")
  }
}

teamPlayedAs.onclick=function(s){
    if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
    }else {
      teamPlayedAs.value = s   // make dropdown show choice user made
      
      //get the information from the database
      let query2 = "SELECT team_name FROM teams WHERE team_name=" + '"' + teamPlayedAs.selection + '"' 
      req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query2)
      
      
      if (req2.status == 200) { //transit worked.
          let results2 = JSON.parse(req2.responseText)
        
          //get the array
          if (results2.length == 0){
              txtDetail.value("There are no teams.")
          }else {        
              let message2 = ""
              for (i = 1; i <= 2; i++)
                  message2 = message2 + results2[0][i] + "\n"
              for (i =3; i <=5; i++)
                  message2 = message2 + results2[0][i] + ", "
              txtDetail.value = message2
          } 
      }else{
        NSB.MsgBox("Something wrong")
      }
   }




let teamYouUsed = []
let fgPercentage = []
let assists = []
let rebounds = []
let yourScore = []
let opponentScore = []
let turnoverMargin = []
let tOP = []


btnSubmit.onclick=function(){
let teamYouUsed = teamPlayedAs.value
let fgPercentage = iptFgPercentage.value
let assists = iptAssists.value
let rebounds = iptsRebounds.value
let yourScore = iptYourScore.value
let opponentScore = iptOpponentScore.value
let turnoverMargin = iptTurnoverMargin.value
let tOP = iptTOP.value
  let queryInsert = "INSERT INTO statistics (field_goal_percentage,assists,rebounds,turnover_margin,time_of_posession,your_score,opponents_score,team_name) VALUES ('"+fgPercentage+"', '"+assists+"', '"+rebounds+"','"+yourScore+"','"+opponentScore+"','"+turnoverMargin+"'," +tOP+")"

    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + queryInsert)

    if (req3.status == 200) { //transit worked.
        if (req3.responseText == 500) {   // means the insert succeeded

}
}
}
}




  