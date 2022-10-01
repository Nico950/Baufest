import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Usuario se encuentra en la página principal', () => {
    cy.visit('https://www.demoblaze.com/index.html')        
})

describe('US02|TS01|TC01 Usuario se loguea en la web exitosamente', () => {

    Given('el usuario NO esta logueado en la web', () => {
        cy.get('#login2').should('exist')

    })

    When('el usuario hace click sobre el botón de Log In', () => {
        cy.get('#login2').click().wait(1000)
        
    })
    And('ingresa su {string} and {string} en el formulario', (username, password) => {
        cy.get('#loginusername').wait(1000)
            .type(username)
        cy.get('#loginpassword')
            .type(password)    
    })
    And('hace click sobre el botón Log In que se encuentra dentro del formulario', () => {
        cy.get('.btn.btn-primary').eq(2).click()  
        .wait(1000)
    })
    Then('aparece la palabra Welcome {string} en la barra de navegación', (username) => {
        cy.contains(username)
    })
})

describe("US02|TS01|TC02 Usuario se desloguea exitosamente", () => {

    Given('el usuario esta logueado en la web', () => {
        cy.login() //commands.js

    })

    When('hace click sobre el botón de Log out', () => {
        cy.get('#logout2').click()
        
    })
    Then('desaparece Welcome {string} de la barra de navegación', (username) => {
        cy.get(username).should('not.exist')
    })
    And('aparece la palabra Log In en la barra de navegación', () => {
        cy.get('#login2').should('exist')
    })
})
