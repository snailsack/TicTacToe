/// <reference types="cypress" />


describe('Cypress', function () {
  it('successfully visits the home page', function () {
    cy.visit('/');
  })

  // Testing for O Win conditions
  it('O tests column 1', function () {
    cy.get(`#cell-2`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-4`).click()
    cy.get(`#cell-9`).click()
    cy.get(`#cell-7`).click()
    cy.get(`h2#game-message`).should('contain', 'Butthead Wins!')
  })
  it('successfully visits the home page', function () {
    cy.visit('/');
  })
  it('O tests column 2', function () {
    cy.get(`#cell-1`).click()
    cy.get(`#cell-2`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-3`).click()
    cy.get(`#cell-8`).click()
    cy.get(`h2#game-message`).should('contain', 'Butthead Wins!')
  })
  it('successfully visits the home page', function () {
    cy.visit('/');
  })
  it('O tests column 3', function () {
    cy.get(`#cell-2`).click()
    cy.get(`#cell-3`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-6`).click()
    cy.get(`#cell-7`).click()
    cy.get(`#cell-9`).click()
    cy.get(`h2#game-message`).should('contain', 'Butthead Wins!')
  })
  it('successfully visits the home page', function () {
    cy.visit('/');
  })
  it('O tests row 1', function () {
    cy.get(`#cell-4`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-2`).click()
    cy.get(`#cell-7`).click()
    cy.get(`#cell-3`).click()
    cy.get(`h2#game-message`).should('contain', 'Butthead Wins!')
  })
  it('successfully visits the home page', function () {
    cy.visit('/');
  })
  it('O tests row 2', function () {
    cy.get(`#cell-1`).click()
    cy.get(`#cell-4`).click()
    cy.get(`#cell-2`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-9`).click()
    cy.get(`#cell-6`).click()
    cy.get(`h2#game-message`).should('contain', 'Butthead Wins!')
  })
  it('successfully visits the home page', function () {
    cy.visit('/');
  })
  it('O tests row 3', function () {
    cy.get(`#cell-1`).click()
    cy.get(`#cell-7`).click()
    cy.get(`#cell-2`).click()
    cy.get(`#cell-8`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-9`).click()
    cy.get(`h2#game-message`).should('contain', 'Butthead Wins!')
  })
  it('successfully visits the home page', function () {
    cy.visit('/');
  })
  it('O tests diagonal 1', function () {
    cy.get(`#cell-2`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-3`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-7`).click()
    cy.get(`#cell-9`).click()
    cy.get(`h2#game-message`).should('contain', 'Butthead Wins!')
  })
  it('successfully visits the home page', function () {
    cy.visit('/');
  })
  it('O tests diagonal 2', function () {
    cy.get(`#cell-2`).click()
    cy.get(`#cell-3`).click()
    cy.get(`#cell-1`).click()
    cy.get(`#cell-5`).click()
    cy.get(`#cell-9`).click()
    cy.get(`#cell-7`).click()
    cy.get(`h2#game-message`).should('contain', 'Butthead Wins!')
  })
})