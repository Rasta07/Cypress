Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
describe("Bienvenido al curso de Cypress sección 1",()=>{

    it("Mi primer test -> Hola mundo",() =>{
        cy.log("Hola mundo")
        cy.wait(4000)
    })

    it ("Segundo test ->campo name",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("Fernando")
        cy.wait(4000)

    })
}) //Cierre del describe
