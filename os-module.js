const os = require("os");

/*
! Info about the current user
*/
const user = os.userInfo();
console.log(user);

/*
! method returns the systems uptime in seconds.
*/
const time = os.uptime();
console.log(`System Uptime is: ${time} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
