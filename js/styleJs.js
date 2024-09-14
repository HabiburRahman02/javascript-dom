const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '3px solid salmon';
    section.style.margin = '20px 0';
    section.style.borderRadius = '12px'
    section.style.backgroundColor = 'gray';
    section.style.color = 'white'
}


const lastSection = document.getElementById('last-sect');
// lastSection.classList.add('font-large');
lastSection.classList.remove('font-large')