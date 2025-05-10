describe('Operação sem Segundo Número', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Deve ignorar operação sem segundo número (5 + =)', () => {
      cy.get('button').contains('5').click();
      cy.get('button').contains('+').click();
      cy.get('button').contains('=').click();
      cy.get('.display').should('have.text', '5');
    });
  });
  