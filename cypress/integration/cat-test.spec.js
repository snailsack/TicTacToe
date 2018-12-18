/// <reference types="cypress" />

describe('Cypress', function () {
  it('successfully visits the home page', function () {
    cy.visit('/');
  })

  it('tests for a CAT!', function () {
    cy.get(`#cell-1`).click()
    cy.get(`#cell-2`).click()
    cy.get(`#cell-3`).click()
    cy.get(`#cell-4`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-7`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-9`).click()
    cy.get(`#cell-8`).click()
    cy.get(`h2#game-message`).should('contain', 'Cat Wins!')
  })
})