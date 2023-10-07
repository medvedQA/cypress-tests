it("contain the text in navbar", () => {
  cy.visit("https://example.cypress.io/");
  cy.get('.navbar-brand').should('contain.text', 'cypress.io');
  cy.get('.dropdown-toggle').should('contain.text', 'Commands');
  cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').should('contain.text', 'Utilities');
  cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').should('contain.text', 'Cypress API');
  cy.get('.pull-right > li > a').should('contain.text', 'GitHub');
});
