describe('Operação com Decimal', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Deve lidar com operação decimal (0.5 × 2 = 1)', () => {
      cy.get('button').contains('.').click();
      cy.get('button').contains('5').click();
      cy.get('button').contains('×').click();
      cy.get('button').contains('2').click();
      cy.get('button').contains('=').click();
      cy.get('.display').should('have.text', '1');
    });
  });
  