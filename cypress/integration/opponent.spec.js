/// <reference types="cypress" />

describe('Test login endpoint /Opponent when logged in as coach ', () => {
  var newId;

  beforeEach(() => {
    //cy.login()
  })

  it('Verify request returns json', () => {
    cy.request({
      method: 'GET',
      url: '/opponents'})
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('Verify the request returns 404 code when id not found', () => {
    cy.request({
      method:'GET',
      url: '/opponents/999',
      failOnStatusCode: false})
      .its("status")
      .should('be.equal', 404)
  })

  it('Verify the GET request returns 200 when successful', () => {
    cy.request({
      method: 'GET',
      url: '/opponents'})
      .its("status")
      .should('be.equal', 200)
  })

  it("Add a new opponent", () => {
    cy.request({
      method: 'POST',
      url: '/opponents',
      body: {
        "gameId": '1234510',
        "sqlId": '1234510',
        "date": "2021-01-31T19:00:00",
        "opponent": "Opponent added via test",
        "opponentId": "123458",
        "isHome": true,
        "gameType": 0,
        "categories": []
    }}).then
    ((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it("Verify the new opponent has been created", () => {
    cy.request('/opponents/4').then
    ((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it("Verify the delete request returns 204 code when successful", () => {
    cy.request({
      method: 'DELETE',
      url: '/opponents/1',
    }).then
    ((response) => {
      expect(response.status).to.eq(204);
    })
  })

  it('Verify the opponent was deleted', () => {
    cy.request({url: '/opponents/1', failOnStatusCode: false}).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('Verify the opponent was deleted', () => {
    cy.request({url: '/opponents/1', failOnStatusCode: false}).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('Verify the opponent can be updated', () => {
  })

})
