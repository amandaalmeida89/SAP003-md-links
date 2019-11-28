#!/usr/bin/env node

const { mdLinks } = require('./lib/index');

const path = process.argv.slice(2).pop();
mdLinks(path, { validate: true })
  .then((response) => { console.log(response) })
  .catch((error) => { console.log(error) });
