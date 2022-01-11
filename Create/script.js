var usedColors = [];
var articleVar = document.querySelector('article');
var studentNames = ['Ahmad', 'Jian', 'Michael', 'Dante', 'Muhammet', 'Nicolas', 'Jordy', 'Beryl', 'Cynthia', 'Ruben', 'Magali', 'Jawid', 'Koen', 'Kevin', 'Benjamin', 'Deryl', 'Michelle', 'Colin', 'Feruz', 'Pieter', 'Ellen', 'Sara'];

for(var i = 0; i < studentNames.length; i++){
	var newSection = document.createElement("SECTION");
	newSection.style.backgroundColor = colorpicker();
	var newParagraph = document.createElement('P');
	newParagraph.innerText = studentNames[i];
	newSection.append(newParagraph);
	articleVar.append(newSection);
	console.log(newSection);
}

function colorpicker() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	if (usedColors.includes(color)) {
		colorpicker();
	}
	usedColors.push(color); 
	return color;
}