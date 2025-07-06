const valueDisplay = document.querySelectorAll('.num');
let interval = 2000;

valueDisplay.forEach((value) => {
	let startValue = 0;
	let endValue = parseInt(value.getAttribute('data-value'));
	let duration = Math.floor(interval / endValue);

	let counter = setInterval(function () {
		startValue += 1;
		value.textContent = startValue;

		if (startValue === endValue) {
			clearInterval(counter);
		}
	}, duration);
});
