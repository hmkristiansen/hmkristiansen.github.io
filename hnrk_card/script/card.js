class Card {

    constructor (index) {

        this.index = index


        let card = document.createElement('div')

        let cardHeader = document.createElement('div')
        cardHeader.className = "popup-header noselect"

        let cardContent = document.createElement('div')
        cardContent.className = "cardContent"

        let title = document.createElement('h1')
        title.innerText = "Henrik Kristiansen"

        let subtitle = document.createElement('h2')
        subtitle.innerText = "interaction designer"

        let body = document.createElement('p')
        body.innerText = "I create, break, fix, build, develop, craft, and sometimes design digital experiences."

        cardContent.appendChild(title)
        cardContent.appendChild(subtitle)
        cardContent.appendChild(body)

        card.appendChild(cardHeader)
        card.appendChild(cardContent)

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
    console.log("scroll");
    let scrollCard = new Card(i)

    scrollCard.getCard().style.top = "calc(" + "50vh" + "-" + getRandomInt(200) + "px" + ")"
    scrollCard.getCard().style.left = getRandomInt(200) + "px"

    document.body.appendChild(scrollCard.getCard())
    i++
}