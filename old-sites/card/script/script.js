
console.log("Home-made by Henrik 🥳   Source: https://github.com/hmkristiansen/hmkristiansen.github.io") 

if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
    alert("Firefox kinda melts my page. While I'm fixing it, please use Safari, (new) Edge or Chrome ☺️")
}

$("#help_btn").click(function(e){
    toggleHelp() 
}) 

$("#help_container").click(function(e){
    hideHelp() 
}) 

function toggleHelp(){
    $('#help_container').toggleClass('hideHelp') 
    $("#help_btn").toggleClass('activeHelpBtn') 
}

function hideHelp(){
    $('#help_container').addClass('hideHelp') 
    $("#help_btn").removeClass('activeHelpBtn') 
}

let isMobile = false 
let darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches 

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true 
}

//dynmaic shadow and card-parallax 
if(isMobile == false){
    (function() {
        // Init
        let container = document.getElementById("container"),
            inner = document.getElementById("inner") 
    
        // Mouse
        let mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function(event) {
                var e = event || window.event 
                this.x = e.clientX - this._x 
                this.y = (e.clientY - this._y) * -1 
            },
            setOrigin: function(e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2) 
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2) 
            },
            show: function() {
                return "(" + this.x + ", " + this.y + ")" 
            }
        } 
    
        mouse.setOrigin(container) 
    
        //----------------------------------------------------
    
        let counter = 0 
        let refreshRate = 1 
        var isTimeToUpdate = function() {
            return counter++ % refreshRate === 0 
        } 
    
        //----------------------------------------------------
    
        var onMouseEnterHandler = function(event) {
            update(event) 
        } 
    
        var onMouseLeaveHandler = function() {
            if(cardFlipping){
                updateTransformStyle(0,0) 
                return 
            }else{
                inner.style = "transform-style: preserve-3d " 
            }
        } 
    
        var onMouseMoveHandler = function(event) {
            if (isTimeToUpdate()) {
                update(event) 
            }
        } 

        var onWindowResize = function(event){
            mouse.updatePosition(event) 
            mouse.setOrigin(container) 
        }
    
        //----------------------------------------------------
    
        var update = function(event) {
            mouse.updatePosition(event) 
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 15).toFixed(15),
                (mouse.x / inner.offsetWidth / 15).toFixed(15)
            ) 
        } 
    
        var updateTransformStyle = function(x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)" 
            inner.style.transform = style 
            inner.style.webkitTransform = style 
            inner.style.mozTranform = style 
            inner.style.msTransform = style 
            inner.style.oTransform = style 
        } 

        window.addEventListener('resize', onWindowResize) 
        container.onmousemove = onMouseMoveHandler 
        container.onmouseleave = onMouseLeaveHandler 
        container.onmouseenter = onMouseEnterHandler 
    })() 

    $(document).ready(function () {
        let shadowBox = $('.card') 
        function changeShadow(e) {
            let mouseX = e.pageX 
            let mouseY = e.pageY 
            shadowBox.each(function () {
                let self = $(this) 
                let offset = self.offset() 
                let mouse = [mouseX, mouseY] 
                let box = [offset.left + self.width() / 2, offset.top + self.height() / 2] 
                let l = Math.sqrt(Math.pow((mouse[0] - box[0]), 2) + Math.pow((mouse[1] - box[1]), 2)) 
                let vf = [-(mouse[0] - box[0]) / l, -(mouse[1] - box[1]) / l] 
                let shadowLength = Math.min(l, 10) 
                let shadow 
                if(darkmode){
                    shadow = vf[0] * shadowLength + 'px ' + vf[1] * shadowLength + 'px 40px rgba(200,230,200,0.2)' 
                }else{
                    shadow = vf[0] * shadowLength + 'px ' + vf[1] * shadowLength + 'px 40px rgba(10,0,10,0.1)' 
                }
                self.css('box-shadow', shadow) 
            })
        }
        document.onmousemove = function (e) {
            changeShadow(e) 
            darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches 
        } 
    }) 
}

let cardFlipping = false 
let frontUp = true 

$("#container").click(function(e){
    if($(e.target).closest('a').length){
        return 
    }
    else if(!cardFlipping){
        flipCardFunc() 
    }else{
        return 
    }
}) 

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault() 
    }
}, false) 

document.body.onkeyup = function(e){
    if((e.keyCode == 32) && !cardFlipping){
        flipCardFunc() 
        hideHelp() 
    }else if((e.keyCode == 13) && !cardFlipping){
        flipCardFunc() 
        hideHelp() 
    }else if(((e.keyCode == 38)||(e.keyCode == 33)) && !cardFlipping && frontUp){
        flipCardFunc() 
        hideHelp() 
    }else if(((e.keyCode == 40)||(e.keyCode == 34)) && !cardFlipping && !frontUp){
        flipCardFunc() 
        hideHelp() 
    }
}  

let scrollPos = 0 
window.addEventListener('scroll', detectScroll)         
let scrollTimer = false 

function detectScroll(){
    if (((document.body.getBoundingClientRect()).top > scrollPos) && !frontUp){
        if(!scrollTimer){
            flipCardFunc() 
            scrollTimer = true 
            setTimeout(function() { 
                scrollTimer = false 
            }, 600) 
        }
    }else if(frontUp){
        if(!scrollTimer){
            flipCardFunc() 
            scrollTimer = true 
            setTimeout(function() { 
                scrollTimer = false 
            }, 600) 
        }
    }
    scrollPos = (document.body.getBoundingClientRect()).top  
}

function flipCardFunc(){
    $('.card').toggleClass("flipCard") 
    $('.inner').css('transform-style','unset') 
    $('.card').addClass("bezierFlip") 
    hideHelp() 
    cardFlipping = true 
    if($('.card').hasClass("flipCard")){
        frontUp = false 
    }else{
        frontUp = true 
    }
    setTimeout(function() { 
        $('.inner').css('transform-style','preserve-3d') 
        $('.card').removeClass("bezierFlip") 
        cardFlipping = false 
        scrollStop = false 
    }, 400) 
}

function copyMail() {
    let copyText = document.getElementById("holla_text") 
    copyToClipboard(copyText.innerText) 
    document.getElementById("tooltip").classList.add("toggleToolTip") 
    setTimeout(function() { 
        document.getElementById("tooltip").classList.remove("toggleToolTip") 
    }, 600) 
}

function copyToClipboard(textToCopy) {
    let textArea 
    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i) 
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea') 
        textArea.readOnly = true 
        textArea.contentEditable = true 
        textArea.value = text 
        document.body.appendChild(textArea) 
    }

    function selectText() {
        let range, selection 
        if (isOS()) {
            range = document.createRange() 
            range.selectNodeContents(textArea) 
            selection = window.getSelection() 
            selection.removeAllRanges() 
            selection.addRange(range) 
            textArea.setSelectionRange(0, 999999) 
        } else {
            textArea.select() 
        }
    }

    function copyTo() {
        document.execCommand('copy') 
        document.body.removeChild(textArea) 
    }
    createTextArea(textToCopy) 
    selectText() 
    copyTo() 
}