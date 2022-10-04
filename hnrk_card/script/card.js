class Card {

    constructor (index) {

        this.index = index

        // defining card
        let card = document.createElement('div')
        let cardHeader = document.createElement('div')
        cardHeader.className = "popup-header"
        cardHeader.innerHTML = "header"

        console.log(cardHeader)


        // defining card faces
        let front = document.createElement('div')
        front.className = "cardFront"
        front.appendChild(cardHeader)

        let back = document.createElement('div')
        back.className = "cardBack"


        // setting front content
        let frontTitle = document.createElement('h1')
        let frontSubtitle = document.createElement('h2')
        let frontLinks = document.createElement('ul')

        frontTitle.innerText = "Henrik Kristiansen"
        frontSubtitle.innerHTML = "interface designer<br>osl, nor"

        let emailLink = document.createElement('a')
        emailLink.innerText = "Email"
        emailLink.href = "mailto:heisann@hmkristiansen.no"
        emailLink.target = "_blank"
        
        let igLink = document.createElement('a')
        igLink.innerText = "Instagram"
        igLink.href = "https://instagram.com/hmkristiansen"
        igLink.target = "_blank"

        let liLink = document.createElement('a')
        liLink.innerText = "LinkedIn"
        liLink.href = "https://linkedin.com/hmkristiansen"
        liLink.target = "_blank"

        let twLink = document.createElement('a')
        twLink.innerText = "Twitter"
        twLink.href = "https://twitter.com/_hmkristiansen"
        twLink.target = "_blank"

        let links1 = [emailLink, igLink, liLink, twLink]
        for(let i=0; i<links1.length; i++){
            let liElement = document.createElement('li')
            liElement.appendChild(links1[i])
            frontLinks.appendChild(liElement)
        }

        front.appendChild(cardHeader)
        front.appendChild(frontTitle)
        front.appendChild(frontSubtitle)
        front.appendChild(frontLinks)

        // setting back content
        let backSubtitle = document.createElement('h2')
        let backLinks = document.createElement('ul')

        backSubtitle.innerHTML = "Co-founder of Squads.<br>Creating future products at ITERATE."

        let blogLink = document.createElement('a')
        emailLink.innerText = "Blog"
        emailLink.href = "*"
        emailLink.target = "_blank"
        
        let proLink = document.createElement('a')
        igLink.innerText = "Projects"
        igLink.href = "*"
        igLink.target = "_blank"

        let phoLink = document.createElement('a')
        liLink.innerText = "Photos"
        liLink.href = "*"
        liLink.target = "_blank"

        let links2 = [blogLink, proLink, phoLink]
        for(let i=0; i<links2.length; i++){
            let liElement  =document.createElement('li')
            liElement.appendChild(links2[i])
            frontLinks.appendChild(liElement)
        }

        back.appendChild(backSubtitle)
        back.appendChild(backLinks)
        back.appendChild(cardHeader)


        card.appendChild(front)

        card.className = "popup"

        this.card = card
    }

    getCard(){
        return this.card
    }
}

let card = new Card(0)

console.log(card.getCard())

document.body.appendChild(card.getCard())

//--------
let i = 1

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function handleOnScroll() {

    // console.log("scroll");
    // let scrollCard = new Card(i)

    // scrollCard.getCard().style.top = "calc(" + "50vh" + "-" + getRandomInt(200) + "px" + ")"
    // scrollCard.getCard().style.left = getRandomInt(200) + "px"

    // document.body.appendChild(scrollCard.getCard())
    // i++

}