const EventEmitter = require("events");

/*
! Two methods. the on() will listen to event and emit() will emit the event(Watch video for clarity!!)
? WHEN YOU EMIT THE EVENT THE FIRST ARGUMENT IS THE STRING THAT YOU LISTENING TOO.
? You can have as many on events listening to the same emit.
? The order matters, YOU FIRST HAVE TO LISTEN AND THAN EMIT
*/

const customeEmitter = new EventEmitter();

customeEmitter.on("response", (name, id) => {
  console.log(`Data received from user ${name} with id:${id}`);
});

customeEmitter.on("response", () => {
  console.log("some other logic here!");
});

customeEmitter.emit("response", "Tshepo", 668);
customeEmitter.emit("response", "Dumisani", 2157);
