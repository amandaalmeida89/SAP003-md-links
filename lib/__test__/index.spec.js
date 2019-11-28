const { mdLinks } = require('../index.js');

describe("mdLinks", () => {

  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it('o teste deverá listar links sem valida-los', () => {
    return expect(mdLinks('./lib/__test__/fs.md', { validate: false })).resolves.toStrictEqual([
      {
        text: 'Markdown',
        href: 'https://pt.wikipedia.org/wiki/Markdown',
      },
      {
        text: 'fs',
        href: 'https://nodejs.org/api/fs.html',
      },
      {
        text: 'path',
        href: 'https://nodejs.org/api/path.html',
      },
      {
        text: 'package.json',
        href: 'https://docs.npmjs.com/files/package.json',
      },
      {
        text: 'CommonJS',
        href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
      }
    ]);
  });


  it('o teste deverá listar links com validação', () => {
    return expect(mdLinks('./lib/__test__/fs.md', { validate: true })).resolves.toStrictEqual([
      {
        text: 'Markdown',
        href: 'https://pt.wikipedia.org/wiki/Markdown',
        status: 200
      },
      {
        text: 'fs',
        href: 'https://nodejs.org/api/fs.html',
        status: 200
      },
      {
        text: 'path',
        href: 'https://nodejs.org/api/path.html',
        status: 200
      },
      {
        text: 'package.json',
        href: 'https://docs.npmjs.com/files/package.json',
        status: 200
      },
      {
        text: 'CommonJS',
        href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
        status: 200
      }
    ]);
  });

  it('testando sem arquivo válido', () => {
    return expect(mdLinks('', { validate: true })).rejects.toStrictEqual('path not found');
  });

  it('testando com erro do fs', () => {
    return expect(mdLinks('<directory>', { validate: false })).rejects.toMatch('err');
  });

});