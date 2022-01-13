const collection = [{
		name: 'Michael Jackson',
		genre: ['Pop', 'Soul', 'R&B', ],
		yearsActive: '1963-2009',
		country: 'United States',
		picture: "buy-michael-jackson-bad-tour-belt.jpg",
		cast: ['Jennifer Batten', 'Slash', 'Judith Glory Hill', ]
	},
	{
		name: 'Smash Into Pieces',
		genre: 'Alternative Rock',
		yearsActive: '2008-today',
		country: 'Sweden',
		picture: "A-3178818-1539455224-2491.jpeg.jpg",
		cast: ['Chris Adam Hedman Sörbye', 'Benjamin Jennebo', 'The Apocalypse DJ', 'Per Bergquist', ]
	},
	{
		name: 'Thousand Foot Krutch',
		genre: ['Alternative Rock', ],
		yearsActive: '1995-today',
		country: 'Canada',
		picture: "tfk-web-1400x932.jpg",
		cast: ['Trevor McNevan', 'Joel Bruyere', 'Steve Augustine', 'Ty Dietzler', ]
	},
	{
		name: 'Apocalyptice',
		genre: ['Alternative Metal', ],
		yearsActive: '1993-today',
		country: 'Helsinki',
		picture: "de1ea6e0-df03-49bb-bcb2-9d88f0709205.jpg",
		cast: ['Eicca Toppinen', 'Paavo Lötjönen', 'Perttu Kivilaakso', 'Mikko Sirén', 'Franky Perez', ]
	},
	{
		name: 'Within Temptation',
		genre: ['Symphonic Metal', ],
		yearsActive: '1996-today',
		country: 'Netherlands',
		picture: "uueuwmchjzigzy7kk78n.jpg",
		cast: ['Sharon den Adel', '	Stefan Helleblad', 'Jeroen van Veen', '	Mike Coolen', 'Martijn Spierenburg', ],
	},
	{
		name: 'Evanescence',
		genre: ['Alternative Rock', 'Gothic Rock', ],
		yearsActive: '1998-today',
		country: 'Arkansas',
		picture: "Evanescence.jpg",
		cast: ['Amy Lee', 'Jen Majura', 'Troy McLawhorn', 'Tim McCord', 'Will Hunt', ],
	},
	{
		name: 'Linkin Park',
		genre: ['Alternative Rock', 'Alternative Metal', 'Raprock', ],
		yearsActive: '1999-2017',
		country: 'Caliornië',
		picture: "linkin_park1-e1424877421108.jpg",
		cast: ['Chester Bennington', 'Mike Shinoda', 'Dave "Phoenix" Farrell', 'Brad Delson', 'Joe Hahn', 'Rob Bourdon', 'Mark Wakefield', ],
	},
	{
		name: 'Adam Lambert',
		genre: ['Pop', 'Poprock', 'Rock', 'Glamrock'],
		yearsActive: '2009-today',
		country: 'United States',
		picture: "Queen_And_Adam_Lambert_-_The_O2_-_Tuesday_12th_December_2017_QueenO2121217-14_(25093782907)_Cropped.jpg",
		cast: ['/', ]
	},
	{
		name: 'Nickelback',
		genre: ['Hardrock', 'Alternative Rock', 'Poprock', ],
		yearsActive: '1995-today',
		country: 'Hanna',
		picture: "download.jpg",
		cast: ['Chad Kroeger', 'Ryan Peake', 'Mike Kroeger', 'Daniel Adair', ],
	},
	{
		name: 'Skillet',
		genre: ['Alternative rock', 'Hardrock', ],
		yearsActive: '1996-today',
		country: 'United States',
		picture: "gmm-2020-skillet-8iusewa7kepgfbm-1.jpg",
		cast: ['John Cooper', 'John Cooper', 'Korey Cooper', 'Jen Ledger', 'Seth Morisson', ]
	}
];


var mainVar = document.querySelector("main");
var sectionVar = document.createElement('section');

collection.forEach((music) => {
	var divVar1 = document.createElement('div');
	var divVar2 = document.createElement('div');
	var imgVar = document.createElement('img');
	var h4Var = document.createElement('h4');
	var paragraphVar = document.createElement('P');

	divVar1.className = 'card';
	imgVar.className = 'cardImg';
	imgVar.src = music.picture;
	imgVar.alt = 'Picture of ' + music.name;
	divVar2.className = 'container';
	h4Var.innerText = music.name;

	/*music.genre.forEach((genre) =>{

	});
	*/
	divVar2.append(h4Var);
	divVar2.append(paragraphVar);
	divVar1.append(imgVar);
	divVar1.append(divVar2);
	sectionVar.append(divVar1);

	console.log(sectionVar);
});


mainVar.append(sectionVar);