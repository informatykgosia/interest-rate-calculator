

    var pieData = [
        {
          value: 0.8,
          color:"#59CFE8 "
        },
        {
          value : 1.2,
          color : "#2487A8"
        },
        {
          value : 1.5,
          color : "#ABC3D2"
        }
      
      ];

  var myPie = new Chart(document.getElementById("pie-chart-1").getContext("2d")).Pie(pieData);
  
