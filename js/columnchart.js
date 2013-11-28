      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Model', 'FRM 3 J', 'Libor 3M', 'FRM 5 J'],
          ['Calculated Model',  1.200,      0.800, 1.500],
          
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}


        };

        var chart = new google.visualization.ColumnChart(document.getElementById('column-chart-1'));
        chart.draw(data, 
          {isStacked: true}
        );
      }