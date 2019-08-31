// let paragraph = document.getElementById('paragraph');

// console.log(paragraph); // <== <p id="paragraph">What is your name?</p>

let links = document.getElementsByClassName('link');

console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
                    // 0: a#google-link.link
                    // length: 1
                    // google-link: a#google-link.link
                    // __proto__: HTMLCollection

let divs = document.getElementsByTagName('div');

console.log(divs);


let paragraph = document.getElementById('paragraph');
paragraph.setAttribute('id', 'info-paragraph');
let paragraphId = paragraph.getAttribute('id');
console.log(paragraphId); // <== paragraph

let link = document.getElementById('google-link');
link.setAttribute('href', 'http://www.google.com');
link.setAttribute('target', '_blank');

paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');
paragraph.removeAttribute('class');

let h2Tag = document.createElement('h2');
console.log(h2Tag);
h2Tag.innerHTML = "Elephant";
let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);

let text = document.createTextNode('This text is created dynamically 🏆 🎯');
parent.appendChild(text);

let newParagraph = document.createElement('p');
let text2 = document.createTextNode('Hi there! I am using JavaScript');
newParagraph.appendChild(text2);
parent.appendChild(newParagraph);

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = "Heading 1 - comes before Heading 2";
parent.insertBefore(h1Tag, h2Tag);

let input1 = document.createElement('input');
let button1 = document.getElementById('add-item-button');
parent.insertBefore(input1, button1);

let theParagraph = document.getElementById("add-item-button");
parent.removeChild(theParagraph);

parent.removeChild(h2Tag);

let contentDiv = document.getElementById('content');
contentDiv.innerHTML = ""; // clears the whole element

// let superList = document.getElementsByClassName('super-list')[0];
// superList.innerHTML = "";

let i = 1;
let button = document.getElementById("add-item-button");
let itemList = document.getElementById('items-list');
button.onclick = function(){
  document.getElementsByTagName("li");
  itemList.innerHTML += '<li>Item number ' + i++ + '</li>'
}

let sendButton = document.getElementById('send-btn');
// move the input inside the function (this step is optional):
sendButton.onclick = function(){
  let input = document.getElementsByTagName('input')[1]; // or leave it as it is, outside
  console.log(input.value);
}

// let liTags = document.getElementsByTagName('li');

// for(let i=0; i < liTags.length; i++){
//   liTags[i].onclick = function(e){
//     console.log(e.currentTarget.innerHTML);
//   }
// }

let theUl = document.querySelector('.list'); // gets the "ul" element

console.log(theUl.childNodes); // ==> check what's in the console

theUl.childNodes.forEach(theLiTag => {
    theLiTag.onclick = function(){
        theLiTag.innerHTML = "";
    }
})