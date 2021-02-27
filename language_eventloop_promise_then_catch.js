// Promise-then-catch asyn functions.
//
// Newly created promise is in eventloop.
// Resolve and reject must be handled after promise returned.

function divide(numerator, denominator) {
    return new Promise((resolve, reject) => {
        if (denominator === 0) {
            reject("Cannot divide by 0");
            return;  // return after rejected.
        }

        resolve(numerator / denominator);
        return;  // return after resolved.
    });
}
  
divide(5,0)
    .then((result) => console.log('result: ', result))
    .catch((error) => console.log('error: ', error));

divide(5,2)
    .then((result) => console.log('result: ', result))
    .catch((error) => console.log('error: ', error));
