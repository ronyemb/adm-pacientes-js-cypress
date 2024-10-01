/// <reference types="cypress"/>

describe('carga la pagina principal', () => {
  it('carga la pagina principal', () => {
    cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html')
    cy.contains('h1', 'Administrador de Pacientes de Veterinaria')
    cy.get('[data-cy="titulo-proyecto"]').should('exist')
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria')
  })
})