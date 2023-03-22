!function(){
//! В HTML есть кнопки «Start» и «Stop».
var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.addEventListener("click",(function(a){r.removeAttribute("disabled"),e.setAttribute("disabled",!0),t.style.backgroundColor=o(),n=setInterval((function(){t.style.backgroundColor=o()}),1e3)})),r.addEventListener("click",(function(t){r.setAttribute("disabled",!0),e.removeAttribute("disabled"),clearInterval(n)})),r.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.9ac86a84.js.map
