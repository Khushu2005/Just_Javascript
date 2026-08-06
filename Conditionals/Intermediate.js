// Conditionals - Intermediate Level 

//  Part 1 (Q101-Q120)

// Q101 ⭐ ATM Withdrawal
// Write a program to check whether a user can withdraw money.
// Conditions:
// Balance ≥ Withdrawal Amount
// Withdrawal Amount > 0
// Withdrawal Amount should be a multiple of 100
// Otherwise print the proper reason.
let Balance = 1000;
let Withdrawal_amount = 100;

if (Withdrawal_amount <= 0) {
    console.log("Withdrawal amount must be greater than 0");
}
else if (Withdrawal_amount > Balance) {
    console.log("Insufficient balance");
}
else if (Withdrawal_amount % 100 !== 0) {
    console.log("Withdrawal amount must be a multiple of 100");
}
else {
    console.log(`Withdrawal Amount = ${Withdrawal_amount}`);
}

// Q102 ⭐ Login System
// Write a program.
// Stored Username : admin
// Stored Password : admin123
// Print:
// Login Successful
// Invalid Username
// Invalid Password
// let StoredUsername = "admin", StoredPassword = "admin123"
// let Username = prompt("Enter username");
// let Password = prompt("Enter Password");
// if(Username!==StoredUsername){
//     console.log("Invalid Username")
// }
// else if(Password!==StoredPassword){
//     console.log("nvalid Password")
// }
// else{
//     console.log("Login Successful")
// }

// Q103 ⭐ Strong Password Checker
// Password rules:
// Minimum 8 characters
// At least one uppercase
// At least one lowercase
// At least one digit
// Print
// Strong Password
// or
// Weak Password
// Hint: For now you may use methods like .length, comparisons, and regex if you already know them. If not, mention your assumption.
// let password = prompt("Enter your password:");
// if (
//     password.length >= 8 &&  
//     /[A-Z]/.test(password) &&  /* // k andr jo likhte hai use Regular Expression (Regex) kehte h */ 
//     /[a-z]/.test(password) &&  /* test ek method hai jo ki regex me hi use hota hai True,False return krta h  */ 
//     /[0-9]/.test(password)
// ) {
//     console.log("Strong Password");
// } else {
//     console.log("Weak Password");
// }

// Q104 ⭐ Movie Ticket
// Age based ticket price.
// Below 5     → Free
// 5-17        → ₹100
// 18-59       → ₹250
// 60+         → ₹150
// let age = prompt("Enter Your age:")
// let price = 0;
// if(age<5) console.log(price);
// if(age>=5 && age<=17) console.log(`${price=100}`);
// if(age>=18 && age<=59) console.log(`${price=250}`);
// if(age>=60) console.log(`${price=150}`);

// Q105 ⭐ BMI Checker
// Given  weight, height , Formula  BMI = weight / (height * height)
// Print Underweight, Normal,Overweight, Obese, (Use standard BMI ranges.)
// let weight = prompt("Enter your weight(kg)");
// let height = prompt("Enter your height(m)")
// let BMI = (weight/(height*height)).toFixed(2)
// if(BMI<18.5) console.log("Underweight");
// if(BMI>=18.5 && BMI <=24.9) console.log("Normal weight");
// if(BMI>25 && BMI<= 29.9) console.log("Overweight");
// if(BMI>30) console.log("Obese");

// Q106
// Write a calculator using if...else if.
// Support:+,-,*,,/, %

let operator = "+"
let operand1 = 8, operand2 = 1;
let result = null

if (operator == "+") {
    result = operand1 + operand2
    console.log(result)
}
else if (operator == "-") {
    result = operand1 - operand2
    console.log(result)
}
else if (operator == "*") {
    result = operand1 * operand2
    console.log(result)
}
else if (operator == "/") {
    result = operand1 / operand2
    console.log(result)
}
else if (operator == "%") {
    result = operand1 % operand2
    console.log(result)
}
else {
    console.log("Invalid Operator")
}

// Q107 ⭐ Leap Year (Trap) Predict the output.
// let year = 1900;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
//     console.log("Leap");
// else
//     console.log("Not Leap");
// ANS: Not Leap

// Q108 ⭐ Predict the output.
// let x = 15;
// if (x > 10)
//     if (x > 20)
//         console.log("A");
//     else
//         console.log("B");
// ANS:"B"

