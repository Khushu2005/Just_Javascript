function Sum(num1, num2, cb) {
    let result = num1 + num2
    cb(result);
}
Sum(10, 2, () => {

    console.log(`10 * 2 is ${10 * 2}`);

})



