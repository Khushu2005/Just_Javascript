let A = document.querySelector('.A');
let B = document.querySelector('.B')
let C = document.querySelector('.C')

// // EVENT_BUBBLING
// C.addEventListener("click",()=>{
//     console.log("C card")
// })
// B.addEventListener("click",()=>{
//     console.log("B card")
// })
// A.addEventListener("click",()=>{
//     console.log("A card")
// })

// EVENT_CAPTURING
C.addEventListener("click",()=>{
    console.log("C card")
})
B.addEventListener("click",()=>{
    console.log("B card")
})
A.addEventListener("click",()=>{
    console.log("A card")
},true)
