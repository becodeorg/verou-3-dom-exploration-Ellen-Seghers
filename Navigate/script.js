//Select the element
const orderList = document.querySelector('ol');
const sectionsChildren = orderList.children
console.log(sectionsChildren) // [<li> <li> <li> <li> <li>]

//Select the last child of the <OL> tag
const lastChild = sectionsChildren[4];
console.log(lastChild);

//put the last child of <ol> at the beginning of the list
const firstChild = sectionsChildren[0];
orderList.insertBefore(lastChild, firstChild);


