const fs = require('fs');
const fetch = require('node-fetch');

const regex = /(\[[^\s].*?\])(\(http.*?\))/gm;

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if(!path) {
      reject('path not found')
    }
    fs.readFile(path, 'utf8', (err, data) => {
      if (err)  {
        reject(err);
      }
      const links = data.match(regex)
        .map(item => {
          const splited = item.split('](');
          return {
            text: splited[0].slice(1),
            href: splited[1].slice(0,-1)
          }
        });
      
      if(options.validate === true) {
        const promises = links.map(link => {
          return fetch(link.href)
            .then((res) => link.status = res.status)
        });

        Promise.all(promises).then(() => resolve(links));
        
      } else {
        resolve(links);
      }
      
    })
  })
}

module.exports = {
  mdLinks,
};
