var words = ['your', 'name'];

var wordsLength = words.length

var container = document.getElementById('container');

var div = document.createElement('div');

for (var i = 0; i < wordsLength; i++) {
	var word = words[i];
	for (var j = 0; j < word.length; j++) {
		var div = document.createElement('div');
		div.className = 'row' + i + ' box' + j + ' box';
		var letter = word[j];
		div.innerHTML = letter.toUpperCase();
		container.appendChild(div)
	}	
}