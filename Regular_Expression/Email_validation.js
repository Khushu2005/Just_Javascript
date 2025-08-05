const email = "khsuh.i2sa@gmail.com"
const regexemail = /^[A-Za-z](?!.*\.\.)[A-Za-z0-9._-]+@[A-Za-z]+\.[a-zA-Z]{2,}$/;

if(regexemail.test(email)){
    console.log("valid");
    
}else{
    console.log("Invalid");
    
}

// Email should 
// 1. Start from letters 
// 2. Cannot contain back to back 2 dots (..)
// 3. username can contain [a-zA-Z0-9._-]
// 4. Only one (@) and domain name can be alphabets 
// 5. TLD part should have one(.) followd by [A-Za-z]
