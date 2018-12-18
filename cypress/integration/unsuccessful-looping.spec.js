
let cellNumbers = []
let chosenCell

function cellChooser() {
  chosenCell = (Math.floor(Math.random() * 9 + 1))
  if ((cellNumbers.length < 10) && !(cellNumbers.includes(chosenCell))) {
    cellNumbers.push(chosenCell)
  } else {
    cellChooser()
  }
  return chosenCell
}


describe('Cypress', function () {
  it('successfully visits the home page', function () {
    cy.visit('/');
    console.log()
  })
  if (
    ((`#cell-1.textContent === 'X'`) && (`#cell-2.textContent === 'X'`) && (`#cell-3.textContent === 'X'`)) ||
    ((`#cell-1.textContent === 'O'`) && (`#cell-2.textContent === 'O'`) && (`#cell-3.textContent === 'O'`)) ||
    ((`#cell-4.textContent === 'X'`) && (`#cell-5.textContent === 'X'`) && (`#cell-6.textContent === 'X'`)) ||
    ((`#cell-4.textContent === 'O'`) && (`#cell-5.textContent === 'O'`) && (`#cell-6.textContent === 'O'`)) ||
    ((`#cell-7.textContent === 'X'`) && (`#cell-8.textContent === 'X'`) && (`#cell-9.textContent === 'X'`)) || 
    ((`#cell-7.textContent === 'O'`) && (`#cell-8.textContent === 'O'`) && (`#cell-9.textContent === 'O'`)) || 
    ((`#cell-1.textContent === 'X'`) && (`#cell-5.textContent === 'X'`) && (`#cell-9.textContent === 'X'`)) || 
    ((`#cell-1.textContent === 'O'`) && (`#cell-5.textContent === 'O'`) && (`#cell-9.textContent === 'O'`)) || 
    ((`#cell-3.textContent === 'X'`) && (`#cell-5.textContent === 'X'`) && (`#cell-7.textContent === 'X'`)) ||
    ((`#cell-1.textContent === 'O'`) && (`#cell-2.textContent === 'O'`) && (`#cell-3.textContent === 'O'`)) ||
    ((`#cell-1.textContent === 'X'`) && (`#cell-4.textContent === 'X'`) && (`#cell-7.textContent === 'X'`)) || 
    ((`#cell-1.textContent === 'O'`) && (`#cell-4.textContent === 'O'`) && (`#cell-7.textContent === 'O'`)) || 
    ((`#cell-2.textContent === 'X'`) && (`#cell-5.textContent === 'X'`) && (`#cell-8.textContent === 'X'`)) || 
    ((`#cell-2.textContent === 'O'`) && (`#cell-5.textContent === 'O'`) && (`#cell-8.textContent === 'O'`)) || 
    ((`#cell-3.textContent === 'X'`) && (`#cell-6.textContent === 'X'`) && (`#cell-9.textContent === 'X'`)) || 
    ((`#cell-3.textContent === 'O'`) && (`#cell-6.textContent === 'O'`) && (`#cell-9.textContent === 'O'`))) {

    it('logs "win"', function () {
      cy.get(`h2#game-message`).should('contain', "Wins!")
    })
  } else {
    it('clicks all cells until win condition', function () {
      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[0]}`).should('contain', 'X')

      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[1]}`).should('contain', 'O')

      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[2]}`).should('contain', 'X')

      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[3]}`).should('contain', 'O')

      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[4]}`).should('contain', 'X')

      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[5]}`).should('contain', 'O')

      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[6]}`).should('contain', 'X')

      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[7]}`).should('contain', 'O')

      cy.get(`#cell-${cellChooser()}`).click()
      cy.get(`#cell-${cellNumbers[8]}`).should('contain', 'X')

    })
  }

})

