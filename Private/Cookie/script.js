checkUsername();
const buttonClickedValueText = document.getElementById("buttonClickedValueText")
const usernameText = document.getElementById("usernameText")
usernameText.innerHTML = `Welcome, ${getCookie("username")}!`

setInterval(loop, 50);

function buttonClicked() {
    let cookieButtonClickedValue = getCookie("buttonClickedValue")
    if (cookieButtonClickedValue != "") {
        cookieButtonClickedValue++
        setCookie("buttonClickedValue", cookieButtonClickedValue, 9999)
    } else {
        setCookie("buttonClickedValue", 1, 9999)
    }
    
    // console.log(cookieButtonClickedValue)
    // console.log(getCookie("buttonClickedValue"))
}

function loop() {
    buttonClickedValueText.innerHTML = `I have been clicked ${getCookie("buttonClickedValue")} times!`
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkUsername() {
    let username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }