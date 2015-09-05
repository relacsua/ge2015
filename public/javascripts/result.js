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

  $('.share-facebook-btn').on('click', function() {
    FB.ui(
      {
        method: 'feed',
        link: 'http://sgelection2015.com/welcome',
        display: 'iframe',
        picture: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/icon.png',
        description: 'GE2015 is the unofficial version of General Singapore Election. Take part in the largest online poll on singapore general election.'
      },
      // callback
      function(response) {
        if (response && !response.error_message) {
          alert('Sharing successful.');
        } else {
          alert('Error while posting.');
        }
      }
    );
  });

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