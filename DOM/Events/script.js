// // EVENT = any action which is performed on browser or window
// // EVENT LISTENER =JS function that keep an eye on event and give reaction to the action


// // click-event
// let h1 = document.querySelector('h1');
// const GreenText = () => {
//     h1.style.color = "Green"
// }
// // Add Event
// h1.addEventListener("click", GreenText);
// // Remove Event
// // h1.removeEventListener("click", GreenText)

// // doubleclick-event
// h1.addEventListener("dblclick", function () {
//     h1.style.color = "blue"
// })

// // input-event
// let inp = document.querySelector("input");
// inp.addEventListener("input", function (dets) {
//     if (dets.data !== null && dets.data !== " ") {
//         console.log(dets.data)
//     }
// })

// // change-event
// let select = document.querySelector("select")
// let h2 = document.querySelector("h2")
// select.addEventListener("change", (dets) => {
//     h2.textContent = `${dets.target.value} Device Selected`

// })

// // Key-events
// let p = document.querySelector("#main")
// window.addEventListener("keydown", function (dets) {
//     if (dets.key === ' ') {
//         p.textContent = "SPC"
//     }
//     else {
//         p.textContent = dets.key
//         console.log(dets);
//     }
// })

// let key = document.querySelector(".Key");

// window.addEventListener("keydown", () => {
//     key.textContent = "KeyDown";
// });

// window.addEventListener("keyup", () => {
//     key.textContent = "KeyUp";
// });



// // upload-event
// let uploadbtn = document.querySelector("#uploadbtn");
// let fileupload = document.querySelector("#file")

// uploadbtn.addEventListener("click", () => {
//     fileupload.click()
// })

// fileupload.addEventListener("change", function (dets) {
//     uploadbtn.textContent = dets.target.files[0].name
//     console.log(dets.target.files[0].name);
// })

// // submit-event
// let form = document.querySelector("form")

// form.addEventListener("submit", (dets) => {
//     dets.preventDefault()
//     console.dir(dets.target.balue)

//     let card = document.createElement("div")
//     card.classList.add("card");

//     let profile = document.createElement("div")
//     profile.classList.add("profile")
//     let img = document.createElement("img")
//     img.setAttribute("src", dets.target.profile.value)


//     let name = document.createElement("h2")
//     name.textContent = dets.target.username.value

//     let prof = document.createElement("h4")
//     prof.textContent = dets.target.profession.value

//     let bio = document.createElement("p")
//     bio.textContent = dets.target.bio.value

//     profile.appendChild(img)
//     card.append(profile, name, prof, bio)

//     document.querySelector(".card-container").appendChild(card)
//  form.reset()
// })


// // Mouse-Event
// let box = document.querySelector(".box-cursor");
// box.addEventListener("mouseenter",(dets)=>{
//     box.style.backgroundColor="crimson";
// })
// box.addEventListener("mouseleave",(dets)=>{
//     box.style.backgroundColor="cadetBlue";
// })

// window.addEventListener("mousemove",(dets)=>{
//     box.style.left= dets.clientX + "px"
//     box.style.top= dets.clientY + "px"
// })


