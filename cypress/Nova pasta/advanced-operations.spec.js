describe('Operações Avançadas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve realizar operação sequencial (2 + 3 × 4 = 14)', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('×').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '14');
  });

  it('Deve trocar operador (5 + × 3 = 15)', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('×').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '15');
  });
});
