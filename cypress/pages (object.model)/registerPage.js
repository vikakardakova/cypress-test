class registerPage {
    elements ={
fullName: () => cy.get("#input-name"),
email: () => cy.get("#input-email"),
password: () => cy.get('#input-password'),
repeatPassword: () => cy.get('#input-re-password'),
agreeCheckbox: () => cy.get("[class='custom-checkbox']"),
registerButton : () => cy.contains("button", "Register")

    }
}
module.exports = new registerPage();
