/// <reference types="cypress" />

describe('Opponent API', () => {
  var newId;

  beforeEach(() => {
    cy.request('http://localhost:8080/db/seed')
  })
/*
  it('Verify request returns json', () => {
    cy.request({
      method: 'GET',
      url: '/opponents'})
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('Verify the request returns 404 code', () => {
    cy.request({
      method:'GET',
      url: '/opponents/999',
      failOnStatusCode: false})
      .its("status")
      .should('be.equal', 404)
  })

  it('Verify the GET request returns 200', () => {
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
    cy.request('/opponents/' + 2).then
    ((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('gameId', '1234569')
      expect(response.body).to.have.property('sqlId', '1234569')
      expect(response.body).to.have.property('opponent', 'Opponent added via test')
      expect(response.body).to.have.property('opponentId', '123458')
    })
  })
*/


it("Delete an opponent", () => {
    cy.request({
      method: 'DELETE',
      url: '/opponents/1',
    }).then
    ((response) => {
      expect(response.status).to.eq(204);
    })
  })

 /* it('Verify the opponent was deleted', () => {
    cy.request({url: '/opponents/' + 1, failOnStatusCode: false}).then((response) => {
      expect(response.status).to.eq(404)
    })
  })*/
})
