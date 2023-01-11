const action = require("./action");

const command = function (program) {
  program
    .command("create <project> [other...]")
    .alias("c")
    .description("create your own project")
    .action(action);
};

module.exports = command;
