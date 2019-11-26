const fs = require('fs');

const mdLinks = (path) => {
  fs.readFile(path,"utf8",(err, path) => {
    if (err) throw err;
    console.log(path)
  })
}

module.exports = {
  mdLinks,
};
