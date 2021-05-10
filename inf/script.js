
let content = document.createElement('div')
content.classList.add("content")
const body = document.getElementById('body')

// Render content

let renderAbout = () =>{
    let about = document.createElement('div')
    about.classList.add("window","draggable")
    about.id = "about"

    let title = document.createElement('h1')
    let cont = document.createElement('div')
    cont.classList.add("cont")

    title.innerText = "About"
    cont.innerHTML = "Hi, I'm Henrik!<br><br>I create, break, fix, experiment, code and occasionally design stuff. Currently doing an internship at EGGS Design.<br><br>I also like running, video games and beagles."
    
    about.appendChild(title)
    addCross(about)
    about.appendChild(cont)
    content.appendChild(about)
}

let renderWork = () =>{
    let work = document.createElement('div')
    work.classList.add("window","draggable")
    work.id = "work"

    let title = document.createElement('h1')
    let cont = document.createElement('div')
    cont.classList.add("cont")

    title.innerText = "Work"
    cont.innerHTML = "I’ve been fortunate enough to work on some cool projects with Cognite, FARA, Anywhere, Santander, Engage NTNU, Novozymes, Tackl, Statens Vegvesen, Lillemini, Trondheim Climathon - just to mention a few.<br><br><a href='https://portfolio.hmkristiansen.no' target='_blank'>Check out my public portfolio</a>"

    work.appendChild(title)
    addCross(work)
    work.appendChild(cont)
    content.appendChild(work)
}

let renderContact = () =>{
    let contact = document.createElement('div')
    contact.classList.add("window","draggable")
    contact.id = "contact"

    let title = document.createElement('h1')
    let cont = document.createElement('div')
    cont.classList.add("cont")

    title.innerText = "Contact"
    cont.innerHTML = "Currently: CPH<br>Previosly: OSL, LYR, TRD, LIS<br><br><ul><li>Instagram: <a href='https://instagram.com/hmkristiansen' target='_blank'>@hmkristiansen</a></li><li>Twitter: <a>@_hmkristiansen</a></li><li>LinkedIn: <a>hmkristiansen</a></li><li>Epost: <a href='mailto:heisann@hmkristiansen.no'>heisann@hmkristiansen.no</a></li></ul><br>Don't be a stranger!"

    contact.appendChild(title)
    addCross(contact)
    contact.appendChild(cont)
    content.appendChild(contact)
}

let renderContent = () =>{
    renderContact()
    renderWork()
    renderAbout()
    body.appendChild(content)
}
renderContent()

// Make content draggable 

$(function(){
    $(".draggable").draggableTouch()
})


// Supporting functions for window-close

$(".closeWindow").click(function closeWindow(){
  $(this).closest('.window').remove()
});

function addCross(parent){
  if (window.ontouchstart === undefined) {
    let cross = document.createElement('img')
    cross.src = "cross.svg"
    cross.classList.add("closeWindow")
    parent.appendChild(cross)
  }else{
    return true
  }
}


// Add more content on scroll

let h = window.innerHeight
let counter = 1;
// console.log(h)

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY

  if(scroll > (h/2)*counter){
    let cln = content.cloneNode(true)
    body.appendChild(cln)
  }

  console.log(scroll)
})

