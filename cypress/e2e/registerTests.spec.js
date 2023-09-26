import registerPage from "../pages (object.model)/registerPage";


describe ("Register tests", () => {


    it ("SUCCESSFULL REGISTRATION", () => {
        cy.visit("auth/register")
        registerPage.elements.fullName().click().type('Vika')
        registerPage.elements.email().click().type('vika@gmail.com')
        registerPage.elements.password().click().type('qwerty')
        registerPage.elements.repeatPassword().click().type('qwerty')
        registerPage.elements.agreeCheckbox().click()
        registerPage.elements.registerButton().click()
        cy.wait(2000);
        cy.get("[class='user-picture image ng-star-inserted']").should("exist")


        } 
        )

     it ("Validation REGISTRATION", () => {
     cy.visit("auth/register")
     registerPage.elements.fullName().click().type('Vi')
     cy.get("nb-card-body").click()
     .should("contain", "Full name should contains from 4 to 50 characters")
     registerPage.elements.email().click().type('Vi')
     cy.get("nb-card-body").click()
     .should("contain", "Email should be the real one!")
     registerPage.elements.password().click().type('Vi')
     cy.get("nb-card-body").click()
     .should("contain", "Password should contain from 4 to 50 characters")

     registerPage.elements.password().click().type('Vika123')
     registerPage.elements.repeatPassword().click().type('Vika13')
     cy.get("nb-card-body").click()
     registerPage.elements.repeatPassword()
     .should('have.css', 'border-color', 'rgb(255, 61, 113)')

     registerPage.elements.repeatPassword().clear()
     cy.get("nb-card-body").click()
     .should("contain", "Password confirmation is required!")
     registerPage.elements.registerButton().should('have.attr', 'disabled');
    
            } 
            )
        })
