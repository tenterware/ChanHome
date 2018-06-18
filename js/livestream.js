
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

function liveVideoCheck(){
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
		        srcURL = 'http://121.131.240.137/?action=stream' 
		} else if(hour >= 22 && hour <= 23){
		        srcURL = '/img/stream/closed.jpg';
		}
	}
        $('#streamVideo').attr('src', srcURL);
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
	$('#streamPicture_datetime').html( formatDate(d) );
}

$(document).ready(function(){
	if( $('#streamPicture').length ){
        	liveImageRefresh();
		$("#streamPicture").on("click", function() {
		        liveImageRefresh();
		});
	}
	if( $('#streamVideo').length ){
		liveVideoCheck();
		setInterval(function(){ liveVideoCheck(); }, 30000);
	}
});

