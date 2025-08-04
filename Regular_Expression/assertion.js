//  ^ (Start of String)


const str = "Hello world";
const pattern = /^Hello/;

console.log(pattern.test(str));  // true

// $ (End of String)
const str_2 = "Welcome home";
const pattern_2 = /home$/;

console.log(pattern_2.test(str_2));  // true

// lookaheads
const str3 = "I have a pen and a pencil.";

const pattern3 = /pen(?=c)/;  // match "pen" only if followed by "c"

const result = str3.match(pattern3);

console.log(result);
