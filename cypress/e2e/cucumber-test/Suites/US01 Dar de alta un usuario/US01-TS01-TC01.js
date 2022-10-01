import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Usuario se encuentra en la página principal', () => {
    cy.visit('https://www.demoblaze.com/index.html')        
})

describe("US01|TS01|TC01 Usuario se registra en la web exitosamente", () => {
    When('el usuario hace click sobre el botón de Sign Up para crear cuenta', () => {
        cy.get('#login2').click()
        
    })
    And('ingresa su {string} and {string} en el formulario', (username, password) => {
        cy.get('#loginusername').wait(1000)
            .type(username)
        cy.get('#loginpassword')
            .type(password)
    })
    And("hace click sobre el botón Sign Up que se encuentra dentro del formulario", () => {
        cy.get('.btn.btn-primary').eq(2).click()
        .wait(1000)
    })
    Then('aparece un mensaje amigable de creación de cuenta sign up Successfull', () => {
        cy.contains('Welcome')
    })
})