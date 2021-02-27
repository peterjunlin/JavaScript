// for await ... of
// Use Symbol.asyncIterator symbol to declare async iterable.
// Async generator
const myAsyncIterable = {
    async* [Symbol.asyncIterator]() {
        yield "hello";
        yield "async";
        yield "iteration!";
    }
};

// for await ... of - iterate through aync iterable.
(async () => {
    for await (const x of myAsyncIterable) {
        console.log(x);
        // expected output:
        //    "hello"
        //    "async"
        //    "iteration!"
    }
})();
