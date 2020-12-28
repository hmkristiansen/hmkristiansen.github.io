var bodyElement = document.getElementById("body");
setStartStyle();

function setStartStyle(){
  bodyElement.classList.add("sans");
  document.getElementById("radioSans").checked = true;
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    bodyElement.classList.add("dark");
    document.getElementById("radioDark").checked = true;
  }else{
    bodyElement.classList.add("light");
    document.getElementById("radioLight").checked = true;
  }
}

function resetSettings(){
  setStartStyle();
  let radios = document.getElementsByName("font");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      bodyElement.classList.add(radios[i].value);
    }else{
      bodyElement.classList.remove(radios[i].value);
    }
  }
  let radios2 = document.getElementsByName("color");
  for (var i = 0, length = radios2.length; i < length; i++) {
    if (radios2[i].checked) {
      bodyElement.classList.add(radios2[i].value);
    }else{
      bodyElement.classList.remove(radios2[i].value);
    }
  }
}

//changing font based on radio press
document.getElementById('settings_font').onclick = function() {
  let radios = document.getElementsByName("font");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      bodyElement.classList.add(radios[i].value);
    }else{
      bodyElement.classList.remove(radios[i].value);
    }
  }
}

//changing style radio on 
document.getElementById('settings_style').onclick = function() {
  let radios = document.getElementsByName("color");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      bodyElement.classList.add(radios[i].value);
    }else{
      bodyElement.classList.remove(radios[i].value);
    }
  }
}

var settingsVisible = false;
function toggleSettings(){
  if(settingsVisible){
    document.getElementById("settings_container").classList.add('settingsCollapsed');
    document.getElementById("settings_toggle").classList.remove("openSettings");
    settingsVisible = false;
  }else{
    document.getElementById("settings_container").classList.remove('settingsCollapsed');
    document.getElementById("settings_toggle").classList.add("openSettings");
    settingsVisible = true;
  }
}
