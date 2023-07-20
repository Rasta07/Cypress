Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
describe("Introducción a los Asserts",()=>{

    it("Demo de los Asserts ",() =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").type("Ariel")
        cy.wait(1000)

        cy.get("#lastName").should("be.visible").type("Ortega")
        cy.wait(1000)

        
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("Test@mail.com")
        cy.wait(1000)

    })

        

   
}) //Cierre del describe
