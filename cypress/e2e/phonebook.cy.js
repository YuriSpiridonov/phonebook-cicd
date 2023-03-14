/* eslint-disable */
require('dotenv').config()
const PORT = process.env.PORT || 8080

describe('Phonebook simple tests, just to make sure interfase is working.', function () {
  it('checking random elements and entries that exists on the front page', function () {
    cy.visit(`http://localhost:${PORT}`)
    cy.contains('Bob')
    cy.contains('Martin')
    cy.contains('filter shown with')
    cy.contains('add')
  })
})
