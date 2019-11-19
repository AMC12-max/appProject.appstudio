let teamPlayedAgainst = []
let teamPlayedAs = []
let iptFgPercentage = []
let iptAssists = []
let iptsRebounds = []
let iptYourScore = []
let iptOpponentScore = []
let iptTurnoverMargin = []
let iptTOP = []

  
statsAndGraphs.onshow=function(){
  teamPlayedAs.clear()
  let query = "SELECT names FROM teams"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=ajl98875&query=" + query)
  
  if (req1.status == 200) { 
    let results = JSON.parse(req1.responseText)
    
    //get the array
    if (results.length == 0)
        txtDetails.value("Error, no teams found.")
    else {        
        let message = ""
        for (i = 0; i <= results.length - 1; i++){
            message = message + results[i][0] + "\n"
            teamPlayedAs.addItem(results[i][0])
        }
        }
     } 
   
  teamPlayedAgainst.clear()
  let query1 = "SELECT names FROM teams"
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=ajl98875&query=" + query)
  
  if (req3.status == 200) { 
    let results = JSON.parse(req1.responseText)
    
    //get the array
    if (results.length == 0)
        txtDetails.value("Error, no teams found.")
    else {        
        let message = ""
        for (i = 0; i <= results.length - 1; i++){
            message = message + results[i][0] + "\n"
            teamPlayedAgainst.addItem(results[i][0])
        }
     } 
  } 
  }
  

teamPlayedAs.onclick=function(s){
    if (typeof(s) == "object"){  
    return                    
    }else {
      teamPlayedAs.value = s   
      
      
     // let query2 = "INSERT INTO statistics (team_name) VALUES (teamPlayedAs.selection) + '"' 
      req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=ajl98875&query=" + query2)
      
      
      if (req2.status == 200) { 
          let results2 = JSON.parse(req2.responseText)
        
          //get the array
          if (results2.length == 0){
              txtDetails.value("No team.")
          }else {        
              
              let message2 = ""
              for (i = 1; i <= 2; i++)
                  message2 = message2 + results2[0][i] + "\n"
              for (i =3; i <=5; i++)
                  message2 = message2 + results2[0][i] + ", "
              txtDetails.value = message2
          } 
      }
   }
}







