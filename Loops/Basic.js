// Loops Practice Set 1 (Q1–Q20)

// Q1:  Write a for loop to print: Hello JavaScript  5 times.
for (let i = 1; i < 6; i++) {
    console.log("Hello JavaScript")
}

// Q2: Print numbers from 1 to 10 using a for loop.
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// Q3: Print numbers from 10 to 1.
for (let i = 10; i > 0; i--) {
    console.log(i);

}

// Q4: Print all even numbers from 1 to 20.
for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Q5: Print all odd numbers from 1 to 20.
for (let i = 1; i < 21; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// Q6 ⭐ Predict the output.
// for (let i = 1; i <= 3; i++) {
//     console.log(i);
// }
// ANS: 1,2,3

// Q7 ⭐ Predict the output.
// for (let i = 3; i >= 1; i--) {
//     console.log(i);
// }
// ANS:3,2,1

// Q8 ⭐ Predict the output.
// for (let i = 1; i < 5; i++) {
//     console.log(i);
// }
// ANS:1,2,3,4

// Q9 ⭐Predict the output.
// for (let i = 1; i <= 5; i += 2) {
//     console.log(i);
// }
// ANS:1,3,5

// Q10 ⭐Predict the output.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// ANS:0,1,2,3,4

// Q11: Print the multiplication table of 2.
// Example:
// 2 × 1 = 2
// 2 × 2 = 4
// ...
// 2 × 10 = 20
for (let i = 1; i < 11; i++) {
    console.log(`2 X ${i} = ${2 * i}`)
}

// Q12:Print the multiplication table of any number stored in a variable.let num = 7;
let num = 7;
for (let i = 1; i < 11; i++) {
    console.log(`${num} X ${i} = ${num * i}`)
}

// Q13: Find the sum of numbers from 1 to 10.
// Expected Output:55
let sum = 0;
for (let i = 1; i < 11; i++) {
    sum += i
}
console.log(sum)

// Q14: Find the sum of even numbers from 1 to 100.
let sum = 0;
for (let i = 2; i < 101; i += 2) {
    if (i % 2 === 0) {
        sum += i
    }
}
console.log(sum)

// Q15: Find the sum of odd numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);

// Q16 ⭐Predict the output.
// let sum = 0;
// for (let i = 1; i <= 3; i++) {
//     sum += i;
// }
// console.log(sum);
// ANS:6

// Q17 ⭐ Predict the output.
// let x = 1;
// for (let i = 1; i <= 3; i++) {
//     x *= 2;
// }
// console.log(x);
// ANS:8

// Q18 ⭐⭐ Predict the output.
// for (let i = 5; i > 0; i -= 2) {
//     console.log(i);
// }
// ANS:5,3,1

// Q19 ⭐⭐ Predict the output.
// for (let i = 1; i <= 5; i++) {
//     console.log(i * i);
// }
// ANS:1,4,9,16,25

// Q20 ⭐⭐⭐ (Interview Favourite)
// Without using any formula, write a program to find the factorial of a number.
// Example:  5  Output:  120
let number = 5;
let fact = 1;
for (let i = 1; i <= number; i++) {
    fact *= i
}
console.log(fact)

// 🎯 Bonus Theory
// T1
// What are the three parts of a for loop?
// Explain:
// Initialization :  let i = 1 , Here we declare a varibale and assign an initla value 
// Condition : i<11 , Here we use to write ki kaha tk for loop chlega 
// Update :  i++ , we update the value everytime so it can be same and reult in infinite loop

// T2
// When does a for loop stop executing?
// ANS: when the conditions is false

// T3
// Difference between:
// i++
// and
// ++i
// inside the update section of a for loop.
// Are they different there? Why?
// ANS:
// i++ = update the value of varibale after using it
// ++i = first update the value and then use it 
// Inside the update section of a for loop, i++ and ++i behave the same because the return value is ignored. Both simply increment the variable by 1. 


// T4 ⭐ Interview
// Can you omit (leave empty) any part of a for loop?
// Examples:
// for (;;)
// for (; i < 10;)
// Explain what happens.
// ANS: Yes, both are possible in a for loop as ; should not be missing but it may result in infinte loop;

// T5 ⭐⭐⭐ Which loop is better for these situations?
// Print numbers 1–100
// Read user input until they type "exit"
// Traverse an array
// Infinite game loop
// Explain why you chose each one.
// ANS:
// Print numbers 1–100 = for loop (iteration is done we know at point we have to stop )
// Read user input until they type "exit" = while loop (it gives conditon when to stop rather than tha point )
// Traverse an array =   for loop (again due to iteration)
// Infinite game loop = while(true)

// 🎖️ Mini Challenge
// Without using:
// if
// continue
// Print only the even numbers from 2 to 20 using one for loop.

for (let i = 2; i < 21; i += 2) {
    console.log(i)
}