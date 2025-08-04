const str = "cat cut cot cit c@t";
const pattern = /c.t/g;

console.log(str.match(pattern));  
// Output: [ 'cat', 'cut', 'cot', 'cit', 'c@t' ]

// dot star usage 
const str2 = "I love JavaScript!";
const pattern2 = /I.*t/;

console.log(str2.match(pattern2));  
// Output: [ 'I love JavaScript' ]
