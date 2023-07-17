Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
/// <reference types="Cypress"/>
// para que funcione los comandos
describe("Funciones para Type",()=>{

    it("Type --> ENTER",() =>{
        cy.visit("https://www.bing.com/?FORM=Z9FD1")
        cy.title().should('eq',"Bing")
        cy.wait(1500)

        cy.get("#sb_form_q").type("cypress io {enter}")
        cy.wait(1000)

        cy.get("#b_results > li.b_algo.b_algoBorder.b_vtl_deeplinks.b_deeplinks_bg_color_kc > div > div.b_title > h2 > a").click()
    })

    
}) //Cierre del describe
