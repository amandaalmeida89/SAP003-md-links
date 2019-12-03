# Markdown Links

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contribute](#contribute)

***

## Install

You can get it on npm
```
$ npm install https://github.com/amandaalmeida89/SAP003-md-links
```
Then import it with a module

Example
```
const mdLinks = require("md-links");

mdLinks("/some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, status }]
  })
  .catch(console.error);
```
You can use via CLI (Command Line Interface)
```
$ npm install -g https://github.com/amandaalmeida89/SAP003-md-links
```
Example 

```
$ md-links ./some/example.md --validate
http://algo.com/2/3/ 200 Link de algo
https://outra-coisa-.net/algum-doc.html 404 algum doc
http://google.com/ 301 Google
```
## Usage

The executable of our application can be executed as follows through the terminal:

```
md-links <path-to-file> [options]
```
For help of our application
```
md-links --help
```

## Contribute

All contributions are welcome.

Fork the repo on GitHub
Clone the project to your own machine
Install the tools necessary for development: ```npm install```
Make your changes and test it: ```npm test```
Commit it to your own branch
Push your work back up to your fork
Submit a pull request with full remarks documenting your changes

