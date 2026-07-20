`# 🚀 JavaScript Practice Set #1
## 📚 Topic: Variables, Data Types, `typeof`, Console (Very Basic)

> **Difficulty:** 🟢 Beginner  
> **Questions:** 20  
> **Goal:** Build a strong foundation in JavaScript basics before moving to operators, type coercion, loops, and control flow.

---

## 📌 Instructions

- Solve every question by yourself.
- Do **not** use AI or Google while solving.
- First predict the output mentally, then run the code.
- If you're writing code, use meaningful variable names.
- Write explanations for every output after solving.
- Practice in VS Code or Browser Console.

---

# 📝 Questions

### Q1. Difference between `var`, `let`, and `const`.

---

### Q2. Predict the output.

```javascript
console.log("Hello JavaScript");
```

---

### Q3. Create a variable named `age` and store your age in it.

---

### Q4. Create two variables:

- `firstName`
- `lastName`

Print:

```text
Devansh Gupta
```

using variables.

---

### Q5. Predict the output.

```javascript
let a = 10;
console.log(a);
```

---

### Q6. Predict the output.

```javascript
let a = 10;
a = 20;
console.log(a);
```

---

### Q7. Predict the output.

```javascript
const pi = 3.14;
console.log(pi);
```

---

### Q8. Predict the output.

```javascript
const pi = 3.14;
pi = 22;
console.log(pi);
```

---

### Q9. Predict the output.

```javascript
var a = 5;
var a = 10;
console.log(a);
```

---

### Q10. Predict the output.

```javascript
let a = 5;
let a = 10;
console.log(a);
```

---

### Q11. Write code to print your:

- Name
- Age
- City

using `console.log()`.

---

### Q12. Predict the output.

```javascript
typeof "Hello"
```

---

### Q13. Predict the output.

```javascript
typeof 100
```

---

### Q14. Predict the output.

```javascript
typeof true
```

---

### Q15. Predict the output.

```javascript
typeof undefined
```

---

### Q16. Predict the output.

```javascript
typeof null
```

---

### Q17. Predict the output.

```javascript
let a;
console.log(a);
```

---

### Q18. Predict the output.

```javascript
let a = null;
console.log(a);
```

---

### Q19. Create variables of the following data types:

- String
- Number
- Boolean
- Undefined
- Null

Then print all of them using `console.log()`.

---

### Q20. ⭐ Mini Interview Question

Predict the output.

```javascript
let name = "Devansh";
let age = 21;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
```

---

## 🎯 Learning Objectives

After completing this practice set, you should be able to:

- ✅ Understand the difference between `var`, `let`, and `const`
- ✅ Declare and initialize variables
- ✅ Use `console.log()` effectively
- ✅ Identify JavaScript primitive data types
- ✅ Understand `undefined` and `null`
- ✅ Use the `typeof` operator
- ✅ Predict simple JavaScript outputs
- ✅ Explain why a particular output is produced


---

# 🚀 JavaScript Practice Set #2
## 📚 Topic: Type Conversion & Type Coercion (Interview Favourite)

> **Difficulty:** 🟢 Beginner → 🟡 Intermediate  
> **Questions:** 20 (Q21–Q40)  
> **Goal:** Master JavaScript's implicit and explicit type conversion, one of the most frequently asked interview topics.

---

## 📌 Instructions

- ⚠️ **Do not run the code immediately.**
- First **predict the output** on paper or mentally.
- Then execute the code and compare your prediction.
- If your prediction is wrong, explain **why** JavaScript behaves that way.
- Focus on understanding **type coercion** instead of memorizing outputs.

---

# 📝 Questions

### Q21. Predict the output.

```javascript
console.log("5" + 2);
```

---

### Q22. Predict the output.

```javascript
console.log("5" - 2);
```

---

### Q23. Predict the output.

```javascript
console.log("5" * 2);
```

---

### Q24. Predict the output.

```javascript
console.log("5" / 2);
```

---

### Q25. Predict the output.

```javascript
console.log("5" % 2);
```

---

### Q26. Predict the output.

```javascript
console.log(5 + true);
```

---

### Q27. Predict the output.

```javascript
console.log(5 + false);
```

---

### Q28. Predict the output.

```javascript
console.log(true + true);
```

---

### Q29. Predict the output.

```javascript
console.log(false + false);
```

---

### Q30. Predict the output.

```javascript
console.log("5" + true);
```

---

### Q31. Predict the output.

```javascript
console.log("5" - true);
```

---

### Q32. Predict the output.

```javascript
console.log("5" + null);
```

---

### Q33. Predict the output.

```javascript
console.log("5" + undefined);
```

---

### Q34. Predict the output.

```javascript
console.log(null + 1);
```

---

### Q35. Predict the output.

```javascript
console.log(undefined + 1);
```

---

### Q36. Predict the output.

```javascript
console.log(Number("123"));
```

---

### Q37. Predict the output.

```javascript
console.log(Number("123abc"));
```

---

### Q38. Predict the output.

```javascript
console.log(String(123));
```

---

### Q39. Predict the output.

```javascript
console.log(Boolean(""));
```

---

### Q40. ⭐ Mini Interview Question

Predict the output.

```javascript
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean([]));
console.log(Boolean({}));
```

---

## 💡 Rule

> **Think ➜ Predict ➜ Code ➜ Run ➜ Explain**

Never memorize JavaScript type coercion. Learn the rules so you can predict any output during interviews.

---
## Remember Table


| Value     | Number(value) |
| --------- | ------------- |
| null      | 0             |
| undefined | NaN           |
| true      | 1             |
| false     | 0             |
| ""        | 0             |
| "123"     | 123           |
| "abc"     | NaN           |

---
# 🚀 JavaScript Practice Set #3
## 📚 Topic: Operators (Arithmetic, Assignment, Comparison, Unary)

> **Difficulty:** 🟢 Beginner → 🟡 Intermediate  
> **Questions:** 20 (Q41–Q60)  
> **Goal:** Master JavaScript operators, operator precedence, comparison operators, increment/decrement operators, and interview-favourite concepts like `==`, `===`, `NaN`, and `Object.is()`.

---

## 📌 Instructions

- Predict every output before running the code.
- Dry run increment (`++`) and decrement (`--`) questions on paper.
- For comparison operators, identify whether JavaScript performs type coercion.
- Explain every output in your own words.
- Practice in VS Code or Browser Console.

---

# 📝 Questions

## Arithmetic Operators

### Q41. Predict the output.

```javascript
console.log(10 + 5 * 2);
```

---

### Q42. Predict the output.

```javascript
console.log((10 + 5) * 2);
```

---

### Q43. Predict the output.

```javascript
console.log(20 / 5 + 2);
```

---

### Q44. Predict the output.

```javascript
console.log(20 / (5 + 5));
```

---

### Q45. Predict the output.

```javascript
console.log(10 % 3);
```

---

## Unary Operators (`++` / `--`)

### Q46. Predict the output.

```javascript
let a = 5;

