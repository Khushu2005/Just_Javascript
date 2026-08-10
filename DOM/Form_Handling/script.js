let form = document.querySelector('form')
let email = document.querySelector('#email')
let password = document.querySelector("#password")
let error = document.querySelector(".error")
form.addEventListener("submit", (dets) => {
    dets.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    document.querySelector("#emailerror").style.display = "none"
    document.querySelector("#passworderror").style.display = "none"

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true
    if (!emailans) {
        document.querySelector("#emailerror").style.display = "initial"
        isValid = false
    }
    if (!passwordans) {
        document.querySelector("#passworderror").style.display = "initial"
        isValid = false
    }

    if(isValid){
        document.querySelector(".message").style.display ="block"
    }

    form.reset()
})

