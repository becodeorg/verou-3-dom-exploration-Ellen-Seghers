var allImportantClasses = document.querySelectorAll('.important');

for (let a = 0; a < allImportantClasses.length; a++) {
	allImportantClasses[a].setAttribute('title', 'This is an important item');
}


var allImg = document.querySelectorAll('img');

for (let b = 0; b < allImg.length; b++) {
	if (allImg[b].className != 'important') {
		allImg[b].style.display = 'none';
	}
}


var allParagraphs = document.querySelectorAll('p');
var usedColors = [];

for (let c = 0; c < allParagraphs.length; c++) {
	console.log('content: ' + allParagraphs[c].textContent);
	if (allParagraphs[c].classList.length > 0) {
		console.log('class: ' + allParagraphs[c].classList.value);
	} else {
		allParagraphs[c].style.color = colorpicker();
	}
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