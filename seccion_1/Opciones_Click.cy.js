Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
describe("Opciones de Click",()=>{

    it("Click Sencillo ",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
    
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").should("be.visible").click()
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").should("be.visible").click() 
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").should("be.visible").click() 

    })

    it("Click Force true",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
    
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").should("be.visible").click()
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").should("be.visible").click() 
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").should("be.visible").click({force:true}) 

    })

    it.only("Click por coordenadas(x,y)",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
    
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5").should("be.visible").click()
        cy.wait(1500)
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img").should("be.visible").click(50,5) 
        cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img").should("be.visible").click(170,5) 

    })
}) //Cierre del describe
