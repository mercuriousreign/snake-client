const {connect} = require("./client")
const stdin = process.stdin;

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


const handleUserInput = function (key) {
  //Exit process if Ctrl+C is the input
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();
stdin.on("data", (data) => {handleUserInput(data)} );