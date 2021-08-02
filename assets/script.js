
let content = document.createElement('div')
content.classList.add("content")
const body = document.getElementById('body')

// Init
let renderContent = () =>{
  renderEasterEgg()
  renderImage()
  renderContact()
  renderWork()
  renderAbout()
  body.appendChild(content)
  renderReRun()
}

// set the stage and do stuff
let eggs = ["I don't like strawberries","I'm effectively tone deaf","I grew up among polar bears on Svalbard", "My favorite color is #ff7f50", "My most played song on Spotify is Fragments of Time by Daft Punk"]
let bgs = ["F97068", "57C4E5", "BCD39C", "FFCB47", "EC4E20","ff7f50"]

let oldI = 0;
let oldJ = 0;

let setStage = () =>{
  let i = Math.floor(Math.random() * bgs.length)
  let j = Math.floor(Math.random() * eggs.length)

  while(i == oldI){
    i = Math.floor(Math.random() * bgs.length)
  }
  while(j == oldJ){
    j = Math.floor(Math.random() * bgs.length)
  }

  if(j == 3){
    i = 5
  }
  if((i == 5) && (j !=3)){
    while(i == 5){
      i = Math.floor(Math.random() * bgs.length)
    }
  }

  document.getElementById("easteregg").innerHTML = eggs[j]

  let bin =["+","-"] 

  body.style.setProperty("background-color", "#"+bgs[i])

  // Set random about
  let about =  document.getElementById('about')
  if (typeof(about) != 'undefined' && about != null)
  {
    about.style.top = "calc(50vh - 160px " + bin[Math.round(Math.random())] + " " + Math.floor(Math.random() * 10 + 1) + "vh)"
    about.style.left = "calc(50vw - 160px " + bin[Math.round(Math.random())] + " " + Math.floor(Math.random() * 10 + 1) + "vw)"
    about.style.transform = "rotate("+bin[Math.round(Math.random())]+ ((Math.floor(Math.random() * 10 + 1))/2)+"deg)"
  }

  // Set random work
  let work =  document.getElementById('work')
  if (typeof(work) != 'undefined' && work != null)
  {
    work.style.top = "calc(50vh - 160px " + bin[Math.round(Math.random())] + " " + Math.floor(Math.random() * 10 + 1) + "vh)"
    work.style.left = "calc(50vw - 160px " + bin[Math.round(Math.random())] + " " + Math.floor(Math.random() * 10 + 1) + "vw)"
    work.style.transform = "rotate("+bin[Math.round(Math.random())]+ ((Math.floor(Math.random() * 10 + 1))/2)+"deg)"
  }

  // Set random contact
  let contact = document.getElementById('contact')
  if (typeof(contact) != 'undefined' && contact != null){
    contact.style.top = "calc(50vh - 160px " + bin[Math.round(Math.random())] + " " + Math.floor(Math.random() * 10 + 1) + "vh)"
    contact.style.left = "calc(50vw - 160px " + bin[Math.round(Math.random())] + " " + Math.floor(Math.random() * 10 + 1) + "vw)"
    contact.style.transform = "rotate("+bin[Math.round(Math.random())]+ ((Math.floor(Math.random() * 10 + 1))/2)+"deg)"
  }

  // Set random image
  let image = document.getElementById('hug')
  if (typeof(image) != 'undefined' && image != null){
    image.style.transform = "rotate("+bin[Math.round(Math.random())]+ ((Math.floor(Math.random() * 10 + 1))/2)+"deg)"
    image.style.top = "calc(50vh - 160px " + bin[Math.round(Math.random())] + " " + Math.floor(Math.random() * 10 + 1) + "vh)"
    image.style.left = "calc(50vw - 100px " + bin[Math.round(Math.random())] + " " + Math.floor(Math.random() * 10 + 1) + "vw)"
    image.style.transform = "rotate("+bin[Math.round(Math.random())]+ ((Math.floor(Math.random() * 10 + 1))/2)+"deg)"
  }

  oldI = i
  oldJ = j
}

// Render content
let renderAbout = () =>{
    let about = document.createElement('div')
    about.classList.add("window","draggable")
    about.id = "about"

    let title = document.createElement('h1')
    let cont = document.createElement('div')
    cont.classList.add("cont")

    title.innerText = "About"
    cont.innerHTML = "Heisann I'm Henrik 👋<br>I create, break, fix, experiment, develop and occasionally design stuff. Currently doing my master's at NTNU.<br><br>I like running, video games, coffee and beagles."

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
    cont.innerHTML = "I’ve been fortunate to have worked on some cool projects with Cognite, FARA, Anywhere, Santander, Engage NTNU, Tackl, Statens Vegvesen, Lillemini and Trondheim Climathon - among others.<br><br><a href='http://portfolio.hmkristiansen.no' target='_blank'>Check out some projects</a>"

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
    cont.innerHTML = "Currently: OSL<br>Previosly: CPH, LYR, TRD, LIS<br><br><ul><li>Instagram: <a href='https://www.instagram.com/hmkristiansen' target='_blank'>@hmkristiansen</a></li><li>LinkedIn: <a href='https://www.linkedin.com/in/hmkristiansen/' target='_blank'>hmkristiansen</a></li><li>Epost: <a href='mailto:heisann@hmkristiansen.no'>heisann@hmkristiansen.no</a></li></ul><br>Don't be a stranger 🕶"

    contact.appendChild(title)
    addCross(contact)
    contact.appendChild(cont)
    content.appendChild(contact)
}

let renderImage = () =>{
  let img = document.createElement('img')
  img.src = "assets/hug.jpg"
  img.id = "hug"
  img.classList.add("window", "draggable")
  content.appendChild(img)
}

let renderEasterEgg = () => {
  let egg = document.createElement('p')
  egg.innerText = "heisann :)"
  egg.innerHTML = eggs[Math.floor(Math.random() * eggs.length)]
  egg.id = "easteregg"
  egg.classList.add("window")
  content.appendChild(egg)
}

let renderReRun = () =>{
  let redo = document.createElement("p")
  redo.innerText = "⤾"
  redo.id = "redo"
  body.appendChild(redo)
}

let startupAni = () =>{
  let about =  document.getElementById('about')
  about.classList.add('aboutStart')
}

renderContent()

// setTimeout( function(){ 
//   startupAni()
// }  , 1000 );

// Make content draggable
$(function(){
    $(".draggable").draggableTouch()
})

// Supporting functions for window-close
$(".closeWindow").click(function closeWindow(){
  $(this).closest('.window').remove()
})
function addCross(parent){
  if (window.ontouchstart === undefined) {
    let cross = document.createElement('img')
    cross.src = "assets/cross.svg"
    cross.classList.add("closeWindow")
    parent.appendChild(cross)
  }else{
    return true
  }
}
let rotatecounter = 1
$("#redo").click(function(){
  randomize()
})

document.body.onkeyup = function(e){
  if(e.keyCode == 32){
      randomize()
  }
}

function randomize(){
  setStage()
  let div = document.getElementById('redo'), deg = 360*rotatecounter
  div.style.webkitTransform = 'rotate('+deg+'deg)'
  div.style.mozTransform    = 'rotate('+deg+'deg)'
  div.style.msTransform     = 'rotate('+deg+'deg)'
  div.style.oTransform      = 'rotate('+deg+'deg)'
  div.style.transform       = 'rotate('+deg+'deg)'
  rotatecounter++
}

// Add more content on scroll

let h = window.innerHeight
let counter = 1;

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY

  if(scroll > (h/2)*counter){
    let cln = content.cloneNode(true)
    body.appendChild(cln)
  }
})

