
var yourTeamWins,section;

btnShowChart2.onclick = function () {
//Render the chart.  
  $("#Chart2").jqxChart(NSB.jqxSettings["Chart2"]);
};

Charts2.onshow=function(){
  let query = "SELECT team_name FROM statistics WHERE your_score > opponents_score AND user_id = 27"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajl98875&pass=Stlouiesunsv2@&database=375groupb6&query=" + query)

if (req1.status == 200) { //transit worked.
    let result = JSON.parse(req1.responseText)
    



yourTeamWins = [];
for     (i=(0); i <= 10; i++) {
    section=[];
    section["NBA Team"] = result[i][0];
 // section["NBA Team"] = result[i][1];
 //    section["Game3"] = result[i][2];
    yourTeamWins[i]= section;
  }
}

  NSB.jqxSettings["Chart2"].source = yourTeamWins;
  // NSB.jqxSettings["Chart2"].categoryAxis={dataField:"id" , showGridLines:true};
  NSB.jqxSettings["Chart2"].seriesGroups = [  {  type: "pie" ,   showLabels: true,
                series:
                    [
                        { 
                            dataField: 'NBA Team',
                            displayText: 'NBA Team',
                            labelRadius: 100,
                            initialAngle: 15,
                            radius: 100,
                            formatSettings: { sufix: '%', decimalPlaces: 1 }
                        }
                    ]
            }
        ]
};


