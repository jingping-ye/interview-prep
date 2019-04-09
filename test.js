const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();

  setTimeout(() => {
    console.log(2);
  }, 0);
});
promise.then(() => {
  console.log(3);
});

console.log(4);
