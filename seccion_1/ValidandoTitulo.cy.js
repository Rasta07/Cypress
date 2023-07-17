
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
/// <reference types="Cypress"/>
// para que funcione los comandos

describe("Seccion 1 Validando el titulo",()=>{

    it("Test validar el titulo",() =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.log("Ok la función title funciona bien")
    })

    
}) //Cierre del describe