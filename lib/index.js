const fs = require('fs');
const regex = /\[(\S.*?)\]\((http.*?)\)/g;

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {

    if(!path) {
      reject('path not found')
    }

    fs.readFile(path, 'utf8', (err, data) => {

      if (err) {
        reject(err);
      }

      const links = data.match(regex)
        .map(item => {
          const splited = item.split('](');
          return {
            text: splited[0].slice(1),
            href: splited[1].slice(0, -1)
          }
        });

      resolve(links);

    })
  })
}

module.exports = {
  mdLinks,
};
