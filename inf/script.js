
let content = document.createElement('div')
content.classList.add("content")

const body = document.getElementById('body')

let renderAbout = () =>{
    let about = document.createElement('div')
    about.classList.add("window")
    about.id = "about"

    let title = document.createElement('h1')
    let cont = document.createElement('div')
    cont.classList.add("cont")

    title.innerText = "About"
    cont.innerHTML = "I create, break, fix, experiment, code and occasionally design digital stuff.<br>Currently doing a Junior Digital Designer internship at EGGS Design.<br>I like running, video games and beagles."
    about.appendChild(title)
    about.appendChild(cont)
    content.appendChild(about)
}

let renderWork = () =>{
    let work = document.createElement('div')
    work.classList.add("window")
    work.id = "work"

    let title = document.createElement('h1')
    let cont = document.createElement('div')
    cont.classList.add("cont")

    title.innerText = "Work"
    cont.innerHTML = "I’ve been fortunate enough to work on some cool projects with Cognite, FARA, Anywhere, Santander, Engage NTNU, Novozymes Tackl, Statens Vegvesen, Lillemini, Trondheim Climathon - just to mention a few.<br><a href='#'>Check out my public portfolio</a>"

    work.appendChild(title)
    work.appendChild(cont)
    content.appendChild(work)
}

let renderContact = () =>{
    let contact = document.createElement('div')
    contact.classList.add("window")
    contact.id = "contact"

    let title = document.createElement('h1')
    let cont = document.createElement('div')
    cont.classList.add("cont")

    title.innerText = "Contact"
    cont.innerHTML = "Currently: CPH<br>Previosly: OSL, LYR, TRD, LIS<br><br><ul><li>Instagram: <a>@hmkristiansen</a></li><li>Twitter: <a>@_hmkristiansen</a></li><li>LinkedIn: <a>@hmkristiansen</a></li><li>Epost: <a>heisann@hmkristiansen.no</a></li></ul><br>Feel free to get in touch!"

    contact.appendChild(title)
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


//Make the DIV element draggagle:

dragElement(document.getElementById("about"));
dragElement(document.getElementById("work"));
dragElement(document.getElementById("contact"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  console.log("hello")

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}