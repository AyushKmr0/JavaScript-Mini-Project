const optionButtons = document.querySelectorAll('.option-button');
const formatButtons = document.querySelectorAll('.format');
const scriptButtons = document.querySelectorAll('.script');
const advOptionsButtons = document.querySelectorAll('.adv-option-button');
const alignButtons = document.querySelectorAll('.align');
const spacingButtons = document.querySelectorAll('.spacing');
const fontName = document.getElementById('fontName');
const fontSize = document.getElementById('fontSize');
const linkButtons = document.getElementById('createLink');
const writingArea = document.getElementById('text-input');

const fontList = [
	"Arial",
	"Verdana",
	"Tahoma",
	"Trebuchet MS",
	"Times New Roman",
	"Garamond",
	"Georgia",
	"Courier New",
	"Brush Script MT",
];

const initializer = () => {
	highlighter(formatButtons, false);
	highlighter(scriptButtons, true);
	highlighter(alignButtons, true);
	highlighter(spacingButtons, true);


	fontList.forEach((font) => {
		let option = document.createElement('option');
		option.value = font;
		option.textContent = font;
		fontName.appendChild(option);
	});

	for (let i = 1; i <= 7; i++) {
		let option = document.createElement('option');
		option.value = i;
		option.textContent = i;
		fontSize.appendChild(option);
	}

	fontSize.value = 3;
};

const modifyText = (command, showUI, value) => {
	document.execCommand(command, showUI, value);
};

optionButtons.forEach((button) => {
	button.addEventListener('click', () => {
		modifyText(button.id, false, null);
	});
});

advOptionsButtons.forEach((button) => {
	button.addEventListener('click', () => {
		modifyText(button.id, false, button.value);
	});
});

linkButtons.addEventListener('click', () => {
	let userLink = prompt("Enter a URL");
	if (/^https?:\/\//i.test(userLink)) {
		modifyText(linkButtons.id, false, userLink);
	}
	else {
		modifyText(linkButtons.id, false, `http://${ userLink }`);
	}
});

const highlighter = (buttons, needRemoval) => {
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			if (needRemoval) {
				let alreadyActive = button.classList.contains('active');
				highlighterRemover(buttons);
				if (!alreadyActive) {
					button.classList.add('active');
				}
			}
			else {
				button.classList.toggle('active');
			}
		});
	});
};

const highlighterRemover = (buttons) => {
	buttons.forEach((button) => {
		button.classList.remove('active');
	});
};


window.onload = () => {
	initializer();
};
