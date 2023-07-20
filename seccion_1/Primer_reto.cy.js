Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
describe("Primer Reto ",()=>{

    it("",() =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1500)
        cy.get("#searchBox").should("be.visible").clear()

        //Agregando campo
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").type("Roman").tab()
        //type("Sivori").tab().
        //type("Roman@mail.com").tab().type("31").tab().type("160000").tab().type("Sistemas")
        //cy.get("#submit").should("be.visible").click()

        cy.get("#searchBox").should("be.visible").type("Roman")
        cy.wait(1500)
        cy.get("#searchBox").should("be.visible").clear()

        //Editar un campo
        cy.get("#google_esf").should("be.visible").click()
        cy.wait(1000)
        cy.get().should("be.visible").clear().type("50")
        cy.wait(1500)
        cy.get().should("be.visible").clear().type("5000")
        cy.get().should("be.visible").click()

        //Borrando el campo
        cy.wait(2000)
        cy.get().should("be.visible").click()

    })

  
}) //Cierre del describe
