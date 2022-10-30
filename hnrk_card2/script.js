var elements = document.getElementsByClassName("flip-card");

var cardClick = function() {
    let innerCard = this.firstElementChild

    if(innerCard.classList.contains("flipCardEvent")){
        innerCard.classList.remove("flipCardEvent")
    }else{
        innerCard.className=("flipCardEvent")
    }
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', cardClick, false);
}


class Card {
    
    constructor(){
        //this.setCard()
    }

    setCard(){

        let flipCard = document.createElement('div')
        flipCard.className= 'flip-card'

        let flipCardInner = document.createElement('div')
        flipCardInner.className = 'flip-card-inner'


        // Front //

        let flipCardFront = document.createElement('div')
        flipCardFront.className= 'flip-card-front'

        let nameTitle = document.createElement('h1')
        nameTitle.innerHTML = "Henrik Kristiansen"
        let nameSubtitle = document.createElement('h2')
        nameSubtitle.innerHTML = "interface designer <br>osl,nor"

        /*setting front links*/

        let frontList = document.createElement('ul')
        
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

        let frontLinks = [emailLink, igLink, liLink, twLink]
        for(let i=0; i<frontLinks.length; i++){
            let liElement = document.createElement('li')
            liElement.appendChild(frontLinks[i])
            frontList.appendChild(liElement)
        }

        flipCardFront.appendChild(nameTitle)
        flipCardFront.appendChild(nameSubtitle)
        flipCardFront.appendChild(frontList)


        // Back // 

        let flipCardBack = document.createElement('div')
        flipCardBack.className= 'flip-card-back'

        let currentStat = document.createElement('h1')
        currentStat.innerHTML = "Co-founder of Squads.<br>Crafting future products at ITERATE."

        /*setting back links*/

        let backList = document.createElement('ul')

        let blogLink = document.createElement('a')
        blogLink.innerText = "Blog"
        blogLink.href = "*"
        blogLink.target = "_blank"
        
        let proLink = document.createElement('a')
        proLink.innerText = "Projects"
        proLink.href = "*"
        proLink.target = "_blank"

        let phoLink = document.createElement('a')
        phoLink.innerText = "Photos"
        phoLink.href = "*"
        phoLink.target = "_blank"

        let backLinks = [blogLink, proLink, phoLink]
        for(let i=0; i<backLinks.length; i++){
            let liElement  = document.createElement('li')
            liElement.appendChild(backLinks[i])
            backList.appendChild(liElement)
        }

        flipCardBack.appendChild(currentStat)
        flipCardBack.appendChild(backList)
        
        // Creating card

        flipCardInner.appendChild(flipCardFront)
        flipCardInner.appendChild(flipCardBack)
        flipCard.appendChild(flipCardInner)

        this.card = flipCard
    }

    getCard(){
        this.setCard()
        return this.card
    }
}

let card = new Card()
document.body.appendChild(card.getCard())


// spawn on scroll


function handleOnScroll() {

    // console.log("scroll");
    // let scrollCard = new Card(i)

    // scrollCard.getCard().style.top = "calc(" + "50vh" + "-" + getRandomInt(200) + "px" + ")"
    // scrollCard.getCard().style.left = getRandomInt(200) + "px"

    // document.body.appendChild(scrollCard.getCard())
    // i++

}



document.getElementsByTagName('body')[0].onscroll = () => {

    let scrollCard = new Card()
    document.body.appendChild(scrollCard.getCard())

};