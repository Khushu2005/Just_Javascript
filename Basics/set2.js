// // Topic: Type Conversion & Type Coercion (Interview Favourite)

// // Q21 Predict the output. 
// console.log("5" + 2);
// // ANS :'52' string

// // Q22 
// console.log("5" - 2);
// // ANS : 3 number

// // Q23
// console.log("5" * 2);
// // ANS:10 number

// // Q24
// console.log("5" / 2);
// // ANS: 2.5 number

// // Q25
// console.log("5" % 2);
// // ANS: 1 number

// // Q26
// console.log(5 + true);
// // ANS: 6 number

// // Q27
// console.log(5 + false);
// // ANS : 5 number

// // Q28
// console.log(true + true);
// // ANS:2 number (becoz true is treated as number 1)

// // Q29
// console.log(false + false);
// // ANS:0 number ( and false is treated as 0)

// // Q30
// console.log("5" + true);
// // ANS: 5true (concatenation hogya)

// // Q31
// console.log("5" - true);
// // ANS :4 (yaha true as an 1 use hua hai so 5-1 = 4 (number))

// // Q32
// console.log("5" + null);
// // ANS : 5null (concatenation) 

// // Q33
// console.log("5" + undefined);
// // ANS : 5undefined (concatenation)

// // Q34
// console.log(null + 1);
// console.log(Number(null)); // 0 ayega 
// // ANS: 1 (yaha null number me convert hota hai i.e., 0 then 0+1=1)

// // Q35
// console.log(undefined + 1);
// console.log(Number(undefined)) NaN ata hai 
// // ANS : Nan  ( so NaN + 1 ofc Nan)

// // Q36
// // Predict the output.
// console.log(Number("123"));
// // ANS:123 number 

// // Q37
// console.log(Number("123abc"));
// console.log(Number('abc')) ans is Nan
// // ANS: Nan (abc is string and any number logic cant be performed here)

// // Q38
// console.log(String(123));
// // ANS:'123' string 

// // Q39
// console.log(Boolean(""));
// // ANS: false (bina space k false ) 

// Q40 ⭐ (Mini Interview)  yaha pr falsy and truthy nature dekha ja rha hai 
// Predict the output.
// console.log(Boolean(" ")); (true : beech me space h) 
// console.log(Boolean("0"));  (true: 0 as an string truthy value hai )
// console.log(Boolean(0));  (false : 0 ek falsy value hai )
// console.log(Boolean(1));  (true : 1 ek truthy value hai )
// console.log(Boolean(-1));  (true : -1 ek truthy value hai )
// console.log(Boolean([]));  (true : [] ek truthy value hai )
// console.log(Boolean({}));   (true : {} ek truthy value hai )

// imp : JavaScript me saare objects truthy hote hain, chahe wo empty hi kyu na hon.

// FALSY VALUES 
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
// document.all

// 💥 Bonus Theory (Very Important)

// T1.Difference between:
// Implicit Type Conversion
// Explicit Type Conversion

// ANS : 
// Implicit Type Conversion :It is done by javascript internally in order to perform calculation in the best value possible converts the data of either operand
//  Explicit Type Conversion : It is done by developer externally by using functions like Number(), String(), etc 

// T2. // List all Falsy Values in JavaScript.
// ANS : 0,-0,false,"",null,undefined,NaN,Document.all,0n=>BigInt (age 1n hota to truthy  hota hai )

// T3. // Why does this return "object"? // typeof null
// ANS:typeof null returns "object" because of a historical bug in JavaScript. It was an implementation mistake in the first version of JavaScript, and it has been kept for backward compatibility.

// T4. Difference between:
// Number()
// parseInt()
// parseFloat()

// ANS: Number(): Convert the value in number either in int or float
// Number("10")     //10
// Number("10.5")   // 10.5
// Number("10px")    // NaN

// parseInt(): Converts a string to an integer by reading from the beginning until a non-numeric character is found.
// parseInt("10.9")    // 10
// parseInt("25px")    // 25
// parseInt("abc25")   // NaN

// parseFloat(): Converts a string to a floating-point number. 
// parseFloat("10.9")   // 10.9
// parseFloat("25.5px") // 25.5