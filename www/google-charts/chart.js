google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Oil level');

      data.addRows([
        [1, 5],   [2, 15],  [3, 18],  [4, 14],  [5, 20],  [6, 19],
        [7, 17],  [8, 15],  [9, 12],  [10, 10],  [11, 8], [12, 6],
        [13, 4], [14, 10], [15, 9], [16, 7], [17, 12], [18, 19],
        [19, 17], [20, 14], [21, 16], [22, 10], [23, 6], [24, 10],
        [25, 15], [26, 5], [27, 12], [28, 20], [29, 15], [30, 11]
       
      ]);

      var options = {
        hAxis: {
          title: 'Day'
        },
        vAxis: {
          title: 'Oil Level'
        },
        backgroundColor: '#f1f8e9'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }