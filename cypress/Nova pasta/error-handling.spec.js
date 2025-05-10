describe('Tratamento de Erros', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve exibir "Error" ou "Infinity" para divisão por zero (5 ÷ 0 = ?)', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('÷').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('match', /Error|Infinity/);
  });

  it('Deve resetar após erro (5 ÷ 0 = Error → AC)', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('÷').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('=').click();
    cy.get('button').contains('AC').click();
    cy.get('.display').should('have.text', '0');
  });
});
