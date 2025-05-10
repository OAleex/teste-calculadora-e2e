describe('Operações Básicas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve realizar adição simples (5 + 3 = 8)', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '8');
  });

  it('Deve realizar subtração simples (9 - 4 = 5)', () => {
    cy.get('button').contains('9').click();
    cy.get('button').contains('–').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '5');
  });

  it('Deve realizar multiplicação simples (6 × 7 = 42)', () => {
    cy.get('button').contains('6').click();
    cy.get('button').contains('×').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '42');
  });

  it('Deve realizar divisão simples (8 ÷ 2 = 4)', () => {
    cy.get('button').contains('8').click();
    cy.get('button').contains('÷').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '4');
  });
});
