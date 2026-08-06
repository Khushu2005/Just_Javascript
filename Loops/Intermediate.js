// Q41: Print all numbers from 1 to 100 that are divisible by 3.
// for(let i = 1; i<101; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }

// Q42:Print all numbers from 1 to 100 that are divisible by 5 but not by 10.
// for(let i = 1; i<101;i++){
//     if(i%5===0 && i%10!==0) console.log(i)

// }

// Q43 ⭐: Print all numbers from 1 to 100 that are divisible by both 3 and 5.
// for(let i = 1; i<101;i++){
//     if(i%5===0 && i%3===0) console.log(i)

// }

// Q44: Find the sum of all numbers from 1 to 100 that are divisible by 7.

// let sum = 0
// for(let i=1;i<101;i++){
//     if(i%7===0){
//         sum+=i
//     }
// }
// console.log(sum)

// Q45 ⭐: Count how many numbers between 1 and 100 are divisible by 9.

// let count = 0;
// for(let i=1;i<101;i++){
//     if(i%9==0){
//         count++;
//     }
// }
// console.log(count)

// Q46: Print numbers from 100 to 1.
// If the number is divisible by 10, print: Boom, instead of the number.
// for(let i = 100;i>0;i--){
//     if(i%10===0){
//         console.log("BOOM")
//     }
//     else{
//         console.log(i)
//     }
// }

// Q47 ⭐ Print all numbers between 1 and 50,Skip multiples of 4.
// for(let i =1;i<51;i++){
//     if(i%4===0){
//         continue
//     }
//     console.log(i)
// }

// Q48 ⭐ Print numbers from 1 to 100,Stop the loop as soon as you encounter 57.
// for(let i=1;i<101;i++){
//     console.log(i)
//     if(i===57){
//         break
//     }
// }

// Q49 ⭐⭐ Predict the output.
// let i = 1;
// while (i <= 5) {
//     console.log(i);

//     if (i === 3)
//         break;

//     i++;
// }
// console.log("Done");
// ANS:1,2,3,Done


// Q50 ⭐⭐Predict the output.
// let i = 1;
// while (i <= 5) {

//     i++;

//     if (i === 3)
//         continue;

//     console.log(i);
// }
// ANS:2,4,5,6

// Q51 ⭐⭐⭐ Write a program to count the number of digits in a number without converting it to a string.
// Example:12345,Output: 5

// let number = 1223345
// let count = 0
// while (number > 0) {
//     count++;
//     number = Math.floor(number / 10);
// }
// console.log(count)

// Q52 ⭐⭐⭐Find the largest digit in a number.
// Example:Input:583271,Output: 8

// let Input = 589271
// let max = 0
// while (Input > 0) {
//     let lastdigit = Input % 10;
//     if (max < lastdigit) {
//         max = lastdigit
//     }
//     Input = Math.floor(Input / 10)

// }
// console.log(max);

// Q53 ⭐⭐⭐ Find the smallest digit in a number.
// Example:583271,Output:1

// let Input = 58201, min = 9;
// while (Input > 0) {
//     let lastdigit = Input % 10;
//     if (min > lastdigit) {
//         min = lastdigit
//     }
//     Input = Math.floor(Input / 10)
// }
// console.log(min);

// Q54 ⭐⭐⭐Check whether a number is a palindrome.
// Example:121 → Palindrome, 123 → Not Palindrome
// let number = 123;
// let original = 123;
// let reverse = 0;
// while(number>0){
//     let lastdigit = number%10;
//     reverse = reverse*10+lastdigit
//     number = Math.floor(number / 10);
// }
// if(original===reverse){
//     console.log("Palindrome")
// }
// else{
//      console.log("Not Palindrome")
// }


// Q55 ⭐⭐⭐: Check whether a number is an Armstrong number.
// (Only 3-digit version)
//  Examples:153,370,371,407
// let number = 401;
// let original = number;
// let lengthofnumber = String(number).length;
// let isArmstrong = 0
// if (number >= 100 && number <= 999) {
//     while (number > 0) {
//         let eachdigit = number % 10;
//         isArmstrong += eachdigit ** lengthofnumber
//         number = Math.floor(number / 10);
//     }
//     if (isArmstrong === original) {
//         console.log("isArmstrong")
//     }
//     else {
//         console.log("Not a Armstrong")
//     }
// }
// else {
//     console.log("Please enter a 3-digit number");
// }

// Q56 ⭐⭐⭐Print all factors of a number.
// Example: 12: Output:1,2,3,4,6,12
// let number = 12;
// for (let i = 1; i <= 12; i++) {
//     if (number % i === 0) {
//         console.log(i)
//     }

// }


// Q57 ⭐⭐⭐: Count total factors of a number.
// Example:12,Output: 6
// let number = 12;
// let count = 0;
// for (let i = 1; i <= 12; i++) {
//     if (number % i === 0) {
//         count++
//     }
// }
// console.log(count);



// Q58 ⭐⭐⭐⭐: Check whether a number is Prime.
// Print only:Prime, or: Not Prime
// let number = 7;
// let isPrime = true
// if (number === 0 || number === 1) console.log(" Not a Prime Number")
// if (number === 2) console.log("Prime Number")
// if (number > 2) {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break

//         }
//     }
//     if (isPrime === true) console.log("Prime Number")
//     else console.log("Not a Prime Number")
// }

// Q59 ⭐⭐⭐⭐ (Interview Favourite)
// Print all Prime numbers between 1 and 100.
let isPrime = true;
for (let i = 1; i < 101; i++) {
    if (i === 0 || i === 1) isPrime = false;
    if (i === 2) {
        isPrime = true;
        console.log(2)
    }
    if (i > 2) {
        for (let j = 2; j < i; j++) {
            if (i % j !== 0) {
                console.log(i)
            }

        }

    }        
}

// Q60 ⭐⭐⭐⭐
// Generate the first 10 Fibonacci numbers.
// Expected output:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34


// 🎯 Bonus Theory
// T1 ⭐⭐⭐

// Difference between:

// break
// continue

// Explain with your own examples.

// T2 ⭐⭐⭐

// What happens if continue is used before the update inside a while loop?

// Hint:

// while (condition) {

//     if (...)
//         continue;

//     i++;
// }
// T3 ⭐⭐⭐

// Can break terminate:

// for
// while
// do...while
// switch

// Explain.

// T4 ⭐⭐⭐⭐

// Which is more efficient for checking Prime?

// for(i=2;i<num;i++)

// or

// for(i=2;i<=Math.sqrt(num);i++)

// Why?

// T5 ⭐⭐⭐⭐

// What is the time complexity of:

// Printing numbers from 1 to n
// Finding factorial
// Counting digits
// Prime checking (normal)
// Prime checking (√n method)