//  Basic while

// Q21:Print numbers from 1 to 10 using a while loop.
// let i = 1;
// while(i<11){
//     console.log(i);
//     i++;
// }

// Q22: Print numbers from 10 to 1 using while.
// let i = 10
// while(i>0){
//     console.log(i)
//     i--
// }

// Q23:Print all even numbers from 1 to 20 using while.
// let i = 2;
// while(i<=20){
//     console.log(i);
//     i += 2;

// }

// Q24:Find the sum of numbers from 1 to 10 using while.,Expected output: 55

// let sum = 0
// let i = 1;
// while(i<11){
//     sum += i
//     i++;
// }
// console.log(sum);

// Q25: Print the multiplication table of a number using while.
// Example: let num = 7; Expected:  7 x 1 = 7,..., 7 x 10 = 70

// let num = 7 , i= 1
// while(i<11){
//     console.log(`${num} X ${i} = ${num*i}`)
//     i++;
// }

// Q26 ⭐Predict the output.
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// ANS:1,2,3,4,5


// Q27 ⭐ Predict the output.
// let i = 5;
// while (i > 0) {
//     console.log(i);
//     i -= 2;
// }
// ANS: 5,3,1

// Q28 ⭐ Predict the output.
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i += 1;
// }
// ANS: 0,1,2,3,4,

// Q29 ⭐Predict the output.
// let i = 1;
// while (i <= 5) {
//     console.log(i * 2);
//     i++;
// }
// ANS: 2,4,6,8,10

// Q30 ⭐⭐Predict the output.
// let i = 1;
// while (i <= 5) {
//     console.log(i);
// }
// ANS: INFINITE LOOP 
// Also answer:
// What is wrong with this code?
// ANS: i update nhi horhe jiske wjh se i = 1 hmesha contition true hogi results in infinte loop
// do...while
// ANS: do while is a loop where the code executed at once and then checks tha conditon


// Q31 ⭐Write a do...while loop to print numbers from 1 to 5.
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i < 6);

// Q32 ⭐Predict the output.
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);
// ANS:  1,2,3,4,5

// Q33 ⭐Predict the output.
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// ANS:10 
// Why did it print even though the condition is false?
// ANS: Because a do...while loop executes the block once before checking the condition.

// Q34 ⭐⭐Predict the output.
// let i = 0;
// do {
//     console.log("Hello");
// } while (i > 5);
// ANS: "Hello"

// Q35 ⭐⭐ Compare these two programs and predict the output of both.
// Program A
// let i = 10;
// while (i < 5) {
//     console.log("A");
// }

// Program B
// let i = 10;
// do {
//     console.log("B");
// } while (i < 5);

// What is the major difference?

// ANS:  Program A does not print anything as the condition fails ,  Program B printes B for once because do while exectues one time even when the condition is false

// Q36 ⭐⭐⭐ Write a program to find the factorial of a number using while.
// Example:
// 5 → 120
// let number = 5 ,fact = 1, i=1;
// while(i<=number){
//     fact *= i
//     i++;

// }
// console.log(fact)

// Q37 ⭐⭐⭐ Write a program to reverse a number using while.
// Example:
// Input: 12345
// Output: 54321

// let number = 12345, rev = 0 

// while(number>0){
//     let lastdigit = number%10
//     rev = rev * 10 + lastdigit;
//     number = Math.floor(number/10)
//     
// }
// console.log(rev)

// Q38 ⭐⭐⭐Write a program to count the number of digits in a number using while.
// Examples:
// 12345 → 5
// 100   → 3
// 7     → 1

// let number = 12345;
// let count = 0;

// while (number > 0) {
//     count++;
//     number = Math.floor(number / 10);
// }

// console.log(count);

// Q39 ⭐⭐⭐Write a program to find the sum of digits of a number using while.
// Example:
// Input: 12345
// Output: 15

// let sum = 0, number = 12345
// while(number>0){
//     let digit = number%10
//     sum += digit;
//     number = Math.floor(number/10);
   
// }
// console.log(sum);


// Q40 ⭐⭐⭐ Interview Question Predict the output:
// let i = 1;
// do {
//     console.log(i);
//     i += 2;
// } while (i < 5);
// ANS:1,3

// Then answer:
// T1 What is the difference between:
// while = A loop statement which is executed only when the conditon is true
// do...while = do...while executes the loop body once before checking the condition, so it always runs at least one time.

// T2:Which one is entry-controlled and which one is exit-controlled?
// entry-controlled = while loop , for loop
// exit-controlled = do while 

// T3
// Can a while loop execute zero times?  yes if condtion if false 
// Can a do...while loop execute zero times? no it executed at least once 

// T4 ⭐What happens here?
// while (true) {
//     console.log("Hello");
// }
// INFINITE LOOP

// T5 ⭐What happens here?
// do {
//     console.log("Hello");
// } while (false);
//  Hello only once



// 🎯 Mini Challenge
// Without using for, write a program using while that prints:

// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81
// 100

// let i = 1;
// while (i < 11) {
//     console.log(`${i * i}`)
//     i++;
// }

// Hint: These are squares.