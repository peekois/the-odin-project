const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const headerThree = document.createElement('h3');
headerThree.textContent = "Hey I'm blue h3!";
headerThree.style.color = 'blue';

const contentBorder = document.createElement('div');
contentBorder.style.backgroundColor = 'pink';
contentBorder.style.border = '5px solid black';

const headerOne = document.createElement('h1');
headerOne.textContent = "I'm in a div";

const secondParagraph = document.createElement('p');
secondParagraph.textContent = 'ME TOO!';

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
contentBorder.appendChild(headerOne);
contentBorder.appendChild(secondParagraph);

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(headerThree);
container.appendChild(contentBorder);
