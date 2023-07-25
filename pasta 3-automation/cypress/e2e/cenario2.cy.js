describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  const usuario = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  const fazerLogin = () => {
    cy.get('#user-name').type(usuario.username);
    cy.get('#password').type(usuario.password);
    cy.get('#login-button').click();
    cy.get('.title').should('have.text', 'Products');
  };

  it('Encontrar produto com menor valor', () => {
    fazerLogin();
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
        cy.log('Produto com menor valor:', prodMenorValor.nome, 'Preço:', prodMenorValor.preco);
      });
  });

  it('Encontrar produto com maior valor', () => {
    fazerLogin();
    const produtos = [];

    // Obter detalhes dos produtos (nome e preço)
    cy.get('.inventory_item')
      .each($item => {
        const nome = $item.find('.inventory_item_name').text();
        const precoTexto = $item.find('.inventory_item_price').text();
        const precoValor = parseFloat(precoTexto.replace('$', ''));
        produtos.push({nome, preco: precoValor });
      })
      .then(() => {
        // Ordenar por preço do menor para o maior
        produtos.sort((a, b) => a.preco - b.preco);

        // Produto com maior valor
        const prodMaiorValor = produtos[produtos.length - 1];
        cy.log('Produto com maior valor:', prodMaiorValor.nome, 'Preço:', prodMaiorValor.preco);
      });
  });
});
