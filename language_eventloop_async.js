// Async function return promise.

let hello = async () => {
    console.log("1st event - in async function.");

    // setTimeout is non-blocking, the arrow function is put in the event loop to wait for timeout.
    setTimeout(() => console.log('3rd event - time out'), 1500);

    return "hello";
}

// hello() is put in event loop, the returned value will be in this promise object.
var promise_hello = hello();

// (Resolve and rejection) of promise.then are put in event loop, which is to be executed base on the result of promise.
promise_hello.then((value) => console.log("2nd event - value in promise is - ", value));  

// Previous codes are none-blocking, no waiting to get here.
console.log('main - Hello is a - ' + typeof hello);
