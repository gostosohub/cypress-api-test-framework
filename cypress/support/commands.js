Cypress.Commands.add('getOpponent', queryString =>{
  cy.api({
    method: 'GET',
    url: '/opponent?'+ queryString})
})
