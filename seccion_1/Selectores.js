Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
describe("Tipos de selectores",()=>{

    it("Selector por id ",() =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get()
    })

  
}) //Cierre del describe
