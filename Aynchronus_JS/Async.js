// SettimeOut
function Intro2(username, callback) {
    setTimeout(() => {
        callback(username)
    }, 5000)
}
Intro2("hema", function greet2(username) {
    console.log(`Good Morning ${username}`)
})

// SetTimeInterval
function Intro(username, callback) {
    setInterval(() => {
        callback(username)
    }, 2000)
}
Intro("Khushi", function greet(username) {
    console.log(`Good Morning ${username}`)
})

// Table of 2

function table(Num) {
    let i = 1;
    let interval = setInterval(() => {
        console.log(`Table of ${Num} : ${Num * i}`);
        i++;
        if (interval > 10) clearInterval(interval)
    }, 2000)
}
table(2);