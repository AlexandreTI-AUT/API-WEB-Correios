# QA Automation Challenge

## Objetivo:

Realizar a automação (frontend e backend) do serviço de Busca CEP dos Correios.
Automação foi desenvolvida em JavaScript usando o Cypress para Frontend e Backend.

*Frontend:* https://www.correios.com.br/

*Backend:* https://viacep.com.br/

## Pré-requisito

- Instalar Node.js <https://nodejs.org/en> 

## Rodar os testes:

- Clonar o repositóri`
- Executar o comando ```npm install```
- Execuatr o comando ```npx cypress Open``` para rodar os testes FrontEnd and BackEnd

## Executar Allure Report

- ```npx cypress run --env allure=true ``` - Executa os testes em modo headles
- ```npm run allure:report```- Gera o report
- ```allure open```- Abre o report no navegador
- ```npm run allure:clear```- Limpa o report


