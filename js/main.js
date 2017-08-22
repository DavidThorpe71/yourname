var words = 'your name'

var wordsLength = words.length

var container = document.getElementById('container');

var div = document.createElement('div');

for (var i = 0; i < wordsLength; i++) {
	var letter = words[i];
	var div = document.createElement('div');
	div.className = 'box box' + i;
	div.innerHTML = letter.toUpperCase();
	container.appendChild(div)
}