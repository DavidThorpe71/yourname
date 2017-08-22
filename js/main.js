var words = ['david', 'thorpe\'s', 'website'];

var wordsLength = words.length

var container = document.getElementById('container')



var div = document.createElement('div');

for (var i = 0; i < wordsLength; i++) {
	var word = words[i];
	var rowDiv = document.createElement('div');
	rowDiv.className = 'row row' + i;
	container.appendChild(rowDiv);
	for (var j = 0; j < word.length; j++) {
		var boxDiv = document.createElement('div');
		boxDiv.className = 'box col' + Math.floor(Math.random()*10);
		var letter = word[j];
		boxDiv.innerHTML = letter.toUpperCase();
		rowDiv.appendChild(boxDiv);
	}
}

var opacityChange = function() {
	var allBoxes = document.querySelectorAll('.box');
	console.log(allBoxes);
	for (i = 0; i < allBoxes.length; i++) {
		allBoxes[i].classList.toggle('load');
	}
}

container.addEventListener('click', opacityChange);

