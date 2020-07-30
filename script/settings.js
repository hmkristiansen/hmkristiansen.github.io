
let s = document.createElement("style");
document.head.appendChild(s);


itr.addEventListener("input", () => {
    let regInput = itr.value;
    let editInput = regInput - 10;
    s.textContent = "#work .column img {border-radius:" + regInput +"px !important;}" +
    "#overlay #content {border-radius:" + editInput +"px !important;}"+
    "#settings #settings_panel {border-radius:" + editInput +"px !important;}";
})

$( "#settings_btn" ).click(function() {
    $('#settings').toggleClass('hideSettings');
    $('#settings_btn').toggleClass('activeSettingsIcon');
});

var radios = document.getElementsByName('themeList');

$( "#color_theme" ).click(function() {
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          changeTheme(i);
          break;
        }
      }
});
