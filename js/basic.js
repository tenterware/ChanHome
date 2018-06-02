new daum.roughmap.Lander({
        "timestamp" : "1484205925798",
        "key" : "fcto"
}).render();
var daumContainer = document.getElementById('daumRoughmapContainer1484205925798');
var mapContainer = document.getElementById('mapContainer');
var curWidth = mapContainer.offsetWidth;
daumContainer.style.width = curWidth + 'px';
daumContainer.style.height = '400px';
function liveImageRefresh(){
        var d = new Date();
        var hour = d.getHours();
        var _day = d.getDay();
        var srcURL = '';
	if( _day == 0 ){
		srcURL = '/img/stream/dayoff.jpg';
	} else {
		if(hour >=0 && hour < 7){
		        srcURL = '/img/stream/closed.jpg';
		} else if(hour >= 7 && hour < 11){
		        srcURL = '/img/stream/preparing.jpg';
		} else if(hour >= 11 && hour < 22){
		        srcURL = 'http://121.131.240.137/?action=snapshot' 
		} else if(hour >= 22 && hour <= 23){
		        srcURL = '/img/stream/closed.jpg';
		}
	}
        $('#streamPicture').attr('src', srcURL);
}

$("#streamPicture").on("click", function() {
        liveImageRefresh();
});

$(document).ready(function(){
        liveImageRefresh();
});

