// const cy = require('cypress');
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('var Club')
    cy.get('#project-link').click()
    cy.get('#home-page').click()
    // cy.get('#dev-linkedin-profile').click()
    cy.visit('http://localhost:3000/')
    cy.get('#team').click()
    cy.get('#events').click()
    cy.get('#home-page').click()
    cy.get('#team').click()
    // cy.contains('Mayukh Bhowmick').trigger('mouseenter').get('.expanded-profile')
    cy.get('#member-name')
      .trigger('mouseenter')
      .get('.expanded-profile')
  })
})