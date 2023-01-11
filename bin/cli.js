#! /usr/bin/env node
const { program } = require("commander");
const help = require("../lib/core/help");
help(program);
// 创建指令别名
const mycommand = require("../lib/core/command");
mycommand(program);

program.parse(process.argv);
