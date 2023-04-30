export {}

describe('Form page', () => {
  it('clicking "join" navigates to the Form page', () => {
    cy.visit('http://localhost:5173')

    cy.contains('JOIN').click()
    cy.url().should('include', '/join')

    cy.get('select[name=country]').select('Canada')
    cy.get('input[name=name]').type('Lulu')
    cy.get('input[name=birthdate]').type('2023-04-21')
    cy.get('[type="radio"]').first().check({ force: true })
    cy.get('input[name=files]').selectFile({
      fileName: 'file.png',
      contents: ['emoji'],
    })
    cy.get('input[name=consent]').check()
    cy.get('button').click()
    cy.get('summary').click()
    cy.get('[data-testId="form-card"]').within(() => {
      cy.contains('Lulu')
      cy.contains('2023-04-21')
      cy.contains('Canada')
      cy.contains('Yes')
      cy.contains('Accepted')
      cy.contains('file.png')
    })
  })
})
