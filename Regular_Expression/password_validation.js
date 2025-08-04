const passwords = [
    "A1b@cD3e",
    "Zx9#Lm7q",
    "pQ3$tr8H",
    "mN@2Lk9v",
    "Xy!8Rb6t",
    "T4&yUv3P",
    "gH%9Lp7a",
    "dE@5xZ1K",
    "wB2#nMv8",
    "Qq7$Jk0r",
    "ewd1"
];


let random = Math.floor(Math.random() * passwords.length)
let pass = passwords[random]
if (pass.length >= 8) {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/
) {
        console.log(pass);

    }

}


else {
    console.error("Password must be minimun of 8 length ");

};