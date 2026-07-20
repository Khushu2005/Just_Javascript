// Topic: Variables, Data Types, typeof, Console (Very Basic)

// Q1: Difference between var, let, and const.
// ANS: 
// var
// Function scoped
// Can be redeclared and reassigned
// Hoisted and initialized with undefined
// let
// Block scoped
// Cannot be redeclared in the same scope
// Can be reassigned
// Hoisted but in Temporal Dead Zone (TDZ)
// const
// Block scoped
// Cannot be redeclared or reassigned
// Must be initialized while declaring
// Hoisted but in TDZ

// Q2: Predict the output.
// console.log("Hello JavaScript");
// ANS: "Hello JavaScript"

// Q3 : Create a variable named age and store your age in it.
// ANS: let age = 20;

// Q4 : Create two variables:
/*ANS:*/
// let firstName = 'Sonam'
// let lastName = 'wangchuk'
// console.log(firstName + " " + lastName);

// Q5 : Predict the output.
// let a = 10;
// console.log(a);
// ANS: 10 

// Q6 : Predict the output.
// let a = 10;
// a = 20;
// console.log(a);
// ANS: 20 (because the value is reassigned in second line )

// Q7 : Predict the output.
// const pi = 3.14;
// console.log(pi);
// ANS :3.14

// Q8 : Predict the output.
// const pi = 3.14;
// pi = 22;
// console.log(pi);
// ANS : (Uncaught TypeError: Assignment to constant variable.)

// Q9 : Predict the output.
// var a = 5;
// var a = 10;
// console.log(a);
// ANS: 10  (BUG: var me hum ek assignment kayi baar declare krkste hai same name se or errror nhi dega jo ki pichli value ko overwrite krdega yehi glt h)

// Q10 : Predict the output.
// let a = 5;
// let a = 10;
// console.log(a);
// ANS : Uncaught SyntaxError: Identifier 'a' has already been declared 

// Q11: Write code to print your:
// Name
// Age
// City
// using console.log().

// ANS: 
// let Name = 'Khushi Sharma';
// let Age = 20;
// let City = "Lucknow";
// console.log(Name,Age,City);

// Q12 : What will be the output? typeof "Hello"
// ANS : console.log(typeof('Hello')) #string

// Q13: Output? typeof 100
//ANS: console.log(typeof(100)) #Number

// Q14 Output? typeof true
// ANS: boolean

// Q15 Output? typeof undefined
// ANS: undefined

// Q16 Output? typeof null
// ANS :Object

// Q17 Output? 
// let a; console.log(a);
// ANS: undefined

// Q18 Output? let a = null; console.log(a);
// ANS:null

// Q19 Write code to create variables of these types:
// String
// Number
// Boolean
// Undefined
// Null

// Then print all of them.

// ANS :
// let name = 'khushi';
// let age = 20;
// let state = true;
// let a;
// let house = null;
// console.log(typeof(name),typeof(age),typeof(state),typeof(a),typeof(house))


// Q20 ⭐ (Mini Interview Question)
// Predict the output.
// let name = "Devansh";
// let age = 21;
// let isStudent = true;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// ANS : string  , number ,boolean
