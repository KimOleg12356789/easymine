


$(document).ready(function () {

  // Graph Data ##############################################
  var graphData = [{
      // Visits
      data: [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ],
      color: '#71c73e'
    }, {
      // Returning Visits
      data: [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ],
      color: '#77b7c5',
      points: { radius: 4, fillColor: '#77b7c5' }
    }
  ];

  // Lines Graph #############################################
  $.plot($('#graph-lines'), graphData, {
    series: {
      points: {
        show: true,
        radius: 5
      },
      lines: {
        show: true
      },
      shadowSize: 0
    },
    grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 20,
      hoverable: true
    },
    xaxis: {
      tickColor: 'transparent',
      tickDecimals: 2
    },
    yaxis: {
      tickSize: 1000
    }
  });

  // Bars Graph ##############################################
  $.plot($('#graph-bars'), graphData, {
    series: {
      bars: {
        show: true,
        barWidth: .9,
        align: 'center'
      },
      shadowSize: 0
    },
    grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 20,
      hoverable: true
    },
    xaxis: {
      tickColor: 'transparent',
      tickDecimals: 2
    },
    yaxis: {
      tickSize: 1000
    }
  });

  // Graph Toggle ############################################
  $('#graph-bars').hide();

  $('#lines').on('click', function (e) {
    $('#bars').removeClass('active');
    $('#graph-bars').fadeOut();
    $(this).addClass('active');
    $('#graph-lines').fadeIn();
    e.preventDefault();
  });

  $('#bars').on('click', function (e) {
    $('#lines').removeClass('active');
    $('#graph-lines').fadeOut();
    $(this).addClass('active');
    $('#graph-bars').fadeIn().removeClass('hidden');
    e.preventDefault();
  });

  // Tooltip #################################################
  function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
      top: y - 16,
      left: x + 20
    }).appendTo('body').fadeIn();
  }

  var previousPoint = null;

  $('#graph-lines, #graph-bars').bind('plothover', function (event, pos, item) {
    if (item) {
      if (previousPoint != item.dataIndex) {
        previousPoint = item.dataIndex;
        $('#tooltip').remove();
        var x = item.datapoint[0],
          y = item.datapoint[1];
          showTooltip(item.pageX, item.pageY, y + ' visitors at ' + x + '.00h');
      }
    } else {
      $('#tooltip').remove();
      previousPoint = null;
    }
  });

});





    
// const burger = document.querySelector('.burger');
// const navbar = document.querySelector('.mt-mobile');
// const body = document.querySelector('body');

// burger.addEventListener('click', () => {
//     navbar.classList.toggle('nav-open');
//     body.classList.toggle('body-open');
//     burger.classList.toggle('burger-open');
    
// });









const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});

