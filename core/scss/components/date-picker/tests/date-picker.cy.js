
describe('@collab-ui/core', function() {
  it('snapshot of date-picker', function() {
    cy.visit(`${Cypress.env('BASE_URL')}/date-picker`);
    cy.percySnapshot()
  });
});
