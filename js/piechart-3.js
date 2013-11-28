

    var pieData = [
        
        {
          value : 1.5,
          color : "#2487A8"
        },
        {
          value : 1.1,
          color : "#ABC3D2"
        }
      
      ];

  var myPie = new Chart(document.getElementById("pie-chart-1").getContext("2d")).Pie(pieData);
  
