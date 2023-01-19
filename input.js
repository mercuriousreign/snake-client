// setup interface to handle user input from stdin
const stdin = process.stdin;
let connection;
let keys = [];

const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {

  if (!"wasd".includes(key) && key !== '\u000d') {
    keys.push(key);
  }

  if (key === '\u000d') {
    connection.write("Say: " + keys.join(""));
    keys = [];
  }


  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
    
  }
  //Exit process if Ctrl+C is the input

  if (key === '\u0003') {
    process.exit();
  }
};

stdin.on("data", (data) => {
  handleUserInput(data);
});

module.exports = {
  setupInput,
};