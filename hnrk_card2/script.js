var elements = document.getElementsByClassName("flip-card");

var cardClick = function() {
    let innerCard = this.firstElementChild

    if(innerCard.classList.contains("flipCardEvent")){
        innerCard.classList.remove("flipCardEvent")
    }else{
        innerCard.classList.add("flipCardEvent")
    }
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', cardClick, false);
}