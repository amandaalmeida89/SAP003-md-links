#!/usr/bin/env node

const program = require("commander");
const { mdLinks } = require("./lib/index");

program
  .arguments("<path>")
  .option("-v, --validate", "validate links", false)
  .action((path) => {
    mdLinks(path, { validate: program.validate })
      .then((response) => { console.log(response); })
      .catch((error) => { console.log(error); });
  })
  .parse(process.argv);
