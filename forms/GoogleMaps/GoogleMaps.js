let marker = ""
let infowindow = ""

// sets the symbol which will be used on google maps
 var redArrow = {
          path: 'M 100, 100 L, 300 100, L 200, 300 z',
          fillColor: 'red',
          fillOpacity: 0.8,
          scale: .1,
          strokeColor: 'black',
          strokeWeight: 1
        }; 
  
      
btnCurrentLocation.onclick=function(){
    navigator.geolocation.getCurrentPosition(gotLocation, declined);
  NSB.WaitCursor(false);
}
       
        
function gotLocation(location) {
  GoogleMap1.mapOptions.latitude = location.coords.latitude;
  GoogleMap1.mapOptions.longitude = location.coords.longitude;
  GoogleMap1.refresh();

 //puts arrow on location
  point = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
  marker = GoogleMap1.setMarker({position: point, animation:google.maps.Animation.DROP, icon: redArrow});

 //adds infoWindow saying what location is
  infowindow = GoogleMap1.setInfoWindow("Current Location", marker);
  NSB.WaitCursor(false);
}



function declined(error) {
  NSB.MsgBox("Error: "  +  error.message);
}


btnCHI.onclick=function(){
   navigator.geolocation.getCurrentPosition(CHILocation, declined);
  NSB.WaitCursor(false);
}


function CHILocation(location) {
  GoogleMap1.mapOptions.latitude = 41.263467; 
  GoogleMap1.mapOptions.longitude = -95.928307;
  GoogleMap1.refresh();

 //outs arrow on location
  point2 = new google.maps.LatLng(GoogleMap1.mapOptions.latitude, GoogleMap1.mapOptions.longitude);
  marker = GoogleMap1.setMarker({position: point2, animation:google.maps.Animation.DROP, icon: redArrow});

 //adds infowindow saying what location is
  infowindow = GoogleMap1.setInfoWindow("CHI Health Center", marker);
  NSB.WaitCursor(false);
}





