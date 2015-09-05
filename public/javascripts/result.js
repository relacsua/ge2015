$(function () {
  $.ajax({
    url: '/friendvote',
    success: function(series) {
      console.log(series);

      if(series.length > 0) {
        makePieChart(series);
      } else {
        showNoVoteMessage();
      }
    },
    error: function(err) {
      console.log(err);
    }
  })

  function makePieChart(series) {
    $('#pieChartContainer').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        style: {
          "fontSize": "25px",
          "color": "#222222"
        },
        text: 'Unofficial General Voting Results'
      },
      tooltip: {
        headerFormat: '<span style="font-size: 17px;"><b>{point.key}</b></span><br/>',
        pointFormat: 'Voting: <b>{point.percentage:.1f}%</b><br/>Number of votes: <b>{point.y: .1f}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
          }
        }
      },
      series: [{
        name: "Voting",
        colorByPoint: true,
        data: series
      }],
      credits: {
        enabled: false
      }
    });
  }

  function showNoVoteMessage() {
    $('#no-result').css('display', 'block');
  }

});