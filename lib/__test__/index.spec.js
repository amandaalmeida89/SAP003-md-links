const { mdLinks } = require("../index.js");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("o teste deverá listar links sem valida-los", () => expect(mdLinks("./lib/__test__/fs.md", { validate: false })).resolves.toStrictEqual([
    {
      text: "peixinho",
      href: "https://ksjdhkjshdfh.com/roso",
    },
    {
      text: "banana",
      href: "https://uol.com.br/jara",
    },
    {
      text: "Markdown",
      href: "https://pt.wikipedia.org/wiki/Markdown",
    },
    {
      text: "fs",
      href: "https://nodejs.org/api/fs.html",
    },
    {
      text: "path",
      href: "https://nodejs.org/api/path.html",
    },
    {
      text: "package.json",
      href: "https://docs.npmjs.com/files/package.json",
    },
    {
      text: "CommonJS",
      href: "https://nodejs.org/docs/latest-v0.10.x/api/modules.html",
    },
  ]));

  it("testando com erro no link invalido", () => expect(mdLinks("./lib/__test__/fs.md", { validate: true })).resolves.toStrictEqual([
    {
      text: "peixinho",
      href: "https://ksjdhkjshdfh.com/roso",
      status: "ENOTFOUND",
    },
    {
      text: "banana",
      href: "https://uol.com.br/jara",
      status: 404,
    },
    {
      text: "Markdown",
      href: "https://pt.wikipedia.org/wiki/Markdown",
      status: 200,
    },
    {
      text: "fs",
      href: "https://nodejs.org/api/fs.html",
      status: 200,
    },
    {
      text: "path",
      href: "https://nodejs.org/api/path.html",
      status: 200,
    },
    {
      text: "package.json",
      href: "https://docs.npmjs.com/files/package.json",
      status: 200,
    },
    {
      text: "CommonJS",
      href: "https://nodejs.org/docs/latest-v0.10.x/api/modules.html",
      status: 200,
    },
  ]));

  it("testando sem arquivo válido", () => expect(mdLinks("", { validate: true })).rejects.toStrictEqual("path not found"));

  it("testando com erro do fs", () => expect(mdLinks("<directory>", { validate: false })).rejects.toThrow());
});
