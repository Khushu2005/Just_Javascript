// Topic: Operators (Arithmetic, Assignment, Comparison, Logical, Unary)

// Arithmetic Operators

// Q41 Predict the output.
console.log(10 + 5 * 2);
// ANS :20

// Q42
console.log((10 + 5) * 2);
// ANS: 30

// Q43
console.log(20 / 5 + 2);
// ANS: 6

// Q44
console.log(20 / (5 + 5));
// ANS: 2

// Q45
console.log(10 % 3);
// ANS: 1

// Unary Operators (++ / --)

// Q46 Predict the output.
let a = 5;
console.log(a++);
console.log(a);
// ANS: 5,6

// Q47
let a = 5;
console.log(++a);
console.log(a);
// ANS: 6,6

// Q48
let a = 5;
console.log(a--);
console.log(a);
// ANS: 5,4

// Q49
let a = 5;
console.log(--a);
console.log(a);
// ANS: 4,4

// Q50 ⭐ Interview Favourite Predict the output.
let a = 5;
console.log(a++ + ++a);
// ANS: 5 + 7 = 12

// Assignment Operators
// Q51
let a = 10;
a += 5;
console.log(a);
// ANS:15

// Q52
let a = 10;
a -= 3;
console.log(a);
// ANS:7

// Q53
let a = 10;
a *= 2;
console.log(a);
// ANS:20

// Q54
let a = 20;
a /= 4;
console.log(a);
// ANS:5

// Q55
let a = 20;
a %= 6;
console.log(a);
// ANS:2

// Comparison Operators

// Q56 Predict the output.
console.log(5 == "5");
// ANS: True (Only checks the value)

// Q57
console.log(5 === "5");
// ANS:False(checks value as well as data type)

// Q58
console.log(null == undefined);
// ANS: True

// Q59
console.log(null === undefined);
// False

// Q60 ⭐ Interview Favourite Predict the output.
console.log(NaN == NaN);
// ANS: False
console.log(NaN === NaN);
// ANS:False
console.log(Object.is(NaN, NaN));
// ANS: True (Object.is() treats NaN and NaN as the same value, therefore it returns true.)

// 🔥 Bonus Theory (Important)
// T1 Difference between: == ,=== , When to use?
// ANS: 
// == compares values after performing type coercion if required.
// === compares both value and data type without performing type coercion.
// When to use?
// Always prefer === because it gives more predictable and accurate results.
// Use == only when you intentionally want type coercion.


// T2 Difference between:Prefix Increment (++a),Postfix Increment (a++),Without examples aur with examples.
// ANS: 
// Prefix Increment (++a) is an unary operator which is used to first increase the value of the  varibale and then use it 
// Postfix Increment (a++) is an unary operator which is used to first use  the value of the  varibale and increse it 


// T3 Why does this return false? NaN == NaN
// ANS:
// NaN stands for "Not a Number".
// In JavaScript, NaN is a special numeric value.
// According to JavaScript rules, NaN is never equal to any value, including itself.


// T4 What is Operator Precedence? Example ke saath explain karo.
// perator Precedence ek series hai jis series me hum operator ko prioritize krte hai taki hr baaar unique answer na nikla as in airthmetic operator me bodmas use hota hai 
// English : Operator Precedence is the priority assigned to operators that determines the order in which an expression is evaluated. Operators with higher precedence are evaluated before operators with lower precedence.

// T5 ⭐ InterviewDifference between
// x = x + 1 and x += 1 ,Kya internally same hain ya different?
// ANS: 
// x = x + 1 it is an expression where (+)airthemtic  operator and (=)assignmnet operator both are used.
//whereas x += 1 is a compound assignment operator (shorthand form).
// Both perform the same operation and produce the same output.
// Internally, x += 1 is equivalent to x = x + 1.


// 🎯 Challenge Question
let a = 2;
let b = a++ + ++a + a++ + --a;
// b=2+4+4+4
console.log(a);
console.log(b);

// ANS: a = 4 , b = 14
