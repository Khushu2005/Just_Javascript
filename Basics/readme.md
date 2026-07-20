# 🚀 JavaScript Practice Set #1
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
