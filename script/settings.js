
let s = document.createElement("style");
document.head.appendChild(s);

itr.addEventListener("input", () => {
    let regInput = itr.value;
    let editInput = regInput - 10;
    s.textContent = "#work .column img {border-radius:" + regInput +"px !important;}" +
    "#overlay #content {border-radius:" + editInput +"px !important;}"+
    "#settings #settings_panel {border-radius:" + editInput +"px !important;}"+
    "#profile_img {border-radius:" + editInput +"px !important;}";
})

$( "#settings_btn" ).click(function() {
    $('#settings_panel').toggleClass('hideSettings');
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


/*
$(document).click(function () {
    console.log($(this).attr('id')); // or var clickedBtnID = this.id
});
*/

/*
$(document).ready(function() {
    $("body").click(function(event) {
        //console.log(event.target.id);

        if($('#settings_panel').hasClass("hideSettings")){
            return;
        }else{
            if (event.target.id == $('#settings_panel')){
                console.log("hello");
                return;
            }else{
                $('#settings_panel').addClass('hideSettings');
            }
        }

        //$('#settings_panel').removeClass('hideSettings');
    });
});
*/
/*
$("body").click(function() {
    if (this.target == $('#settings')){
		return;
	}
    $('#settings').removeClass('hideSettings');
    console.log("hello");
});*/
