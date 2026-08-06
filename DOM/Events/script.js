// EVENT = any action which is performed on browser or window
// EVENT LISTENER =JS function that keep an eye on event and give reaction to the action 

// click-event
let h1 = document.querySelector('h1');
const GreenText = () => {
    h1.style.color = "Green"
}
// Add Event
h1.addEventListener("click", GreenText);
// Remove Event
// h1.removeEventListener("click", GreenText)

// doubleclick-event
h1.addEventListener("dblclick", function () {
    h1.style.color = "blue"
})

// input-event
let inp = document.querySelector("input");
inp.addEventListener("input", function (dets) {
    if (dets.data !== null && dets.data !== " ") {
        console.log(dets.data)
    }
})

// change-event
let select = document.querySelector("select")
let h2 = document.querySelector("h2")
select.addEventListener("change", (dets) => {
    h2.textContent = `${dets.target.value} Device Selected`

})

// Key-down
let p = document.querySelector("#main")
window.addEventListener("keydown", function (dets) {
    if (dets.key === ' ') {
        p.textContent = "SPC"
    }
    else {
        p.textContent = dets.key
        console.log(dets);
    }


})