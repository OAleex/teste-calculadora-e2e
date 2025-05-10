describe('Inserção de Ponto Decimal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Deve exibir corretamente 0.56', () => {
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('6').click();
    cy.get('.display').should('have.text', '0.56');
  });

  it('Deve bloquear múltiplos pontos decimais', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('3').click();
    cy.get('.display').should('have.text', '1.23');
  });
});
