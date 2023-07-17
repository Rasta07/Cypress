Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
/// <reference types="Cypress"/>
// para que funcione los comandos
describe("Ejemplo de Type PageUp, PageDown",()=>{

    it.only("Type PageUp- primero",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type('{pageup}')
        cy.wait(2000)
    })

    it("Type PageDown",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type('{pagedown}')
        cy.wait(2000)
    })

    it("Type PageUp",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type('{pageup}')
        cy.wait(2000)
    })

    it("Type PageDown- ultimo",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type('{pagedown}')
        cy.wait(2000)
    })
}) //Cierre del describe
