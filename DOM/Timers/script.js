function timer() {
    let timer = document.querySelector("#timer");
    timer.textContent = 30;
    let timerinterval = setInterval(() => {


        timer.textContent -= 1;

        if (timer.textContent <= 0) {
            clearInterval(timerinterval)
            resendBtn.disabled = false;
        }

    }, 1000);
}
timer()

function generateOTP() {
    let OTP = Math.floor(Math.random() * 900000) + 100000;
    return OTP;
}

let OTP = generateOTP();

document.querySelector("#resendBtn").addEventListener("click", () => {
    OTP = generateOTP();
    alert(OTP);
    timer()
    resendBtn.disabled = true;
})


let otpinput = document.querySelectorAll(".otpinput");
otpinput.forEach((input, index) => {

    input.addEventListener("input", () => {

        if (input.value.length === 1 && index < otpinput.length - 1) {
            otpinput[index + 1].focus();
        }

    });

});


document.querySelector("#verifyBtn").addEventListener("click", () => {

    let otpinput = document.querySelectorAll(".otpinput")
    let enteredotp = ""

    otpinput.forEach((dets) => {
        enteredotp += dets.value
    })

    if (OTP === Number(enteredotp)) {

        document.querySelector("#message").textContent = "OTP Verified"
        document.querySelector("#message").style.color = "Green"
        setTimeout(() => {
            document.querySelector("#message").textContent = ""
        }, 2000);

        otpinput.forEach((dets) => {
            dets.value = ""
        })
    }
    else {
        document.querySelector("#message").textContent = "Incorrect OTP"
        document.querySelector("#message").style.color = "red"
        setTimeout(() => {
            document.querySelector("#message").textContent = ""
        }, 3000);

        otpinput.forEach((dets) => {
            dets.value = ""
        })
    }

})