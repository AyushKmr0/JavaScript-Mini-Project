const jokeContainer = document.querySelector('#joke');
const btn = document.querySelector('#btn');

const URL = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {
	jokeContainer.classList.remove('fade');

	fetch(URL)
		.then(data => data.json())
		.then(item => {
			jokeContainer.textContent = `${ item.joke }`;
			jokeContainer.classList.add('fade');
		});
};

btn.addEventListener('click', getJoke);
getJoke();
