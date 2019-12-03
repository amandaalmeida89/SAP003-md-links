/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const fs = require("fs");
const fetch = require("node-fetch");

const regex = /(\[[^\s].*?\])(\(http.*?\))/gm;

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (!path) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return reject("path not found");
  }

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      const links = data.match(regex)
        .map((item) => {
          const splited = item.split("](");
          return {
            href: splited[1].slice(0, -1),
            text: splited[0].slice(1),
          };
        });

      if (options.validate === true) {
        const promises = links.map(link => fetch(link.href)
          .then(res => link.status = res.status)
          .catch(error => link.status = error.code));

        Promise.all(promises).then(() => resolve(links));
      } else {
        resolve(links);
      }
    }
  });
});

module.exports = {
  mdLinks,
};
