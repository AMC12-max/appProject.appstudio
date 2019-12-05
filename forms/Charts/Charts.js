var yourScores,row;

btnShowChart.onclick = function () {
//Render the chart.  
  $("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);
};

Charts.onshow=function(){
  let query = "SELECT your_score, opponents_score FROM statistics WHERE user_id = 27"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query)

if (req1.status == 200) { //transit worked.
    let results = JSON.parse(req1.responseText)
    



yourScores = [];
for     (i=(0); i <= 4; i++) {
    row=[];
    row["id"] = "Final Score";
    row["You"] = results[i][0];
    row["Opponent"] = results[i][1];
    row["Game3"] = results[i][2];
    yourScores[i]= row;
  }
}

  NSB.jqxSettings["Chart1"].source = yourScores;
  NSB.jqxSettings["Chart1"].categoryAxis={dataField:"id" , showGridLines:true};
  NSB.jqxSettings["Chart1"].seriesGroups = [  {  type: "column" ,  columnsGapPercent: 30,  seriesGapPercent: 30,  valueAxis:  {  minValue: 0,  maxValue: 140,  unitInterval: 20,  description: "Points Scored"  },  series:[  { dataField: "You" , displayText: "You"},  { dataField: "Opponent" , displayText: "Opponent"},  { dataField: "Game3" , displayText: "Game3"}  ]  }  ];

};




