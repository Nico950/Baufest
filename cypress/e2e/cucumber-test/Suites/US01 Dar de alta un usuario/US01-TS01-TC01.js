import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("US01|TS01|TC01 Usuario se registra en la website exitosamente", () => {
    Given("Usuario se encuentra en la página principal", () => {
        cy.visit("https://www.demoblaze.com/index.html")        
    })

    When("el usuario hace click sobre el botón de Sign Up para crear cuenta", () => {
        cy.get("#login2").click()
        
    })
    And("ingresa su {string} and {string} en el formulario", (username, password) => {
        cy.get("#loginusername").type(username)
        cy.get("#loginpassword").type(password)
    })
    Then("aparece un mensaje amigable de creación de cuenta sign up Successfull", () => {
        cy.contains("Welcome")
    })
})