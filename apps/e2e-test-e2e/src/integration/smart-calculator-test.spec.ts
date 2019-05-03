import { testOperatorAdd } from './../support/app.po';
const countries = [{"name": "tunisia"}, {"name":"usa"}, {"name":"canada"}];
// defining a test
describe('Tests for the dump calculator', () => {
  const url = 'localhost:4222';
  beforeEach(() => {
    cy.server();
    cy.route('GET','https://restcountries.eu/rest/v2/all',countries);
    cy.visit('/');
  });
  // definng the sub test using it
  it('testing the add operator', () => {
    // visitng the webSite to test
    // cy.visit('localhost:4222');
    // getting the input for the first_number and typing a string(15) in it
    cy.get('tbody > :nth-child(1) > :nth-child(2) > .ng-untouched').type('15');
    // getting the input for the second_number and typing a string(85) in it
    cy.get(':nth-child(2) > :nth-child(2) > .ng-untouched').type('-55');
    // get the check button for the add operator and check it
    cy.get(':nth-child(1) > .ng-untouched').check();
    // get and click button
    cy.get('button').click();
    // get the div and invoke the text  inside it
    // and it should be equal to 100
    cy.get('.container > div')
      .invoke('text')
      .should('equal', '-40');
    cy.get('.container > div').should('have.css', 'color', 'rgb(255, 0, 0)');
  });
  it('testing the multiply operator', () => {
    // cy.visit('localhost:4222');
    cy.get('tbody > :nth-child(1) > :nth-child(2) > .ng-untouched').type('2');
    cy.get(':nth-child(2) > :nth-child(2) > .ng-untouched').type('10');
    cy.get('li > :nth-child(2) > .ng-valid').check();
    cy.get('button').click();
    cy.get('.container > div')
      .invoke('text')
      .should('equal', '20');
    cy.get('.container > div').should('have.css', 'color', 'rgb(124, 252, 0)');
  });
  it('test the devide operator', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2) > .ng-valid').type('90');
    cy.get(':nth-child(2) > :nth-child(2) > .ng-valid').type('10');
    cy.get(':nth-child(3) > .ng-untouched').check();
    cy.get('button').click();
    const number = 90 / 10; 
    cy.get('.container > div').invoke('text').should('eq',number.toString());    
  });
  it('testing the add operator Intelligently', () => {
    testOperatorAdd('58r', '87', "I'am not that dump!");
  });
});
