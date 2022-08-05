
let intro_content = document.querySelector('#intro_content').children

for(let i=0; i<intro_content.length; i++){
    intro_content[i].classList.add("fadeStart")
}

setInterval(displayContent, 120)
j=0;

function displayContent() {
    //console.log(intro_content[j])
    if(j<intro_content.length){
        intro_content[j].classList.add("fadeStop")
        intro_content[j].classList.remove("fadeStart")
    }
    j++
}


const [red, green, blue] = [250, 250, 250]
const body = document.querySelector('body')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 100
  console.log(y)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})


function scrollToProjects() {
    document.querySelector('#project_section').scrollIntoView({behavior: 'smooth'});
}