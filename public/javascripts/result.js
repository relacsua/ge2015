$(function () {

  init();

  function init() {
    if($('#pieChartContainer').size() > 0) {
      displayFriendVotingPieChart();
    }

    handleFacebookShareClick();
  }

  function displayFriendVotingPieChart() {
    $.ajax({
      url: '/friendvote',
      success: function(series) {
        // console.log(series);

        showFBShareButton();
        if(series.length > 0) {
          makePieChart(series);
        } else {
          showNoVoteMessage();
        }
      },
      error: function(err) {
        // console.log(err);
      }
    });
  }

  function handleFacebookShareClick() {
    $('.share-facebook-btn').on('click', function() {
      FB.ui(
        {
          method: 'feed',
          link: 'http://sgelection2015.com/welcome',
          display: 'popup',
          picture: 'https://s3-ap-southeast-1.amazonaws.com/ge2015/Images/icon.png',
          description: 'GE2015 is the unofficial General Election application. Join the unofficial poll by voting.'
        },
        // callback
        function(response) {
          if (response && !response.error_message) {

          } else {

          }
        }
      );
    });
  }

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
        text: 'Unofficial General Election Voting Results'
      },
      tooltip: {
        headerFormat: '<span style="font-size: 17px;"><b>{point.key}</b></span><br/>',
        pointFormat: 'Voting: <b>{point.percentage: .1f}%</b><br/>Number of votes: <b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true
          },
          showInLegend: true
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

  function showFBShareButton() {
    $('.footer-panel').css('display', 'block');
  }

  function showNoVoteMessage() {
    $('#no-result').css('display', 'block');
  }

});