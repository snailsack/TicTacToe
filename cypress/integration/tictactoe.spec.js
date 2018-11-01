describe('Cypress', function(){
  it('successfully visits the home page', function(){
    cy.visit('/')
  })

  it('When board is empty, first user clicks any box and it is filled with an "X"', function() {
    cy.get('.board')
    .click()
    cy.get('.board')
    .should('contain', 'X')
  })
  it("Put's down an 'O' as the next click.", function() {
    cy.get('#row-1')
    .click()
    cy.get('#row-1')
    .should('contain', 'O')
  })
  
})

