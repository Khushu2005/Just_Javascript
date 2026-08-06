
// Conditionals - Basic Level => Part2 (Q81-Q100)

// Q81
// Write a program to check whether a number is divisible by 5.
let num = 11;
if (num % 5 == 0) {
    console.log(`${num} is divisible by 5`)
}
else {
    console.log(`${num} is not  divisible by 5`)
}

// Q82
// Write a program to check whether a number is divisible by 5 and 11.
let number = 110;
if (number % 5 == 0 && number % 11 == 0) {
    console.log(`${number} is divisible by 5 and 11`)
}
else {
    console.log(`${number} is not  divisible by 5 and 11`)
}

// Q83
// Write a program to check whether a character is a vowel or a consonant.
let char = 'e';
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(`${char} is a vowel`)
}
else {
    console.log(`${char} is a consonant`)
}

// Q84
// Write a program to check whether a character is uppercase or lowercase.
let character = 'K';

if (character >= 'A' && character <= 'Z') {
    console.log("Uppercase");
} else if (character >= 'a' && character <= 'z') {
    console.log("Lowercase");
} else {
    console.log("Not an alphabet");
}

// Q85
// Write a program to check whether a number is a 3-digit number.
let numbers = -121;

if (Math.abs(numbers) >= 100 && Math.abs(numbers) <= 999) {
    console.log("3-digit number");
} else {
    console.log("Not a 3-digit number");
}

// Q86
// Write a program to check whether a year is a leap year.
let leap_year = 2100;

if ((leap_year % 100 === 0 && leap_year % 400 === 0) || (leap_year % 4 === 0 && leap_year % 100 !== 0)) {
    console.log(`${leap_year} is a Leap year.`)
}
else {
    console.log(`${leap_year} is not a Leap year.`)
}

// Q87
// Write a program to check whether a character is an alphabet, a digit, or a special character.
let input = '7';
const specialchars = ["!", "@", "#", "$", "%", "^", "&", "*"]
if ((input >= 'A' && input <= 'Z') || (input >= 'a' && input <= 'z')) {
    console.log(`${input} is an Alphabet`)
}
else if (input >= '0' && input <= '9') {
    console.log(`${input} is an Digit`)
}
else if (specialchars.includes(input)) {
    console.log(`${input} is an Special Character `)
}
else {
    console.log("Invalid Input")
}

// Q88
// Write a program to find the smallest among three numbers.
let number1 = 10, number2 = 5, number3 = 19;
if (number1 === number2 && number2 === number3) {
    console.log(`${number1},${number2},${number3} are equal`)
}
else if (number1 < number2 && number1 < number3) {
    console.log(`${number1} is smallest`)
}
else if (number2 < number1 && number2 < number3) {
    console.log(`${number2} is smallest`)
}
else {
    console.log(`${number3} is smallest`)
}

// Q89
// Write a program to check whether a number lies between 10 and 50 (inclusive).
let nums = 10;
if (nums >= 10 && nums <= 50) {
    console.log(`${nums} lies between 10 and 50`)
}
else {
    console.log(`${nums} does not lies between 10 and 50`)
}

// Q90 ⭐ Predict the output.
// let x = 0;
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// ANS: "B"

// Q91 ⭐ Predict the output.
// let x = "0";
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// ANS: "A"

// Q92 ⭐ Predict the output.
// let x = [];
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// ANS: "A"

// Q93 ⭐ Predict the output.
// let x = {};
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// ANS: "A"

// Q94 ⭐Predict the output.
// let x = NaN;
// if (x) {
//     console.log("A");
// } else {
//     console.log("B");
// }
// ANS:"B"

// Q95
// Write a program to check whether a person can donate blood.
// Conditions:
// Age ≥ 18
// Weight ≥ 50
// Otherwise print Not Eligible.
let Age = 50, Weight = 88;
if (Age >= 18 && Weight >= 50) console.log("Eligible");
else console.log(" Not Eligible");

// Q96
// Write a program to calculate electricity bill.
// Conditions:
// 0-100 units     → ₹5/unit
// 101-200 units   → ₹7/unit
// Above 200       → ₹10/unit
// (No slab calculation yet—sirf ek rate apply karo based on the range.)
let units = 200;
if (units >= 0 && units <= 100) console.log(`${units * 5}rs`)
if (units >= 101 && units <= 200) console.log(`${units * 7}rs`)
if (units > 200) console.log(`${units * 10}rs`)

// Q97
// Write a program to calculate discount.
// Purchase >= 5000 → 20%
// Purchase >= 2000 → 10%
// Otherwise → No Discount
let dis = 0
let purchase = 5000;
if (purchase < 2000) dis = 0;
if (purchase >= 2000 && purchase < 5000) dis = 10;
if (purchase >= 5000) dis = 20;

console.log(`Discount given = ${purchase * (dis / 100)}`)

// Q98
// Write a program to classify age.
// 0-12   → Child
// 13-19  → Teenager
// 20-59  → Adult
// 60+    → Senior Citizen
let GivenAge = 17;
if (GivenAge >= 0 && GivenAge <= 12) console.log('Child')
if (GivenAge >= 13 && GivenAge <= 19) console.log('Teenager')
if (GivenAge >= 20 && GivenAge <= 59) console.log('Adult')
if (GivenAge >= 60) console.log('Senior Citizen')

// Q99
// Write a program to check whether three sides can form a valid triangle.
// Condition:
// a + b > c
// a + c > b
// b + c > a
let a = 2, b = 2, c = 2;
if (
    a > 0 &&
    b > 0 &&
    c > 0 &&
    a + b > c &&
    a + c > b &&
    b + c > a
) {
    console.log("Can form a valid triangle.");
} else {
    console.log("Can't form a triangle.");
}

// Q100 ⭐ Mini Challenge
// Without using switch, write a program that prints:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Otherwise → Invalid Day
// Condition: Use only if...else if.
let day = 2
if (day === 1) console.log("Monday");
else if (day === 2) console.log("Tuesday");
else if (day === 3) console.log("Wednesday");
else if (day === 4) console.log("Thursday");
else if (day === 5) console.log("Friday");
else if (day === 6) console.log("Saturday");
else if (day === 7) console.log("Sunday");
else console.log("Invalid Day");

// 🎯 Bonus Theory
// T1  Difference between: // if (a > 10 && a < 20) and if (a > 10 || a < 20).Explain with examples.
// ANS:
//  if (a > 10 && a < 20  both left hand side and right hand side condition should be true.
// if (a > 10 || a < 20 either condition should be true

// T2  Why is this condition always true?
// if ("false") {
//     console.log("Hello");
// }
// ANS: because "False" is a string and its truthy nature makes the if block runs

// T3
// When should you prefer else if over multiple separate if statements?
// ANS:if there are complex condtions and  and Use else if when only one block should execute. It avoids checking unnecessary conditions after one condition is already true.