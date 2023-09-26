class loginPage {
    elements ={
emailInput: () => cy.get("#input-email"),
passwordInput: () => cy.get("#input-password"),
loginButton: () => cy.contains(" Log In ").click(),
forgotPass:() => cy.get("[class='forgot-password caption-2']")
    }
}
module.exports = new loginPage();


