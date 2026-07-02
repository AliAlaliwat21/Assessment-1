const buttonpressL = document.querySelector("#cookieButton");
const cookietext = document.querySelector("#cookie");
buttonpressL.addEventListener("click", increaseCookie)
let i = 0
function increaseCookie() {
i++;
cookietext.textContent = `You won ${i} cookie(s)!`
}
    
