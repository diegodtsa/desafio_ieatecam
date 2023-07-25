describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  const usuario = {
    username: 'standard_user',
    password: 'secret_sauce'
  };

  const usuarioBloqueado ={
    username: 'locked_out_user',
    password: 'secret_sauce'
  };

  it('Login Realizado com Sucesso', () => {
    cy.get('#user-name').type(usuario.username);
    cy.get('#password').type(usuario.password);
    cy.get('#login-button').click();
    cy.get('.title').should('have.text', 'Products');
  });

  it('Login com Usuário Bloqueado', () => {
    cy.get('#user-name').type(usuarioBloqueado.username);
    cy.get('#password').type(usuarioBloqueado.password);
    cy.get('#login-button').click();
    cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

});
