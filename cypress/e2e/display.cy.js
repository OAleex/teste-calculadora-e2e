describe('Exibição Inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve exibir "0" no display', () => {
    cy.get('.display').should('have.text', '0');
  });
});
