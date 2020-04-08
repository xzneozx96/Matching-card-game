let time = 10;
let countDown = setInterval(() => {
	console.log(time);
	--time;
	if (time === 0) {
		clearInterval(countDown);
		console.log("Happy New Year, best wishes for you")
	}
},1000)