var teamsAndPoints,lineP;

btnShowChart4.onclick = function () {
//Render the chart.  
  $("#Chart4").jqxChart(NSB.jqxSettings["Chart4"]);
};

Charts4.onshow=function(){
  let query = "SELECT team_name, your_score FROM statistics WHERE user_id = 27"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query)

if (req1.status == 200) { //transit worked.
    let results = JSON.parse(req1.responseText)
    



teamsAndPoints = [];
for     (i=(0); i <= 14; i++) {
    lineP=[];
    lineP["id"] = results[i][0];
    lineP["Points"] = results[i][1];
    
    
    teamsAndPoints[i]= lineP;
  }
}

  NSB.jqxSettings["Chart4"].source = teamsAndPoints;
  NSB.jqxSettings["Chart4"].title = "Points Scored per Team Played";
  NSB.jqxSettings["Chart4"].categoryAxis={dataField:"id" , showGridLines:true};
  NSB.jqxSettings["Chart4"].seriesGroups = [  {  type: "line" ,  columnsGapPercent: 30,  seriesGapPercent: 30,  valueAxis:  {  minValue: 0,  maxValue: 120,  unitInterval: 30,  description: "Points"  },  series:[  { dataField: "Points" , displayText: "Points"},  { dataField: "Points Scored" , displayText: "Points Scored"} ]  }  ];

};