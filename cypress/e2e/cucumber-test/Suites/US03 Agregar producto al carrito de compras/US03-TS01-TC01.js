import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("US03|TS01|TC01 Agregar una laptop al carrito", () => {
    Given("Usuario se encuentra en la página principal", () => {
        cy.visit("https://www.demoblaze.com/index.html")        
    })

    When("el usuario hace click sobre un producto Laptop", () => {
        cy.contains("Sony vaio i5").click()
        
    })
    And("es dirigido al PDP del producto", () => {
        cy.url().should("contain", "idp_=8")       
    })
    And("hace click en Add to cart", () => {
        cy.get(".col-sm-12 > .btn").click()      
    })
    Then("aparece un mensaje de confirmación Product added", () => {
        cy.getCookie("cHJ1ZWJhOTUwMTY2NTE0OA==").should('exist')
    })
})