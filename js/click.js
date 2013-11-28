$(document).ready(function() { /// Wait till page is loaded
	$('#bar-chart-2').click(function(){
	$('.pie-chart').load('piechart2.html .pie-chart', function() {

});
	});
		$('#bar-chart-1').click(function(){
	$('.pie-chart').load('index.html .pie-chart', function() {

});
	});
		$('#bar-chart-3').click(function(){
	$('.pie-chart').load('piechart3.html .pie-chart', function() {

});
	
});
});
