import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Usuario se encuentra en la página principal", () => {
    cy.visit("https://www.demoblaze.com/index.html")        
})

describe("US02|TS01|TC01 Usuario se loguea en la website exitosamente", () => {

    Given("el usuario NO esta logueado en la website", () => {
        cy.get("#login2").should("exist")

    })

    When("el usuario hace click sobre el botón de Log In", () => {
        cy.get("#login2").click()
        
    })
    And("ingresa su {string} and {string} en el formulario", (username, password) => {
        cy.get("#loginusername").type(username)
        cy.get("#loginpassword").type(password)    
    })
    And("hace click sobre el botón Log In que se encuentra dentro del formulario", () => {
        cy.get(".btn btn-primary").click()      
    })
    Then("aparece la palabra Welcome {string} en la barra de navegación", (username) => {
        cy.contains(username)
    })
})

describe("US02|TS01|TC02 Usuario se desloguea exitosamente", () => {

    Given("el usuario esta logueado en la website", (username, password) => {
        cy.get("#loginusername").type(username)
        cy.get("#loginpassword").type(password) 

    })

    When("hace click sobre el botón de Log out", () => {
        cy.get('#logout2').click()
        
    })
    Then("desaparece Welcome {string} de la barra de navegación", (username) => {
        cy.not.contains(username)
    })
    And("aparece la palabra Log In en la barra de navegación", () => {
        cy.get('#login2').should("exist")
    })
})