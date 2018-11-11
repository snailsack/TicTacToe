
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
  })

  it('clicks all cells until win condition', function () {
    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[0]}`).should('contain', 'X')

    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[1]}`).should('contain', 'O')

    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[2]}`).should('contain', 'X')

    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[3]}`).should('contain', 'O')

    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[4]}`).should('contain', 'X')

    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[5]}`).should('contain', 'O')

    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[6]}`).should('contain', 'X')

    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[7]}`).should('contain', 'O')

    cy.get(`#cell-${cellChooser()}`).click()
    console.log(`${cellNumbers.length}`)
    cy.get(`#cell-${cellNumbers[8]}`).should('contain', 'X')

  })


})

