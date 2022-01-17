import { collection } from './collection.js';

var mainVar = document.querySelector("main");
var sectionVar = document.createElement('section');

collection.forEach((music) => {
	const divVar1 = document.createElement('div');
	const divVar2 = document.createElement('div');
	const divVar3 = document.createElement('div');
	const newButton = document.createElement('a');
	const tagDiv = document.createElement('div');
	const imgVar = document.createElement('img');
	const h4Var = document.createElement('h4');
	const paragraphVar = document.createElement('P');
	const yearsActive = document.createElement('P');
	const countryVar = document.createElement('P');
	const castVar = document.createElement('P');
	const youTube = document.createElement('img');

	youTube.src = './free-youtube-logo-icon-2431-thumb.png';
	youTube.alt = 'youTubeLogo';
	divVar3.className = 'lining';
	divVar1.className = 'card';
	imgVar.className = 'cardImg';
	newButton.className = 'button';
	newButton.href = music.youTubeLink;
	imgVar.src = music.picture;
	imgVar.alt = 'Picture of ' + music.name;
	divVar2.className = 'container';
	h4Var.innerText = music.name;
	countryVar.innerText = 'Country: ' + music.country;
	countryVar.className = 'country';
	castVar.className = 'cast';
	castVar.innerText = 'Cast: ' + music.cast;
	paragraphVar.innerText = music.description;
	yearsActive.innerText = music.yearsActive;
	yearsActive.className = 'years';

	tagDiv.className = 'tag';
	tagDiv.append(yearsActive);

	for(var i = 0; i < music.genre.length; i++){
		var tag = document.createElement('P');
		tag.innerText = music.genre[i]; 
		tag.className = 'genre';
		
		tagDiv.append(tag);
	}

	newButton.append(youTube);
	divVar2.append(tagDiv);
	divVar2.append(h4Var);
	divVar2.append(countryVar);
	divVar2.append(castVar);
	divVar2.append(paragraphVar);
	divVar1.append(imgVar);
	divVar1.append(divVar2);
	divVar3.append(newButton);
	divVar1.append(divVar3);
	sectionVar.append(divVar1);

	console.log(sectionVar);

	function hoverEffects(divVar1) {
		divVar1.onmouseover = function () {
			divVar1.style.transform = "scale(1.03, 1.03)";
			divVar1.style.zIndex = 100;
			divVar1.style.transition = "0.15s";
			divVar1.style.boxShadow = "0 0 0 9999px #000000b0";
		};
		divVar1.onmouseout = function () {
			divVar1.style.transform = "scale(1, 1)";
			divVar1.style.zIndex = 0;
			divVar1.style.boxShadow = "0 0 0 9999px #00000000";
		};
	};
	hoverEffects(divVar1);
});


mainVar.append(sectionVar);