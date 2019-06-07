const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

async function run() {
  clear();
  console.log(chalk.hex("#ED145B")(figlet.textSync("FIAP Boilerplate")));
}

run();
