// Conditionals - Advanced Level 
// 
//  Part 1 (Q121–Q140)

// Q121 ⭐ ATM (Advanced)
//  Write a program.
// Conditions:
// Card Inserted
// PIN Correct
// Balance ≥ Withdrawal
// Withdrawal > 0
// Withdrawal is multiple of 100
// Print the first valid failure reason, otherwise print:
// Transaction Successful
let Card = true, PIN = 2026, Balance = 100000, Withdrawal_amount = 250, Entered_Pin = 2026

if (Card === true) {
    if (Entered_Pin === PIN) {
        if (Balance >= Withdrawal_amount) {
            if (Withdrawal_amount <= 0) {
                console.log("Withdrawal amount must be greater than 0");
            }
            else if (Withdrawal_amount % 100 !== 0) {
                console.log("Withdrawal amount must be multiple of 100");
            }
            else {
                console.log("Transaction Successful");
            }
        }
        else {
            console.log("Insufficient Balance")
        }
    }
    else {
        console.log("Incorrect PIN")
    }

}
else {
    console.log("Enter your Card")
}

// Q122 ⭐ Online Shopping
// Rules  
// Purchase >= 5000 AND Prime Member ->  25% Discount
// Purchase >= 5000 ->  20%
// Purchase >= 2000 ->  10%
//  Otherwise ->  No Discount
// Print final payable amount.

let isPrimeMember = true;
let Purchase = 5000;
let dis = 0
if (Purchase >= 5000 && isPrimeMember === true) dis = 25
else if (Purchase >= 5000) dis = 20
else if (Purchase >= 2000) dis = 10
else dis = 0
dis = Purchase * dis / 100;
let AmountPayable = Purchase - dis
console.log(AmountPayable);


// Q123 ⭐ Login System (Advanced)
// Stored: Username : admin,Password : admin123, OTP : 123456
// Rules  Username,Password, OTP, Print the first invalid reason, otherwise
// Login Successful

let Username = "admin", Password = "admin123", OTP = 123456
let Entered_Username = "admin", Entered_Password = "admin123", Entered_OTP = 123456

if (Entered_Username !== Username) {
    console.log("Invalid Username");
}
else if (Entered_Password !== Password) {
    console.log("Invalid Password");
}
else if (Entered_OTP !== OTP) {
    console.log("Invalid OTP")
}
else {
    console.log("Login Successful");
}

// Q124 ⭐ Student Result
// Subjects:Math,Science, English
// Rules:
//  Any subject below 33 → Fail
// Otherwise calculate percentage
//  Print Distinction,First Division,Second Division,Third Division

let math = 99;
let science = 59;
let english = 99;

if (math < 33 || science < 33 || english < 33) {
    console.log("Fail");
} else {
    let percentage = (math + science + english) / 3;

    if (percentage >= 75)
        console.log("Distinction");
    else if (percentage >= 60)
        console.log("First Division");
    else if (percentage >= 45)
        console.log("Second Division");
    else
        console.log("Third Division");
}

// Q125 ⭐ Loan Eligibility
// Conditions
// Age between 21–60
// Salary ≥ 25000
// CIBIL ≥ 750
// Otherwise print exact rejection reason.
let Age = 15, Salary = 25000, CIBIL = 800
if (Age > 20 && Age <= 60) {
    if (Salary >= 25000) {
        if (CIBIL >= 750) {
            console.log("Loan Granted")
        }
        else {
            console.log("Bad CIBIL score")
        }
    }
    else {
        console.log("Salary must be atleat 25000")
    }
}
else {
    console.log("Age must be between 21-60");

}


// Q126 ⭐ Predict the output
// let a = 10;
// if (a > 5)
//     if (a < 20)
//         if (a == 10)
//             console.log("A");
//         else
//             console.log("B");
//     else
//         console.log("C");
// ANS: "A"

// Q127 ⭐ Predict the output.
// let a = "";
// if (a || 0 || null || undefined)
//     console.log("A");
// else
//     console.log("B");
// ANS: "B"

// Q128 ⭐Predict the output.
// let a = " ";
// if (a && true)
//     console.log("A");
// else
//     console.log("B");
// ANS:"A"

// Q129 ⭐ Predict the output.
// let a = false;
// console.log(a == 0);
// console.log(a === 0); // yaha number ki trh h 0 
// ANS: true , false

// Q130 ⭐Predict the output.
// console.log(Boolean("0"));
// console.log(Boolean(0));
// console.log(Boolean("false"));
// console.log(Boolean(false));
// ANS: true , false, true , false

// Q131 ⭐ Debug the Code
// Find the mistake.
// let age = 18;
// if(age = 18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
// }
// Explain why it happens.
// ANS:if(age = 18) here is the mistake = is used to assign  a value and not to check the condition  therefore if we change the value of age outside the if block tehn also everytime "eligible" will be printed 

