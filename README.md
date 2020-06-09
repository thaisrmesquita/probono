# Probono
## Descrição do Projeto :star:
Desenvolver uma plataforma capaz de ajudar a compreensão de andamentos de processos judiciais.

## O que a plataforma é capaz de fazer :checkered_flag:

:small_blue_diamond: Cadastro de advogados e clientes.

:small_blue_diamond: Permite que o advogado cadastre processos de um determinado cliente e andamentos referentes a esse processo.

:small_blue_diamond: Cada advogado poderá cadastrar formas mais amigáveis de interpretação sobre tipos de andamentos, visando o melhor entendimento pelo seu cliente.

:small_blue_diamond: O advogado terá acesso a uma lista de todos os processos que é responsável e poderá fazer buscas por número de processo.

:small_blue_diamond: O clinte terá acesso a todos os processos em que está associado, assim como os seus andamentos e descrições retornadas em termos de fácil. entendimento.

## Pré-requisitos

[Node](https://nodejs.org/en/download/)

[Yarn](https://yarnpkg.com/)

## Como rodar a aplicação 

No terminal, clone o projeto: 

```
git clone https://github.com/thaisrmesquita/probono.git
```

entre na pasta do projeto:

```
cd probono
```

Instale as dependências:
```
yarn install
```
or 

```
npm install
```


Entre na pasta frontend pelo prompt de comando e execute a aplicação do frontend:

```
yarn start
```

Em outra guia do cmd, acesse a pasta backend e execute o comando:
```
yarn dev
```

Pronto, a aplicação estará disponivel a partir da rota http://localhost:3000/

## Banco de Dados

Como Banco de Dados, foi utilizado o MongoDB.

Foram criados os seguintes esquemas:

### Client

name  | cpf  | password |created | updated
------|------|----------|--------|--------
String|String|String|Date|Date

### Lawyer

name|email|pawword|created|updated
----|-----|-------|-------|-------
String|String|String|Date|Date

### Process

number|client|created|updated|progress|responsible
------|------|-------|-------|------|--------
Number|String|Date|Date|Array|String

### Progress

description|translation|published
-----------|-----------|----------
String|String|Date

### Translation

rule|description
----|----------
String|String

## Páginas

![](https://github.com/thaisrmesquita/probono/blob/master/image-layout/telas.png?raw=true)

Para a criação das páginas do projeto, sugere-se um layout mais limpo, com uso de responsividade para a adaptação em diversos tamanhos de dispositivos.

[Aqui](https://www.figma.com/proto/5PEjDAURyE6p3MWpAVkcBm/Probono?node-id=2%3A0&scaling=scale-down) é possivel visualizar a proposta de layout do projeto.


 
 
