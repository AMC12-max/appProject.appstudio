reader = new FileReader();
var fileData;

txtVideo.onchange = function() {
  fileType = Mid(txtVideo.value, InStrRev(txtVideo.value,"."));
  switch (true) {
  case ((fileType) == ".avi" ): case ((fileType) ==  ".mp4" ): case ((fileType) ==  ".mov"):
    reader.readAsDataURL(txtVideo.files[0]);
	break;
  case ((fileType) == ".png" ): case ((fileType) ==  ".gif" ): case ((fileType) ==  ".jpg"):
    reader.readAsDataURL(txtVideo.files[0]);
	break;
  default:
    reader.readAsBinaryString(txtVideo.files[0]);
  }
};

reader.onload = function() {
  fileData = reader.result;
};

btnUpload.onclick = function() {
  if(Trim(txtVideo.value) != "") {
    fileName = encodeURIComponent(Replace(txtPhoto.value, "C:\\fakepath\\" , ""));
    fileContent = encodeURIComponent(fileData);
 } else {
    fileName = encodeURIComponent(txtFileName.value);
    fileContent = encodeURIComponent(txaContents.value);
  }
};

function done() {
  if(req.status == 200) { //success
    NSB.MsgBox("File uploaded!");
    txtVideo.value = "";
 } else { //failure
    msg = "Error: Status = "  +  req.status;
    if(TypeName(req.statusText)=="string" ) { msg = msg  +  " "  +  req.statusText; }
    if(TypeName(req.err)=="string" ) { msg = msg  +  " "  +  req.error; }
    NSB.MsgBox(msg);
  }
}