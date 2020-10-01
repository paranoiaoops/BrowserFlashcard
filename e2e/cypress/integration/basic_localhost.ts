it('localhost test', () => {
    cy.visit("index.html");
    cy.get('#app')
        .should('have.text', 'loading...')
});