
var e;
var SentFlag;

reader = new FileReader();
SentFlag=1;

function Main() {
  pb=PictureBox1.getContext("2d");
  setTimeout(window.scrollTo(0,window.innerHeight),100)
  btnSubmitImage.value="";
}

txtGetPicture.onchange = function() {
 //This gets called after the picture is chosen. 
 //Next, let's read start reading it in.
 //The _onload function will be called when that completes.
  reader.readAsDataURL(txtGetPicture.files[0]);
};

reader.onload = function(e) {
 //read of the file is complete.
 //Now, let's load it into an image.
 //The _onload function for the image will be called on completion.
  Image1.firstChild.src=e.target.result; //Phone Viewing ONLY
  pb.addImage(e.target.result,0,0,PictureBox1.width,PictureBox1.height);
  SentFlag=0;
  btnSubmitImage.hidden=false;
  btnSubmitImage.value="To submit video, click submit below.";
  lblPicMsg.textContent="Ready to Submit ";

};
 
function postToDatabase() {

var devInfo;
var postData;

  SentFlag=1; //Don't allow multiple submissions because the button
 //is pushed more than once.

 //Get device information - not available 
 // devInfo="No device selected";

 //Build POST  
 var postData = postData + txtGetPicture.files[0].name;
 var postData = postData +  devInfo;
 var postData = postData + PictureBox1.toDataURL();


 //Send POST to server
 var uploadQuery = "INSERT INTO video (video, user_id) VALUES ('" + postData + "', '" + 3 + "')"
  req=Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php","POST" ,"host=ormond.creighton.edu&user=mlc55572&pass=cHarliE125!&database=375groupb6&query=" + uploadQuery);

  if(req.status==200) { //success
    btnSubmitImage.hidden= true; //Video was pushed to server so hide button
    lblPicMsg.textContent =  "Success!";
    // htmResponse.innerHTML=req.responseText.hidden;
 } else { //failure
    htmResponse.innerHTML= "Error: "  +  req.err;
    btnSubmitImage.hidden= false;
    lblPicMsg.textContent =  "Failure";
    SentFlag=0;
  }

}

 btnSubmitVideo.onclick=function(){
    postToDatabase()
}



hbg123.onclick=function(s){
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
          ChangeForm(MainCharts)
          break
       case "Message Board":
          ChangeForm(forumMainPage)
          break
      case "View official 2K Announcements":
          ChangeForm(rssFeed)
          break
       case "Review Video":
          ChangeForm(reviewVideo)
          break
     }
}



uploadVideo.onshow=function(){
  
hbg123.clear()
  hbg123.addItem("Home")
  hbg123.addItem("See Tournament Location") 
  hbg123.addItem("Upload Video")
 hbg123.addItem("Submit Game Stats")
  hbg123.addItem("View Your Recent Games")
  hbg123.addItem("Message Board")
  hbg123.addItem("View official 2K Announcements")
  hbg123.addItem("Review Video")
}
