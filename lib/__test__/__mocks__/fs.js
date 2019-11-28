// __mocks__/fs.js
'use strict';

const fs = jest.genMockFromModule('fs');

const mdFile = `# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do
  projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Entregáveis](#6-entregáveis)
* [7. Guias, dicas e leituras
  complementares](#7-guias-dicas-e-leituras-complementares)
* [8. Checklist](#8-checklist)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc), e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
'README.md').
### Node

* [ ] Sistema de arquivos ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] [package.json](https://docs.npmjs.com/files/package.json)
* [ ] criação de módulos [CommonJS](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
`;

fs.readFile.mockImplementation( (file, option, cb) => cb(null, mdFile) );

module.exports = fs;