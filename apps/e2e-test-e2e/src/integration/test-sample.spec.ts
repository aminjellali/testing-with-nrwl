// describe('My First Test', function() {
//   it('Finds google', function() {
//       cy.myCustomCommand();
//   });
//   it('test if e2e works', () => {
//     cy.get('p').should('be.visible');
//     cy.get('p').should($p => {
//       expect($p).to.contain('!');
//     });
//   });
// });
import { getGreeting } from '../support/app.po';
describe('Testing if modular tricks work', ()=>{
    it('finds facebook', ()=>{
        getGreeting('https://www.facebook.com');
    })
});