console.log (document.title);

document.title = 'Modifying the DOM';
console.log (document.title);

document.body.style.backgroundColor ='#FF69B4';
document.body.style.backgroundColor = 'rgb(0, 105, 252)'; 

const bodyChildren = document.body.children
for (let item of bodyChildren) { console.log(item)}
