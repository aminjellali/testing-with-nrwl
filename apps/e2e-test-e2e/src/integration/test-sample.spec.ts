describe('running e2e tests for the comparator widget', () => {
  beforeEach(() => {
    cy.visit('localhost:9080');
    // cy.wait(5000);
  });
  it('test if we managed to get to the web site', () => {
    cy.url().should('contain', 'localhost:9080');
  });
  it('clicking description', () => {
    cy.get('.ng-tns-c0-0.ng-tns-c1-2 > .menu').click();
    // cy.wait(2000);
    cy.get('.ng-tns-c0-0.ng-tns-c1-2 > .content > .ng-tns-c0-0 > .table-bordered').should('be.visible');
  });
});
