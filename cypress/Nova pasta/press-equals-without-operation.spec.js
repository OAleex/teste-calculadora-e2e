describe('Pressionar "=" sem Operação', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Deve pressionar = sem operação e manter valor (5 =)', () => {
      cy.get('button').contains('5').click();
      cy.get('button').contains('=').click();
      cy.get('.display').should('have.text', '5');
    });
  });
  