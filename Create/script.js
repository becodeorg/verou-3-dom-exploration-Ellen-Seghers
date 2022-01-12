var usedColors = [];
var articleVar = document.querySelector('article');
var studentNames = ['Ahmad', 'Jian', 'Michael', 'Dante', 'Muhammet', 'Nicolas', 'Jordy', 'Beryl', 'Cynthia', 'Ruben', 'Magali', 'Jawid', 'Koen', 'Kevin', 'Benjamin', 'Deryl', 'Michelle', 'Colin', 'Feruz', 'Pieter', 'Ellen', 'Sara'];

var randomNames = [];
var numberNames = studentNames.length;
for(var i = 0; i < numberNames; i++){
	var rand = Math.floor(Math.random() * (studentNames.length));
	randomNames.push(studentNames.splice(rand, 1));
}


for(var i = 0; i < randomNames.length; i++){
	var newSection = document.createElement("SECTION");
	var backgroundColor = colorpicker();
	newSection.style.backgroundColor = backgroundColor;
	var textColor = lightOrDark(backgroundColor);

	var newParagraph = document.createElement('P');
	newParagraph.innerText = randomNames[i];
	newParagraph.style.color = textColor;

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

function lightOrDark(color) {

    // Variables for red, green, blue values
    let red;
    let green;
    let blue;
    let hsp;
    
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    //color = "#2FA25C";
    color = +("0x" + color.slice(1).replace( 
    color.length < 5 && /./g, '$&$&'));

    red = color >> 16;
    green = color >> 8 & 255;
    blue = color & 255;
    
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
    0.299 * (red * red) +
    0.587 * (green * green) +
    0.114 * (blue * blue)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {
        return color = "black";
    } 
    else {
        return color = "white";
    }
}