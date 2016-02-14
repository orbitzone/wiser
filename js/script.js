
/**********************
  >>> Desafio AIS <<<
  Felipe F M Santiago
**********************/
var $AIS = jQuery.noConflict();
$AIS(document).ready(function($){
	if (matchMedia){
		var xs = window.matchMedia('(min-width: 220px) and (max-width: 482px)');
		var sm = window.matchMedia('(min-width: 480px) and (max-width: 766px)');
		var md = window.matchMedia('(min-width: 767px)');
		sm.addListener(largura);
		xs.addListener(largura);
		md.addListener(largura);
		largura(xs);
		largura(md);
		largura(sm);
	}
	function largura() {
		if (xs.matches) {
			$AIS('.hiding').hide();
      $AIS('.replace').html("Subj. ");
		}
		if (sm.matches || md.matches) {
			$AIS('.hiding').show();
      $AIS('.replace').html("Subject ");

		}
	}
	$AIS('.tablesorter tbody tr').hover(function(){
		$AIS(this).css({backgroundColor: "#000"});
	});

	$AIS(function() {
	  	var $tabela = $AIS('#tabela .tablesorter').tablesorter({
		    widgets: ["zebra", "filter"],
		    widgetOptions : {
		    	filter_columnFilters: false,
		    	filter_saveFilters : true
		    }
  		});
  		$.tablesorter.filter.bindSearch( $tabela, $AIS('#tabela .search'));
	});

	$AIS(function() {
	  var $searchMap = $AIS('#searchMap .tablesorter').tablesorter({
		   widgets: ["zebra", "filter"],
		   widgetOptions : {
		   	filter_columnFilters: false,
		   	filter_saveFilters : true,
          headers: {
            '.searchWrap' : {
            sorter: false
            }
		      }
      }
    });
    $.tablesorter.filter.bindSearch( $searchMap, $AIS('#searchMap .search'));
	});
  (function($,sr){
    var debounce = function (func, threshold, execAsap) {
        var timeout;
        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    }

  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

  })(jQuery,'smartresize');
  $(window).smartresize(function(){
    drawChart();
    drawChart2();
  });
});
/*********GOOGLE CHARTS - JS*************/
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Lorem Ipsum'],
    ['Subtitle 1', 11],
    ['Subtitle 2', 2],
    ['Subtitle 3', 3],
    ['Subtitle 4', 5],
    ['Subtitle 5', 11],
    ['Subtitle 6', 2],
    ['Subtitle 7', 8],
    ['Subtitle 8', 3],
    ['Subtitle 9', 7]
  ]);
  var options = {
    title: '',
    pieHole: 0.4,
    width: '100%',
    height: '100%',
    colors:['#00405f','#00547d','#337797','#6699b1','#b06d24', '#efa85a', '#f7b657', '#fbe1bb'],
    chartArea: {
      left: "10%",
      top: "10%",
      right: "10%",
      height: "70%",
      width: "70%"
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);



    function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ["Subtitle", "Valor", { role: "style" } ],
        ["Subtitle 1", 20, "#00405f"],
        ["Subtitle 2", 18, "#00547d"],
        ["Subtitle 3", 16, "#337797"],
        ["Subtitle 4", 14, "#6699b1"],
        ["Subtitle 5", 12, "#b06d24"],
        ["Subtitle 6", 10, "#efa85a"],
        ["Subtitle 7", 8, "#f7b657"],
        ["Subtitle 8", 6, "#fbe1bb"]
      ]);

      var options = {
        title: '',
        width: '90%',
        height: '90%',
        bar: {
        	groupWidth: '80%'
        },
        hAxis: {
        	textPosition: 'none',
        	gridlines: {
        		color: '#ffffff'
        	},
        	baseline: "none"
        },
        chartArea: {
            left: "25%",
            top: "10%",
            right: "10%",
            height: "70%",
            width: "70%"
        },
        vAxis:{
        	gridlines: {
        		count: 0
        	}
        },
        axisTitlesPosition: 'out',
        'isStacked': true,
        pieSliceText: 'percentage',
        legend: { 
        	position: "none" 
        },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(data, options);
  }