
describe('@collab-ui/core', function() {
  it('snapshot of social-list', function() {
    cy.visit(`${Cypress.env('BASE_URL')}/social-list`);
    cy.percySnapshot()
  });
});
