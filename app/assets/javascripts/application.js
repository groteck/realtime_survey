// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery-charts
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
	$(function(){ 
		$("#results").chart();
	});   
	var pusher = new Pusher('73eeab4587d011f092c8');
	var myChannel = pusher.subscribe('survey-channel');
	myChannel.bind('data-changed', function(data){ 
		updateResults(data);
	}); 
	function updateResults(data){
		var tbody = jQuery("#results tbody"); 
		var html = ""; 
		for (var i=0; i < data.length; i++) {
			html += "<tr><td>" + data[i].title + "</td>" +
				"<td>" + data[i].votes + "</td></tr>";
		};
		tbody.html(html);
		jQuery(".chartscontainer").remove(); // remove old chart  
		jQuery("#results").charts(); // redraw
	};
	function updateResults(data){
		jQuery.noticeAdd({
			text: 'Results updated',
			stay: false
		});
		var tbody = jQuery("#results tbody");
		var html = "";
		for (var i=0; i < data.length; i++) { 
			html += "<tr><td>" + data[i].title + "</td>" +
				"<td>" + data[i].votes + "</td></tr>";
		}
		tbody.html(html); 
		jQuery(".chartscontainer").remove(); // remove old chart 
		jQuery("#results").charts(); // show updated chart
	}
});
