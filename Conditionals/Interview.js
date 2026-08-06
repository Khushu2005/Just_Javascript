// Q141 ⭐⭐⭐ Predict the output.
// let x = 10;
// if (x > 5)
//     if (x > 20)
//         console.log("A");
//     else
//         console.log("B");
// Explain:
// else kis if ke saath attach hua?
// Why? 
// Ans : B  else second wale if k sath attaach hua bahar wala if independent and if hum keval if bhi use krskte h 

// Q142 ⭐⭐⭐ (Short Circuit)  Predict the output.
// console.log(0 || false || "" || null || "JavaScript" || 100);
// Reason bhi likhna.
// ANS: JavaScript => becoz || first truthy wale return krta h agr nhi mili to last value return krta h 

// Q143 ⭐⭐⭐ (Short Circuit)
// Predict the output.
// console.log(100 && true && "React" && [] && {});
// Why?
// Ans: {} => becoz && operator first falsy return krta hai agr nhi mili to last value return krta h 

// Q144 ⭐⭐⭐
// Predict the output.
// let user = "";
// let name = user || "Guest";
// console.log(name);
// Now predict if
// let user = "";
// let name = user ?? "Guest";
// console.log(name);
// Difference explain karo.

// ANS: 
// user || "Guest" => this will console "Guest" becoz || first truthy value return krta jh 
// user ?? "Guest" => "" becos ?? user sirf undefined or null ko check krta hai 


// Q145 ⭐⭐⭐
// Predict the output.
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function(){}));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// Explain every output.
// ANS:
// Boolean([]) => true [] is of truthy nature 
// Boolean({}) => true {} is of truthy nature 
// Boolean(function(){}) => true fnc is of truthy nature 
// Boolean("") => false "" empty string is of falsy nature 
// Boolean(" ") => true " " space in string considered as truthy in nature 


// Q146 ⭐⭐⭐ (Nested Ternary)
// Predict the output.
// let marks = 82;
// let result =
// marks >= 90
// ? "A"
// : marks >= 80
// ? "B"
// : marks >= 70
// ? "C"
// : "Fail";
// console.log(result);
// ANS: B


// Q147 ⭐⭐⭐⭐ (Comparison Trap)
// Predict the output.
// console.log(false == "");
// console.log(false == "0");
// console.log(false == []);
// console.log(false == null);
// Explain why each line gives that result.
// ANS:
// false == ""  true only compares the value "" is of falsy nature 
// false == "0" true "0" considered as number due to type corercion 
// false == [] true same []=>""=>0=>false = false (true answer)
// false == null false null keval undefined k ewqual hota h loose equality me  

// Q148 ⭐⭐⭐⭐ (Real Interview)
// Predict the output.
// let a = "5";
// let b = 5;
// if (a == b && a !== b)
//     console.log("A");
// else
//     console.log("B");
// Reason compulsory.

// ANS:  B (becoz  a == b && a !== b cant be true at same time first condition is true due to type coercion therefore second condition is false and && operator demands both conditions need to be true)


// Q149 ⭐⭐⭐⭐⭐ (Debug)
// Find all mistakes.
// let age = 18;
// if (age >= 18);
// {
//     console.log("Eligible");
// }
// else {
//     console.log("Not Eligible");
// }
// Questions:
// Kitni mistakes hain? // semicolon if(); , ab else ka koi if nhi h so error dega syntax error 
// Code compile hoga? //SyntaxError:Unexpected token else
// Output kya hoga? // koi output nhi kyunki syntax error ayega 
// Correct code likho. 

if (age >= 18) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}



// Q150 ⭐⭐⭐⭐⭐ FINAL BOSS Write a program.
// E-Commerce Checkout
// Variables :  isLoggedIn, isEmailVerified,  cartAmount, couponApplied, isPrimeMember
// Rules :
// User must be logged in.
// Email must be verified.
// Cart amount must be greater than ₹0.
// If coupon applied AND cart ≥ ₹5000
// → 20% Discount
// Else if Prime Member AND cart ≥ ₹3000
// → 15% Discount
// Else if cart ≥ ₹2000
// → 10% Discount
// Otherwise
// → No Discount
// Print only the first failure reason if any validation fails.
// Otherwise print:
// Original Amount
// Discount %
// Discount Amount
// Final Payable Amount

let isLoggedIn = true, isEmailVerified = true, cartAmount = 10000, couponApplied = true, isPrimeMember = true, dis = 0;

if (isLoggedIn === true) {
    if (isEmailVerified === true) {
        if (cartAmount > 0) {
            if (couponApplied === true && cartAmount >= 5000) dis = 20
            else if (isPrimeMember === true && cartAmount >= 3000) dis = 15
            else if (cartAmount >= 2000) dis = 10

            console.log(`Original Amount:${cartAmount}`)
            console.log(`Discount Percentage:${dis}%`)
            let Discount_Amount = cartAmount * dis / 100
            console.log(`Discount Amount:${Discount_Amount}`)
            console.log(`Payable Amount :${cartAmount - Discount_Amount}`)
        }
        else {
            console.log("CartAmount must be greater than 0")
        }
    }
    else {
        console.log("Email not verified")
    }
}
else {
    console.log("User not LoggedIN")
}


// 🏆 FINAL CHALLENGE (No Run)
// Predict the output.
// let username = "";
// let role = null;
// let result =  (username || "Guest") && (role ?? "User");
// console.log(result);
// Reason bhi likhna.

// ANS: (username || "Guest") && (role ?? "User");
// (username || "Guest") = Guest (becoz || return the first truthy value)
// (role ?? "User") = user  (becoz && returns the first falsy value)
// "Guest" && "User" = "User" i.e., becos  && opertaor 