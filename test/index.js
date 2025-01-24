// console.log("Welcome to nodejs application");
//operating system module
// const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(__dirname);
// console.log(__filename);

const { Multiplication } = require("./Add");

//path module
// const path = require("path");
// console.log(__dirname);
// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));

//file module
// const fs = require("fs");
// console.log("This is my first statement in console");
// fs.readFile("one.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("this is my last console statement");

//http module
// const http = require("http");
// const PORT = 7788;
// const mySerevr = http.createServer((request, response) => {
//   response.write("Backend application running successfully");
//   response.write("One more statement from nodejs");
//   response.end();
// });
// mySerevr.listen(PORT, () => {
//   console.log(`My server is running on ${PORT} number`);
// });

let { Addition, Multiplication } = require("./Add");
console.log(Addition(2, 3));
console.log(Multiplication(4, 5));
