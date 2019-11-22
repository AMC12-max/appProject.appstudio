/* 
var allFoodData = []
var pick1 = selProduce.text

Produce.onshow=function(){
        Â Â var query = "SELECT DISTINCT produce_name FROM produce ORDER BY produce_name ASC"
Â req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkk78690&pass=333333&database=375groupa7&query=" + query);

if (req1.status == 200) {
results = JSON.parse(req1.responseText)
console.log("Parsed result in onshow: " + results)
 } else {
NSB.MsgBox("Error: " + req1.status);
} 
selProduce.clear()
 for (i = 0 ; i <= results.length - 1; i++)
 selProduce.addItem(allFoodData[i])

}



selProduce.onfocusout=function(s){
        if (typeof(s) == "object")
return
else {
  
  for (i = 0; i<=pick1.length - 1; i++)
        pick1[i]
}


/*Â Â 
for (i = 0, i<=pick.length - 1; i++)
        pick[i]

selProduce.value = s




}


HamProduce.onclick=function(s){
    if (typeof(s) == "object")
    return
  switch(s) {
case "Home Page":
  ChangeForm(HomePage, "fade")
  break
case "Shopping List":
  ChangeForm(ShoppingList, "fade")
  break
case "Inventory Checker":
  ChangeForm(InventoryChecker, "fade")
break
case "Barcode Scanner":
  ChangeForm(BarcodeScanner, "fade")
break
case "Search":
  ChangeForm(Search, "fade")
break
case "Google Maps":
  ChangeForm(GoogleMaps, "fade")
break
  }
}




subProduce.onclick=function(){
  alert("Your shopping list is: " + selProduce.value)
}



subProduce.onclick=function(){
  ChangeForm(FinalList, "fade")
}

*/


