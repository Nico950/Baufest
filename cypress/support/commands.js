import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');
require('cypress-downloadfile/lib/downloadFileCommand');
require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add("login", () =>
{
        cy.visit('https://www.demoblaze.com/index.html')        
        cy.get('#login2').click().wait(1000)
        cy.get('#loginusername').wait(1000)
            .type('prueba950')
        cy.get('#loginpassword')
            .type('prueba')    
        cy.get('.btn.btn-primary').eq(2).click()  
        .wait(1000)
        cy.contains('Welcome')
    })
