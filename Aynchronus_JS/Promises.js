let promise = new Promise((res, rej) => {
    let num = Math.floor(Math.random() * 10);
    if (num > 5) {
        res(num);  
    } else {
        rej(num);  
    }
});

promise
  .then((num) => {
      console.log(`${num} is greater than 5 #Resolved`);
  })
  .catch((num) => {
      console.log(`${num} is lesser than or equal to 5 #Rejected`);
  });