console.log(a++);
console.log(a);
```

---

### Q47. Predict the output.

```javascript
let a = 5;

console.log(++a);
console.log(a);
```

---

### Q48. Predict the output.

```javascript
let a = 5;

console.log(a--);
console.log(a);
```

---

### Q49. Predict the output.

```javascript
let a = 5;

console.log(--a);
console.log(a);
```

---

### Q50. ⭐ Interview Favourite

Predict the output.

```javascript
let a = 5;

console.log(a++ + ++a);
```

---

## Assignment Operators

### Q51. Predict the output.

```javascript
let a = 10;

a += 5;

console.log(a);
```

---

### Q52. Predict the output.

```javascript
let a = 10;

a -= 3;

console.log(a);
```

---

### Q53. Predict the output.

```javascript
let a = 10;

a *= 2;

console.log(a);
```

---

### Q54. Predict the output.

```javascript
let a = 20;

a /= 4;

console.log(a);
```

---

### Q55. Predict the output.

```javascript
let a = 20;

a %= 6;

console.log(a);
```

---

## Comparison Operators

### Q56. Predict the output.

```javascript
console.log(5 == "5");
```

---

### Q57. Predict the output.

```javascript
console.log(5 === "5");
```

---

### Q58. Predict the output.

```javascript
console.log(null == undefined);
```

---

### Q59. Predict the output.

```javascript
console.log(null === undefined);
```

---

### Q60. ⭐ Interview Favourite

Predict the output.

```javascript
console.log(NaN == NaN);

console.log(NaN === NaN);

console.log(Object.is(NaN, NaN));
```

---

# 📖 Bonus Theory

### T1. Difference between:

- `==`
- `===`

When should each one be used?

---

### T2. Difference between:

- Prefix Increment (`++a`)
- Postfix Increment (`a++`)

Explain with and without examples.

---

### T3. Why does this return `false`?

```javascript
NaN == NaN
```

Explain the reason.

---

### T4. What is Operator Precedence?

Explain with an example.

---

### T5. ⭐ Interview Question

Difference between:

```javascript
x = x + 1
```

and

```javascript
x += 1
```

Are they internally the same or different?

---

# 🔥 Challenge Question

Predict the output.

```javascript
let a = 2;

