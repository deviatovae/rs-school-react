export {}

describe('404 page', () => {
  it('Requests 404 page', () => {
    cy.visit('http://localhost:5173/incorrect-url')

    cy.contains("OOPS! The page isn't found.")
  })
})
