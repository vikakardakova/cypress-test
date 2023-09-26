import loginPage from "../pages (object.model)/loginPage";


describe ("Login tests", () => {


it ("first task-VALIDATION EMAIL", () => {
    cy.visit("/")
cy.contains("Auth").click()
cy.contains("Login").click()
loginPage.elements.emailInput().click()
loginPage.elements.passwordInput().type("secretpass")
cy.get("nb-card-body").click()
cy.contains('Email is required!')

loginPage.elements.emailInput().type('new')
loginPage.elements.passwordInput().type("secretpass")
cy.get("nb-card-body").click()
cy.contains('Email should be the real one!')
    } 
    )



    it ("first task-VALIDATION Password", () => {
        cy.visit("/")
    cy.contains("Auth").click()
    cy.contains("Login").click()
    loginPage.elements.passwordInput().type("no")
    cy.get("nb-card-body").click()
    cy.contains("Password should contain from 4 to 50 characters")
        

    loginPage.elements.passwordInput().clear()
    loginPage.elements.emailInput().type("vika@gmail.com")
    cy.contains("Login").click()
    cy.contains("Password is required")

    loginPage.elements.passwordInput().type("verylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpassverylongpass")
    cy.contains("Login").click()
    loginPage.elements.passwordInput()
    .invoke("prop", "value")
    .should("have.length", 50)
} 
)



it("Second task - SUCCESSFULL LOGIN", () => {
cy.visit("/")
cy.contains("Auth").click()
cy.contains("Login").click()
loginPage.elements.emailInput().type("vika@gmail.com")
loginPage.elements.passwordInput().type("secretpass")
loginPage.elements.loginButton();
cy.wait(2000);
cy.get("[class='user-picture image ng-star-inserted']").should("exist")

})



it ("'Forgot password' validation", () => {
    cy.visit("/")
cy.contains("Auth").click()
cy.contains("Login").click()
loginPage.elements.forgotPass().click();
loginPage.elements.emailInput().click()
cy.contains("Forgot Password").click()
cy.get('.caption').should('have.text', ' Email is required! ')


loginPage.elements.emailInput().type('new')
cy.contains("Forgot Password").click()
cy.get('.caption').should('have.text', ' Email should be the real one! ')

    } 
    )
})


