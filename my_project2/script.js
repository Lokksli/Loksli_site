let el = document.getElementById("leg");
let highlighEl = document.getElementById("high-el");
let size = window.innerWidth;

if (size < 1220) {
    el.style.backgroundImage = "none";
    highlighEl.style.color = "black";
    console.log("sad");
}