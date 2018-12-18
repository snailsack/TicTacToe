/// <reference types="cypress" />

describe('Cypress', function () {
  it('successfully visits the home page', function () {
    cy.visit('/');
  })
  // Testing for X Win conditions
  it('X tests column 1', function () {
    cy.get(`#cell-1`).click()
    cy.get(`#cell-2`).click()
    cy.get(`#cell-4`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-7`).click()
    cy.get(`h2#game-message`).should('contain', 'Beavis Wins!')
  })
  it('X tests column 2', function () {
    cy.get(`#cell-2`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-8`).click()
    cy.get(`h2#game-message`).should('contain', 'Beavis Wins!')
  })
  it('X tests column 3', function () {
    cy.get(`#cell-3`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-9`).click()
    cy.get(`h2#game-message`).should('contain', 'Beavis Wins!')
  })
  it('X tests row 1', function () {
    cy.get(`#cell-1`).click()
    cy.get(`#cell-4`).click()
    cy.get(`#cell-2`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-3`).click()
    cy.get(`h2#game-message`).should('contain', 'Beavis Wins!')
  })
  it('X tests row 2', function () {
    cy.get(`#cell-4`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-7`).click()
    cy.get(`h2#game-message`).should('contain', 'Beavis Wins!')
  })
  it('X tests row 3', function () {
    cy.get(`#cell-7`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-8`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-9`).click()
    cy.get(`h2#game-message`).should('contain', 'Beavis Wins!')
  })
  it('X tests diagonal 1', function () {
    cy.get(`#cell-1`).click()
    cy.get(`#cell-2`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-9`).click()
    cy.get(`h2#game-message`).should('contain', 'Beavis Wins!')
  })
  it('X tests diagonal 2', function () {
    cy.get(`#cell-3`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-7`).click()
    cy.get(`h2#game-message`).should('contain', 'Beavis Wins!')
  })
})



