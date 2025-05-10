describe('Digitação de Múltiplos Dígitos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve concatenar múltiplos dígitos', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('.display').should('have.text', '123');
  });
});
