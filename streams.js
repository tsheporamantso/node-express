const { createReadStream } = require("fs");

/*
! STREAMS
? There are 4 types of streams 1) Writeable , 2) Readable, 3) Duplex, 4) Transform.
? 1) Writeable: is used to write data sequentially 
? 2) Readable: is used to read data sequentially 
? 3) Duplex: used to both read and write data sequentially. 
? 4) Transform: data can be modified when writing or reading sequentially.
! When invoke createReadStream method, the only default argument you will pass is the path of the file you reading.  
*/

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 10000,
  // encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
