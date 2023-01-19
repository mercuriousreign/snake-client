// establishes a connection with the game server
const net = require("net");
const { setTimeout, setInterval } = require("timers/promises");
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {

    console.log("Connected to server successfully");
    conn.write("Name: ZAa");
    conn.write("Move: up");

    // setTimeout(conn.write("Move: up"),400);
    // setInterval(conn.write("Move: left"),700);
    // setInterval(conn.write("Move: down"),900);

    // setTimeout(clearInterval(), 7000);

  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // })

  // setTimeout(conn.on("connect", () => {
  //   conn.write("Move: left");
  // }),800)

  // setTimeout(() => {
  //   conn.on("connect",() => {
  //     conn.write("Move: Down");
  //   })
  // },800);

  // setInterval(() => {
  //   conn.on("connect",() => {
  //     conn.write("Move: Down");
  //   })
  // },1000);

  // setInterval(() => {
  //   conn.on("connect",() => {
  //     conn.write("Move: Right");
  //   })
  // },1000);

  setTimeout(clearInterval(), 7000);


  // setTimeout(conn.on("connect", () => {
  //   conn.write("Move: Left");
  // }), 5000);

  // setInterval(conn.on("connect", () => {
  //   conn.write("Move: Down");
  // }), 500)

  // setInterval(conn.on("connect", () => {
  //   conn.write("Move: Right");
  // }), 500)

  setTimeout(()=>{clearInterval()}, 7000);



  return conn;
};

module.exports = {
  connect,
}