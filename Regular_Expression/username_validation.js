const usernames = [
  "khushi_123",
  "DevK@007",
  "js.master",
  "123_user",
  "coder.k",
  "KhushiSharma",
  "helloWorld!",
  "pro-user",
  "js_girl",
  "Xx_coder_xX"
];

let random = Math.floor(Math.random() * usernames.length);
let user = usernames[random];

// Username must be at least 5 characters and contain only letters, numbers, underscore or dot
if (user.length >= 5) {
  if (user.match(/^(?=[\w.]{5,}$)(?!.*[^a-zA-Z0-9._])/)) {
    console.log("Valid username:", user);
  } else {
    console.error("Invalid characters in username:", user);
  }
} else {
  console.error("Username must be minimum of 5 characters:", user);
}
