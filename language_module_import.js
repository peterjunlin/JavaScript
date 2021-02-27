

// Dynamic import. It returns a Promise.
p = (async () => {
    let mymodule = await import("/modules/my-model.js");
})()
p.catch(e => console.log("Promise rejection: ", e.message))

