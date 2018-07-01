// 'use strict';
//
// const second = 1000,
// 	minute = second * 60,
// 	hour = minute * 60,
// 	day = hour * 24;
//
// let countDown = new Date('July 10, 2028 00:00:00').getTime(),
//   x = setInterval(function() {
//
// 		let now = new Date().getTime(),
// 			distance = countDown - now;
//
// 		document.getElementById('hours').innerText = 0,
// 		document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
// 		document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
//
// 		document.getElementById('hours_second').innerText = 0,
// 		document.getElementById('minutes_second').innerText = Math.floor((distance % (hour)) / (minute)),
// 		document.getElementById('seconds_second').innerText = Math.floor((distance % (minute)) / second);
//   }, second);



	var time_in_minutes = 60;
	var current_time = Date.parse(new Date());
	var deadline = new Date(current_time + time_in_minutes*60*1000);


	function time_remaining(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
	}
	function run_clock(endtime){
		function update_clock(){
			var t = time_remaining(endtime);
			document.getElementById('hours').innerText = 0,
			document.getElementById('minutes').innerText = t.minutes,
			document.getElementById('seconds').innerText = t.seconds;

			document.getElementById('hours_second').innerText = 0,
			document.getElementById('minutes_second').innerText = t.minutes,
			document.getElementById('seconds_second').innerText = t.seconds;
			if(t.total<=0){ clearInterval(timeinterval); }
		}
		update_clock(); // run function once at first to avoid delay
		var timeinterval = setInterval(update_clock,1000);
	}
	run_clock(deadline);
