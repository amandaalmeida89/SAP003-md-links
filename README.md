# **Safe Chat**

## Índice

* [1. Introdução](#1-introdução)
* [2. Objetivo ](#2-Objetivo)
* [3. Resumo do projeto](#3-Resumo-do-projeto)
* [4. Definição do produto e Tecnologias](#4-Definição-do-produto-e-Tecnologias)

***

## 1. Introdução 

O Safe Chat é uma ferramenta de criptografia de mensagens
por substituição, basicamente ela utiliza a técnica da Cifra de César, onde cada letra recebida sofre um deslocamento conforme o número da chave inserida. 

Se quer tonar o conteúdo de uma conversa sigilosa, essa ferramenta irá te auxiliar a codificar a mensagem, caso um terceiro tenha acesso ao conteúdo, ele não poderá identificar o teor da conversa, apenas se obtiver a chave e a tecnologia que são necessárias para a descodificação.

Abaixo segue um exemplo de como funciona esta técnica:

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra ABA será DED

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

## 2. Objetivo 

*Cifrar e Decifrar utilizando letras do alfabeto latino, letras maiúsculas: A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R – S – T – U – V – W – X – Y – Z

*Cifrar e Decifrar utilizando letras do alfabeto latino, letras minúsculas: a - b - c - d - e - f - g - h - i - j - k - l - m - n - o - p - q - r - s - t - u - v - w - x - y - z

*Cifrar e Decifrar utilizando o offset-negativo (chave de descolamento)

*Possibilitar a inserção de números, caracteres especiais (tabela ASCII), e Ç/ç. Neste caso o valor retornará o mesmo do input. ex.: !@ retorna !@


## 3. Resumo do projeto 

Na tela apresentada ao usuário, há opção de escolher um valor de offset (chave de deslocamento). Para evitar que o usuário clique nos botões codificar/descodificar sem que seja aplicado um offset, a tela já mostrará o número 1 (um) grafado, basta alterar para o número desejado.

Logo abaixo, o usuário deverá inserir o texto que deseja realizar a conversão, clique no botão Codificar para a encriptação, e a mensagem apareça na caixa de texto abaixo, ou clique no botão Descodificar para fazer o processo de decriptação. 

Uma vez o processo de criptografia feito, basta copiar a mensagem e enviar ao seu destinatário, ambos necessitam ter acesso ao conteúdo, a chave, e ao Safe Chat. 

## Vídeo da aplicação:
* Clique na imagem para assistir ao vídeo:

[![safe-Chat](tela.jpg)](https://youtu.be/2y5SlMBXPVs)

## 4. Definição do produto e Tecnologias

![safe-Chat](Fluxograma.jpg)

## Tecnologias
* HTML5
* JavasScript (ES6)
* CSS
* Mocha (Teste unitário)





