const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const image = document.getElementById('image');

button1.addEventListener('click', () => {
	image.src = 'bulb-on.png';
});

button2.addEventListener('click', () => {
	image.src = 'bulb-off.png';
});


