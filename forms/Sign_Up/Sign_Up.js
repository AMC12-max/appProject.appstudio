
// adding user input to database
btnSignUpSubmit.onclick=function(){
let email = inptEmail.value
let firstName = inptFirstName.value
let lastName = inptLastName.value
let phoneNumber = inptPhoneNumber.value
let username = inptUsername.value 
let password = inptPassword.value

let query = `INSERT into users (user_email, username, user_password, first_name, last_name, phone_number) VALUES("'" ${email}"'", "'"${username}"'", "'"${password}"'", "'"${firstName}, "'"${lastName}"'", "'"${phoneNumber}"'");`
   req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mlc55572&pass=cHarliE125!&database=375groupb6&query=" + query)
   
     if (req1.status == 200) {
    let results = JSON.parse(req1.responseText)
    
 }   
   //Giver error if there are no results otherwise give a welcome message. 
    if (results.length == 0)
        lblError.value = "Error"
    else {        
        lblError.value = "Success! Welcome to 2King!"
}
console.log(results)
}
        


