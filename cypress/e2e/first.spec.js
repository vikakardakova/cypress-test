

describe ("First Suite", () => {
    it("first test", () => {

        const colors = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(26, 33, 56)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
         
           };

        cy.visit ("/pages")
        cy.get("[data-name='chevron-down']").should("exist").click();
        cy.contains('Dark').click()
        cy.contains('Forms').should('have.css', 'background-color')
        cy.wrap(colors.Dark).should("equal",'background-color')
       

        // cy.contains('Forms').click()
        // cy.contains('Form Layouts').click()
        //cy.get("[type='submit']").should("exist");
        // cy.contains("Sign in").should("have.property", "submit");
    })



    // it("second task", () => {
    //     cy.visit ("/pages")
    //     // cy.get("[title='Layout']").click()
    //     cy.get('.menu-title').contains('Layout').click()
    //     cy.contains('Accordion').click()
    //     cy.contains ('A nebula is an interstellar cloud of dust, hydrogen').should('be.hidden')
    //     cy.contains('Toggle First Item').click({force:true});
    //     cy.contains ('A nebula is an interstellar cloud of dust, hydrogen').should('be.visible')
        
    // })


    // it("third task", () => {
    //     cy.visit ("/pages")
    //     cy.get("[title = 'Modal & Overlays']").click()
    //     cy.contains('Popover').click()
    //     cy.contains('Right').trigger('mouseenter')
    //     cy.get('[nbpopover]').should('be.visible', { timeout: 10000 })
    //     cy.get('[nbpopover]').should('have.attr', 'nbpopover', 'Hello, how are you today?')
      
    // })


    // it("fourth task", () => {
    //     cy.visit ("/pages/modal-overlays/dialog")
    //     cy.contains('Enter Name').click()
    //     cy.get("[placeholder='Name']").type('Vika')
    //     cy.contains('Submit').click()
    //     // cy.contains('Enter Name').click()
    //     // cy.get("[placeholder='Name']").type('Alex')
    //     // cy.contains('Submit').click()
    //     // cy.contains('Enter Name').click()
    //     // cy.get("[placeholder='Name']").type('Ann')
    //     //cy.contains('Submit').click()
    //     cy.get('h3:contains("Names")').next('ul')
    //     .find('li:contains("Vika")').should('exist'); 
    // })
    // 
}
    )