
// TEXT CHANGE
let h1 = document.querySelector("h1");
h1.innerHTML = "<i>Hello World  </i>"
console.dir(h1)

// ATTRIBUTE MANIPULATION
let a = document.querySelector("a")
console.log(`${a.getAttribute("href")}`)

a.setAttribute("href", "https://unsplash.com/")

a.removeAttribute("href")

console.dir(a)


// CREATING ELEMENT
let h2 = document.createElement("h2")
h2.innerText = "Hii, This is H2 from JS"
console.dir(h2)

// INSERTING ELEMENT
document.getElementById("root").appendChild(h2)
// document.getElementById("root").append(h2) // sbse neeche script kk baad 
// document.getElementById("root").prepend(h2) //Sbse top pr

//REMOVING ELEMENT
h2.remove()

// DIFFERENCE BETWEEN APPENDCHILD AND APPEND
1.

// document.getElementById("root").append("String") //accepts plain text strings and automatically turns them into text nodes.
// document.getElementById("root").appendChild("String") // only accepts Node objects; passing a string causes an error.

2.
// let p = document.createElement("p")
// p.innerText = "Hii, This is P from JS"
// document.getElementById("root").append("String",h2) // allows you to add multiple elements or strings at the same time
// document.getElementById("root").appendChild(h2,p) // Ignores the 'p' tag entirely

3.
// 3. Return values
// let newEl = root.appendChild(h2);     // newEl = h2 element
// let blank = root.append(h2);          // blank = undefined
// console.log(newEl,blank)