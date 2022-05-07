
let intro_content = document.querySelector('#intro_content').children

for(let i=0; i<intro_content.length; i++){
    intro_content[i].classList.add("fadeStart")
}

setInterval(displayContent, 150)
j=0;

function displayContent() {
    //console.log(intro_content[j])
    if(j<intro_content.length){
        intro_content[j].classList.add("fadeStop")
        intro_content[j].classList.remove("fadeStart")
    }
    j++
}