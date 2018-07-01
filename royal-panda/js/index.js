'use strict';

const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;

let countDown = new Date('July 10, 2028 00:00:00').getTime(),
  x = setInterval(function() {

		let now = new Date().getTime(),
			distance = countDown - now;

		document.getElementById('hours').innerText = 0,
		document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
		document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

		document.getElementById('hours_second').innerText = 0,
		document.getElementById('minutes_second').innerText = Math.floor((distance % (hour)) / (minute)),
		document.getElementById('seconds_second').innerText = Math.floor((distance % (minute)) / second);
  }, second);
