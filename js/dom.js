// console.log('external js file')
// console.log(document);

const h1Collection = document.getElementsByTagName('h1');
for (const h1 of h1Collection) {
    // console.log(h1)
    const h1Text  = h1.innerText;
    console.log(h1Text)
}

const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    console.log(li.innerText)
}