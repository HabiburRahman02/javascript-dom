// console.log('external js file')
// console.log(document);

const h1Collection = document.getElementsByTagName('h1');
for (const h1 of h1Collection) {
    // console.log(h1)
    const h1Text = h1.innerText;
    // console.log(h1Text)
}

const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    // console.log(li.innerText)
}


const playersTitle = document.getElementById('players-title');
playersTitle.innerText = 'Lords players'


const heros = document.getElementsByClassName('hero');
for (const hero of heros) {
    // console.log(hero.innerText)
}

const firstNode = document.querySelector('.players-container li');
// console.log(firstNode)

const nodeList = document.querySelectorAll('.players-container li');
for (const list of nodeList) {
    // console.log(list)
}

const something = document.getElementById('players-title');

// console.log(something.getAttribute('class'))
something.classList.add('again1')
something.classList.add('again3')
// console.log(something)
something.classList.remove('extra')
// console.log(something)
something.style.backgroundColor = 'green'
something.style.color = 'salmon';
// something.style.textAlign = 'center'
something.style.padding = '10px'
something.setAttribute('title', 'its changed by js')
something.innerText = 'They are very good players'
something.innerHTML = `<h2>Players Name</h2>`
// console.log(something)

