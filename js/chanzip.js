new daum.roughmap.Lander({
        "timestamp" : "1484205925798",
        "key" : "fcto"
}).render();
var daumContainer = document.getElementById('daumRoughmapContainer1484205925798');
var mapContainer = document.getElementById('mapContainer');
var curWidth = mapContainer.offsetWidth;
daumContainer.style.width = curWidth + 'px';
daumContainer.style.height = '400px';

function formatDate(d) {
	month = '' + (d.getMonth() + 1),
	day = '' + d.getDate(),
	year = d.getFullYear();

	hours = d.getHours();
	minutes = d.getMinutes();
	seconds = d.getSeconds();
	ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0'+minutes : minutes;

	_time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-') + ' ' +  _time;
}

function liveImageRefresh(){
        var d = new Date();
        var hour = d.getHours();
        var _day = d.getDay();
        var srcURL = '';
	if( _day == 0 ){
		srcURL = '/img/stream/dayoff.jpg';
	} else {
		if(hour >=0 && hour < 7){
		        srcURL = "url('/img/stream/closed.jpg')";
		} else if(hour >= 7 && hour < 11){
		        srcURL = "url('/img/stream/preparing.jpg')";
		} else if(hour >= 11 && hour < 22){
		        srcURL = "url('http://121.131.240.137/?action=snapshot')" 
		} else if(hour >= 22 && hour <= 23){
		        srcURL = "url('/img/stream/closed.jpg')";
		}
	}
        //$('#streamPicture').attr('src', srcURL);
	$("#streamPicture").css("background-image", srcURL);
        $('#streamPicture_datetime').html( formatDate(d) );
}

/*
$("#streamPicture").on("click", function() {
        liveImageRefresh();
});
*/

$(document).ready(function(){
        //liveImageRefresh();
	//alert('hello');
});

