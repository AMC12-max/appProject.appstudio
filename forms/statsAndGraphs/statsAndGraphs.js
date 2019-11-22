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
              console.log("the parsed JSON is " + results2)
              console.log("eg. temp[0] or first row in big array is " + results2[0])
              console.log("to get to Paul, need results[0][1]: " + results2[0][2])
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
























/*
  teamPlayedAgainst.clear()
  let query3 = "SELECT team_name FROM teams"
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query3)
  
  if (req3.status == 200) { //transit worked.
    let results3 = JSON.parse(req3.responseText)
    
    //get the array
    if (results3.length == 0)
        txtDetail.value("There are no teams.")
    else {        
  
        let message3 = ""
        for (i = 0; i <= results.length - 1; i++){
            message3 = message3 + results3[i][0] + "\n"
            teamPlayedAgainst.addItem(results3[i][0])
        }
     } 
  } else{
      NSB.MsgBox("Something run")
  }

}


teamPlayedAgainst.onclick=function(s){
    if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
    }else {
      teamPlayedAgainst.value = s   // make dropdown show choice user made
      
      //get the information from the database
      let query4 = "SELECT team_name FROM teams WHERE team_name=" + '"' + teamPlayedAgainst.selection + '"' 
      req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query4)
      
      
      if (req4.status == 200) { //transit worked.
          let results4 = JSON.parse(req4.responseText)
        
          //get the array
          if (results4.length == 0){
              txtDetail.value("There are no company of that type.")
          }else {        
              console.log("the parsed JSON is " + results4)
              console.log("eg. temp[0] or first row in big array is " + results4[0])
              console.log("to get to Paul, need results[0][1]: " + results4[0][2])
              let message4 = ""
              for (i = 1; i <= 2; i++)
                  message4 = message4 + results4[0][i] + "\n"
              for (i =3; i <=5; i++)
                  message4 = message4 + results4[0][i] + ", "
              txtDetail.value = message4
          } 
      }else{
        NSB.MsgBox("Something wrong")
      }
   }
}

*/

let teamYouUsed = []
let teamYouFaced = []
let fgPercentage = []
let assists = []
let rebounds = []
let yourScore = []
let opponentScore = []
let turnoverMargin = []
let tOP = []


btnSubmit.onclick=function(){
let teamYouUsed = 
let teamYouFaced = 
let iptFgPercentage = 
let iptAssists = 
let iptsRebounds = 
let iptYourScore = 
let iptOpponentScore = 
let iptTurnoverMargin = 
let iptTOP = 
  let queryInsert = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('"+newNameA+"', '"+newStreetA+"', '"+newCityA+"','"+ newStateA+"'," +newZipCodeA+")"

    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sch54620&pass=C19971106w&database=sch54620&query=" + queryInsert)

    if (req2.status == 200) { //transit worked.
        if (req2.responseText == 500) {   // means the insert succeeded








  