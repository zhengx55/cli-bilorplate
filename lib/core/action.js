const inquirer = require("inquirer");
const config = require("../../config");

const action = function (name, argss) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "framework",
        choices: config.framework,
        message: "select a framework",
      },
    ])
    .then((res) => {
      console.log(res);
    });
};
module.exports = action;
