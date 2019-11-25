/*btnLogin.onclick=function(){
    req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
  //req1 = Ajax("https://otis.creighton.edu/authLDAP_3.php", "POST", "j_username=" + TextBox1.value + "&j_password=" + PasswordInput1.value);
    if (req1.status == 200) { //everything worked.
        lblWelcome.style.display = "block"  // none to hide
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "The authentication code is " + req1.responseText
        //1 good 0 bad
        
    } else {
        //Handle that. 
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}
*/
btnSignIn1.onclick=function(){
let username = inptUsernameSignIn.value
let password = inptPasswordSignIn.value
let query = "SELECT username, user_password from users;"
    req1 = ""
          req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mlc55572&pass=cHarliE125!&database=375groupb6&query=" + query)

      if (req1.status == 200) { //everything worked.
            let results = JSON.parse(req1.responseText)
      
        //1 good 0 bad
        
} 
      if (req1.responseText == 0){
      lblErrorSI.value("AJAX Error")
}

      if( req1.responseText.indexOf(username) > -1 && req1.responseText.indexOf(password) > -1){
            ChangeForm(homePageSignedIn)
}
    
      else {
        //Handle that. 
              lblErrorSI.value = 'Error, Try Again'
}
}
