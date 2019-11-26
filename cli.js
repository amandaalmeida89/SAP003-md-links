const { mdLinks } = require('./lib/index');

const path = process.argv.slice(2).pop();
mdLinks(path);
