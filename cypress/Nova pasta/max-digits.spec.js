describe('Máximo de Dígitos no Display', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Deve limitar o número de dígitos no display (máximo de 15 dígitos)', () => {
      for (let i = 0; i < 16; i++) {
        cy.get('button').contains('1').click();
      }
      cy.get('.display').should('have.length', 15);
    });
  });
  