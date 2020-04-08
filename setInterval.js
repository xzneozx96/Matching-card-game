let time = 10;
let countDown = setInterval(() => {
	console.log(time);
	--time;
	if (time === 0) {
		clearInterval(countDown)
	}
},1000)