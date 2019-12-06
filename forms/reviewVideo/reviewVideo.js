

Button2.onclick=function(){
   var uploadQuery1 = "SELECT video FROM video WHERE user_id =  '" + inptUser_id_video.value + "' "
  req=Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php","POST" ,"host=ormond.creighton.edu&user=mlc55572&pass=cHarliE125!&database=375groupb6&query=" + uploadQuery1);

  if(req.status==200) { //success
    Button2.hidden= true; //Video was pushed to server so hide button
    lblVideoError.textContent =  "Success!";
    Media12.firstChild.src = req.responseText
    // htmResponse.innerHTML=req.responseText.hidden;
 } else { //failure
    htmResponse.innerHTML= "Error: "  +  req.err;
    btnSubmitImage.hidden= false;
    lblVideoError.textContent =  "Error, Try Again";
    SentFlag=0; 
  }
  
  
}

function sms(tel, body) {
   var uploadQuery = "SELECT phone_number FROM users WHERE user_id =  '" + inptUser_id_video.value + "' ; "
    req=Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php","POST" ,"host=ormond.creighton.edu&user=mlc55572&pass=cHarliE125!&database=375groupb6&query=" + uploadQuery);

  if(req.status==200) { //success
   
    // htmResponse.innerHTML=req.responseText.hidden;
 } else { //failure
    htmResponse.innerHTML= "Error: "  +  req.err;
    btnSubmitImage.hidden= false;
    lblPicMsg.textContent =  "Failure";
    SentFlag=0;
  } 
  
  if(InStr(navigator.appVersion, "iPhone")) {
    location.href="sms:"  +  tel  +  "&body="  +  encodeURI(body);
 } else {
    location.href="sms:"  +  tel  +  "?body="  +  encodeURI(body);
  }
}

butSMS.onclick = function() {
 //Needs iOS 4 or Android
 //sending body is not currently supported on iOS
 //phone cannot have spaces or punctuation
 //multiple phone numbers can be separated by commas
 btnSendComments.onclick=function(){
    sms(req.responseText, inptComments.value);
}
};

/*
Button2.onclick=function(){
    // hard-coded netID for testing
    // this code assumes one picture per netID
    let query = "SELECT * FROM video WHERE user_id =  '" + inptUser_id_video.value + "' "
    let req8 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mlc55572&pass=cHarliE125!&database=375groupb6&query=" + query)
    if  (req.status == 200) { //trip worked. 
        userData = JSON.parse(req8.responseText)  
        //userData is a 2D array, with [row][colum]
        // format:
        //              0     1     2    
        //Columns go:  netID name photo  
        
        let user = userData[0][0] + ", " + userData[0][1] + "\n"
        //console.log(user)
        // get the picture from the database. It is base64 format.
        pic1 = userData[0][2] + '.'
        
        // convert base64 database picture back to regular format picture
        // First replace all spaces with + (multiple spaces will be treated as multiple characters)        
        pic1 = pic1.replace(/\s/gi, '+') 
        // then split out the picture
        let pic1Array = pic1.split(".")
        
        //put picture into the Image control
        imgVidReview.firstChild.src = pic1Array[0]
      } else   // bad trip 
        alert("Error: " + req8.status)
}

*/

