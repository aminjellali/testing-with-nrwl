export const getGreeting = url => {
  cy.visit(url);
  cy.get('[data-testid=royal_email]').type('Hello World');
  cy.get('[data-testid=royal_pass]').type('pass');
  cy.get('[data-testid=royal_login_button]').click();
  cy.url().should('contain', 'login');
};

export const testOperatorAdd = (firstN, secondN, expectation) => {
  cy.visit('localhost:4222');
  cy.get('tbody > :nth-child(1) > :nth-child(2) > .ng-untouched').type(firstN);
  cy.get(':nth-child(2) > :nth-child(2) > .ng-untouched').type(secondN);
  cy.get(':nth-child(1) > .ng-untouched').check();
  cy.get('button').click();
  cy.get('.container > div')
    .invoke('text')
    .should('equal', expectation);
};
