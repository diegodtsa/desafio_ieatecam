# Desafio – Analista de Teste de Software

## Badge em Conclusão

Este repositório contém os arquivos necessários para executar testes no site [https://www.saucedemo.com/](https://www.saucedemo.com/) utilizando o Cypress e JavaScript.

## Parte I: Fundamentos de Teste

O documento "Saucedemo.md" na pasta "1-Planning" contém os casos de teste e cenários levantados para testar a aplicação.

## Parte II: Execução dos Testes

As evidências dos testes realizados estão armazenadas na pasta "2-Execution".

O arquivo de relatório de falhas está nomeado como "Falhas Encontradas".

## Parte III: Automação Web

Os cenários de teste para automação estão na pasta "3-Automation".

### Cenário I: Realizar Login na página.
- Descrição: Testar o processo de login com credenciais válidas e inválidas no site saucedemo.com.
- Realizar Login com o usuário standard_user;
- Login com usuário bloqueado “locked_out_user”
- Arquivo: "cenario1.cy.js"

### Cenário II: Maior e Menor valor dos produtos.
- Descrição: Testar a funcionalidade de filtro de produtos por preço, verificando o maior e o menor valor.
- Logar com o usuário “standard_user”;
- Verificar e informar qual o produto com menor valor;
- Verificar e informar qual o produto com maior valor;
- Arquivo: "cenario2.cy.js"

### Cenário III: Realizar a compra de dois produtos.
- Descrição: Testar o processo de compra adicionando dois produtos ao carrinho e finalizando a compra.
- Logar com o usuário “standard_user”.
- Adicionar ao carrinho o produto com maior e menor valor.
- Finalizar a compra.
- Arquivo: "cenario3.cy.js"

## Configuração do Ambiente

Para executar os testes, siga as etapas abaixo:

1. Na pasta do projeto, execute o comando:
   ```
   npm init
   ```
   ou
   ```
   yarn init
   ```
   Isso criará um projeto node e preencherá as informações referentes ao projeto no arquivo "package.json".

2. Instale o Cypress via npm (Node Package Manager):
   ```
   npm install cypress --save-dev
   ```
   ou via yarn:
   ```
   yarn add cypress --dev
   ```

3. Abra o Cypress para criar a estrutura básica do projeto:
   Usando npx:
   ```
   npx cypress open
   ```
   ou usando yarn:
   ```
   yarn cypress open
   ```
   Escolha o browser de preferência e selecione a Spec para realizar os testes.

4. Para executar os testes em background, utilize o seguinte comando:
   Usando npx:
   ```
   npx cypress run
   ```
   ou usando yarn:
   ```
   yarn cypress run
   ```
   Ao finalizar a execução, será criada a pasta "Videos" contendo a gravação dos testes. Uma screenshot da tela será mostrada somente em caso de falha.

5. Para gerar um relatório com um dashboard referente aos testes realizados, utilize o seguinte plugin:
   Instale o Plugin:
   Usando npm:
   ```
   npm i -D 
   ```
   ou usando yarn:
   ```
   yarn add -D 
   ```
   No arquivo "cypress.config.js", acrescente as seguintes informações:
   ```
   module.exports = () => {
     e2e: {
        setupNodeEvents(on, config) {
      // implement node event listeners here
      },
    },
    
   ```
   No arquivo "support/e2e.js", acrescente a seguinte informação:
   ```
   import './commands'
   ```

   Agora o relatório com o dashboard estará disponível após a execução dos testes.

Qualquer dúvida ou problema, sinta-se à vontade para entrar em contato.

Bons testes!