let b = a++ + ++a + a++ + --a;

console.log(a);
console.log(b);
```

---

## 💡 Rule

> **Think ➜ Predict ➜ Dry Run ➜ Code ➜ Run ➜ Explain**

Don't memorize JavaScript outputs. Learn how JavaScript evaluates expressions step by step.

---

## 🎯 Learning Objectives

After completing this practice set, you should be able to:

- ✅ Use Arithmetic, Assignment, and Comparison Operators
- ✅ Differentiate between `==` and `===`
- ✅ Understand Prefix and Postfix Operators
- ✅ Understand `NaN` and `Object.is()`
- ✅ Predict JavaScript operator outputs confidently

---

## ⭐ Quick Interview Facts

- `NaN` is never equal to itself.
- `Object.is(NaN, NaN)` returns `true`.
- `==` performs type coercion, `===` does not.
- `null == undefined` is `true`, but `null === undefined` is `false`.
- `x += 1` is shorthand for `x = x + 1`.


# 🚀 JavaScript Practice Set #4

## 📚 Topic: Control Flow (`if`, `else`, `else if`, `switch`, Ternary Operator)

> **Difficulty:** 🟡 Intermediate  
> **Questions:** 20 (Q61–Q80)  
> **Goal:** Learn how JavaScript makes decisions using conditional statements.

---

## 📌 Instructions

- Predict the output before running the code.
- Focus on understanding the flow of execution.
- Practice writing conditions on your own.
- Explain *why* a particular block executes.

---

# 📝 Questions

### Q61. Write a program to check if a number is positive.

---

### Q62. Write a program to check if a person is eligible to vote.

**Condition:** `age >= 18`

---

### Q63. Predict the output.

```javascript
let age = 17;

if (age >= 18) {
    console.log("Adult");
}

console.log("Done");
```

---

### Q64. Predict the output.

```javascript
if (true) {
    console.log("JavaScript");
}
```

---

### Q65. Predict the output.

```javascript
if (false) {
    console.log("Hello");
}

console.log("World");
```

---

### Q66. Write a program to check whether a number is Even or Odd.

---

### Q67. Write a program to find the greater number between two numbers.

---

### Q68. Predict the output.

```javascript
let marks = 80;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

---

### Q69. Predict the output.

```javascript
let num = -5;

if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}
```

---

### Q70. ⭐ Interview Favourite

Predict the output.

```javascript
if ("") {
    console.log("A");
} else {
    console.log("B");
}
```

---

### Q71. Write a program to print grades.

| Marks | Grade |
|-------:|:-----:|
| 90+ | A |
| 80+ | B |
| 70+ | C |
| 60+ | D |
| Below 60 | Fail |

---

### Q72. Predict the output.

```javascript
let marks = 91;

if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else {
    console.log("Fail");
}
```

---

### Q73. Predict the output.

```javascript
let marks = 75;

if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else if (marks >= 70) {
    console.log("C");
}
else {
    console.log("Fail");
}
```

---

### Q74. ⭐ Interview Question

Find the output.

```javascript
let age = 20;

if (age > 18) {
    console.log("Adult");
}
else if (age == 18) {
    console.log("Exactly 18");
}
```

---

### Q75. Write a program to find the largest among three numbers.

---

### Q76. Predict the output.

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}
```

---

### Q77. Predict the output.

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}
```

---

### Q78. ⭐ Fall Through

Predict the output.

```javascript
let x = 1;

switch (x) {
    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    default:
        console.log("Done");
}
```

---

### Q79. Write a `switch` program for:

- `1 → January`
- `2 → February`
- `3 → March`
- Default → `Invalid Month`

---

### Q80. ⭐ Interview Favourite

Convert this into a **Ternary Operator**.

```javascript
let age = 20;

if (age >= 18) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}
```

---

## 🎯 Learning Objectives

After completing this practice set, you should be able to:

- ✅ Use `if`, `else`, `else if`, and `switch`
- ✅ Write conditions using comparison operators
- ✅ Use the ternary operator
- ✅ Predict conditional outputs
- ✅ Understand JavaScript control flow

---

## ⭐ Quick Interview Facts

- `if` executes only when the condition is **truthy**.
- `switch` is best for multiple fixed values.
- Missing `break` causes **Fall Through**.
- Ternary operator is a shorthand for simple `if...else`.
- JavaScript automatically converts conditions to `true` or `false`.`