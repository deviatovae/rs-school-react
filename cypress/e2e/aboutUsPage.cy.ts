export {}

describe('About us page', () => {
  it('Requests About us page', () => {
    cy.visit('http://localhost:5173/about-us')

    cy.contains('Thanks for stopping by!')
  })
})
