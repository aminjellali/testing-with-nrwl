declare namespace Cypress {
    interface Chainable<Subject> {
      myCustomCommand: typeof myCustomCommand // more DRY than the following:
      // myCustomCommand(value: string): Cypress.Chainable<JQuery>
    }
  }
  
  function myCustomCommand(url: string){
    return cy.visit(url);
  }
  
  Cypress.Commands.add('myCustomCommand', myCustomCommand)