# async and await

We use Promises with our database code. `async` and `await` make that easy.

With api requests across a network, with database requests, etc., requests are sent asynchronously and we "await" the return of the results from the database.

JavaScript requires that if we are going to "await" then we need to allow the JS engine to be able to do other things while we "await".
To accomplish having code that awaits results, we must be the await code with a function is that is marked as asynchronous so that the JS can do other things and keep checking that the await has completed and then the JS engine can provide the full results of the code.

See

- <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function>
- <https://javascript.info/async-await>
