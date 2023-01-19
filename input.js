// setup interface to handle user input from stdin
const stdin = process.stdin;
let connection;

const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


const handleUserInput = function (key) {
  //console.log(key);
  if (key==='w') {
    console.log(key);
  }

  if (key==='a') {
    console.log(key);
  }

  if (key==='s') {
    console.log(key);
  }

  if (key==='d') {
    console.log(key);
  }
  //Exit process if Ctrl+C is the input

  if (key === '\u0003') {
    process.exit();
  }
};

stdin.on("data", (data) => {handleUserInput(data)} );

module.exports = {
  setupInput,
}