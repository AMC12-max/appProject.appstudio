/*sms_message = function(){
  teamPlayedAs.clear()
  let query = "SELECT phone_number FROM users"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mlc55572&pass=cHarliE125!&database=375groupb6&query=" + query)
  
  if (req1.status == 200) { 
    let results = JSON.parse(req1.responseText)
    
    //get the array
    if (results.length == 0)
        txtDetails.value("Error")
    else {        
        let number = ""
        for (i = 0; i <= results.length - 1; i++){
            phone = phone + results[i][0] + "\n"
            let phone = (results[i][0])
        }
        }
     } 




//send sms function 
function sms(phone, body) {
  if(InStr(navigator.appVersion, "iPhone")) {
    location.href="sms:"  +  phone  +  "&body="  +  encodeURI(body);
 } else {
    location.href="sms:"  +  phone  +  "?body="  +  encodeURI(body);
  }
}

butSMS.onclick = function() {
 //Needs iOS 4 or Android
 //sending body is not currently supported on iOS
 //phone cannot have spaces or punctuation
 //multiple phone numbers can be separated by commas
  sms(phone , 'Remember to take breaks!');
};
*/