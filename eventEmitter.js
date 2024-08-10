const EventEmitter = require("events");

const customeEmitter = new EventEmitter();

customeEmitter.on("response", (name, id) => {
  console.log(`data received from user ${name} with id:${id}`);
});

customeEmitter.on("response", () => {
  console.log("some other logic here!");
});

customeEmitter.emit("response", "Tshepo", 668);
