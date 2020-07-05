
let s = document.createElement("style");
document.head.appendChild(s);

itr.addEventListener("input", () => {
    let regInput = itr.value;
    let editInput = regInput - 10;
    s.textContent = "#work .column img {border-radius:" + regInput +"px !important;}" +
    "#overlay #content {border-radius:" + editInput +"px !important;}";
})

$( "#settings_btn" ).click(function() {
    $('#settings_panel').toggleClass('hideSettings');
});