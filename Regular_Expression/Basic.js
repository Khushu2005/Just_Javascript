
const message = "Please click the login button to continue.";

const pattern = /login/;  
if (pattern.test(message)) {
  console.log("The word 'login' was found in the message.");
} else {
  console.log("login' not found.");
}


// using flags


const message_2 = "Click LOGIN to login again, then confirm LOGIN success.";

const pattern_2 = /login/gi;  // 'g' = global, 'i' = case-insensitive
const matches = message_2.match(pattern);

if (matches) {
  console.log("Found:", matches);
} else {
  console.log("login' not found.");
}

