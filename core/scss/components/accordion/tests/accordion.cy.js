
describe('@collab-ui/core', function() {
  it('snapshot of accordion', function() {
    cy.visit(`${Cypress.env('BASE_URL')}/accordion`);
    cy.percySnapshot()
  });
});
