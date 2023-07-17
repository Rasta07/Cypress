
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
/// <reference types="Cypress"/>
// para que funcione los comandos
describe("Ejemplo funcion Tab ",()=>{

    it("Type con Tab ",() =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").type("Fernando").tab().
        type("Barrionuevo").tab().
        type("Test@mail.com")
    })

    
}) //Cierre del describe
