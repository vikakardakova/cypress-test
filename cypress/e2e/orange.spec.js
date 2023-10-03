

describe ("Login tests", () => {


it ("work with api", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.contains('button', "Login").click();
    cy.intercept("POST", "web/index.php/events/push").as("push");
    cy.wait("@push").then(obj => {
        cy.wrap(obj.response.statusCode).should("equal", 200)
    });
    cy.get("[class='oxd-sidepanel-body']").contains("Recruitment")
    .should('have.text', "Recruitment").click();
    cy.intercept("GET", "/web/index.php/api/v2/recruitment/vacancies**").as("getVacancies");
    cy.wait("@getVacancies", {timeout:6000}).then(obj => {
        cy.wrap(obj.response.statusCode).should("equal", 200)
    });

    cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/vacancies',
            body: {
                description: "fwrew",
                employeeId: 51,
                isPublished: true,
                jobTitleId: 22,
                name: "newviksikkkk",
                numOfPositions: 4,
                status: true
                }
        }).then(myFunction => {
            expect(myFunction.status).to.equal(200); 
        });

       
cy.request({
    method: 'GET',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek'
         })
         
    .then(myFunction => {
    expect(myFunction.status).to.equal(200); 
        })

        cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates',
            body: {
                    firstName: "tenewtfv",
                    middleName: "newewew",
                    lastName: "vvnew",
                    email: "vvnewdw123gw@tw.com",
                    contactNumber: "51433451411",
                    keywords: "t4dt,y",
                    comment: "nefw vika",
                    dateOfApplication: "2023-10-03",
                    consentToKeepData: true,
                    vacancyId: 11
                  }
                })
    })
})