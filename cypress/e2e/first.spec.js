describe ("First Suite", () => {
    it("first test", () => {
        cy.visit ("/pages")
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    }
    )
    })