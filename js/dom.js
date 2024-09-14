// console.log('external js file')
// console.log(document);

const h1Collection = document.getElementsByTagName('h1');
for (const h1 of h1Collection) {
    // console.log(h1)
    const h1Text  = h1.innerText;
    // console.log(h1Text)
}

const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    // console.log(li.innerText)
}


const playersTitle = document.getElementById('players-title');
playersTitle.innerText = 'Lords players' 


const heros = document.getElementsByClassName('hero');
for(const hero of heros){
    // console.log(hero.innerText)
}

const firstNode = document.querySelector('.players-container li');
console.log(firstNode)

const nodeList = document.querySelectorAll('.players-container li');
for(const list of nodeList){
    console.log(list)
}
