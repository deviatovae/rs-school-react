import cards from '../fixtures/cards.json'

export {}

describe('Home page', () => {
  it('Render cards', () => {
    cy.intercept('GET', '/assets/img/3.jpeg', { fixture: 'assets/3.jpeg' })
    cy.intercept('GET', '/cards?', {
      fixture: 'cards.json',
    })
    cy.intercept('GET', '/cards/10', { fixture: 'card.json' })
    cy.intercept('GET', 'https://api.iconify.design/*')

    cy.visit('http://localhost:5173')

    cy.get('.card')
      .first()
      .within(() => {
        cy.contains('Soy Candle Oud Sahara')
        cy.contains('9.99$')
        cy.contains('40h')
        cy.contains('⋆⋆⋆⋆')
      })

    cy.get('.card').first().click()

    cy.contains('Soy Candle Oud Sahara')
    cy.contains('⋆⋆⋆⋆')
    cy.get('.card-info__description')
    cy.contains(
      'Oud Sahara features rich notes of Vanilla, Exotic Woods and Bergamot. Hand Poured with vegan 100% soy wax and eco-friendly wicks.'
    )
    cy.contains('Hour Burn Time: 40h')
  })

  it('Searches', () => {
    cy.intercept('GET', '/assets/img/3.jpeg', { fixture: 'assets/3.jpeg' })
    cy.intercept('GET', '/cards?', cards)
    cy.intercept('GET', '/cards?q=Special+candle', cards.slice(0, 2))
    cy.intercept('GET', 'https://api.iconify.design/*')

    cy.visit('http://localhost:5173')

    cy.get('.search-bar').type('Special candle')
    cy.get('.search-bar').type('{enter}')

    cy.get('.card').should('have.length', 2)
    cy.get('.card:last-child').contains('Soy Candle Lait de Coco')
  })
})
