describe('Login Tests', () => {
  // Antes de cada teste, visita a página 'https://www.saucedemo.com/'
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  // Função para fazer login com o usuário 'standard_user'
  const fazerLogin = () => {
    const usuario = {
      username: 'standard_user',
      password: 'secret_sauce',
    };

    // Preenche os campos de login e clica no botão de login
    cy.get('#user-name').type(usuario.username);
    cy.get('#password').type(usuario.password);
    cy.get('#login-button').click();

    // Verifica se o login foi realizado com sucesso redirecionando para a página 'Products'
    cy.get('.title').should('have.text', 'Products');
  };

  // Teste para encontrar o produto com menor valor
  it('Encontrar produto com menor valor', () => {
    // Faz o login
    fazerLogin();

    // Cria uma lista para armazenar os detalhes dos produtos
    const produtos = [];

    // Obter detalhes dos produtos (nome e preço)
    cy.get('.inventory_item')
      .each($item => {
        const nome = $item.find('.inventory_item_name').text();
        const precoTexto = $item.find('.inventory_item_price').text();
        const precoValor = parseFloat(precoTexto.replace('$', ''));
        produtos.push({ nome, preco: precoValor });
      })
      .then(() => {
        // Ordenar por preço do menor para o maior
        produtos.sort((a, b) => a.preco - b.preco);

        // Produto com menor valor
        const prodMenorValor = produtos[0];

        // Exibe as informações do produto com menor valor
        cy.log('Produto com menor valor:', prodMenorValor.nome, 'Preço:', prodMenorValor.preco);

        // Adicionar o produto de menor valor ao carrinho
        cy.contains('Add to cart').click();
        cy.contains(prodMenorValor.nome).should('be.visible');
      });
  });

  // Teste para encontrar o produto com maior valor
  it('Encontrar produto com maior valor', () => {
    // Faz o login
    fazerLogin();

    // Cria uma lista para armazenar os detalhes dos produtos
    const produtos = [];

    // Obter detalhes dos produtos (nome e preço)
    cy.get('.inventory_item')
      .each($item => {
        const nome = $item.find('.inventory_item_name').text();
        const precoTexto = $item.find('.inventory_item_price').text();
        const precoValor = parseFloat(precoTexto.replace('$', ''));
        produtos.push({ nome, preco: precoValor });
      })
      .then(() => {
        // Ordenar por preço do menor para o maior
        produtos.sort((a, b) => a.preco - b.preco);

        // Produto com maior valor
        const prodMaiorValor = produtos[produtos.length - 1];

        // Exibe as informações do produto com maior valor
        cy.log('Produto com maior valor:', prodMaiorValor.nome, 'Preço:', prodMaiorValor.preco);
''
        // Adicionar o produto de maior valor ao carrinho
        cy.contains('Add to cart').last().click();
        cy.contains(prodMaiorValor.nome).should('be.visible');
      });
  });

  // Teste para finalizar a compra
  it('Finalizar a compra', () => {
    // Faz o login
    fazerLogin();

    // Cria uma lista para armazenar os detalhes dos produtos
    const produtos = [];

    // Adicionar produtos de menor e maior valor ao carrinho
    cy.get('.inventory_item')
      .each($item => {
        const name = $item.find('.inventory_item_name').text();
        const precoTexto = $item.find('.inventory_item_preco').text();
        const precoValor = parseFloat(precoTexto.replace('$', ''));

        if (precoValor === 7.99 || precoValor === 49.99) {
          cy.wrap($item).contains('Add to cart').click();
          cy.contains(name).should('be.visible');
        }
      });

    // Ir para o carrinho
    cy.get('.shopping_cart_link').click();

    // Clicar em 'Checkout'
    cy.contains('Checkout').click();

    // Preencher informações de compra
    cy.get('#first-name').type('Diego');
    cy.get('#last-name').type('Teixeira');
    cy.get('#postal-code').type('123456');
    cy.contains('Continue').click();

    // Clicar em 'Finish' para finalizar a compra
    cy.contains('Finish').click();

    // Verificar se a compra foi finalizada com sucesso exibindo a mensagem 'Thank you for your order!'
    cy.get('.complete-header').invoke('text').should('eq', 'Thank you for your order!');
  });
});
