/*
! EVENT LOOP:
? The event loop it's what allows node.js to perform non-blocking input/output operations, despite the fact that JavaScript single-threated - by offloading operations to to the kernel whenever possible.
* In essence we are offloading time consuming operations with CallBack function e.g. Asynchronous readFile that takes a callback function!
* setTimeout and setInterval() are also Async function thus offloaded 
*/

/*
? As indicated setTimeout is Async function(event loop). Expectation below is that setTimeout will run second since the timeout is set to 0 seconds. But it's not like that. set timeout is offloaded and run last. 
*/
console.log("It should run first");
setTimeout(() => {
  console.log("Should run second, because I setTimeout to 0sec");
}, 0);
console.log("Should run third");

/*
! setInterval, is also Async just ike setTimeout, however setInterval it doesnt exit, it keeps running the file incrementally based on interval set.
? for proper and clearer explananition visit video.
*/

setInterval(() => {
  console.log("Morning Bafoza");
}, 2000);

console.log("I will run first");