// Q132 ⭐ Nested Ternary
// Convert this into a ternary operator.
// if(marks>=90){
//     console.log("A");
// }
// else if(marks>=80){
//     console.log("B");
// }
// else{
//     console.log("Fail");
// }
let marks = 78
marks >= 90 ? console.log("A") : marks >= 80 ? console.log("B") : console.log("Fail")

// Q133 ⭐ Predict the output.
// let x = 5;
// console.log(x > 2 ? x > 10 ? "A" : "B" : "C");
// ANS:"B"

// Q134 ⭐ Predict the output.
// let x = false;
// console.log(!x ? "A" : "B");
//ANS: "A"

// Q135 ⭐ Predict the output.
// || (Logical OR)
// Ye first truthy value return karta hai.
// Agar koi bhi truthy value nahi milti,
// to last operand return karta hai.

// let x = null;
// console.log(x || "JavaScript");
// ANS:"JavaScript"

// Q136 ⭐Predict the output.
// && (Logical AND)
// Ye first falsy value return karta hai.
// Agar koi bhi falsy value nahi milti,
// to last operand return karta hai.


// let x = "Hello";
// console.log(x && "World");  
// ANS: World

// Q137 ⭐Predict the output.
// let x = 0;
// console.log(x || 100);
// ANS: 100


// Q138 ⭐Predict the output.
// let x = 0;
// console.log(x && 100);
// ANS: 0

// Q139 ⭐ Interview
// Without using
// if
// switch
// ternary
// Print
// Adult
// only when
// age >=18
// Otherwise
// Minor
// (Hint: Think about logical operators.)
console.log((age >= 18 && "Adult") || "Minor");
// 
// if age 18 hui then , 
// case1: age >= 18 = true hojayegi and , true && "Adult" mese adult print hoga (default AND behaviour )
// case2 :"Adult"||"Minor" , then adult final answer (default OR behavoiur )


// Q140 ⭐ Mega Challenge
// Write a Bank Login + ATM System
// Requirements:
// Username check
// Password check
// PIN check
// Card inserted
// Balance check
// Withdrawal amount > 0
// Withdrawal multiple of 100
// Print only the first failure reason.
// If everything is valid
// Cash Withdrawn Successfully

let Username = "admin";
let Password = "admin123";
let OTP = 123456;
let PIN = 2026;

let Entered_Username = "admin";
let Entered_Password = "admin123";
let Entered_OTP = 123456;
let Entered_Pin = 2026;

let isCardInserted = true;
let Balance = 10000;
let Withdrawal_amount = 500;

if (Entered_Username !== Username) {
    console.log("Invalid Username");
}
else if (Entered_Password !== Password) {
    console.log("Invalid Password");
}
else if (Entered_OTP !== OTP) {
    console.log("Invalid OTP");
}
else if (Entered_Pin !== PIN) {
    console.log("Invalid PIN");
}
else if (!isCardInserted) {
    console.log("Insert your Card");
}
else if (Balance < Withdrawal_amount) {
    console.log("Insufficient Balance");
}
else if (Withdrawal_amount <= 0) {
    console.log("Withdrawal amount must be greater than 0");
}
else if (Withdrawal_amount % 100 !== 0) {
    console.log("Withdrawal amount must be multiple of 100");
}
else {
    console.log("Cash Withdrawn Successfully");
}


// 🎯 Bonus Theory
// T1 ⭐ Difference between
//  &&, ||, ??, Kab use karte hain?
// &&: jb left or right side dono conditions true hona compulsory ho
// ||: koi bhi ek condition true honi chahiye
// ?? (Nullish Coalescing):
// Jab value null ya undefined ho tab default value deta hai.
// Agar value 0, "", ya false ho to wahi value return karta hai.
// let name = null;
// console.log(name ?? "Guest"); // Guest

// let score = 0;
// console.log(score ?? 100); // 0



// T2 ⭐

// Difference between
//  ||, vs,??
// Example ke saath explain karo.
// ||: koi bhi ek condition true honi chahiye  example: true||0
// ?? (Nullish Coalescing Operator):
// Returns the right value only when the left value is
// null or undefined.
// console.log(0 ?? 100);         // 0
// console.log("" ?? "Hello");    // ""
// console.log(false ?? true);    // false
// console.log(null ?? "Guest");  // Guest
// console.log(undefined ?? "Guest"); // Guest


// T3 ⭐⭐⭐ (Most Important)
// Why does JavaScript return values instead of true/false for
// &&
// ||
// Example
// 5 && 10
// ↓
// 10
// Why?
// ANS:  JavaScript returns values instead of true/false because && and || use short-circuit {JavaScript jaise hi result decide kar leti hai, wo baaki expressions check nahi karti.}evaluation. They return the actual operand that determines the final result, making them useful for default values and conditional expressions.


// 🧠 Final Interview Challenge
// Predict the output without running:
//  let a = "";
// let b = a || "JS";
// let c = b && "React";
// console.log(c);
// ANS: React