// Q109 ⭐Predict the output.
// let x = 5;
// if (x > 10)
//     console.log("A");
// else if (x > 4)
//     console.log("B");
// else
//     console.log("C");
// ANS:"B"

// Q110 ⭐ Predict the output.
// let x = "";
// if (!x)
//     console.log("A");
// else
//     console.log("B");
// ANS: "A"

// Q111 ⭐ Scholarship
// Rules:
// Marks >=90 AND  Attendance >=75 ->Eligible Else Not Eligible
let Marks = 10, Attendance = 75
if (Marks >= 90 && Attendance >= 75) console.log("Eligible")
else console.log("Not Eligible")

// Q112 ⭐ Cab Fare
// Distance  0-5 km → ₹100 , 6-15 km → ₹200 ,Above 15 → ₹350
let distance = 16;
let price = 0;

if (distance > 0) {
    price += 100;
}

if (distance > 5) {
    price += 200;
}

if (distance > 15) {
    price += 350;
}

console.log(price);


// Q113 ⭐ Electricity Bill (Slab) Now use actual slab calculation.

// Example
// 250 Units
// 100 × 5
// 100 × 7
// 50 × 10
// Calculate final bill.
let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
}
else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Bill =", bill);

// Q114 ⭐ Income Tax
//  Income  Below 5L-> No Tax , 5L-10L -> 10% , Above 10L -> 20%,Print tax amount.

let Income=1000000;
let tax=0;
if(Income<500000) tax = 0
if(Income >=500000 && Income<=1000000) tax = 10
if(Income >1000000) tax = 20;
tax = Income*(tax/100)
console.log(tax)

// Q115 ⭐ Triangle Type
// Given  a b c  Print  Equilateral,Isosceles,Scalene,Invalid
let a = 10,b = 8,c = 20
if(a + b <= c || a + c <= b || b + c <= a) console.log("Invalid")
else if(a==b && b==c) console.log("Equilateral Traingle");
else if(a == b || b == c || a == c) console.log("Isosceles Traingle");
else if(a != b && b != c && a != c) console.log("Scalene Traingle");
else console.log("Invalid")

// Q116 ⭐ Character CheckerGiven one character.
// Print Uppercase Alphabet,Lowercase Alphabet,Digit, Special Character
const specialchars = ["!", "@", "#", "$", "%", "^", "&", "*"]
let char = "a";
if(char>="A" && char<="Z") console.log("UpperCase")
if(char>="a" && char<="z") console.log("Lowercase")
if(char>=0 && char<=9) console.log("Digit")
if(specialchars.includes(char)) console.log("Special Character")


// Q117 ⭐ Predict the output.
// console.log(Boolean("false"));
// ANS:true

// Q118 ⭐ Predict the output.
// console.log(Boolean(" "));
// True

// Q119 ⭐Predict the output.
// let x = null;
//  if (x == undefined)
//     console.log("A");
// else
//     console.log("B");
// ANS:"A"

// Q120 ⭐ Mini Challengeredict the output.
// let age = 17;
// let result =
//     age >= 18
//         ? "Adult"
//         : age >= 13
//         ? "Teen"
//         : "Child";
// console.log(result);
// ANS:"Teen"

// 🎯 Theory
// T1 Difference between
// if
// nested if
// else if
// When should each be used?

// ANS: 
// if = used when there is only one condition to check
// nested if = used when we have to check all the following conditions 
// else if = used when we have to check one condition over multiples 

// T2
// Can every switch be converted into if...else?
// Can every if...else be converted into switch?
// Explain why.
// ANS:Yes,every switch elemnt can be converted in a if else  case because if else is a vast condtional statemnst and can handle multiple complex cases and easire one but every if else cannot be converted in switch because the switch accepts only one variable in a case and it is inefficient to use switch 

// T3 ⭐ Interview
// What is the difference between
// if(a)
// if(a == true)
// if(a === true)
// ANS:
// if(a) the if statment is based on the nature of a variable 
// if(a == true) checking the  a is equal to true or not or the value can be converted in the truthy value
// if(a === true) it strictly checking that the true must be boolean

// 🎯 Challenge (No Run)Predict:
// let x = 0;
// if (x || "Hello")
//     console.log("A");
// else
//     console.log("B");
// ANS:"A"

// let x = "";
// if (x && 10)
//     console.log("A");
// else
//     console.log("B");
// ANS:"B"