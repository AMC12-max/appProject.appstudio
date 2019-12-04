/* need to
1. update AJAX database login to your login
2. update queries to match your tables and fields
*/


/*

let picBase64 = ""
let pic1 = ""
let userData = ''

reader = new FileReader()

txtGetVideo.onchange = function() {
// upload picture from filesystem on laptop or photos on phone (deploy to Volt for phone)
     //This gets called after the picture is chosen. 
     //Next, let's read start reading it in.
     //The _onload function will be called when that completes.
     reader.readAsDataURL(txtGetVideo.files[0])
};

reader.onload = function(e) {
     //read of the file is complete.
     //Now, let's load it into an image.
     //The _onload function for the image will be called on completion.
  Image1.firstChild.src = e.target.result //Phone Viewing ONLY
  picBase64 = e.target.result
  return
};
  
save.onclick=function(){ 
// saves picture into database
    let user_id = "1"
    //alert(standing.selectedItem())
    // let picture = txtGetPicture.files[0]
        
    let query = "INSERT INTO video (video,user_id,) VALUES ('"+picBase64+"','"+user_id+"')" 
    let req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query)

    if (req3.status == 200) { //everything worked. :)
        alert("Video Submitted"); 
        NSB.MsgBox("Thank you for your video, a professional will review it soon!");
        ChangeForm(homePageSignedIn);
    } else {
        alert("Error: " + req3.status)
    }  
}




btnInsertPic.onclick=function(){
// inserts picture from database into the control
    myQuery = "SELECT * FROM user WHERE netID = 'clc90595'"
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=ajl98875&query=" + myQuery);
    if  (req2.status == 200) { //everything worked. 
        //2D array, with [row][colum]
        alert(req2.responseText)
        
        userData = JSON.parse(req2.responseText);  
        
        //             0      1     2    
        //Columns go  netID name photo       
        cindyUser = userData[0][0] + ", " + userData[0][1] + "\n"
        console.log(cindyUser)
        pic1 = userData[0][2] + '.'
        
        pic1 = pic1.replace(/\s/gi, '+') // To replace all spaces with + (multiple spaces will be treated as multiple characters)
        alert(pic1)
        
        pic1Array = Split(pic1, ".")
        
        //put the Base64 image into the Image control
        //Image1.innerHTML = "<img src='" + pic1 + "'/>"
        Image2.firstChild.src = pic1Array[0]
    
      } else {
        //Handle that. 
        alert("Error: " + req1.status)
    }
}

*/