

var assistsAndPoints,lineS;

btnShowChart3.onclick = function () {
//Render the chart.  
  $("#Chart3").jqxChart(NSB.jqxSettings["Chart3"]);
};

Charts3.onshow=function(){
  let query = "SELECT assists, your_score FROM statistics WHERE user_id = 27"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query)

if (req1.status == 200) { //transit worked.
    let results = JSON.parse(req1.responseText)
    



assistsAndPoints = [];
for     (i=(0); i <= 4; i++) {
    lineS=[];
    lineS["id"] = "Game";
    lineS["Assists"] = results[i][0];
    lineS["Points Scored"] = results[i][1];
    
    assistsAndPoints[i]= lineS;
  }
}

  NSB.jqxSettings["Chart3"].source = assistsAndPoints;
  NSB.jqxSettings["Chart3"].title = "Assists and Points per Game";
  NSB.jqxSettings["Chart3"].categoryAxis={dataField:"id" , showGridLines:true};
  NSB.jqxSettings["Chart3"].seriesGroups = [  {  type: "line" ,  columnsGapPercent: 30,  seriesGapPercent: 30,  valueAxis:  {  minValue: 0,  maxValue: 120,  unitInterval: 30,  description: "Assists and Points"  },  series:[  { dataField: "Assists" , displayText: "Assists"},  { dataField: "Points Scored" , displayText: "Points Scored"} ]  }  ];

};