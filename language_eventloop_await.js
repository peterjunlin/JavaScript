// await will 

function resolveAfter2Seconds() {
    promise1 = new Promise(resolve => {
      console.log("2. In promise");
      setTimeout(() => {
        resolve('resolved');
      }, 300);
    });
    console.log("3. After new promise");
    return promise1;
}
  
async function asyncCall() {
    console.log('1. calling');
    const result = await resolveAfter2Seconds();
    console.log('5. After await.');
    console.log(result);
    // expected output: "resolved"
}

asyncCall();
console.log("4. thread continuous.");
for (let i = 0; i < 100; ++i) {
    console.log(i);
}
