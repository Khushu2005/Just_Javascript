//  Topic: Control Flow (if, else, else if, switch, Ternary Operator)
// Difficulty:  Intermediate

// Part A — if

// Q61. Write a program to check if a number is positive.
// ANS: 
// let num = -2;
// if(num>=0) console.log("Positive")
// if (num < 0) console.log("Negative");

 
// Q62. Write a program to check if a person is eligible to vote.
// Condition:age >= 18
// ANS: 
// function EligibleToVote(age){
//     if(age>=18) return "Eligible" 
//          return "Not Eligible"
// }
// EligibleToVote(18)


// Q63. Predict the output.
// let age = 17;
// if (age >= 18) {
//     console.log("Adult");
// }
// console.log("Done");
// ANS:Done

// Q64. Predict the output.
if (true) {
    console.log("JavaScript");
}
// ANS:"JavaScript"

// Q65. Predict the output.
if (false) {
    console.log("Hello");
}
console.log("World");
// ANS: "World"

// Part B — if...else

// Q66. Write a program to check whether a number is even or odd.
// ANS: 
// let num = 17;
// if(num%2===0) console.log("EVEN")
// else console.log("ODD")

// Q67. Write a program to find the greater number between two numbers.
// ANS:
// let num1=20 , num2=15
// if(num1 > num2 && num1!==num2){
//     console.log(`${num1} is greater`)
// }
// else console.log(`${num2} is greater`)

// Q68. Predict the output.
// let marks = 80;
// if (marks >= 40) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }
// ANS:PASS

// Q69. Predict the output.
// let num = -5;
// if (num > 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }
// ANS:Negative

// Q70. ⭐ Interview Favourite Predict the output.
if ("") {
    console.log("A");
} else {
    console.log("B");
}
// ANS:"B"

// Part C — else if

// Q71. Write a program to print grades.
// Marks	Grade
// 90+	A
// 80+	B
// 70+	C
// 60+	D
// Below 60	Fail
// ANS:
// let marks = 88;
// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 80) {
//     console.log("B");
// } else if (marks >= 70) {
//     console.log("C");
// } else if (marks >= 60) {
//     console.log("D");
// } else {
//     console.log("Fail");
// }


// Q72. Predict the output.
// let marks = 91;
// if (marks >= 90) {
//     console.log("A");
// }
// else if (marks >= 80) {
//     console.log("B");
// }
// else {
//     console.log("Fail");
// }
// ANS: A

// Q73. Predict the output.
// let marks = 75;
// if (marks >= 90) {
//     console.log("A");
// }
// else if (marks >= 80) {
//     console.log("B");
// }
// else if (marks >= 70) {
//     console.log("C");
// }
// else {
//     console.log("Fail");
// }
// ANS:C

// Q74. ⭐ Interview Question Find the mistake.
// let age = 20;
// if (age > 18) {
//     console.log("Adult");
// }
// else if (age == 18) {
//  console.log("Exactly 18");
// }
// ANS: ADULT


// Q75. Write a program to find the largest among three numbers.
// ANS:
// let num1 = 120, num2 = 53, num3 = 19

// if (num1 === num2 && num2 === num3){
//     console.log("All three numbers are same")
// }
// else if(num1>num2 && num1>num3){
//     console.log(`${num1} is greater`)
// }
// else if(num2>num1 && num2>num3){
//     console.log(`${num2} is greater`)
// }
// else{
//     console.log(`${num3} is greater`)
// }

// Part D — switch

// Q76. Predict the output.
// let day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     default:
//         console.log("Invalid");
// }
// ANS:Tuesday

// Q77. Predict the output.
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     default:
//         console.log("Invalid");
// }
// ANS:Invalid


// Q78. ⭐ Fall Through  Predict the output.
// let x = 1;
// switch (x) {
//     case 1:
//         console.log("One");

//     case 2:
//         console.log("Two");

//     default:
//         console.log("Done");
// }
// ANS:One,Two,Done (break missing h)

// Q79. Write a switch program for:
// 1 → January
// 2 → February
// 3 → March
// Default → Invalid Month

let month = 10;
switch(month){
    case 1:
        console.log("January");
        break;
     case 2:
        console.log("February");
        break;
     case 3:
        console.log("March");
        break;
    default:
        console.log("Invalid Month")
}

// Part E — Ternary Operator

// Q80. ⭐ Interview Favourite
// Convert this code into a ternary operator.
// let age = 20;
// if (age >= 18) {
//     console.log("Eligible");
// }
// else {
//     console.log("Not Eligible");
// }
// ANS:
let age = 90;
age >= 18
    ? console.log("Eligible")
    : console.log("Not Eligible");


// 📖 Bonus Theory
// T1. Difference between. When should each one be used?
// if = if used to check one conditon ,Used when conditions are based on ranges, comparisons, or complex logical expressions.
// switch = switch can be used when there are too many cases , Used when comparing a single expression against multiple fixed values (cases).

// T2. What is Fall Through in switch?
// ANS: Fall Through in switch ek k baad ek case continously chlna bina break k

// T3. Difference between:
// if (condition) 
// ANS:JavaScript automatically converts the condition into a boolean value.

// if (Boolean(condition)) 
// ANS: The conversion is done explicitly by the developer.
// Both behave the same; the difference is that one is implicit and the other is explicit.

// T4. ⭐ Interview Question
// Which values make an if condition execute? 
// ANS: An if condition executes whenever the condition evaluates to a truthy value.
// It does not execute for falsy values.
// Explain Truthy and Falsy values with examples.
// ANS:
// truthy values:  Any value that converts to true.
// falsy values are some like 0 false , "" etc which are empty or either zero 
// we can check the truthy and falsy nature with (!!)this mark for exmaple : !!0n


// 🔥 Challenge Question // Predict the output.
// let a = 5;
// if (a > 2)
//     if (a > 10)
//         console.log("A");
//     else
//         console.log("B");

// ANS:B